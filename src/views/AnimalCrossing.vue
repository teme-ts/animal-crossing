<template>
    <div class="animal-crossing ">
      <div class="button-container">
        <div class="img-button" v-for="animal in animals" :key="animal.japaneseName" @click="huntingRecord(animal)">
          <img class="animal-img" :src="animal.imagePath" :alt="animal.japaneseName+animal.gender" >
          <p class="animal-japanese-name">{{ animal.japaneseName }} {{ animal.gender }}</p>
          <!--<p>{{ animal.englishName }}</p>-->
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';




    interface Animal {
        japaneseName: string;
        englishName: string;
        gender: string;
        imagePath: string;
    }

    @Options({
    })
    export default class AnimalCrossing extends Vue {
        private animals: Animal[]=
        [
{ japaneseName:'アカギツネ', englishName:'Red fox', gender:'♂', imagePath: '' },
{ japaneseName:'アカギツネ', englishName:'Red fox', gender:'♀', imagePath:'' },
{ japaneseName:'アカシカ', englishName:'Red deer', gender:'♂', imagePath:'' },
{ japaneseName:'アカシカ', englishName:'Red deer', gender:'♀', imagePath:'' },
{ japaneseName:'アメリカアカシカ', englishName:'American red deer', gender:'♂', imagePath:'' },
{ japaneseName:'アメリカアカシカ', englishName:'American red deer', gender:'♀', imagePath:'' },
{ japaneseName:'アメリカグマ', englishName:'American black bear', gender:'♂', imagePath:'' },
{ japaneseName:'アメリカグマ', englishName:'American black bear', gender:'♀', imagePath:'' },
{ japaneseName:'オグロジカ', englishName:'Black-tailed deer', gender:'♂', imagePath:'' },
{ japaneseName:'オグロジカ', englishName:'Black-tailed deer', gender:'♀', imagePath:'' },
{ japaneseName:'オジロジカ', englishName:'White-tailed deer', gender:'♂', imagePath:'' },
{ japaneseName:'オジロジカ', englishName:'White-tailed deer', gender:'♀', imagePath:'' },
{ japaneseName:'オジロジャックウサギ', englishName:'White-tailed Jackrabbit', gender:'♂', imagePath:'' },
{ japaneseName:'オジロジャックウサギ', englishName:'White-tailed Jackrabbit', gender:'♀', imagePath:'' },
{ japaneseName:'コヨーテ', englishName:'Coyote', gender:'♂', imagePath:'' },
{ japaneseName:'コヨーテ', englishName:'Coyote', gender:'♀', imagePath:'' },
{ japaneseName:'シベリアジャコウジカ', englishName:'Siberian musk deer', gender:'♂', imagePath:require('@/assets/animalImg/シベリアジャコウジカ♂.jpg') },
{ japaneseName:'シベリアジャコウジカ', englishName:'Siberian musk deer', gender:'♀', imagePath:require('@/assets/animalImg/シベリアジャコウジカ♀.jpg') },
{ japaneseName:'ダマジカ', englishName:'Fallow deer', gender:'♂', imagePath:require('@/assets/animalImg/ダマジカ♂.jpg') },
{ japaneseName:'ダマジカ', englishName:'Fallow deer', gender:'♀', imagePath:'' },
{ japaneseName:'ノロジカ', englishName:'Roe deer', gender:'♂', imagePath:require('@/assets/animalImg/ノロジカ♂.jpg') },
{ japaneseName:'ノロジカ', englishName:'Roe deer', gender:'♀', imagePath:'' },
{ japaneseName:'ヘラジカ', englishName:'The elk', gender:'♂', imagePath:require('@/assets/animalImg/ヘラジカ♂.jpg') },
{ japaneseName:'ヘラジカ', englishName:'The elk', gender:'♀', imagePath:'' },
{ japaneseName:'トナカイ', englishName:'reindeer', gender:'♂', imagePath:require('@/assets/animalImg/トナカイ♂.jpg') },
{ japaneseName:'トナカイ', englishName:'reindeer', gender:'♀', imagePath:'' },
{ japaneseName:'ヒグマ', englishName:'Brown bear', gender:'♂', imagePath:require('@/assets/animalImg/ヒグマ♂.jpg') },
{ japaneseName:'ヒグマ', englishName:'Brown bear', gender:'♀', imagePath:'' },
{ japaneseName:'イノシシ', englishName:'boar', gender:'♂', imagePath:require('@/assets/animalImg/イノシシ♂.jpg') },
{ japaneseName:'イノシシ', englishName:'boar', gender:'♀', imagePath:require('@/assets/animalImg/イノシシ♀.jpg') },
{ japaneseName:'オオヤマネコ', englishName:'Lynx', gender:'♂', imagePath:require('@/assets/animalImg/オオヤマネコ♂.jpg') },
{ japaneseName:'オオヤマネコ', englishName:'Lynx', gender:'♀', imagePath:'' },
{ japaneseName:'カリブー', englishName:'Caribou', gender:'♂', imagePath:'' },
{ japaneseName:'カリブー', englishName:'Caribou', gender:'♀', imagePath:require('@/assets/animalImg/カリブー♀.jpg') },
{ japaneseName:'ヘイゲンバイソン', englishName:'Hey Gen bison', gender:'♂', imagePath:'' },
{ japaneseName:'ヘイゲンバイソン', englishName:'Hey Gen bison', gender:'♀', imagePath:'' },
{ japaneseName:'ハイイロオオカミ', englishName:'Gray wolf', gender:'♂', imagePath:'' },
{ japaneseName:'ハイイロオオカミ', englishName:'Gray wolf', gender:'♀', imagePath:'' },
        ]
    }
</script>

<style lang="scss" scoped>
body{
  margin: 0;
  
}

.button-container{
    background-image: url("./../assets/backgrounds/tiga2.jpg");
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  
  justify-content: center;
  
  left: 0;
  right: 0;
  margin: auto;
}

.img-button{
  position: relative;

  width: 25vw;
  background-color: white;
  
  margin: 2vw;
}

.animal-japanese-name{
  position: absolute;
  color: black;
  background-color: gray;
  opacity:50%;
  bottom:0;
  left: 0;
}

.animal-img{
  width: 100%;
}
</style>
