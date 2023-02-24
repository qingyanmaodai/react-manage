export default {
  state: {
    num: 20,
  },
  //只能放同步的方法
  actions: {
    add1(newState: { num: number }, action: { type: string }) {
      newState.num++;
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
  },
  //优化redux-thunk的异步写法(模仿Vuex的写法)
  asyncActions: {
    asyncAdd1<T>(dispatch: Function, data: T) {
      setTimeout(() => {
        dispatch({ type: "add2", val: data });
      }, 2000);
    },
  },
};
