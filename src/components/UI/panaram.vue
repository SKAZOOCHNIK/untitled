<template>
  <div class="panarama_2">
    <div class="panarama">
      <slot name="header"></slot>
    </div>
    <h5 class="panarama_1"><slot name="content"></slot></h5>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .panarama
 {
   width: 237px;
   height: 239.02px;
   text-align: center;
   background: #F4F4EF;
   border: 0px solid #000000;
   border-radius: 6px;
   padding-top: 25px;
 }
 .panarama_1
 {
   color: black;
   width: 30%;
   margin-left: auto;
   margin-right: auto;
 }
 .panarama_2
 {
   width: 250px;
   height: 250px;
 }
</style>