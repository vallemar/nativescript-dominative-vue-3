<template>
  <GridLayout rows="*, *">
    <ContentView>
      <router-view defaultRoute="/test"></router-view>
    </ContentView>
    <ContentView row="1">
      <router-view id="sidebar" defaultRoute="/"></router-view>
    </ContentView>
  </GridLayout>
</template>
