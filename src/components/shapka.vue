<template>
  <div class="shapka">
    <div class="shapka_cont">
    <div class="trubka">
      <div>
        <img src="@/assets/trubka.svg">
      </div>
      <div>
        +7 (812) 426-13-54
      </div>
    </div>
    <div class="name_comp" @click="$router.push('/')">
      <ul class="name_comp">
        <li><img src="@/assets/albo.svg"></li>
        <li><span>Альбатрос</span></li>
      </ul>
    </div>
    <div class="contacs_comp">
      <ul class="contacs_comp">
        <contacs_ui>
          <a href="https://t.me/Sveta_Ostonen"><img src="@/assets/teleg.svg"></a>
        </contacs_ui>
        <contacs_ui>
          <a href="https://wa.me/79216504840"><img src="@/assets/whatsup.svg"></a>
        </contacs_ui>
        <button_call>Заказать Звонок</button_call>
      </ul>
    </div>
  </div>
  </div>
  <hr style="border-image: linear-gradient(to right, #2B506E, white, #2B506E);
    border-image-slice: 2;">
  <div class="nav_bar">
      <navbar_links></navbar_links>
  </div>
</template>

<script>
import navbar_links from "@/components/UI/navbar_links.vue";
import button_call from "@/components/UI/button_call.vue";
import contacs_ui from "@/components/UI/contacs_ui.vue";
export default {
  components:{
    button_call,
    navbar_links,
    contacs_ui
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.shapka
{
  width: 100%;
  height: 107px;
  background-color: #2B506E;
  display: flex;
}
.trubka
{
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #F4F4EF;
  margin-top: auto;
  margin-bottom: auto;
}
.name_comp
{
  margin: auto;
  text-align: center;
  font-family: 'NoirPro-Light';
  font-size: 35px;
  line-height: 41px;
  color: #F4F4EF;
  list-style-type: none;
}
.contacs_comp
{

  display: flex;
}


.shapka_cont
{
  display: flex;
  width: 85%;
  margin: auto;
}

.nav_bar
{
  width: 100%;
  height: 40px;
  background-color: #2B506E;
  display: flex;
}
</style>