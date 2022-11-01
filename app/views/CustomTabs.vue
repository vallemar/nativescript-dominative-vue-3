<script lang="ts" setup>
import {useTabsAnimation} from "~/use/useTabsAnimation";
import {watch} from "vue";


const {
  tabsData: bottomTabsData, background: backgroundBottom, wrapLayout: wrapLayoutBottom,
  loadedItems: loadedItemsBottom, onChangeTab: onChangeTabBottom, selected: bottomSelected
} = useTabsAnimation([
  {img: 'https://cdn-icons-png.flaticon.com/512/2549/2549900.png', text: 'Home', selected: false},
  {img: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png', text: 'Social', selected: false},
  {img: 'https://cdn-icons-png.flaticon.com/512/54/54481.png', text: 'User', selected: false},
])


const {
  tabsData: headerTabsData, background: headerBackground, wrapLayout: headerWrapLayout,
  loadedItems: headerLoadedItems, onChangeTab: headerOnChangeTab, selected: headerSelected
} = useTabsAnimation([
  {text: 'Home', selected: false},
  {text: 'Health', selected: false},
  {text: 'User', selected: false},
])

watch(bottomSelected, () => {
  if (bottomSelected.value.index !== 0) {
    headerWrapLayout.value.animate({
      translate: {
        y: -60,
        x: 0
      },
      duration: 250
    })
  } else {
    headerWrapLayout.value.animate({
      translate: {
        y: 0,
        x: 0
      },
      duration: 250
    })
  }
})


</script>

<template>
  <Page class="gradient" actionBarHidden="true" ref="page">
    <GridLayout rows="60, * , 85">
      <GridLayout row="0" ref="headerWrapLayout">
        <FlexboxLayout
            width="100%"
            height="100%"
            justifyContent="space-around"
            alignItems="center"
            :columns="bottomTabsData.map((x) => '*').join(', ')"
            style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2)"
        >
          <Label
              class="text-center text-black"
              v-for="(item, i) in headerTabsData"
              @tap="headerOnChangeTab(i, $event)" @layoutChanged="headerLoadedItems"
              :id="i"
              :col="i"
              :text="item.text"
              :key="i"
          ></Label>
        </FlexboxLayout>
        <StackLayout ref="headerBackground" class="rounded-full opacity-20" height="40" width="70"
                     backgroundColor="#65ADF1"></StackLayout>
      </GridLayout>
      <GridLayout row="1">
        <GridLayout :visibility="bottomSelected.index === 0 ? 'visible' : 'collapse'" rows="100, *">
          <Label row="0" horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View
            1</Label>
          <GridLayout row="1" :visibility="headerSelected.index === 0 ? 'visible' : 'collapse'">
            <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">Header 1</Label>
          </GridLayout>
          <GridLayout row="1" :visibility="headerSelected.index === 1 ? 'visible' : 'collapse'">
            <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">Header 2</Label>
          </GridLayout>
          <GridLayout row="1" :visibility="headerSelected.index === 2 ? 'visible' : 'collapse'">
            <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">Header 3</Label>
          </GridLayout>
        </GridLayout>
        <GridLayout :visibility="bottomSelected.index === 1 ? 'visible' : 'collapse'">
          <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View 2</Label>
        </GridLayout>
        <GridLayout :visibility="bottomSelected.index === 2 ? 'visible' : 'collapse'">
          <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View 3</Label>
        </GridLayout>
      </GridLayout>
      <GridLayout row="2" ref="wrapLayoutBottom">
        <FlexboxLayout
            width="100%"
            height="100%"
            justifyContent="space-around"
            alignItems="center"
            :columns="bottomTabsData.map((x) => '*').join(', ')"
            style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2)"

        >
          <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center"
                         v-for="(item, i) in bottomTabsData"
                         @tap="onChangeTabBottom(i, $event)" @layoutChanged="loadedItemsBottom">
            <Image
                :id="i"
                :col="i"
                height="22"
                :src="item.img"
                class="text-center"
            ></Image>
            <Label

                :id="i"
                :col="i"
                :text="item.text"
                :key="i"
                class="text-center text-black"
            ></Label>

          </FlexboxLayout>

        </FlexboxLayout>
        <StackLayout ref="backgroundBottom" class="rounded-full opacity-30" height="40" width="70"
                     backgroundColor="#65ADF1"></StackLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<style>

</style>
