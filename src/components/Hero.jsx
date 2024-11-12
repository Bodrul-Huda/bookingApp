import {
  MdBed,
  MdLocationOn,
  MdCalendarMonth,
  MdNightsStay,
  MdOutlineFamilyRestroom,
} from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full py-6">
      <div className="relative w-full h-[670px] bg-cover bg-center bg-no-repeat">
        <img
          src="/hero.png"
          alt=""
          className="w-full rounded-3xl p-2 h-full opacity-90"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start md:justify-center px-4 md:px-20 space-y-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-3 md:p-0 w-full">
            {/* Text Content */}
            <div className="max-w-2xl md:py-10 text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-semibold text-black/60 mb-4 py-2">
                Where You Get Trapped in the Beauty of the World and
                Unforgettable Happiness!
              </h1>
              <button className="flex items-center justify-center bg-black hover:bg-black/80 py-2 px-4 rounded-full gap-x-2">
                <span className="bg-white rounded-full text-center p-1">
                  <MdBed className="text-black text-xl" />
                </span>
                <span>Booking Now</span>
              </button>
              <p className="text-sm md:text-lg py-4 md:py-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, nobis sequi! Voluptatum error neque nihil molestias
                tempora cumque, quis enim!
              </p>
            </div>

            {/* Form */}
            <div className="w-full md:w-auto md:px-14">
              <form className="bg-slate-200 bg-opacity-80 rounded-3xl p-4 md:p-6 w-full max-w-md text-gray-800">
                <h4 className="flex items-center gap-2 text-lg font-bold">
                  <MdBed className="text-black text-xl" />
                  <span>Find Hotel</span>
                </h4>

                {/* City Input */}
                <div className="py-2">
                  <label className="block text-xs text-gray-700 mb-1">
                    City of Hotel Name
                  </label>
                  <div className="flex items-center gap-1 w-full bg-white rounded-full p-2">
                    <MdLocationOn className="text-2xl text-gray-500" />
                    <input
                      type="text"
                      placeholder="Enter city or hotel name"
                      className="w-full text-xs md:text-sm border-none outline-none placeholder-gray-400 bg-transparent"
                    />
                  </div>
                </div>

                {/* Check In and Duration */}
                <div className="py-2 flex flex-col md:flex-row gap-2">
                  <div className="w-full">
                    <label className="block text-xs text-gray-700 mb-1">
                      Check In
                    </label>
                    <div className="flex items-center gap-1 w-full bg-white rounded-full p-2">
                      <MdCalendarMonth className="text-2xl text-gray-500" />
                      <input
                        type="text"
                        placeholder="Choose date"
                        className="w-full text-xs md:text-sm border-none outline-none placeholder-gray-400 bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block text-xs text-gray-700 mb-1">
                      Duration
                    </label>
                    <div className="flex items-center gap-1 w-full bg-white rounded-full p-2">
                      <MdNightsStay className="text-2xl text-gray-500" />
                      <input
                        type="text"
                        placeholder="Enter duration"
                        className="w-full text-xs md:text-sm border-none outline-none placeholder-gray-400 bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests and Rooms */}
                <div className="py-2">
                  <label className="block text-xs text-gray-700 mb-1">
                    Guests and Rooms
                  </label>
                  <div className="flex items-center gap-1 w-full bg-white rounded-full p-2">
                    <MdOutlineFamilyRestroom className="text-2xl text-gray-500" />
                    <select className="w-full text-xs md:text-sm border-none outline-none placeholder-gray-400 bg-transparent">
                      <option value="option1">1 Adult, 1 Room</option>
                      <option value="option2">2 Adults, 1 Room</option>
                      <option value="option3">2 Adults, 2 Rooms</option>
                      <option value="option4">2 Adults, 1 Child, 1 Room</option>
                      <option value="option5">
                        2 Adults, 1 Child, 2 Rooms
                      </option>
                      <option value="option6">
                        2 Adults, 2 Children, 2 Rooms
                      </option>
                    </select>
                  </div>
                </div>

                <button className="bg-black w-full py-2 px-4 rounded-full text-white hover:bg-black/80 mt-4">
                  Search Hotel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
