<template>
  <div id="line">
    <grid-item />
    <grid-item />
    <grid-item />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";
export default {
  components: { GridItem },
};
</script>

<style scoped>
#line {
  display: flex;
  flex-direction: row;
}
</style>
