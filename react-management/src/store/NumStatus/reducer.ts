import handeleNum from "./index";
//管理数据
let reducer = (
  state = handeleNum.state,
  actions: {
    type: string;
    val: number;
  }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  //根据返回的action看调用存的哪种action
  for (let key in handeleNum.actions) {
    if (key === actions.type) {
      handeleNum.actions[actions.type](newState, actions);
    }
  }
  return newState;
};
export default reducer;
