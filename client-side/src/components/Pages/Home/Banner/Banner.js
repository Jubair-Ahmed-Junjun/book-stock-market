import React from "react";
import "./Banner.css";
import banner from "../../../../images/banner.png"
const Banner = () => {
  return (
    <section className="my-2">
      <img
        src={banner}
        alt=""
        className="banner-size rounded-3"
      />
    </section>
  );
};

export default Banner;
