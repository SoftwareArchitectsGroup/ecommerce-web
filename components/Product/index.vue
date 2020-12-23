<template>
  <div class="product">
    <span>{{ name }}</span>
    <span>{{ price }}</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["name", "price"],
};
</script>

<style lang="sass">
.product
    width: 26rem
    height: 26rem
    background-color: var(--color__background)
    margin-top: 3.25rem
    margin-left: 3.25rem
    border-radius: 1rem
    cursor: pointer
    transition: box-shadow 0.1s linear

    &:hover
        box-shadow: 0px 0px 4px 2px #FFC75F
</style>[]