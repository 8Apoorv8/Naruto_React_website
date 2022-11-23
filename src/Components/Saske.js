import React from "react";
import SaskeBg from "../Assets/SaskeIMG/SaskeBg.jpg";

import { motion as m } from "framer-motion";
const Saske = () => {
  return (
    <m.div
      style={{ backgroundImage: `url(${SaskeBg})` }}
      className="text-white h-screen  bg-no-repeat bg-cover flex w-full flex-col lg:flex-row p-4 md:p-8 bg-gradient-to-b from-black to-black bg-center"
    >
      <div className="left max-w-2xl">
        <div className="text-4xl font-bold w-[20%] border-b-2 border-gray-500 pb-3 mb-4 ">
          Sasuke
        </div>
        <m.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ amount: 0.9, once: false }}
          className="text-gray-300"
        >
          Sasuke belongs to the Uchiha clan, a notorious ninja family, and one
          of the most powerful, allied with Konohagakure . Most of its members
          were massacred by Sasuke's older brother, Itachi Uchiha, before the
          series began, leaving Sasuke one of the few living. Despite becoming
          empathetic toward his teammates Naruto Uzumaki and Sakura Haruno,
          Sasuke's feelings of powerlessness force him to abandon his friends
          and his home in his quest to become stronger, and to find Orochimaru.
          Sasuke appears in several of the series' animated feature films and
          related media, including video games, original video animations , and
          Boruto: Naruto the Movie and its manga sequel, Boruto: Naruto Next
          Generations.
        </m.p>
        <div className="flex justify-around md:justify-start mt-8">

        </div>
      </div>
    </m.div>
  );
};

export default Saske;
