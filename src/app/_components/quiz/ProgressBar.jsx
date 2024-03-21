const ProgressBar = ({ num }) => {
  const progress = ((num - 1) / 9) * 90 + 10;

  return (
    <div
      style={{ width: `100%` }}
      className="relative h-[5px] rounded-xl bg-[#2528AE]"
    >
      <div
        style={{ width: `${progress}%` }}
        className="absolute h-[5px] rounded-xl bg-[#ECF3FF]"
      />
    </div>
  );
};

export default ProgressBar;
