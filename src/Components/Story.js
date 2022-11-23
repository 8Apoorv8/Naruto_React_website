import React from "react";
import uchiha from "../Assets/uchiha.jpg";
import Nchibi from "../Assets/narutochibi.png";
import { motion as m } from "framer-motion";
const Story = () => {
  const ChibiImagAndData = [
    {
      id: 0,
      pic: Nchibi,
      profile:
        " Naruto is an orphan who has a dangerous fox-like entity known as Kurama the Nine-Tailed Fox sealed within his body by his father.his possession led to Naruto being ridiculed frequently by the rest of Konoha; being associated with him was considered taboo. As a youth, Naruto makes jokes and plays pranks to attract attention. Desiring what he lacked in his early life, Naruto dreams of becoming a Hokage himself with the hope that it will bring him the villagers' recognition and respect. In an attempt to become a ninja, Naruto is horrified to learn of his Jinchuriki nature, but finds acceptance from his teacher Iruka Umino, whom he views as a father. After learning the powerful Multi-Shadow Clone Jutsu, an ability to create physical copies of the user, Naruto becomes a ninja. He joins a ninja group under the leadership of Kakashi Hatake where he made friends with Sasuke Uchiha and Sakura Haruno. ",
    },
  ];
  return (
    <m.div
      transition={{ staggerChildren: 0.5 }}
      className="flex bg-center flex-col justify-center h-screen item-start bg-cover bg-no-repeat text-white md:p-8 p-4 overflow-hidden"
      style={{ backgroundImage: `url(${uchiha})` }}
    >
      <div className="text-4xl font-bold border-b-2 border-gray-400 pb-3 mb-4 w-[8%]">
        Story
      </div>
      <div>
        <div className="first flex items-center flex-col ">
          {ChibiImagAndData.map(({ id, pic, profile }) => (
            <div key={id} className=" ">

              <m.div
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.3 }}
                initial={{ y: 200, opacity: 0 }}
                className="p-8 text-gray-200 flex items-center md:items-start md:flex-col  "
              >
                <img src={pic} alt="" className="h-[30vh] hidden md:block " />
                {profile}
              </m.div>
            </div>
          ))}
        </div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
    </m.div>
  );
};

export default Story;
