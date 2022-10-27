const webpack = require('@nativescript/webpack');
const {VueLoaderPlugin} = require('vue-loader');

const dominativeElements = ['AbsoluteLayout', 'ActionBar', 'ActionItem', 'ActivityIndicator', 'Button', 'ContentView', 'DatePicker', 'DockLayout', 'FlexboxLayout', 'FormattedString', 'Frame', 'GridLayout', 'HtmlView', 'Image', 'Label', 'ListPicker', 'ListView',
    'NavigationButton', 'Page', 'Placeholder', 'Progress', 'ProxyViewContainer', 'RootLayout', 'ScrollView', 'SearchBar', 'SegmentedBar', 'SegmentedBarItem', 'Slider', 'Span', 'StackLayout', 'Switch', 'TabView', 'TabViewItem', 'TextField', 'TextView',
    'TimePicker', 'WebView', 'WrapLayout', 'Prop', 'Template']

module.exports = (env) => {
    webpack.init(env);

    // Learn how to customize:
    // https://docs.nativescript.org/webpack
    webpack.chainWebpack((config) => {
        config.resolve.alias.set('@vue/runtime-dom', '@vue/runtime-dom');
        config.resolve.alias.set('vue', '@vue/runtime-dom');
        config.plugin('VueLoaderPlugin').use(VueLoaderPlugin);
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('vue-loader')
            .loader(require.resolve('vue-loader'))
            .tap((options) => {
                return {
                    ...options,
                    isServerBuild: false,
                    compilerOptions: {
                        isCustomElement: (tag) => dominativeElements.indexOf(tag) >= 0,
                    },
                };
            });
    });
    return webpack.resolveConfig();
};
