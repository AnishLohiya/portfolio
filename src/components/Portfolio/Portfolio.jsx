import React, { useState } from 'react'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'
import ProjectCard from '../shared/ProjectCard';

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      laptopImg: project1,
      title:"Fashion Outfit Generator",
      description: "The Fashion Outfit Generator is an innovative web application using modern technologies like React.js, Tailwind CSS, Node.js, Express.js, and Firebase to offer users seamless outfit creation with ChatGPT and realistic vision technology for visualizing style choices.",
      demoLink: "https://fashion-outfit-generator.vercel.app/",
      codeLink: "https://github.com/AnishLohiya/Fashion-Outfit-Generator"
    },
    {
      laptopImg:project2,
      title:"Evently",
      description:"Evently is a versatile and user-friendly event management platform designed to empower users in creating, updating, and managing their own events seamlessly. This project integrates a payment feature, allowing users to facilitate ticket purchases for other events within the platform.",
      demoLink:"https://evently-nextjs-site.vercel.app/",
      codeLink:"https://github.com/AnishLohiya/Evently"
    },
    {
      laptopImg: project3,
      title: "Vidword",
      description: "An interactive platform transforming YouTube video summarization leverages AI-driven transcriptions, summaries,and Q&A. It automatically transcribes video audio into text, generates concise summaries, and facilitates interactive Q&A sessions based on the video's content.",
      demoLink: "https://github.com/AnishLohiya/VidWord",
      codeLink: "https://github.com/AnishLohiya/VidWord"
    },
    {
      laptopImg: project4,
      title: "MERN Ecommerce Store",
      description: "Build a feature-rich ecommerce website where users can browse products, add items to the cart, proceed to checkout, and track orders. Admins have access to a dashboard for managing users, orders, and product",
      demoLink: "https://fullstack-ecommerce-store.vercel.app/",
      codeLink: "https://github.com/AnishLohiya/mern-ecommerce"
    },
    {
      laptopImg: project5,
      title: "Imagnify",
      description: "A Software-as-a-Service app with AI features for image generation and payments & credits system built using Next.js 14, Clerk, MongoDB, Cloudinary AI, and Stripe.",
      demoLink: "https://imaginify-edits.vercel.app/",
      codeLink: "https://github.com/AnishLohiya/imaginify"
    },
    
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>My Recent Works</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent text-center'>Check out my recent projects.</p>
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                laptopImg={project.laptopImg}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className=' text-white load-link flex items-center font-semibold'
            >
              <span>{showAll ? 'Show Less' : 'Load More'}</span><svg xmlns="http://www.w3.org/2000/svg" className='h-[16px] fill-white ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
