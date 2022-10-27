
<template>
  <Page>
    <Label> Page 1 </Label>
  </Page>
</template>


<!--<script lang="ts" setup>
console.log("setupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetupsetup")
import { useRouter } from "nativescript-vue-router-extended";
const router = useRouter()
setTimeout(() =>{
  router.push('/page')
}, 2000)
</script>-->


<script>

export default {
  name: "app",

  beforeRouteEnter(to, from, next) {
    // Do something before to enter to the route
    next((vm) => {
      // Do something once navigation is done
      // Instead of `this`, use `vm`
    });
  },

  beforeRouteLeave() {
    // Do something before to leave the route
    // You can use `this` inside of this hook
  },

  beforeRouteUpdate() {
    // Do something before to leave the route
    // before redirecting to another route with same path
    // You can use `this` inside of this hook
  },

  mounted() {
    // Output current route object with name, path etc.
    setTimeout(() => {
      this.$routeTo("/page");

      /* setTimeout(() => {
      this.$routeBack();
    }, 2000);*/

  }, 5000);
},
};
</script>