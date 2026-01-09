
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/expense-tracker-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/expense-tracker-ui/login",
    "route": "/expense-tracker-ui"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/login"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/register"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/home"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/add"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/about"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/add-remove"
  },
  {
    "renderMode": 2,
    "route": "/expense-tracker-ui/navbar"
  },
  {
    "renderMode": 2,
    "redirectTo": "/expense-tracker-ui/login",
    "route": "/expense-tracker-ui/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28115, hash: '4f49e914c420226c8134fa78a07e59d63c5f6c0feef96b8aed9a74f93e40f92e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17213, hash: '1c59ff57e3db25983d32e92a78c1a1f742a364db15c74b6ebc677ab3bc09302e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 39112, hash: '92a77365a77ddd7f1e36942c9aba477047164b8b35f8c50ccd5098dfd7348a72', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 37422, hash: '33db5ce4b166ec7dd6870a3fc1791a9b4b8fe723c571235ed86496dbcf65db37', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 38157, hash: 'cbb9a7b12f9a7f57583c45bf9df9a68bf23bf0f25bb4b8803bd376ceb43adb9c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 36378, hash: 'd40c2cf153f41ce0e3957a86db64a9eb9e328a996c976c9688fdcc650bbb4baf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 43734, hash: '12fa02074d5234bb1726270b60516d21a2a44422e007057b322efdf758e7d0ba', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 36679, hash: '1e04e57526fc1137fb3b87b5045f04dd40e3ac6cb99a1e19aff81fabbf7c1d82', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'add-remove/index.html': {size: 37523, hash: 'cbfa13cf4fca028f4ec2a65bee2c4fe1197c9fae3fc48fff283dbe1ac862897d', text: () => import('./assets-chunks/add-remove_index_html.mjs').then(m => m.default)},
    'styles-D6D6I7VL.css': {size: 239320, hash: 'Y5KJaQnzCm8', text: () => import('./assets-chunks/styles-D6D6I7VL_css.mjs').then(m => m.default)}
  },
};
