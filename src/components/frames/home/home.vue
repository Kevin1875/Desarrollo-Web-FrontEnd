<script>
import loged from "../../frames/home/loged.vue";
import unloged from "../../frames/home/unloged_v2.vue";
import { reactive } from "vue";

export default {
  components: {
    loged,
    unloged,
  },
  setup() {
    const user = reactive({
      status: true,
    });

    return {
      user,
    };
  },
};
</script>

<template>
  <loged v-if="user.status" />
  <unloged v-else />
</template>
