import GraphBar from "./GraphBar";

const ProcessGraph = () => {
  return (
    <div className="cursor-pointer w-full mt-[16px] grid gap-[20px]">
      <GraphBar text="금융개념" num={10} />
      <GraphBar text="금융상품" num={60} />
      <GraphBar text="금융기관" num={100} />
      <GraphBar text="금융지표" num={20} />
    </div>
  );
};

export default ProcessGraph;
