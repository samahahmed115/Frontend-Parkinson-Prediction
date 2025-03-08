
export default {
  basePath: '/Frontend-Parkinson-Prediction',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
