import React from "react";
import Eyes from "../Assets/homeEyes.png";
import narutoBG from "../Assets/narutoBG.png";
import narutoHome from "../Assets/NarutoHome.png";
import { motion as m } from "framer-motion";
const Home = () => {
  return (
    <m.div
      transition={{ staggerChildren: 0.5 }}
      style={{ backgroundImage: `url(${narutoBG})` }}
      className="bg-cover bg-no-repeat bg-center text-white flex justify-between"
    >
      <div className="w-full flex flex-col justify-center items-start h-screen md:p-8 p-4 max-w-screen-lg lg:w-[40vw]">
        <m.img
          whileInView={{ rotate: [0, 360, 0], scale: 1, opacity: 2 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 2 }}
          initial={{ scale: 1.5, opacity: 0 }}
          src={Eyes}
          alt="HomeEyes"
          className=" h-[10vh] my-4"
        />
        <h4 className="font-semibold">Naruto the best Anime written Ever.</h4>
        <h1 className=" text-3xl md:text-5xl font-bold my-4">
          Watch it with Eyes wide Open
        </h1>
        <h5 className="text-gray-400  my-4 ">
          Its a series of Ninja World filled with action , love , drama, and
          some mind boglling story.
          <div>
            Above all it's a Anime worth the while. New series is coming next
            year. so we hope to see you then too.
          </div>
        </h5>
        <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to bg-yellow-300 rounded-md font-bold text-white">
          Watch Now
        </button>
      </div>
      <m.img
        whileInView={{ opacity: 2 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        src={narutoHome}
        alt="narutoHome"
        className="h-[80vh] mt-4 mr-[10vw] hidden md:block"
      />
    </m.div>
  );
};

export default Home;
