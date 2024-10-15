import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

interface CardProps {
  name: string;
  job: string;
  experience: string;
  skills: string[];
  salary: string;
  imgSrc: string;
}

const Card: React.FC<{ data: CardProps[] }> = ({ data }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Salary Tooltip */}
      <div className="salary-tooltip absolute text-white font-bold top-0 transform -translate-y-full bg-green-500 px-4 py-2 rounded-full shadow-lg">
        {data[0].salary} {/* Assuming the salary is the same for all cards */}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        effect={"cards"}  // Specify the 'cards' effect
        grabCursor={true}
        className="mySwiper"
        spaceBetween={5}
        slidesPerView={1}
        cardsEffect={{
          slideShadows: true,  // Optional, can customize
        }}
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              {/* Profile Image */}
              <Image
                src={card.imgSrc}
                alt={card.name}
                width={100}
                height={100}
                className="profile-img rounded-full"
              />

              {/* Name */}
              <div className="name font-bold text-lg mt-4">{card.name}</div>

              {/* Job and Experience */}
              <div className="position text-blue-500 mt-2">{card.job}</div>
              <div className="experience text-gray-500">{card.experience}</div>

              {/* Skills */}
              <div className="skills mt-4 flex flex-wrap justify-center">
                {card.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full m-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
