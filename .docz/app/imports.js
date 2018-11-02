export const imports = {
  'src/widgets/BwkzQuickLinks.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-widgets-bwkz-quick-links" */ 'src/widgets/BwkzQuickLinks.mdx'),
  'src/components/BwkzButton/BwkzButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-bwkz-button-bwkz-button" */ 'src/components/BwkzButton/BwkzButton.mdx'),
}
