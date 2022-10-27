<script lang="ts" setup>
const data = [
  'https://cdn-icons-png.flaticon.com/512/2549/2549900.png',
  'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
  'https://cdn-icons-png.flaticon.com/512/54/54481.png',
];
</script>

<template>
  <GridLayout
    :columns="data.map((x) => '*').join(', ')"
    style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2)"
  >
    <Image
      style="height: 24"
      :src="icon"
      class="text-center"
      :col="i"
      v-for="(icon, i) in data"
      :key="i"
    ></Image>
  </GridLayout>
</template>
