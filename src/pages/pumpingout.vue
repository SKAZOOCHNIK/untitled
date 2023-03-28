<template>
  <div class="background_page">
    <div class="con_page">
      <div class="title_car"><h1>Откачка</h1></div>
      <div class="car_img_1">
        <img src="@/assets/car_1.jpg" class="car_img">
        <img src="@/assets/car_about.jpg" class="car_img">
      </div>
      <div class="text_otkach">
        <h3 class="text_otkach_1">Наша компания предлагает такие виды услуг как откачка септиков, биотуалетов, очистка
          канализации и колодцев, выгребных ям, монтаж систем канализации, вывоз и утилизация жидких
          бытовых отходов (ЖБО), гидродинамическая промывка труб, устранение засоров и прочие
          ассенизаторские услуги.</h3>
        <h3 class="text_otkach_1">Мы работаем преимущественно с юридическими лицами, по безналичному расчету. Зона охвата -
          Всеволожский район города Санкт-Петербурга. Стоимость наших работ находится на
          минимальном уровне, так как у нас нет "раздутого" штата сотрудников. В стоимость услуг включен
          НДС.</h3>
        <h3 class="text_otkach_1">Утилизируем отходы строго в отведенном специализированном пункте по приему сточных вод,
          согласно договора с Государственным унитарным предприятием «Водоканал Ленинградской
          области»</h3>
        <h3 class="text_otkach_1">Звоните, сделаем бесплатный предварительный расчет и бесплатно консультируем Вас.</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background_page
{
  background: #F4F4EF;
  width: 100%;
}
.con_page
{
  margin: auto;
  width: 85%;

}
.text_otkach
{
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  padding-bottom: 70px;
}
.text_otkach_1
{
  text-align: center;
  padding-bottom: 35px;
}
.car_img
{
  width: 400px;
  height: 250px;

}
.car_img_1
{
  width: 68%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
}
.title_car
{
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>