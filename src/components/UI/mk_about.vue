<template>
  <div class="text_gl_1">
    <div class="text"><slot name="header" class="text"></slot></div>
    <div class="text_1"><slot name="content" class="text_1"></slot></div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
.text_gl_1
{
  width: 100%;
  text-align: center;
}
.text
{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;
}
.text_1
{
  padding-top: 20px;
  color: black;
}
</style>