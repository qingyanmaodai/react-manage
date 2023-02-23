import { useDispatch, useSelector } from "react-redux";
const View = () => {
  const dispatch = useDispatch();
  //获取仓库数据
  useSelector((state: RootState) => {
    console.log(state, "state");
  });
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStatusReducer.num,
  }));
  //通过useDispathc修改仓库数据
  const changeNum = () => {
    dispatch({ type: "add1", val: 100 });
  };
  return (
    <div className="page">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
    </div>
  );
};

export default View;
