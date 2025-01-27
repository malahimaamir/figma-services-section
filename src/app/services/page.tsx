import { RxHamburgerMenu } from "react-icons/rx";

export default function Services() {
  return (
    <div className="w-[90%] mx-auto sm:w-full">
      
      <div className="bg-slate-100 w-full h-16 mt-1 border-b border-gray-300 flex items-center justify-between px-4">
    
        <div className="flex items-center">
          <div className="hidden sm:block font-semibold text-2xl ml-2">Logotype</div>
          <div className="sm:hidden">
            <RxHamburgerMenu size="30px" />
          </div>
        </div>

   
        <div className="flex justify-end">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex justify-center items-center font-extrabold text-white text-sm sm:text-2xl">
            S
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div className="bg-slate-100 rounded-md p-4 hover:shadow-lg">
          <div className="text-center font-serif font-semibold text-xl">Profile</div>
          <p className="text-left font-light text-sm mt-4">
            You can easily update or customize your profile anytime in the settings
            section.
          </p>
        </div>


        <div className="bg-slate-100 rounded-md p-6 hover:shadow-lg">
          <div className="flex justify-center">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-slate-200 rounded-full flex justify-center items-center font-extrabold text-sm sm:text-2xl">
              S
            </div>
          </div>
          <div className="text-center font-semibold text-2xl mt-4">Swan</div>
          <div className="flex justify-center mt-4">
            <button className="px-5 py-2 text-sm sm:text-base bg-slate-200 rounded-md">
              😊 Child Care ✏
            </button>
          </div>
        </div>


        <div className="bg-slate-100 rounded-md p-4 hover:shadow-lg col-span-1 sm:col-span-2">
          <div className="text-center font-serif font-semibold text-lg sm:text-xl">
            It's time to create your profile
          </div>
          <p className="text-center font-light text-sm sm:text-base mt-4">
            Your Carelybay profile is an important part. Create yours to help other
            moms and families get to know you.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-5 py-2 text-sm sm:text-base bg-orange-500 rounded-full">
              Create Profile
            </button>
            <button className="px-5 py-2 text-sm sm:text-base bg-slate-200 rounded-full">
              Complete Profile Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
