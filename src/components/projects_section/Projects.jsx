import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "astro/components/Image.astro";
// Temporarily using regular img for build optimization
// import pkg from "react-lazy-load-image-component";
// const { LazyLoadImage } = pkg;
// import "react-lazy-load-image-component/src/effects/blur.css";
// Update paths to match your project structure
// import project1 from "/pos.png";
// import project2 from "./hand_recognition.png";
// import project3 from "../../../public/ping_pong.png";
// import project4 from "../../../public/pos.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => (
  <article className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 border  border-black bg-light dark:bg-dark dark:border-primary rounded-3xl p-6 shadow-lg relative">
    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </a>
    </div>
    <div className="w-full lg:w-1/2 flex flex-col gap-3 text-left">
      <span className="text-primary dark:text-primaryDark text-xl font-semibold">
        {type}
      </span>
      <a href={link} target="_blank" rel="noopener noreferrer" alt={title}>
        <h2 className="text-3xl font-bold dark:text-light">{title}</h2>
      </a>
      <p className="text-dark dark:text-light text-base">{summary}</p>
      <div className="flex items-center gap-4 mt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          alt={title}
          aria-label="View on GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl dark:text-primary"
          />
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          alt={title}
          className="bg-dark text-light dark:bg-light dark:text-primary px-4 py-2 rounded-md text-base font-semibold"
        >
          Visit The Project
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
        title=" Excel AI Chat "
        summary="A Streamlit web app that allows you to upload an Excel file and ask questions about your data using natural language. The app leverages Google Generative AI (Gemma) via LangChain to answer queries, including those related to comments or feedback columns in your dataset."
        link="https://excelchatapp.streamlit.app/"
        type={"Featured Project"}
        img="https://github.com/jambhaleAnuj/Excel_AI_Chat/raw/main/assets/demo2.png"
        github="https://github.com/jambhaleAnuj/Excel_AI_Chat"
      />

      <FeaturedProject
        title="Point of Sales Application"
        summary="A POS system made with Java for desktop which utilizes the Android Barcode Scanner Application instead of the Physical barcode scanner."
        link="https://github.com/jambhaleAnuj/java_point_of_sales_3"
        img="/pos.avif"
        github="https://github.com/jambhaleAnuj/java_point_of_sales_3"
      />

      <FeaturedProject
        title="Music control using hand gesture recognition"
        summary="Control your music player using hand gestures in real time. This project combines MediaPipe hand landmarks with a TensorFlow/Keras gesture classifier and OpenCV to recognize gestures like thumbs up/down, fist, and palm to play, pause, stop, or resume music."
        link="https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition"
        // type="Featured Project"
        img="https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition/raw/main/docs/demo.gif"
        github="https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition"
      />
      <FeaturedProject
        title="Ping Pong Game made using Unity game engine"
        summary="A ping pong game made in Unity with Single Player and Multiplayer modes."
        link="https://github.com/jambhaleAnuj/ping-pong"
        img="/ping_pong.avif"
        github="https://github.com/jambhaleAnuj/ping-pong"
      />

      <FeaturedProject
        title=" Movie Review Sentiment Analysis Platform "
        summary="Educational & developer-friendly Flask + NLP app that aggregates movie reviews from Letterboxd, Rotten Tomatoes, OMDb, and YouTube trailer comments to perform sentiment analysis, keyword extraction, genre visualization, and interactive Plotly dashboards."
        link="https://github.com/jambhaleAnuj/senti_analysis_1"
        img="https://github.com/jambhaleAnuj/senti_analysis_1/raw/main/screenshots/ResultScreen1.png"
        github="https://github.com/jambhaleAnuj/senti_analysis_1.git"
      />

      <FeaturedProject
        title=" Adaptive Traffic Signal Management (ATSM) — Vehicle Counting with YOLOv8 + SORT "
        summary="A lightweight research prototype that counts vehicles in a region-of-interest and adapts a simulated red-light timer based on real-time traffic density. Built with Ultralytics YOLOv8 for detection and SORT for object tracking."
        link="https://github.com/jambhaleAnuj/Traffic_signal_counter_using_car_count_python"
        img="https://github.com/jambhaleAnuj/Traffic_signal_counter_using_car_count_python/raw/main/Media/demo.gif"
        github="https://github.com/jambhaleAnuj/Traffic_signal_counter_using_car_count_python"
      />

      <FeaturedProject
        title=" CipherCraft Crypto Web Application "
        summary="CipherCraft Crypto Web App is a web application built with React.js that provides users with tools for encryption and decryption using various algorithms, including Caesar cipher and DES cipher. Additionally, the app supports hashing methods such as HMAC and MD5, making it a versatile tool for secure data handling."
        link="https://crypto-webapp-hazel.vercel.app/"
        img="https://github.com/jambhaleAnuj/crypto_webapp/raw/main/screenshots/screenshot1.png"
        github="https://github.com/jambhaleAnuj/crypto_webapp"
      />
    </div>
  </main>
);

export default Projects;
