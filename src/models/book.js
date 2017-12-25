
export default {

  namespace: 'book',

  state: {
    list:[],
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    getdata(state, action) {
      return { ...state, ...action.payload };
    },
    add(state,{payload: data}){
      state.list.push(data);
      return state;
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
};
