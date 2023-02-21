<template>
  <div class="home">
    <h1>Cat Facts</h1>
    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div v-for="(cat, index) in catFacts" :key="index" class="col-5">
          <CardComponent :text="cat.text" :source="cat.source" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "@/plugins/axios";
import CardComponent from "@/components/CardComponent.vue";
import Cat from "@/interfaces/Cat";
export default defineComponent({
  name: "HomeView",
  components: {
    CardComponent,
  },
  data() {
    return {
      catFacts: [] as Cat[],
    };
  },
  // setup(){
  //   const cat:Cat = {
  //     text: '',
  //     source: '',
  //     createdAt: '',
  //     used: false,
  //     type: '',
  //   };
  //   return { cat }
  // },
  async mounted() {
    await this.fetchCatFacts();
  },
  methods: {
    async fetchCatFacts() {
      const catResponse = await axios.get<Cat[]>("/facts");
      this.catFacts = catResponse.data;
      console.log(this.catFacts);
    },
    // testAxiosConnection() {
    //   axios
    //     .get("/facts")
    //     .then((res) => {
    //       this.cat = res.data;
    //     })
    //     .catch((error) => {
    //       console.log("Error => ", error);
    //     });
    // },
  },
  // created() {
  //   this.testAxiosConnection();
  // },
});
</script>

<style scoped>
.home {
  margin-top: 71px !important;
  margin-left: 98px !important;
}
</style>
