export default function Header() {
    return(
        <div class="flex flex-col content-center items-center w-full">

          <div class="flex flex-col px-4 items-center w-full pt-2 pb-2.5 bg-[#4e60ff]">
          {/* <div class="flex flex-col px-4 items-center w-full h-16 bg-[#4e60ff]"> */}
            <div class="flex justify-between w-full">
              <div>
                <p class="text-white text-2xl font-bold">돈버니</p>
              </div>

              <div>
                <span>icon 1</span>
                <span>icon 2</span>
              </div>
            </div>


            <div class="group w-full mt-[5px]">
              <div class="relative flex items-center">
                <input
                    type="text"
                    class="peer relative h-10 w-full text-sm text-[#C9CDD2] rounded-md bg-gray-50 pl-4 pr-10 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out" 
                />
                <span class="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out">icon</span>
              </div>
            </div>

          </div>

        </div>
    );
}