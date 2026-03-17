import React from "react";
import Slider from "react-slick";
import '../slick-theme.css'
import '../slick.css'
import '../home.css'

// Images imported from src/assets
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const images = [pic1, pic2, pic3];

const Carousel = () => {

  const settings = {
    customPaging: function(i) {
      return (
        <img
          src={images[i]}
          alt="thumbnail"
          className="thumbnail-img"
        />
      );
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: false,

    responsive:[
      
      {
        breakpoint: 768,
        settings: {
          arrows:false,
        }
      },
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div className="slide-wrapper">
            <img
              src={img}
              alt="slide"
              className=
                "slide-image"
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;