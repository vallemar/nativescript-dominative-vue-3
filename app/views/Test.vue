<template>
  <Page>
    <Label> Test </Label>
  </Page>
</template>
<script>
export default {
  name: "test",
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
      this.$routeTo("/");
      setTimeout(() => {
        this.$routeBack();
      }, 2000);
    }, 5000);
  },
};
</script>
