<script lang="ts" setup>
import {useTabsAnimation} from "~/use/useTabsAnimation";
import {watch} from "vue";


const {
  tabsData: bottomTabsData, background: bottomBackground, wrapLayout: bottomWrapLayout,
  loadedItems: bottomLoadedItems, onChangeTab: bottomOnChangeTab, selected: bottomSelected
} = useTabsAnimation([
  {img: 'https://cdn-icons-png.flaticon.com/512/2549/2549900.png', text: 'Home'},
  {img: 'https://cdn-icons-png.flaticon.com/512/3721/3721808.png', text: 'Api'},
  {img: 'https://cdn-icons-png.flaticon.com/512/54/54481.png', text: 'Docs'}
])

const {
  tabsData: headerTabsData, background: headerBackground, wrapLayout: headerWrapLayout,
  loadedItems: headerLoadedItems, onChangeTab: headerOnChangeTab, selected: headerSelected
} = useTabsAnimation([
  {text: 'Vue 3'},
  {text: 'Vue 2'},
  {text: 'Svelte'},
  {text: 'JS'},
  {text: 'TS'},
  {text: 'React'},
  {text: 'Angular'},
], {canGrowBackgroundHeight: false, paddingWidth: -10})

watch(bottomSelected, () => {
  if (headerWrapLayout.value) {
    if (bottomSelected.value.index !== 0) {
      headerWrapLayout.value.animate({
        translate: {
          y: -headerWrapLayout.value.getActualSize().height - 10,
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
  }
})


</script>

<template>
  <Page class="gradient" actionBarHidden="true" ref="page">
    <GridLayout rows="60, * , 85">
      <!-- Header Tabs   -->
      <ScrollView row="0" orientation="horizontal" scrollBarIndicatorVisible="false">
        <GridLayout
            height="100%"
            :columns="headerTabsData.map(() => '90').join(', ')"
            style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2)"
            ref="headerWrapLayout"
        >
          <FlexboxLayout v-for="(item, i) in headerTabsData" :col="i" :key="i" height="100%"
                         justifyContent="center"
                         alignItems="center"
                         @tap="headerOnChangeTab(i, $event)" @layoutChanged="headerLoadedItems">
            <Label
                class="text-center text-black"
                :text="item.text"
            ></Label>
          </FlexboxLayout>
          <StackLayout verticalAlignment="bottom" ref="headerBackground" class="rounded opacity-80" height="4"
                       width="70"
                       backgroundColor="#0F172A"></StackLayout>
        </GridLayout>
      </ScrollView>
      <!-- Body  -->
      <GridLayout row="1">
        <GridLayout :visibility="bottomSelected.index === 0 ? 'visible' : 'collapse'" rows="100, *">
          <Label row="0" horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View
            {{ bottomTabsData[0].text }}</Label>
          <GridLayout v-for="(itemHeader, i) in headerTabsData" :key="i" row="1"
                      :visibility="headerSelected.index === i ? 'visible' : 'collapse'">
            <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">Header
              {{ itemHeader.text }}</Label>

          </GridLayout>
        </GridLayout>
        <GridLayout :visibility="bottomSelected.index === 1 ? 'visible' : 'collapse'">
          <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View
            {{ bottomTabsData[1].text }}</Label>
        </GridLayout>
        <GridLayout :visibility="bottomSelected.index === 2 ? 'visible' : 'collapse'">
          <Label horizontalAlignment="center" verticalAlignment="center" class="text-2xl text-white">View
            {{ bottomTabsData[2].text }}</Label>
        </GridLayout>
      </GridLayout>
      <!-- Bottom Tabs  -->
      <GridLayout row="2" ref="bottomWrapLayout">
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
                         @tap="bottomOnChangeTab(i, $event)" @layoutChanged="bottomLoadedItems">
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
        <StackLayout ref="bottomBackground" class="rounded-full opacity-30" height="40" width="70"
                     backgroundColor="#65ADF1"></StackLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<style>

</style>
