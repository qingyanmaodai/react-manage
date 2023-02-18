import Comp1 from "@/components/Comp1";
import Comp2 from "@/components/Comp2";
const View = () => {
  return (
    <div className="App">
      顶级组件<Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  );
};

export default View;
