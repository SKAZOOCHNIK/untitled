<template>
  <div class="navbar_cont">
    <button class="navbar_button" @click="$router.push('/Шины')"><h4>Шины</h4></button>
    <button class="navbar_button" @click="$router.push('/Омывайка')"><h4>Омывайка</h4></button>
    <button class="navbar_button" @click="$router.push('/Откачка')"><h4>Откачка</h4></button>
    <button class="navbar_button" @click="$router.push('/Аренда')"><h4>Аренда</h4></button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar_cont
{
  display: flex;
  margin: auto;
}
.navbar_button
{
  background: none;
  border: none;
  margin-right: 28px;
}
</style>