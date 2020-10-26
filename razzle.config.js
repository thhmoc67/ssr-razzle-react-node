module.exports = {
//   plugins: [
//     {
//       name: "scss",
//       options: {
//         postcss: {
//           dev: {
//             sourceMap: true,
//             ident: "postcss",
//           },
//           prod: {
//             sourceMap: false,
//             ident: "postcss",
//           },
//           plugins: [
//             // PostCssFlexBugFixes,
//             // autoprefixer({
//             //   browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
//             //   flexbox: "no-2009",
//             // }),
//           ],
//         },
//       },
//     },
//   ],
    modifyOptions({
      webpackObject, // the imported webpack node module
      options: {
        pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
        razzleOptions, // the default options/ options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
      },
    }) {
      // Do some stuff...
      console.log('pluginOptions', pluginOptions, razzleOptions);
      pluginOptions = [
        {
          name: "scss",
          options: {
            postcss: {
              dev: {
                sourceMap: false,
              },
            },
          },
        },
      ];
      return pluginOptions;
    },
  //   plugins: [
  //     {
  //       name: "scss",
  //       options: {
  //         postcss: {
  //           dev: {
  //             sourceMap: false,
  //           },
  //         },
  //       },
  //     },
  //   ],
};
