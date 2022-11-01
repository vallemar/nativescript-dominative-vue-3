import {View} from "@nativescript/core";
import {computed, ref} from "vue";

export type OptionTabs = {
    canGrowBackgroundHeight?: boolean,
    canGrowBackgroundWidth?: boolean
}

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
                onChangeTab(0, args)
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
                duration: 250
            })
        });
    }

    const onChangeTab = (index, $event) => {
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

            itemView.animate({
                scale: {
                    x: 1.1,
                    y: 1.1
                },
                duration: 250
            })
            backgroundView.animate({
                translate: {
                    x,
                    y: backgroundView.originY
                },
                width: widthBackground,
                height: option?.canGrowBackgroundHeight === false ? backgroundView.getActualSize().height : (heightItem + paddingHeight),
                duration: 250
            })
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