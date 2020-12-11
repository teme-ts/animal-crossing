<template>
    <div class="migration">
        <button @click="addFirestore()">addTest</button>
        <button></button>
    </div>
</template>

<script lang="ts">
//import component from '*.vue';
import { Options, Vue } from 'vue-class-component';
import {firestore,storage} from '../firebase'

    interface Animal {
        japaneseName: string;
        englishName: string;
        gender: string;
        imagePath: string;
    }
    @Options({
      methods:{
        addFirestore(){
          /*storage.ref('animalImages/').listAll().then(list=>{
            list.items.forEach(item=>{
              alert(item.name)
            })
          })*/
          //alert(storage.ref('animalImages/aaaa.png').getDownloadURL())
          
          this.animals.forEach((value: any) => {
            firestore.collection('animals').doc(value.reserveEng).set(
              {
                japaneseName:value.reserveJap,
                englishName:value.reserveEng
              }
            ).then(async (doc)=>{
              console.log(`${value.reserveJap}の登録を開始しました。`)
              //alert(`${value.reserveJap}の登録を開始しました。`)
              const defaultImgPath = 'animalImages/default.png'
              const defaultImgRef = storage.ref(defaultImgPath)
              let defaultImgURL = ''
              await defaultImgRef.getDownloadURL().then(url=>{
                console.log('デフォルト画像のURLを取得')
                defaultImgURL = url
              })
              const targetImgPath= {male: '',female:''}
              const targetImgURL= {male: '',female: ''}
              const maleRef = storage.ref(`animalImages/${value.animalJap}♂.jpg`)
              const femaleRef = storage.ref(`animalImages/${value.animalJap}♀.jpg`)
              await maleRef.getDownloadURL().then((url)=>{
                targetImgURL.male = url
                targetImgPath.male = maleRef.fullPath
              }).catch(error=>{
                targetImgURL.male = defaultImgURL
                targetImgPath.male = defaultImgPath
              })
              await femaleRef.getDownloadURL().then((url)=>{
                targetImgURL.female = url
                targetImgPath.female = femaleRef.fullPath
              }).catch(error=>{
                targetImgURL.female = defaultImgURL
                targetImgPath.female = defaultImgPath
              })
              await firestore.collection('animals').doc(value.reserveEng).collection('animals').doc(value.animalEng).set({
                japaneseName:value.animalJap,
                englishName:value.animalEng,
                imgPath:{
                  male: targetImgPath.male,
                  female: targetImgPath.female
                },
                imgURL:{
                  male:targetImgURL.male,
                  female:targetImgURL.female
                }
              }).then(()=>{
                console.log(`${value.animalJap}を登録しました。`)
                //alert(`${value.animalJap}を登録しました。`)
              }).catch(error=>{
                alert(`${value.animalJap}の登録に失敗しました\n${error}`)
              })
            })
            //alert(value)
            console.log(value)
          });
          /*
          firestore.collection('animals').add({
              japaneseName:'日本語名',
              englishName:'英語名'
          }
          ).then((doc)=>{
              doc.collection('animals').doc('animalName').set(
                  {
                    japaneseName:'日本語名',
                    englishName:'英語名',
                    imgPath:{
                        male:'オスの画像パス',
                        female:'メスの画像パス'
                    },
                    imgURL:{
                        male:'オスの画像URL',
                        female:'メスの画像URL'
                    }
                  }
              ).then(()=>{
                  alert(`記録しました。`)
              }
              ).catch((error)=>{
                alert(`記録に失敗しました。\n${error}`)
              })
            alert(`記録しました。`)
          }).catch((error)=>{
            alert(`記録に失敗しました。\n${error}`)
          })*/
        }
      }
    })
    export default class AnimalCrossing extends Vue {
      private animals: any[] =[
        {reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'オジロジャックウサギ',animalEng:'White-tailed Jackrabbit'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'マガモ',animalEng:'Mallard'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'コヨーテ',animalEng:'Coyote'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'オグロジカ',animalEng:'Black-tailed deer'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'オジロジカ',animalEng:'White-tailed deer'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'アメリカグマ',animalEng:'American black bear'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'アメリカアカシカ',animalEng:'American red deer'},
{reserveJap:'レイトン湖水地方',reserveEng:'LaytonLake',animalJap:'ヘラジカ',animalEng:'Elk'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'アナウサギ',animalEng:'European rabbit'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'カナダガン',animalEng:'Canada goose'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'アカギツネ',animalEng:'Red fox'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'ノロジカ',animalEng:'Roe deer'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'ダマジカ',animalEng:'Fallow deer'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'イノシシ',animalEng:'boar'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'アカシカ',animalEng:'Red deer'},
{reserveJap:'ヒルシュフェルデン保護区',reserveEng:'Hirschfelden',animalJap:'ヨーロッパバイソン',animalEng:'European bison'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'シベリアジャコウジカ',animalEng:'Siberian musk deer'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'オオヤマネコ',animalEng:'Lynx'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'イノシシ',animalEng:'boar'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'トナカイ',animalEng:'reindeer'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'ヒグマ',animalEng:'Brown bear'},
{reserveJap:'メドヴェド＝タイガ国立公園',reserveEng:'Medved-Taiga',animalJap:'ヘラジカ',animalEng:'Elk'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'スクラブノウサギ',animalEng:'Scrub hare'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'ヨコスジジャッカル',animalEng:'Side-striped jackal'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'スプリングボック',animalEng:'Antidorcas marsupialis'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'レッサークーズー',animalEng:'lesser kudu'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'イボイノシシ',animalEng:'Desert Warthog'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'オグロヌー',animalEng:'Blue wildebeest'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'オリックス',animalEng:'Orix'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'ライオン',animalEng:'Lion'},
{reserveJap:'ヴルホンガ・サバンナ',reserveEng:'VurhongaSavanna',animalJap:'アフリカスイギュウ',animalEng:'African buffalo'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'アカシマアジ',animalEng:'Cinnamon teal'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'ブラックバック',animalEng:'Blackbuck'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'アクシスジカ',animalEng:'Axis deer'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'ピューマ',animalEng:'Puma'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'ミュールジカ',animalEng:'Mule deer'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'アカシカ',animalEng:'Red deer'},
{reserveJap:'パルケ・フェルナンド',reserveEng:'ParqueFernando',animalJap:'スイギュウ',animalEng:'Water buffalo'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'シノリガモ',animalEng:'Harlequin duck'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'アカギツネ',animalEng:'Red fox'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'ハイイロオオカミ',animalEng:'Gray wolf'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'カリブー',animalEng:'Caribou'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'グリズリー',animalEng:'Grizzly'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'ヘラジカ',animalEng:'Elk'},
{reserveJap:'ユーコンバレー',reserveEng:'YukonValley',animalJap:'ヘイゲンバイソン',animalEng:'Hagen Bison'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'ヤブノウサギ',animalEng:'European hare'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'ノロジカ',animalEng:'Roe deer'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'イノシシ',animalEng:'boar'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'グレドスアイベックス',animalEng:'Gredos Ibex'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'サウスイースタンスパニッシュアイベックス',animalEng:'South Eastern Spanish Ibex'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'ベセイテアイベックス',animalEng:'Beseite Ibex'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'ロンダアイベックス',animalEng:'Ronda Ibex'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'イベリアムフロン',animalEng:'Iberium Flon'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'イベリアオオカミ',animalEng:'Iberian wolf'},
{reserveJap:'クアトロコリナス',reserveEng:'CuatroColinasGameReserve',animalJap:'アカシカ',animalEng:'Red deer'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'七面鳥',animalEng:'Turkey'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'プロングホーン',animalEng:'Pronghorn'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'ビッグホーン',animalEng:'Big horn'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'シロイワヤギ',animalEng:'Mountain goat'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'ピューマ',animalEng:'Puma'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'ミュールジカ',animalEng:'Mule deer'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'アメリカグマ',animalEng:'American black bear'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'ロッキーマウンテンエルク',animalEng:'Rocky mountain elk'},
{reserveJap:'シルバーリッジ・ピークス',reserveEng:'SilverRidgePeaks',animalJap:'ヘイゲンバイソン',animalEng:'Hagen Bison'},
      ]
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
