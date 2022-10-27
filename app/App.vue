
<template>
  <Page>
    <Label> Page 1 </Label>
  </Page>
</template>

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
      console.log("going to page");
      this.$routeTo("/page")
    
    }, 5000);
  },
};
</script>