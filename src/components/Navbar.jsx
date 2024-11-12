import {
  MdBed,
  MdFlight,
  MdTrain,
  MdDirectionsBus,
  MdEvent,
  MdDirectionsCarFilled,
  MdSearch,
} from "react-icons/md";
import { Link } from "react-router-dom";

const navData = [
  {
    icon: <MdBed />,
    title: "Hotels",
  },
  {
    icon: <MdFlight />,
    title: "Flights",
  },
  {
    icon: <MdTrain />,
    title: "Trains",
  },
  {
    icon: <MdDirectionsBus />,
    title: "Bus & Travel",
  },
  {
    icon: <MdDirectionsCarFilled />,
    title: "Car Rental",
  },
  {
    icon: <MdEvent />,
    title: "Event",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 ">
          <div className="w-full md:w-3/12">
            <div className="flex items-center border bg-gray-100 rounded-full p-2 w-full max-w-md">
              <span className="bg-white rounded-full p-1 text-center">
                <MdSearch className="font-bold text-base" />
              </span>
              <input
                type="text"
                placeholder="Search flights"
                className="ml-2 w-full border-none outline-none placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
          <div className="w-full md:w-9/12">
            <div className="flex flex-col md:flex-row items-center justify-start gap-x-2">
              {navData.map((item, index) => (
                <Link
                  to={"/"}
                  key={index}
                  className="bg-gray-100 py-2 px-4 rounded-full flex items-center justify-center gap-x-1 hover:bg-gray-200 focus:bg-black focus:text-white"
                >
                  <span className="bg-white rounded-full p-1 text-center">
                    <MdTrain className="font-bold text-base text-black" />
                  </span>
                  <span className="text-center font-semibold capitalize">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
