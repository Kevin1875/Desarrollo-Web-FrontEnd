<template>
  <div class="contCard">
    <h4 class="textCard">
      {{ props.title }}
    </h4>
  </div>
</template>
<style scoped>
.textCard {
  font-size: medium;
  font-weight: 600;
  text-align: center;
}

.contCard {
  padding: 10px 10px;
  display: flex;
  align-items: baseline;
}
</style>
<script>
import { defineProps } from "vue";

export default {
  setup() {
    const props = defineProps({ title: String });

    return {
      props,
    };
  },
};
</script>
