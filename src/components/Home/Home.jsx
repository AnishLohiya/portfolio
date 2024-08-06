import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCreative, Pagination } from "swiper/modules";

import profile from "../../assets/profile img.png";
import frontend from "../../assets/frontend1.jpg";
import backend from "../../assets/backend.jpg";
import devops from "../../assets/devops.jpg";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ProjectCard from "../shared/ProjectCard";
import TypeEffect from "./TypeEffect";
import techie from "../../assets/techie.jpg";

function Home({ isLoading }) {
  const [waitingTime, setWaitingTime] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setWaitingTime(true);
      }, 1800);
    }
  }, []);

  return (
    <>
      <section className="home-hero-section pt-32 pb-20 relative">
        <div className="container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 gap-4 px-4">
          <div className="relative">
            <h1 className="text-2xl font-cairo font-semibold tracking-wide">
              Hello
              <span className="emoji-wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I am{" "}
            </h1>
            <span className="text-secondary text-[42px] font-extrabold font-cairo tracking-wide relative sm:whitespace-normal whitespace-nowrap">
              {" "}
              <span className="glow">Anish Lohiya</span>
            </span>
            <h2 className="text-3xl font-extrabold tracking-wide text-accent font-cairo my-7">
              <TypeEffect />
            </h2>
            <p className="hover:text-secondary fill-white w-max hover:fill-secondary mt-14 transition-all duration-300">
              <Link
                to={"/portfolio"}
                className="learn-more-link flex items-center relative font-bold text-2xl"
              >
                <span>Explore my portfolio</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] fill-inherit ms-2"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </Link>
            </p>
          </div>
          <div>
            <img
              src={techie}
              className="h-[300px] md:h-[400px] mt-10 md:mt-0"
              alt="homepage-illustration"
            />
          </div>
        </div>
      </section>

      <section className="container px-4 mx-auto">
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-center text-4xl mt-10">
              About Me
            </h1>
            <hr className="border-b-4 border-secondary w-36 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div>
              <p className="text-cyan-100">
                I have been immersed in web development for the past two years,
                honing my skills and gaining practical experience. My technical
                expertise includes JavaScript, Next.js, and the React.js library
                for front-end development, while for backend operations, I am
                proficient in Node.js and Express.js.
              </p>
              <br />
              <p className="text-cyan-100">
                I have worked extensively with Firebase and MongoDB for database
                management and have a strong command of working with APIs and
                JSON files.In addition to my core web development skills, I have
                a solid grasp of version control systems like Git and GitHub,
                which I utilize to maintain code integrity and facilitate
                collaboration.
              </p>
              <br />
              <p className="text-cyan-100">
                I also have foundational knowledge of Docker and Kubernetes,
                enabling me to work with Docker containers for web
                applications.I am passionate about gaining industry experience
                and eager to contribute to real-time projects and websites. My
                skill set aligns perfectly with the requirements outlined in the
                job description, and I am confident in my ability to deliver
                high-quality work throughout the internship. If given the
                opportunity, I promise to bring dedication, efficiency, and
                innovation to your team.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <img src={profile} alt="profile-img" className="h-52 z-10" />
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl mt-10 text-center">
              Area of Interest
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>

          <div className="md:hidden mt-14">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              pagination={true}
              grabCursor={true}
              style={{ overflow: "hidden" }}
            >
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image={frontend}
                  title="Front End Development"
                  description="Creating web interfaces that are visually appealing and user-friendly, ensuring a seamless and engaging user experience."
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image={backend}
                  title="Backend Development"
                  description="Developing backend using Node.js and Express.js, ensuring your website is dynamic and responsive."
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image={backend}
                  title="Devops"
                  description="Deploying and managing web applications using Docker and Kubernetes, ensuring your website is robust and scalable."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* For larger screens */}
          <div className="hidden md:flex justify-center items-center flex-row gap-14 flex-wrap mt-14">
            <ServiceCard
              image={frontend}
              title="Front End Development"
              description="Crafting visually appealing and user-friendly designs that provide a seamless and engaging user experience."
            />
            <ServiceCard
              image={backend}
              title="Backend Development"
              description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Bootstrap, and Tailwind CSS."
            />
            <ServiceCard
              image={devops}
              title="Devops"
              description="Developing robust and scalable backend systems using Django, ensuring your website performs efficiently and securely."
            />
          </div>
        </div>

        {/* Highlighted creations div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl mt-10 text-center">
              Project Highlights
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-cyan-100 mb-12">
            Top Projects include qualifying in the Top 100 of the{" "}
            <b className="text-cyan-300">Flipkart Grid Project</b> out of over
            400,000 participants and creating An Event management website.
          </p>

          {/* Project card for smaller screens */}
          <div className="md:hidden my-10">
            <Swiper
              modules={[EffectCreative, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={true}
              grabCursor={true}
            >
              <SwiperSlide
                className="justify-center items-center"
                style={{ display: "flex" }}
              >
                <ProjectCard
                  laptopImg={project1}
                  title="Fashion Outfit Generator"
                  description="The Fashion Outfit Generator is an innovative web application using modern technologies like React.js, Tailwind CSS, Node.js, Express.js, and Firebase to offer users seamless outfit creation with ChatGPT and realistic vision technology for visualizing style choices."
                  demoLink="https://fashion-outfit-generator.vercel.app/"
                  codeLink="https://github.com/AnishLohiya/Fashion-Outfit-Generator"
                  className="hidden"
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center items-center"
                style={{ display: "flex" }}
              >
                <ProjectCard
                  laptopImg={project2}
                  title="Evently"
                  description="Evently is a versatile and user-friendly event management platform designed to empower users in creating, updating, and managing their own events seamlessly. This project integrates a payment feature, allowing users to facilitate ticket purchases for other events within the platform."
                  demoLink="https://evently-nextjs-site.vercel.app/"
                  codeLink="https://github.com/AnishLohiya/Evently"
                  className="hidden"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Project card for larger screens */}
          <div className="hidden md:flex md:flex-wrap justify-center items-center gap-20">
            <ProjectCard
              laptopImg={project1}
              title="Fashion Outfit Generator"
              description="The Fashion Outfit Generator is an innovative web application using modern technologies like React.js, Tailwind CSS, Node.js, Express.js, and Firebase to offer users seamless outfit creation with ChatGPT and realistic vision technology for visualizing style choices."
              demoLink="https://fashion-outfit-generator.vercel.app/"
              codeLink="https://github.com/AnishLohiya/Fashion-Outfit-Generator"
            />
            <ProjectCard
              laptopImg={project2}
              title="Evently"
              description="Evently is a versatile and user-friendly event management platform designed to empower users in creating, updating, and managing their own events seamlessly. This project integrates a payment feature, allowing users to facilitate ticket purchases for other events within the platform."
              demoLink="https://evently-nextjs-site.vercel.app/"
              codeLink="https://github.com/AnishLohiya/Evently"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
