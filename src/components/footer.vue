<template>
  <div class="footer" style="background: #C0CFD6; height: 186px">
    <div class="footer_1">
      <div class="free_cons">
        <h1>Бесплатная консультация</h1>
        <h6>Оставьте заявку на обратный звонок и мы Вас проконсультируем
          А так же посчитаем стоимость работ</h6>
      </div>
        <button_call class="button_call">Заказать Звонок</button_call>
    </div>
  </div>
  <div class="footer" style="background: #2B506E; height: 256px">
    <div class="footer_1">
      <ul class="info">
        <li><h4>ИНФОРМАЦИЯ</h4></li>
        <li><p class="info_1">Интернет-сайт носит исключительно информационный характер и ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой, определяемой положениями Статей 435 и 437 Гражданского кодекса РФ</p></li>
      </ul>
      <div class="contacs_ui_circle_1">
        <contacs_ui>
          <a href="https://t.me/Sveta_Ostonen"><img src="@/assets/teleg.svg" class="contacs_ui_circle"></a>
        </contacs_ui>
        <contacs_ui>
          <a href="https://wa.me/79216504840"><img src="@/assets/whatsup.svg" class="contacs_ui_circle"></a>
        </contacs_ui>
      </div>
      <div class="contacs_footer">
        <ul style="list-style-type: none">
          <li>
            <h4>КОНТАКТЫ</h4>
          </li>
          <li>
            <h5>6504840@mail.ru</h5>
          </li>
          <li>
            <h5>Телефон: +7 (921) 650-48-40</h5>
          </li>
          <li>
            <h5>Гор. Телефон: +7 (812) 426-13-54</h5>
          </li>
          <li>
            <h5>Телефон по ассенизации: +7 (911) 755-20-20</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import contacs_ui from "@/components/UI/contacs_ui.vue";
import button_call from "@/components/UI/button_call.vue";
export default {
  components:{
    button_call,
    contacs_ui

  },
}
</script>

<style scoped>
  .footer {
    width: 100%;
    display: flex;
  }
  .footer_1 {
    margin: auto;
    width: 85%;
    display: flex;
  }
  .button_call {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    width: 258px;
    height: 62px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #000000;
  }
  .info {
    margin-top: 25px;
    width: 20%;
    list-style-type: none;
  }
  .info_1 {
    padding-top: 5px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    padding-bottom: 20px;
  }
  .contacs_footer
  {
    margin-top: 25px;
    margin-left: auto;
  }
  .contacs_ui_circle {
    width:32px;
    height: 32px;
    margin-right: 16px;

  }
  .contacs_ui_circle_1 {
    margin: auto;
    padding-left: 150px;
    display: flex;
  }
  .free_cons
  {
    width: 60%;
    padding-bottom: 30px;
  }
</style>