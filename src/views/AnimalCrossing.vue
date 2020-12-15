<template>
    <div class="animal-crossing ">      
      <div class="reserve" v-for="reserve in animals" :key="reserve.japaneseName">
        <p class="reserve-">{{reserve.japaneseName}}</p>
        <div class="button-container">
          <div class="animal-pair-content" v-for="animal in reserve.animals" :key="animal.japaneseName">
            <div class="img-button" @click="addFirestore(reserve.japaneseName,animal.japaneseName,'♂')">
              <img  class="animal-img" :src="animal.imgURL.male" alt="">
              <p class="animal-japanese-name">{{animal.japaneseName}}♂</p>
            </div>
            <div class="img-button" @click="addFirestore(reserve.japaneseName,animal.japaneseName,'♀')">
              <img  class="animal-img" :src="animal.imgURL.female" alt="">
              <p class="animal-japanese-name">{{animal.japaneseName}}♀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" scoped>
//import component from '*.vue';
import { Options, Vue } from 'vue-class-component';
import {firestore,storage} from '../firebase'
import moment from 'moment'

    interface Animal {
        japaneseName: string;
        englishName: string;
        gender: string;
        imagePath: string;
    }
    @Options({
      methods:{
        addFirestore(reserve: string,animalName: string,gender: string){
          const id = `${moment(new Date()).format('YYYYMMDDHHmmss')}${animalName}${gender}`;
          firestore.collection('hunting-record').doc(id).set(
            {
              'reserge': reserve,
              'huntingTime':new Date(),
              'animalName':animalName,
              'gender':gender,
              'movieNum':'',
            }
          ).then(()=>{
            alert(`おめでとうございます!!\n${animalName}${gender} をハントしました。`)
          }).catch((error)=>{
            alert(`記録に失敗しました。\n${error}`)
          })
        },
        
        
      }
    })
    export default class AnimalCrossing extends Vue {     
      private animals: any[] =[]
      created(){
        firestore.collection('animals').get().then(async doc => {
          //this.animals = doc.docs
          
          await doc.forEach(async snapShot=>{
            const animalPerReserve: any[] =[]
            await snapShot.ref.collection('animals').get().then(async doc=>{
              
              await doc.forEach(snapShot => {
                animalPerReserve.push(snapShot.data())
              })

            })

            this.animals.push({...snapShot.data(),animals:animalPerReserve})
            //console.log(value.data())
          })
          
        })
        console.log(this.animals)
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

body{
  margin: 0;
  
}

.button-container{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  
  justify-content: center;
  
  left: 0;
  right: 0;
  margin: auto;
}

.button-container::before {
  content: '';
  background-image: url('./../assets/backgrounds/tiga2.jpg');/* 画像（ここにfixedは入れない） */
  background-size: cover;/* cover指定できる */
  display: block;
  position: fixed;/* 擬似要素ごと固定 */
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;/* 横幅いっぱい */
  height: 100vh;/* 縦幅いっぱい */
}

.animal-pair-content{
  display: flex;
}

.img-button{
  position: relative;

  width: 25vw;
  height: 25vw;
  background-color: white;
  
  margin: 2vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @include sp {
    width: 35vw;
    height: 35vw;

    margin: 2.5vw 2.5vw;
  }
}

.animal-japanese-name{
  position: absolute;
  color: white;
  background-color: rgba(0,0,0,0.5);

  line-height: 1.5em;
  
  bottom:0;
  left: 0;
  font-size: 1rem;

  margin-bottom: 1em;

  /*opacity: 0.5;*/
  @include sp {
    font-size: 10px;
  }
}

.animal-img{
  width: 100%;
}
</style>
