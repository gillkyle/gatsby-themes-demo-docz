export const imports = {
  'src/pages/image.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-image" */ 'src/pages/image.mdx'
    ),
}
