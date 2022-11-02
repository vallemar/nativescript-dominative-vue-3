import {View} from "@nativescript/core";
import {computed, ref} from "vue";

export type OptionTabs = {
    canGrowBackgroundHeight?: boolean,
    canGrowBackgroundWidth?: boolean
}

const scaleSelected = 1.1;
const durationAnimation = 250;

export const useTabsAnimation = (data: any, option?: OptionTabs) => {
    const itemViews: View[] = []
    let init = false;

    const background = ref<View>()
    const wrapLayout = ref<View>()
    const tabsData = ref(data.map(item => {
        item.selected = false;
        return item;
    }));

    const selected = computed(() => {
        const index = tabsData.value.findIndex(item => item.selected)
        return {index, item: tabsData.value[index]}
    })

    const loadedItems = (args) => {
        itemViews.push(args.object)

        setTimeout(() => {
            if (!init) {
                init = true
                onChangeTab(0, args, true)
            }
        }, 0)
    }

    const initializeElements = () => {
        tabsData.value.forEach(x => {
            x.selected = false;
        });
        itemViews.forEach(x => {
            x.animate({
                scale: {
                    x: 1,
                    y: 1
                },
                duration: durationAnimation
            })
        });
    }

    const onChangeTab = (index, $event, init = false) => {
        const currentSelected = tabsData.value.findIndex(x => x.selected)

        if (currentSelected !== index) {
            initializeElements()
            tabsData.value[index].selected = true;

            const backgroundView: View = background.value
            const itemView: View = $event.object

            const paddingWidth = 55
            const paddingHeight = 20
            const widthItem = itemView.getActualSize().width
            const heightItem = itemView.getActualSize().height
            const widthBackground = itemView.getActualSize().width + paddingWidth
            const translateXBackground = backgroundView.translateX
            const itemLocation = itemView.getLocationRelativeTo(backgroundView)

            const x = translateXBackground + itemLocation.x - (backgroundView.getActualSize().width / 2) + (widthItem / 2)
            const newHeightBackground = option?.canGrowBackgroundHeight === false ? backgroundView.getActualSize().height : (heightItem + paddingHeight);
            if (init) {
                itemView.scaleX = scaleSelected
                itemView.scaleY = scaleSelected
                backgroundView.translateX = x
                backgroundView.translateY = backgroundView.originY
                backgroundView.width = widthBackground
                backgroundView.height = newHeightBackground
            } else {
                itemView.animate({
                    scale: {
                        x: scaleSelected,
                        y: scaleSelected
                    },
                    duration: durationAnimation
                })
                backgroundView.animate({
                    translate: {
                        x,
                        y: backgroundView.originY
                    },
                    width: widthBackground,
                    height: newHeightBackground,
                    duration: durationAnimation
                })
            }

        }
    }

    return {
        tabsData,
        background,
        wrapLayout,
        loadedItems,
        onChangeTab,
        selected
    }
}