import axios from 'axios'
export default {

  namespace: 'book',

  state: {
    list:[],
    loading: false
  },

  effects: {
    *fetch({payload: detail},{call,put}) {
      try {
        const res = yield axios.get(`/${detail}`,{headers:{"Content-Type":""}});
        const data = res.data;
        console.log(data);
        yield put({
          type: 'save',
          payload: data
        }) 
      } catch (error) {
        console.log(error);
      }     
    },
    *savebook({payload: data},{call,put}){
      const res = yield axios.post('/book/input', data);
      if (res.status == 200) {
        yield put({ type: 'isLoading' })
      }
    }
  },

  reducers: {
    save(state, { payload: data }) {
      console.log('hello');
      const list = data;
      console.log(list);
      return { ...state, list };
    },
    isLoading(state){
      const isLoading = !state.isLoading;
      return { ...state,isLoading };
    }
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({pathname})=>{
        if(pathname === '/'){
          dispatch({ type: 'fetch', payload: 'book'});
        }
      })
    },
  },
};
