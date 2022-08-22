"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataModule = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _pets = _interopRequireDefault(require("./pets.json"));

var _chats = _interopRequireDefault(require("./chats.json"));

var _news = _interopRequireDefault(require("./news.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataModule = {
  state: function state() {
    return {
      statisticLikesData: [],
      postsData: [],
      allPets: _pets["default"],
      allChats: _chats["default"],
      allNews: _news["default"],
      groupPets: [],
      loadingHome: true,
      mediaMenu: false,
      whiteTheme: localStorage.getItem('theme-black') !== 'true'
    };
  },
  getters: {
    statisticLikes: function statisticLikes(state) {
      return state.statisticLikesData;
    },
    getWhiteTheme: function getWhiteTheme(state) {
      return state.whiteTheme;
    },
    getPostsData: function getPostsData(state) {
      return state.postsData;
    },
    getAllPets: function getAllPets(state) {
      return state.allPets;
    },
    getAllChats: function getAllChats(state) {
      return state.allChats;
    },
    getAllNews: function getAllNews(state) {
      return state.allNews;
    },
    getGroupPets: function getGroupPets(state) {
      return state.groupPets;
    },
    getLoadingHome: function getLoadingHome(state) {
      return state.loadingHome;
    },
    getMediaMenu: function getMediaMenu(state) {
      return state.mediaMenu;
    }
  },
  mutations: {
    setStatisticLikes: function setStatisticLikes(state, data) {
      state.statisticLikesData = data;
    },
    setWhiteTheme: function setWhiteTheme(state, data) {
      state.whiteTheme = data;
    },
    setPostsData: function setPostsData(state, data) {
      state.postsData = data;
    },
    setAllPets: function setAllPets(state, data) {
      state.allPets = data;
    },
    setGroupPets: function setGroupPets(state, data) {
      state.groupPets = data;
    },
    setLoadingHome: function setLoadingHome(state, data) {
      state.loadingHome = data;
    },
    setMediaMenu: function setMediaMenu(state, data) {
      state.mediaMenu = data;
    }
  },
  actions: {
    postsData: function postsData(_ref) {
      var dispatch, commit, api, res;
      return regeneratorRuntime.async(function postsData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch = _ref.dispatch, commit = _ref.commit;
              _context.prev = 1;
              api = 'https://yvladandmir.github.io/dataForPets/posts.json';
              _context.next = 5;
              return regeneratorRuntime.awrap(_axios["default"].get(api));

            case 5:
              res = _context.sent;
              commit('setPostsData', res.data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              alert('Ошибка');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 9]]);
    },
    likesData: function likesData(_ref2) {
      var dispatch, commit, api, res;
      return regeneratorRuntime.async(function likesData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch = _ref2.dispatch, commit = _ref2.commit;
              _context2.prev = 1;
              api = 'https://yvladandmir.github.io/dataForPets/statistic.json';
              _context2.next = 5;
              return regeneratorRuntime.awrap(_axios["default"].get(api));

            case 5:
              res = _context2.sent;
              commit('setStatisticLikes', res.data);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              alert('Ошибка');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 9]]);
    },
    groupPets: function groupPets(_ref3) {
      var commit, api, res;
      return regeneratorRuntime.async(function groupPets$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              _context3.prev = 1;
              api = 'https://yvladandmir.github.io/dataForPets/groups.json';
              _context3.next = 5;
              return regeneratorRuntime.awrap(_axios["default"].get(api));

            case 5:
              res = _context3.sent;
              commit('setGroupPets', res.data);
              commit('setLoadingHome', false);
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              alert('Ошибка');

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 10]]);
    },
    showMediaMenu: function showMediaMenu(_ref4) {
      var state = _ref4.state,
          commit = _ref4.commit;
      commit('setMediaMenu', !state.mediaMenu);
    },
    changeWhiteTheme: function changeWhiteTheme(_ref5) {
      var commit = _ref5.commit,
          state = _ref5.state;
      commit('setWhiteTheme', !state.whiteTheme);
    }
  },
  namespaced: true
};
exports.DataModule = DataModule;