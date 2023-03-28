<template>
  <div class="text_gl">
    <div class="text"><slot name="header"></slot></div>

    <div class="img"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .text_gl
  {
    text-align: center;
    width: 45%;
    margin-left: auto;
    margin-right: auto;
  }

  .text {
    padding-top: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #000000;

  }
  .img {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
</style>