<template>
  <div class="back">
    <div class="panarama_about">
      <panaram class="panarama_about_1" @click="$router.push('/Шины')">
        <template  v-slot:header>
          <img src="@/assets/tires.svg">
        </template>
        <template  v-slot:content>
          Шины
        </template>
      </panaram>
      <panaram class="panarama_about_1" @click="$router.push('/Аренда')">
        <template  v-slot:header>
          <img src="@/assets/rent.svg">
        </template>
        <template  v-slot:content>
          Аренда
        </template>
      </panaram>
      <panaram class="panarama_about_1" @click="$router.push('/Откачка')">
        <template  v-slot:header>
          <img src="@/assets/car.svg">
        </template>
        <template  v-slot:content>
          Откачка
        </template>
      </panaram>
      <panaram class="panarama_about_1" @click="$router.push('/Омывайка')">
        <template  v-slot:header>
          <img src="@/assets/washer.svg">
        </template>
        <template  v-slot:content>
          Омывайка
        </template>
      </panaram>
    </div>
  </div>

  <div class="back_1">
    <about_ui>
      <template v-slot:header><h1>Наши клиенты</h1></template>
      <template v-slot:content><img src="@/assets/nadesh.svg"></template>
    </about_ui>
  </div>
  <div class="back_1">
    <div class="back_2">
      <mk_about>
        <template v-slot:content><h3>ООО «Воздушные Ворота Северной Столицы»,&nbsp «Группа ЛСР»,&nbsp ООО "Газпром флот"</h3></template>
      </mk_about>
    </div>
  </div>
</template>

<script>
import about_ui from "@/components/UI/about_ui.vue";
import panaram from "@/components/UI/panaram.vue";
import mk_about from "@/components/UI/mk_about.vue";

export default {
  components:{
    about_ui,
    panaram,
    mk_about
  },
}
</script>

<style scoped>
  .back
  {
    background: #C0CFD6;
    width: 100%;
    height: 388px;
  }
  .back_1
  {
    background: #F7FBF7;
    width: 100%;
    padding-bottom: 70px;
  }
  .back_2
  {
    display: flex;
    margin: auto;
    width: 85%;
  }
  .panarama_about
  {
    display: flex;
    padding-top: 50px;
    width: 85%;
    margin: auto;
  }
  .panarama_about_1
  {
    margin:auto;
  }
</style>