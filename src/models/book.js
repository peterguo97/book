import axios from 'axios';
export default {

  namespace: 'book',

  state: {
    list:[],
  },

  effects: {
    *fetch() {
      axios.get('/book').then(function (res) {
        console.log(res);
      })
    },
    *savebook( { payload: data } ){
      axios.post('/book/input',{payload: data})
      .then(function (res) {
        console.log(res);
      })
      .catch( function(err){
        console.log(err);
      })
    }
  },

  reducers: {
    getdata(state, {payload: data}) {
      return { ...state, data };
    },
    add(state,{payload: data}){
      state.list.push(data);
      return state;
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({pathname})=>{
        if(pathname === '/'){
          dispatch({ type: 'fetch'});
        }
      })
    },
  },
};
