"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _IndexPage = _interopRequireDefault(require("@/views/IndexPage/IndexPage"));

var _NavBar = _interopRequireDefault(require("@/components/NavBar/NavBar"));

var _AuthPage = _interopRequireDefault(require("@/views/AuthPage/AuthPage"));

var _RegisterPage = _interopRequireDefault(require("@/views/RegisterPage/RegisterPage"));

var _HomePage = _interopRequireDefault(require("@/views/HomePage/HomePage"));

var _NotFound = _interopRequireDefault(require("@/views/NotFound/NotFound"));

var _PetsPage = _interopRequireDefault(require("@/views/PetsPage/PetsPage"));

var _DetailPage = _interopRequireDefault(require("@/views/DetailPage/DetailPage"));

var _ProfilePage = _interopRequireDefault(require("@/views/ProfilePage/ProfilePage"));

var _ChatPage = _interopRequireDefault(require("@/views/ChatPage/ChatPage"));

var _NewsPage = _interopRequireDefault(require("@/views/NewsPage/NewsPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _IndexPage["default"]
}, {
  path: '/login',
  component: _AuthPage["default"]
}, {
  path: '/register',
  component: _RegisterPage["default"]
}, {
  path: '/home',
  component: _HomePage["default"],
  meta: {
    layout: 'HomeLayout',
    title: 'Home'
  }
}, {
  path: '/pets',
  component: _PetsPage["default"],
  meta: {
    layout: 'HomeLayout',
    title: 'Питомцы'
  },
  children: [{
    path: ':category',
    component: _DetailPage["default"],
    name: 'DetailPet',
    props: true,
    meta: {
      title: 'Питомцы'
    }
  }]
}, {
  path: '/profile',
  component: _ProfilePage["default"],
  meta: {
    layout: 'HomeLayout',
    title: 'Профиль'
  }
}, {
  path: '/chat',
  component: _ChatPage["default"],
  meta: {
    layout: 'HomeLayout',
    title: 'Чат'
  }
}, {
  path: '/blog',
  component: _NewsPage["default"],
  meta: {
    layout: 'HomeLayout',
    title: 'Новости'
  }
}, {
  path: '/:pathMatch(.*)*',
  component: _NotFound["default"],
  meta: {
    layout: 'HomeLayout'
  }
}, {
  path: '/ui-kit',
  component: _NavBar["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;