<template>
  <div class="tires">
    <div class="tires_div">
      <div class="tires_name"><h1>О нас</h1></div>
      <div class="tires_div_img">
        <img class="tires_img" src="@/assets/tires.svg">
      </div>
      <div class="tires_tx"><h2 class="tires_tx_1">Компания организована в 2015г.</h2>
           <h2 class="tires_tx_1">Профессиональная команда со стажем работы, по данному направлению, более 20 лет.</h2>
           <h2 class="tires_tx_1">Гарантия на все виды товара.</h2>
           <h2 class="tires_tx_1">Осуществляем консультации по подбору и поставку шин, камер и ободных лент для легкового,
             грузового транспорта, а также для спецтехники.</h2>
           <h2 class="tires_tx_1">Доставка во все регионы РФ.</h2>
           <h2 class="tires_tx_1">Контакты +7(812)246-13-54</h2>
           <h2 class="tires_tx_1">Доставка во все регионы РФ.</h2>
           <h2 class="tires_tx_1">Адрес г. С-Петербург Зеленков переулок, д.9 литера «Д» офис 86-87</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tires
{
  background: #F4F4EF;
  width: 100%;

}
.tires_div
{
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;

}
.tires_div_img
{
  width: 27%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
.tires_img
{
  width: 300px;
  height: 300px;
}
.tires_name
{
  margin-bottom: 30px;
  width: 15%;
  margin-left: auto;
  margin-right: auto;
}
.tires_tx
{
  margin-top: 50px;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: 30px;

}
.tires_tx_1
{
  padding-bottom: 30px;
}
</style>