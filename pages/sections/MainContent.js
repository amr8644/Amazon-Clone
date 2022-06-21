import React from "react";
import Slider from "react-slick";
import {
  faLaptop,
  faCouch,
  faMobileAndroid,
  faCamera,
  faShirt,
  faBicycle,
  faHeadphonesSimple,
  faGamepad,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import CategoriesIcon from "../componets/CategoriesIcon";
import Card from "../componets/Card";

const MainContent = () => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="lg:main top-[70px] relative font-PTSans ">
      {/* Banner */}
      <article className="w-full flex items-center justify-center h-auto md:h-[270px]">
        <div className=" bg-orange2 rounded-2xl ml-4 md:w-[95%] h-[95%] flex items-start justify-center flex-col sm:px-8 py-2 mt-4">
          <h2 className="text-white text-6xl sm:my-5 md:my-3 font-semibold">
            Free Delivery!
          </h2>
          <p className="text-white text-base sm:my-5 md:my-2 font-normal">
            Dont miss it out! Only today get free Next Day <br /> delivery on
            all your orders.
          </p>
          <button className="bg-white font-semibold text-lg text-orange2 rounded-2xl sm:my-5 md:my-2 cursor-pointer px-4 py-2 shadow-xl">
            Browse products
          </button>
        </div>
      </article>
      {/* Categories */}
      <article className="w-full mt-10 flex items-center justify-center flex-col">
        <div className=" w-[95%]">
          <h2 className="text-2xl font-[600]  text-otherBlue ">
            Popular Categories
          </h2>
        </div>
        {/* <div className="w-[95%] mx-0 my-auto bg-orange flex items-center justify-between"> */}
        <Slider {...settings} className="w-[95%] flex flex-col  mt-5">
          <CategoriesIcon icon={faLaptop} />
          <CategoriesIcon icon={faCouch} />
          <CategoriesIcon icon={faCamera} />
          <CategoriesIcon icon={faShirt} />
          <CategoriesIcon icon={faMobileAndroid} />
          <CategoriesIcon icon={faBicycle} />
          <CategoriesIcon icon={faHeadphonesSimple} />
          <CategoriesIcon icon={faBook} />
          <CategoriesIcon icon={faGamepad} />
        </Slider>
        {/* </div> */}
      </article>

      <article className="w-full mt-10 flex items-center justify-center flex-col ">
        <div className=" w-[95%]">
          <h2 className="text-2xl font-[600] text-otherBlue mt-5">Hot Deals</h2>
        </div>
        <div className=" w-[95%]">
          <Card />
        </div>
      </article>
    </section>
  );
};

export default MainContent;