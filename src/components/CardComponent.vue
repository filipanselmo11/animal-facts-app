<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
        <h5 class="card-title">{{ text }}</h5>
    </div>
  </div>
</template>
