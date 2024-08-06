import React from 'react'
import githubicon from '../../assets/github-icon.svg'
import linkicon from '../../assets/link-icon.svg'
import CustomButton from './CustomButton';

function ProjectCard({ laptopImg, title, description, demoLink, codeLink, className }) {
    return (
        <div className='rounded-md relative pt-8 pb-16 md:pb-10 mt-14 w-[340px] bg-[#010b139f] border border-[#ffffff25] md:shadow-custom-card'>
            <div className='relative -top-16'>
                <img src={laptopImg} alt="project1" className='rounded-3xl'/>
            </div>
            <div className='text-center mx-5 flex flex-col items-center'>
                <h2 className='text-2xl text-cyan-200 mb-4 font-semibold'>{title}</h2>
                <p className='text-accent text-base min-h-36 mb-8'>{description}</p>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <a href={demoLink} target='_blank'>
                        <CustomButton
                            text="Demo"
                            icon={linkicon}
                            className='w-[18px]'
                        />
                    </a>
                    <a href={codeLink} target='_blank'>
                        <CustomButton
                            text="Code"
                            icon={githubicon}
                            className='w-5'
                        />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
