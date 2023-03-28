<template>
  <div class="app">
    <shapka></shapka>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Shapka from "@/components/shapka.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {Shapka, Footer},
  Shapka,
  Footer

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html {
  height: 100%;
}
body {
  height: 100%;
}
#app
{
  height: 100%;
}
.app
{
  height: 100%;
  background: #F4F4EF;
  flex-direction: column;
}
.main
{
  flex: 1 1 auto;
}
h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;
}
h2 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}
h3 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
h4 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;
}
h5{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  padding-top: 16px;
}
h6 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
</style>
