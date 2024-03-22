const ToggleButton = ({ status }) => {
  return (
    <div class="mr-[3px] flex items-center">
      <label class="relative cursor-pointer">
        <input type="checkbox" class="sr-only peer" checked={status} />
        <div class="shadow-inner w-[50px] h-[20px] flex items-center bg-[#C2D4FF] rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[-2px] peer-checked:after:border-[#4E60FF] after:bg-[#4E60FF] after:border after:border-[#4E60FF]  after:rounded-full after:h-[28px] after:w-[28px] after:transition-all peer-checked:bg-[#C2D4FF]"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
