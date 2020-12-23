<template>
  <div class="catalog">
      <div class="product__container" v-for="product in products" :key="product.name">
        <Product v-bind:name="product.name" v-bind:price="product.price" />
      </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  computed: {
    products() {
      return this.$store.state.catalog.products;
    },
  },
};
</script>

<style lang="sass">
.catalog
    max-width: 120rem
    height: 100vh
    margin: auto
    background-color: #FACCFF
    display: flex
    flex-flow: row wrap
    align-content: flex-start
</style>