export const imports = {
  'src/widgets/QuickLinksWidget.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-widgets-quick-links-widget" */ 'src/widgets/QuickLinksWidget.mdx'),
  'src/components/BwkzButton/BwkzButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-bwkz-button-bwkz-button" */ 'src/components/BwkzButton/BwkzButton.mdx'),
}
