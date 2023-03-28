<template>
  <div class="sliderr">
    <Splide :options="{ rewind: true }">
      <SplideSlide>
        <img src="@/assets/shina.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/shina.jpg" alt="Sample 2">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
    };

    return { options };
  },
} );
</script>

<style scoped>
.sliderr{
  background-color: #C0CFD6;
}
</style>