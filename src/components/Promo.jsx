import { FaArrowRight } from "react-icons/fa";

const Promo = () => {
  return (
    <>
      <div className="py-10 m-2 p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-y-8 gap-x-4 text-center md:text-left">
          {/* Promo Title */}
          <div className="w-full md:w-2/12">
            <h3 className="text-2xl md:text-3xl font-bold">
              Big <br /> Promo
            </h3>
          </div>

          {/* Promo Main Heading */}
          <div className="w-full md:w-6/12">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Limited Time Offer <br />
              Book Now and Save <br />
              Big!
            </h2>
          </div>

          {/* Promo Description & Button */}
          <div className="w-full md:w-4/12">
            <p className="text-gray-600 py-4 md:py-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              excepturi porro aspernatur minus, odit, eius natus iure ad laborum
              dolorum expedita omnis odio. Pariatur vitae magnam saepe voluptas
              eum quia?
            </p>

            <button className="bg-black py-2 px-6 rounded-full text-white hover:bg-black/80">
              Book Now
            </button>
          </div>
        </div>

        <div className="py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-y-8 gap-x-4 text-center md:text-left">
            <div className="w-full md:w-3/12">
              <div className="relative mx-auto cursor-pointer w-full">
                <img
                  src="/card1.jpg"
                  className="rounded-lg  w-full h-[200px]"
                />
                <div className="absolute w-full left-0 bottom-0 p-3 flex items-center gap-x-32">
                  <p className="text-gray-800 font-semibold text-center">
                    Summer Promo
                  </p>
                  <button className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center -rotate-45 hover:rotate-0 translate-x-0 duration-300 transition-all">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[350px] md:w-4/12 bg-gray-100 rounded-xl overflow-hidden ">
              <div className="m-8 flex justify-between ">
                <h4 className="text-3xl font-semibold">
                  Let&apos;s <br />
                  Explore <br />
                  Together
                </h4>
                <div className="w-14 h-7 rounded-3xl bg-gray-200 flex items-center justify-start p-1">
                  <div className="bg-white w-5 h-5 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className=" p-4 text-gray-500 pt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  repudiandae voluptatum cupiditate reiciendis dignissimos ea
                  odio ullam quos error laudantium consectetur ipsum, ex porro,
                  id praesentium magni totam laborum accusamus
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/12">
              <div className="relative mx-auto cursor-pointer w-full ">
                <img
                  src="/card4.png"
                  className="rounded-lg  w-full h-[350px]"
                />

                <div className="absolute w-full left-0 top-0  p-6">
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem pariatur ab placeat, vel magnam quasi nisi. Doloribus
                    impedit earum magni quisquam tempora.
                  </p>
                </div>
                <div className="absolute w-full left-0 bottom-0 p-3 flex items-center gap-x-32">
                  <p className="text-gray-800 font-semibold text-center">
                    Ramadhan Promo
                  </p>
                  <button className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center -rotate-45 hover:rotate-0 translate-x-0 duration-300 transition-all">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/12">
              <div className="relative mx-auto cursor-pointer w-full">
                <img src="/card3.jpg" className="rounded-lg w-full h-[200px]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center -rotate-45 hover:rotate-0 transition duration-300">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
