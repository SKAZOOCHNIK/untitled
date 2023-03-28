<template>
  <div class="background_page">
    <div class="rent">
      <div class="rent_name"><h2>Аренда</h2></div>
      <div class="rent_fr_tb">
        <img class="rent_img" src="@/assets/albo_rent.jpg">
        <h3 class="rent_tx">Аренда офисных помещений от 8 м2 до 200м2
          Адрес г. С-Петербург Зеленков переулок, д.9 литера «Д»
          От метро «Выборгская» - 8 минут пешком.
          Охраняемая территория 24/7.
          Возможность предоставления юридического адреса.

          Контакты 7(812)246-13-54
          +79216504840</h3>
      </div>
      <div class="rent_fr_tb">
        <img class="rent_img" src="@/assets/rent_img_1.jpg">
        <img class="rent_img" src="@/assets/rent_img_2.jpg">
       </div>
      <div class="rent_fr_tb">
        <img class="rent_img" src="@/assets/rent_img_3.jpg">
        <img class="rent_img" src="@/assets/rent_img_4.jpg">
      </div>
      <div class="rent_fr_tb">
        <img class="rent_img" src="@/assets/rent_img_5.jpg">
        <img class="rent_img" src="@/assets/rent_img_6.jpg">
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
  .rent
  {
    margin-top: 50px;
    width: 85%;
    margin-right: auto;
    margin-left: auto;
  }
  .rent_name
  {
    width: 13%;
    margin-right: auto;
    margin-left: auto;
  }
  .rent_fr_tb
  {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .rent_img
  {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 50px;
    width: 500px;
    height: 350px;
  }
  .rent_tx
  {
    margin-left: auto;
    padding-top: 100px;
    width: 43%;
    text-align: center;
  }
</style>