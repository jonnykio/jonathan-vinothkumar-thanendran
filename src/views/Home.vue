<template>
  <div class="home">
    <ProductCarousel />
    <a class="cursor-pointer" @click="showProduct = true">View Product</a>
    <Modal v-if="showProduct" @close="showProduct = false">
      <h3 slot="header">Header for Product</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal';
import ProductCarousel from '@/components/product-carousel';

export default {
  name: 'Home',
  components: {
    ProductCarousel,
    Modal,
  },
  data() {
    return {
      showProduct: false,
    }
  },
}
</script>
