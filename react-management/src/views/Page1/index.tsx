import { useSelector } from "react-redux";
const View = () => {
  //获取仓库数据
  const { num } = useSelector((state) => ({
    num: state.num,
  }));
  return (
    <div className="page">
      这是Page1组件
      {num}
    </div>
  );
};

export default View;
