const Step = ({ active }) => {
  return (
    <div
      className={`w-full h-0.5 transition-colors duration-700 ${
        active ? "bg-[#4E60FF]" : "bg-gray-200"
      }`}
    ></div>
  );
};

const Steps = ({ step, num }) => {
  // active 상태를 조절할 배열 생성
  const activeSteps = Array(step).fill(false);
  for (let i = 0; i < num; i++) {
    activeSteps[i] = true;
  }

  return (
    <div className="w-full flex justify-between">
      {activeSteps.map((active, index) => (
        <Step key={index} active={active} />
      ))}
    </div>
  );
};

export default Steps;

// import { useEffect, useState } from "react";

// const Step = ({ active, step, num }) => {
//   const [isActive, setIsActive] = useState(active);

//   useEffect(() => {
//     setIsActive(active);
//   }, [active]);

//   const percentage = (num / step) * 100;

//   console.log("per", percentage);

//   return (
//     <div
//       className={`w-full h-0.5 ${isActive ? "bg-[#4E60FF]" : "bg-gray-200"}`}
//       style={{
//         width: isActive ? `${percentage}%` : "0",
//         transition: "width 0.5s ease-in-out", // 애니메이션 효과 추가
//       }}
//     ></div>
//   );
// };

// const Steps = ({ step, num }) => {
//   // active 상태를 조절할 배열 생성
//   const activeSteps = Array(step).fill(false);
//   for (let i = 0; i < num; i++) {
//     activeSteps[i] = true;
//   }

//   return (
//     <div className="w-full flex justify-between">
//       {activeSteps.map((active, index) => (
//         <Step key={index} active={active} step={step} num={num} />
//       ))}
//     </div>
//   );
// };

// export default Steps;
