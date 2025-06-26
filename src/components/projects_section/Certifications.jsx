import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FeaturedProject = ({ type, title, summary, img, link, github }) => (
  <article className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 border  border-black bg-light dark:bg-dark  dark:border-primary rounded-3xl p-6 shadow-lg relative">
    <div className="w-full lg:w-1/2 flex flex-col gap-3 text-left">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="text-3xl font-bold dark:text-light">{title}</h2>
      </a>
      <p className="text-dark dark:text-light text-base">{summary}</p>
      <div className="flex items-center gap-4 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faCertificate}
            className="text-2xl dark:text-primary"
          />
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark text-light dark:bg-light dark:text-primary px-4 py-2 rounded-md text-base font-semibold"
        >
          Verify Certification
        </a>
      </div>
    </div>
    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <LazyLoadImage
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </a>
    </div>
  </article>
);

const Certifications = () => (
  <main className="w-full px-4 py-16 flex flex-col items-center justify-center dark:text-light">
    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 tracking-wide">
      My Certifications
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 w-full max-w-7xl">
      <FeaturedProject
        title="GitHub Foundations Certification"
        // summary="Comprehensive dashboard for tracking sales performance, trends, and KPIs for smarter business decisions."
        link="https://www.credly.com/badges/634c991e-7906-4ae5-942c-334733f5a187/public_url"
        type="Featured Project"
        img="/GithubFoundationCertification.png"
        github="https://www.credly.com/badges/634c991e-7906-4ae5-942c-334733f5a187/public_url"
      />
      <FeaturedProject
        title="Certifications Foundational C# with Microsoft Certification Exam"
        // summary="Comprehensive dashboard for tracking sales performance, trends, and KPIs for smarter business decisions."
        link="https://www.freecodecamp.org/certification/Anuj-Jambhale/foundational-c-sharp-with-microsoft"
        type="Featured Project"
        img="/FreeCodeCampCSharp.png"
        github="https://www.freecodecamp.org/certification/Anuj-Jambhale/foundational-c-sharp-with-microsoft"
      />
    </div>
  </main>
);

export default Certifications;
