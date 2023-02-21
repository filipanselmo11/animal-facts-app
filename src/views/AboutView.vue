<template>
  <div class="about">
    <h1>Dogs Facts</h1>
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "@/plugins/axios";
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  name: 'AboutView',
  async mounted(){
    this.testDogApi();
  },
  methods:{
    async testDogApi(){
      const dogResponse = await axios.get('all')
      console.log(dogResponse.data);
    }
  },
});
</script>
