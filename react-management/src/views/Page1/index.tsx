import NumStatus from "@/store/NumStatus";
import { useDispatch, useSelector } from "react-redux";
const View = () => {
  const dispatch = useDispatch();
  //获取仓库数据
  // useSelector((state: RootState) => {
  //   console.log(state, "state");
  // });
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStatusReducer.num,
  }));
  //通过useDispatch修改仓库数据
  const changeNum = () => {
    dispatch({ type: "add2", val: 100 }); //触发reducer的执行
  };
  const changeNum2 = () => {
    dispatch((dispatch: Function) =>
      NumStatus.asyncActions.asyncAdd1(dispatch, 100)
    ); //异步以及传参的封装
  };
  return (
    <div className="page">
      <p>这是Page1组件</p>
      <p>{num}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>
    </div>
  );
};

export default View;


