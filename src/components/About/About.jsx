import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Tooltip } from "@material-tailwind/react";
import SkillCard from "./SkillCard";
import jsIcon from "../../assets/js-logo.svg";
import nextjsIcon from "../../assets/nextjsIcon.svg";
import docker from "../../assets/docker.svg";
import tailwindIcon from "../../assets/tailwind-logo.svg";
import reactIcon from "../../assets/react-logo.svg";
import mongodb from "../../assets/mongodb.svg";
import nodejs from "../../assets/nodejs.svg";
import linux from "../../assets/linux.svg";
import vscodeIcon from "../../assets/vscode-logo.svg";
import githubIcon from "../../assets/github-logo.svg";
import git from "../../assets/git.svg";
import educationIcon from "../../assets/education-icon.svg";
import certificationIcon from "../../assets/certification-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import arrowIcon from "../../assets/arrow.svg";
import CustomButton from "../shared/CustomButton";

function About() {
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center mt-10">
              About Me
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-cyan-100">
            I'm Anish Lohiya, I am a 2024 graduate final year student at VESIT,
            Mumbai.
          </p>
          <br />
          <p className="text-cyan-100">
            I have a solid foundation in software engineering with Full Stack
            Development, Data Structures and Algorithms, and have honed my
            skills through my Internship. I have also worked on a few projects
            that have helped me gain a deeper understanding of the concepts. I
            am a quick learner and I am always eager to learn new technologies.
          </p>
          <br />
        </div>

        <div className="py-8">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center mt-10">
              Areas of Expertise
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-cyan-100 text-center">
            I built projects on diverse skills and technologies. Here are some
          </p>
          <div className="flex flex-wrap justify-center gap-12 my-14">
            <Tooltip
              content="NextJS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={nextjsIcon}
                  className="bg-nextJsColor border-black"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="React JS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={reactIcon}
                  className="bg-reactColor border-reactColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="JavaScript"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={jsIcon}
                  className="bg-jsColor border-jsColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Tailwind CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={tailwindIcon}
                  className="bg-tailwindColor border-tailwindColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Docker"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={docker}
                  className="bg-dockerColor border-dockerColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="MongoDB"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={mongodb}
                  className="bg-mongoColor border-mongoColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="NodeJS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={nodejs}
                  className="bg-nodejsColor border-nodejsColor"
                />
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center mt-10">
              Tools{" "}
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-cyan-100 text-center">
            I use various tools like GitHub, Linux, VS Code, and Git to develop.
          </p>
          <div className="flex flex-wrap justify-center gap-12 my-14">
            <Tooltip
              content="GitHub"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={githubIcon}
                  className="bg-#B3B3B3 border-#B3B3B3"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Linux"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard icon={linux} className="bg-white border-white" />
              </div>
            </Tooltip>
            <Tooltip
              content="VS Code"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard
                  icon={vscodeIcon}
                  className="bg-vscodeColor border-vscodeColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Git"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillCard icon={git} className="bg-red-200 border-red-700" />
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center">
              Education and Certifications
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <div className="flex justify-center md:gap-20 flex-col md:flex-row mt-10">
            <div className="mb-5">
              <h2 className="font-cairo text-2xl font-semibold border-b-4 border-secondary w-max">
                Education:
              </h2>
              <p className="font-medium flex items-start gap-2 my-7 text-cyan-100">
                <img src={educationIcon} alt="degree-icon" className="mt-1" />
                <span>
                  Bachelors of Engineering (Information Technology)
                  <br />{" "}
                  <span className="font-extralight">
                    Vivekanand Education Society's Institute Of Technology
                    (VESIT)
                  </span>
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-cairo text-2xl font-semibold border-b-4 border-secondary w-max">
                Certifications:
              </h2>
              <p className="font-medium flex items-start gap-2 my-7 text-cyan-100">
                <img
                  src={certificationIcon}
                  alt="certification-icon"
                  className="mt-1"
                />
                <span>
                  Introdudction To Data Science in Python <br />{" "}
                  <span className="font-extralight">Coursera, 2021</span>
                </span>
              </p>
              <p className="font-medium flex items-start gap-2 my-7 text-cyan-100">
                <img
                  src={certificationIcon}
                  alt="certification-icon"
                  className="mt-1"
                />
                <span>
                  Deep Learning <br />{" "}
                  <span className="font-extralight">Nvidia, 2023</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-[#ffffff25]" />

        <div className="py-20 flex flex-col items-center">
          <p className="text-cyan-100 italic mb-6">
            Here is my Resume
          </p>
          <img
            src={arrowIcon}
            alt="arrow-icon"
            className="translate-x-10 mb-3"
          />
          <a
            href="https://drive.google.com/file/d/1L744KG53oXh84kxSdJ9y-pRb3ymYFeHc/view?usp=sharing"
            target="_blank"
          >
            <CustomButton
              text="View My Resume"
              icon={downloadIcon}
              className="w-[18px]"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
