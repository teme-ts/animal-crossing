<template>
    <div class="result-table">
        <table class="hunting-record">
            <thead>
                <tr class="hunting-header">
                    <th>狩猟日時</th>
                    <th>動物名</th>
                    <th>性別</th>
                    <th>動画作成順</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hunting-row" v-for="huntingRecord in huntingRecords" :key="huntingRecord.huntingTime">
                    <td class="hunting-cell">{{ formatYYYYMMDD(huntingRecord.huntingTime) }}</td>
                    <td class="hunting-cell">{{ huntingRecord.animalName }}</td>
                    <td class="hunting-cell">{{ huntingRecord.gender }}</td>
                    <td class="hunting-cell">
                        <input
                            class="hunting-movie-num"
                            v-model="huntingRecord.movieNum"
                            placeholder="動画作成順"
                            @change="addFirestore(huntingRecord,huntingRecord.movieNum)"
                        >
                        <!--<button @click="addFirestore(huntingRecord.recordId,huntingRecord.movieNum)">動画順を記録する</button>-->
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { firestore }  from '../firebase'
import moment from 'moment'

    interface HuntingRecord {
        recordId: string;
        huntingTime: Date;
        animalName: string;
        gender: string;
        movieNum: string;
    }

    @Options({
        methods:{
            formatYYYYMMDD(date: Date) {
                return moment(date).format('YYYY/MM/DD HH:mm:ss');// eslint-disable-line
            },
            
        },  
        filters: {
            
        }
    })
    export default class ResultTable extends Vue {
        addFirestore(huntingRecord: HuntingRecord,movieNum: string){
            let recordMovieNum: string = movieNum
            if(movieNum === undefined){
                recordMovieNum = ''
            }
            alert(huntingRecord.recordId)
                firestore.collection('hunting-record').doc(huntingRecord.recordId).set(
                    {
                        movieNum:recordMovieNum,
                    }, { merge: true }
                ).then(()=>{
                    alert(`記録しました。`)
                }).catch((error)=>{
                    alert(`記録に失敗しました。\n${error}`)
                })
                
            }
        private huntingRecords: HuntingRecord[] = [];
        
        created(){
            firestore.collection('hunting-record').orderBy('huntingTime').get()
            .then((querySnapshot)=>{
                
                // querySnapshot を HuntingRecord型の変数に入れるために、
                // docsをmapで無理やり変換
                this.huntingRecords = querySnapshot.docs.map((doc): HuntingRecord=>{
                    const data = doc.data()
                    const huntingRecord: HuntingRecord =
                    {
                        recordId: doc.id,
                        huntingTime: data.huntingTime.toDate(),
                        animalName: data.animalName,
                        gender: data.gender,
                        movieNum: data.movieNum
                    }
                    return huntingRecord
                });
            })
            .catch((error)=>{
                alert(`${error}`)
            })
        }
    }
</script>

<style lang="scss" scoped>
$sp: 834px; // スマホ用のブレイクポイント
@mixin sp {
    @media (max-width: ($sp)) {
        @content;
    }
}

.hunting-record{
    width:60vw;

    left: 0;
    right: 0;
    margin: auto;

    /*table-layout: fixed;*/
    @include sp {
        width: 90vw;
    }
}

.hunting-header{
    color: white;
    background-color: rgb(250, 212, 0);
    
    border: solid 1px black;
    line-height: 1.5em;
}

.hunting-row{
    border: solid 1px black;
    border-bottom: dotted 1px black;

    line-height: 1.5em;

    &:last-child{
        border-bottom: solid 1px black;
    }
}

.hunting-cell{
    border-right: solid 1px black;
}

.hunting-movie-num{
    width:20vw;
}

</style>