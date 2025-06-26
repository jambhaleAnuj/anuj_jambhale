import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Update paths to match your project structure
// import project1 from "/pos.png";
// import project2 from "./hand_recognition.png";
// import project3 from "../../../public/ping_pong.png";
// import project4 from "../../../public/pos.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => (
  <article className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 border  border-black bg-light dark:bg-dark dark:border-primary rounded-3xl p-6 shadow-lg relative">
    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <LazyLoadImage
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </a>
    </div>
    <div className="w-full lg:w-1/2 flex flex-col gap-3 text-left">
      <span className="text-primary dark:text-primaryDark text-xl font-semibold">
        {type}
      </span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="text-3xl font-bold dark:text-light">{title}</h2>
      </a>
      <p className="text-dark dark:text-light text-base">{summary}</p>
      <div className="flex items-center gap-4 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl dark:text-primary"
          />
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark text-light dark:bg-light dark:text-primary px-4 py-2 rounded-md text-base font-semibold"
        >
          Visit The Project
        </a>
      </div>
    </div>
  </article>
);

const Project = ({ title, type, img, link, github }) => (
  <article className="w-full border border-dark dark:border-light bg-light dark:bg-dark p-4 rounded-2xl shadow-md flex flex-col">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={img}
        alt={title}
        className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
      />
    </a>
    <div className="mt-4 flex flex-col gap-2">
      <span className="text-primary dark:text-primaryDark text-lg font-medium">
        {type}
      </span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3 className="text-2xl font-bold dark:text-light">{title}</h3>
      </a>
      <div className="flex justify-between items-center mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline dark:text-light text-base font-medium"
        >
          Visit
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => (
  <main className="w-full px-4 py-16 flex flex-col items-center justify-center dark:text-light">
    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
      My Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 w-full max-w-7xl">
      <FeaturedProject
        title="Point of Sales Application"
        summary="A POS system made with Java for desktop which utilizes the Android Barcode Scanner Application instead of the Physical barcode scanner."
        link="https://github.com/jambhaleAnuj/java_point_of_sales_3"
        img="/pos.png"
        github="https://github.com/jambhaleAnuj/java_point_of_sales_3"
      />
      <FeaturedProject
        title="Music control using hand gesture recognition"
        summary="This project demonstrates how to combine computer vision, machine learning, and audio functionalities to create an interactive music control system based on hand gestures."
        link="https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition"
        // type="Featured Project"
        img="/hand_recognition.png"
        github="https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition"
      />
      <FeaturedProject
        title="Ping Pong Game made using Unity game engine"
        summary="A ping pong game made in Unity with Single Player and Multiplayer modes."
        link="https://github.com/jambhaleAnuj/ping-pong"
        type="Featured Project"
        img="/ping_pong.png"
        github="https://github.com/jambhaleAnuj/ping-pong"
      />
    </div>
  </main>
);

export default Projects;
