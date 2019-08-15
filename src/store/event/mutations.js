const SET_TAG = "SET_TAG";
const SET_DATA = "SET_DATA";
const SET_NAVBAR = "SET_NAVBAR";
const SET_LASTID = "SET_LASTID";
const SET_SDATA = "SET_SDATA";
const SET_HDATA = "SET_HDATA";
const SET_SETTINGS = "SET_SETTINGS";
const SET_CURRENTDATA = "SET_CURRENTDATA";
const SET_DEEPER = "SET_DEEPER";

const mutations = {
  [SET_TAG](state, payload) {
    state.tag = payload;
  },
  [SET_DATA](state, payload) {
    state.data = payload;
  },
  [SET_CURRENTDATA](state, payload) {
    state.currentData = payload;
  },
  [SET_NAVBAR](state, payload) {
    state.navbar = payload;
  },
  [SET_LASTID](state, payload) {
    state.lastId = payload;
  },
  [SET_SDATA](state, payload) {
    state.sData = payload;
  },
  [SET_HDATA](state, payload) {
    state.hData.push(payload);
  },
  [SET_SETTINGS](state, payload) {
    state.hData.list = payload;
  },
  [SET_DEEPER](state, payload) {
    state.deeper = payload;
  }
};

export default mutations;
