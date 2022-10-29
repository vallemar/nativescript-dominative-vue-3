<template>
  <Page actionBarHidden="true">
    <Label style="font-size: 50px; border-top-width: 3px"> Home </Label>
  </Page>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/test2", {
        frame: "sidebar",
      });
      this.$router.push("/", {
        frame: "default",
      });
    }, 5000);
  },
};
</script>
