<template>
  <div class="piter_shapka">
    <div class="title">
      <div class="txt">
        <h1 class="mk_about">Мы команда профессионалов, работаем с 2015 года!</h1>
        <h2>Наши виды деятельности:</h2>
        <h2>-поставка автомобильных шин</h2>
        <h2>-предоставление в аренду офисных помещений</h2>
        <h2> -услуги по приёму и транспортировке сточных вод</h2>
      </div>

      <div class="seridina"><button_call class="button_call_2">Заказать Звонок</button_call></div>
    </div>
  </div>
  <div class="poloska">
  </div>
</template>

<script>
import button_call from "@/components/UI/button_call.vue";

export default {
  components:{
    button_call
  },
}
</script>

<style>
.title {
  width: 85%;
  margin: auto;
}
.txt {
  padding-top: 106px;
  color: #F4F4EF;
  width: 70%;

}

.piter_shapka
{

  height: 80vh;
  width: 100%;
  background-image: url("@/assets/piter2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.mk_about {
  padding-bottom: 37px;
}
.poloska
{

  width: auto;
  height: 87px;
  background: #2B506E;
}

.button_call_2
{
  width: 258px;
  height: 62px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-top: 50px;
  margin-left: auto;
}
.seridina
{
  width: 25%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>