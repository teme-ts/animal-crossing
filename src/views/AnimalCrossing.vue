<template>
    <div class="animal-crossing ">
      
      <div class="button-container">
        <div class="img-button" v-for="animal in animals" :key="animal.japaneseName" @click="addFirestore(animal)">
          <img class="animal-img" :src="animal.imagePath" :alt="animal.japaneseName+animal.gender" >
          <p class="animal-japanese-name">{{ animal.japaneseName }} {{ animal.gender }}</p>
          <!--<p>{{ animal.englishName }}</p>-->
        </div>
      </div>
    </div>
</template>

<script lang="ts">
//import component from '*.vue';
import { Options, Vue } from 'vue-class-component';
import firestore from '../firebase'

    interface Animal {
        japaneseName: string;
        englishName: string;
        gender: string;
        imagePath: string;
    }
    @Options({
      methods:{
        addFirestore(animal: Animal){

          firestore.collection('hunting-record').add(
            {
              'huntingTime':new Date(),
              'animalName':animal.japaneseName,
              'gender':animal.gender
            }
          ).then(()=>{
            alert(`おめでとうございます!!\n${animal.japaneseName} をハントしました。`)
          }).catch((error)=>{
            alert(`記録に失敗しました。\n${error}`)
          })
        }
      }
    })
    export default class AnimalCrossing extends Vue {
        private animals: Animal[]=
        [
{ japaneseName:'アカギツネ', englishName:'Red fox', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アカギツネ', englishName:'Red fox', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アカシカ', englishName:'Red deer', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アカシカ', englishName:'Red deer', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アメリカアカシカ', englishName:'American red deer', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アメリカアカシカ', englishName:'American red deer', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アメリカグマ', englishName:'American black bear', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'アメリカグマ', englishName:'American black bear', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'オグロジカ', englishName:'Black-tailed deer', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'オグロジカ', englishName:'Black-tailed deer', gender:'♀', imagePath:require('@/assets/animalImg/オグロジカ♀.jpg') },
{ japaneseName:'オジロジカ', englishName:'White-tailed deer', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'オジロジカ', englishName:'White-tailed deer', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'オジロジャックウサギ', englishName:'White-tailed Jackrabbit', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'オジロジャックウサギ', englishName:'White-tailed Jackrabbit', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'コヨーテ', englishName:'Coyote', gender:'♂', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'コヨーテ', englishName:'Coyote', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'シベリアジャコウジカ', englishName:'Siberian musk deer', gender:'♂', imagePath:require('@/assets/animalImg/シベリアジャコウジカ♂.jpg') },
{ japaneseName:'シベリアジャコウジカ', englishName:'Siberian musk deer', gender:'♀', imagePath:require('@/assets/animalImg/シベリアジャコウジカ♀.jpg') },
{ japaneseName:'ダマジカ', englishName:'Fallow deer', gender:'♂', imagePath:require('@/assets/animalImg/ダマジカ♂.jpg') },
{ japaneseName:'ダマジカ', englishName:'Fallow deer', gender:'♀', imagePath:require('@/assets/animalImg/ダマジカ♀.jpg') },
{ japaneseName:'ノロジカ', englishName:'Roe deer', gender:'♂', imagePath:require('@/assets/animalImg/ノロジカ♂.jpg') },
{ japaneseName:'ノロジカ', englishName:'Roe deer', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'ヘラジカ', englishName:'The elk', gender:'♂', imagePath:require('@/assets/animalImg/ヘラジカ♂.jpg') },
{ japaneseName:'ヘラジカ', englishName:'The elk', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'トナカイ', englishName:'reindeer', gender:'♂', imagePath:require('@/assets/animalImg/トナカイ♂.jpg') },
{ japaneseName:'トナカイ', englishName:'reindeer', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'ヒグマ', englishName:'Brown bear', gender:'♂', imagePath:require('@/assets/animalImg/ヒグマ♂.jpg') },
{ japaneseName:'ヒグマ', englishName:'Brown bear', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'イノシシ', englishName:'boar', gender:'♂', imagePath:require('@/assets/animalImg/イノシシ♂.jpg') },
{ japaneseName:'イノシシ', englishName:'boar', gender:'♀', imagePath:require('@/assets/animalImg/イノシシ♀.jpg') },
{ japaneseName:'オオヤマネコ', englishName:'Lynx', gender:'♂', imagePath:require('@/assets/animalImg/オオヤマネコ♂.jpg') },
{ japaneseName:'オオヤマネコ', englishName:'Lynx', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'カリブー', englishName:'Caribou', gender:'♂', imagePath:require('@/assets/animalImg/カリブー♂.jpg') },
{ japaneseName:'カリブー', englishName:'Caribou', gender:'♀', imagePath:require('@/assets/animalImg/カリブー♀.jpg') },
{ japaneseName:'ヘイゲンバイソン', englishName:'Hey Gen bison', gender:'♂', imagePath:require('@/assets/animalImg/ヘイゲンバイソン♂.jpg') },
{ japaneseName:'ヘイゲンバイソン', englishName:'Hey Gen bison', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'ハイイロオオカミ', englishName:'Gray wolf', gender:'♂', imagePath:require('@/assets/animalImg/ハイイロオオカミ♂.jpg') },
{ japaneseName:'ハイイロオオカミ', englishName:'Gray wolf', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'プロングホーン', englishName:'', gender:'♂', imagePath:require('@/assets/animalImg/プロングホーン♂.jpg') },
{ japaneseName:'プロングホーン', englishName:'', gender:'♀', imagePath:require('@/assets/animalImg/プロングホーン♀.jpg') },
{ japaneseName:'ロッキーマウンテンエルク', englishName:'', gender:'♂', imagePath:require('@/assets/animalImg/ロッキーマウンテンエルク♂.jpg') },
{ japaneseName:'ロッキーマウンテンエルク', englishName:'', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'七面鳥', englishName:'', gender:'♂', imagePath:require('@/assets/animalImg/七面鳥♂.jpg') },
{ japaneseName:'七面鳥', englishName:'', gender:'♀', imagePath:require('@/assets/animalImg/七面鳥♀.jpg') },
{ japaneseName:'ビッグホーン', englishName:'', gender:'♂', imagePath:require('@/assets/animalImg/ビッグホーン♂.jpg') },
{ japaneseName:'ビッグホーン', englishName:'', gender:'♀', imagePath:require('@/assets/title_full.png') },
{ japaneseName:'ミュールジカ', englishName:'', gender:'♂', imagePath:require('@/assets/animalImg/ミュールジカ♂.jpg') },
{ japaneseName:'ミュールジカ', englishName:'', gender:'♀', imagePath:require('@/assets/title_full.png') },
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
  color: black;
  background-color: gray;
  
  bottom:0;
  left: 0;
  font-size: 1rem;

  margin-bottom: 1em;

  opacity: 0.5;
  @include sp {
    font-size: 10px;
  }
}

.animal-img{
  width: 100%;
}
</style>
