
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Frontend-Parkinson-Prediction/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/Home"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/Prediction"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/Login"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/Signup"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/About"
  },
  {
    "renderMode": 2,
    "route": "/Frontend-Parkinson-Prediction/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1142, hash: 'ec4666a84b2e387acbb7ce185403b0d624409f0b5362fb6a2a911687ae4b1065', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1655, hash: '7b9a9e3c54e8b3cda657147225249d12ac8d8c48831a35d94cd037be89e01aa5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15641, hash: 'd0a6a529876db1fb0402e5d463b3b9c49ffe45ff68bc03d0581b17f71c338811', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 7528, hash: '2363af8285a44eb5a0fd12d9a9ba3e1c3f16c7f68066725161fa4e0334832b04', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Signup/index.html': {size: 7698, hash: '68da31a8f9391e22ab3d25c5774b115455a75a11ea608535f44362696d9c70e5', text: () => import('./assets-chunks/Signup_index_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 15641, hash: 'd0a6a529876db1fb0402e5d463b3b9c49ffe45ff68bc03d0581b17f71c338811', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 13913, hash: 'a3ff55f25a205aa95db4bbbbeaabfa46b66318ccdeec57873452bfcaf989898e', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8380, hash: '6c797b519f09626b48c1877c33084999be7e92d1f4063c22eef25b977551d402', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'Prediction/index.html': {size: 7353, hash: '40d25cfe5cbe408acbbeade525fc52e4faa3a19d38852fac20d9454eb0638026', text: () => import('./assets-chunks/Prediction_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
