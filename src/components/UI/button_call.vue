<template>

    <button class="button_call">
      <slot class="button_call_text"></slot>
    </button>

</template>

<script>

</script>

<style>
  .button_call{
    margin-top: 35px;
    outline: none;
    border: none;
    width: 120px;
    height: 24px;
    background: #F4F4EF;
    border-radius: 5px;
    border-color: #F4F4EF;

  }
  .button_call_text
  {
    font-family: 'Montserrat';
    font-style: normal;
    text-align: center;
    font-size: 5px;
    line-height: 12px;
  }

</style>