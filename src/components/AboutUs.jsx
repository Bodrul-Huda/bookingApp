const AboutUs = () => {
  return (
    <>
      <div className="px-6 py-12">
        <div className="relative w-full h-full">
          <img
            src="/aboutUs_BG-removebg-preview.png"
            className="w-full opacity-5"
          />
          <div className=" absolute top-0 left-0">
            About <br /> Us
          </div>
          <div className=" absolute top-0 left-1/2 w-[300px]">
            <img src="/aboutUs1.jpg" className="rounded-2xl w-full" />
            <p className="text-gray-500 text-xs py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              cumque dolorum ipsum suscipit dignissimos vero, voluptas
              voluptatum
            </p>
          </div>
          <div className=" absolute bottom-[300px] right-3/4 w-[150px] h-[150px]">
            <img src="/Plane.jpg" className="rounded-lg w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
