<template>
  <carousel
    :navigationEnabled="true"
    :paginationEnabled="false"
    :perPage="1"
    :scrollPerPage="false"
  >
    <slide>Slide 1</slide>
    <slide>Slide 2</slide>
    <slide>Slide 3</slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProductCarousel",
  components: {
    Carousel,
    Slide,
  },
};
</script>