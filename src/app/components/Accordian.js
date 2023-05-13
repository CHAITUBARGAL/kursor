"use client"
import { useState } from 'react';
import Image from 'next/image'
import InfoImages from '../image/info.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const Accordion = ({ index, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-400">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-2xl mb-4 font-medium text-left bg-black text-white hover:bg-purple-300 focus:outline-none focus:bg-black transition duration-150 ease-in-out"
        onClick={() => onToggle(index)}
      >
        <span>{title}</span>
        <svg
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 002 0v-4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-black text-white text-lg">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const accordions = [
    {
      title: 'Accordion 1Questions e Answers!',
      content: 'Lorem ipsum cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mosint occaecat cupidatat non proident, sunt in culpa quisint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudo officia deserunt mollit anim id est laborudollit anim id est laborudolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Accordion 2 ccordion 1Questions About our s',
      content: 'Secepteur sint occaecat cupidatat non proident, sunt in culsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudo est laborudopa qui officia deserunt mollit anim id est laborud do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion 3 ccordion 1Qswers',
      content: 'Ut enim ad minim cepteur sint occaecat cupidatat non proident, sunsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudoit anim id est laborudot in culpa qui officia deserunt mollit anim id est laboruveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Accordion 4 ccordion 1Questions Ab=swers',
      content: 'Ducepteur sint occaecat cupidatat non proident, sunt in culpa qui offsint occaecat cupidatat non proident, sunt in culpa qui officia deseruntsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudo mollit anim id est laborudoicia deserunt mollit anim id est laboruis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'Accordion 5 ccordion 1Questionrs',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qusint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudosint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudoi officia deserunt mollit anim id est laborum.',
    },
  ];

  const handleToggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1); // close the accordion if it's already open
    } else {
      setOpenIndex(index); // open the clicked accordion and close the others
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-32">
     <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="font-bold text-5xl text-white" data-aos="fade-up">
          Questions About our GenAI? We have Answers!
          </h1>
          </div>
    {/* <h1 className="font-bold text-5xl text-white mb-20" data-aos="fade-up">Questions About our GenAI? We have Answers!</h1> */}
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={openIndex === index}
          onToggle={handleToggleAccordion}
        />
      ))}

      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-28">
          <h1 className="font-bold text-4xl text-white" data-aos="fade-up">
          Using GenAI you can save hours each week creating long-form content.
          </h1>
          </div>


          <div class="flex justify-center space-x-4">
          <button className="flex items-center bg-purple-700 text-white hover:bg-blue-500 mb-7  text-gray-800 font-bold py-2 px-4 rounded ">
      <FontAwesomeIcon icon={faChrome} className="mr-2 text-red-500"/>
      <span>Google Chrome</span>
    </button>
    </div>
          {/* Hero image */}
      <Image src={InfoImages} alt='Info Image' width={1000} height={500} className='border-2 border-yellow-500 mt-4'/>
      
    </div>
    
  );
};

export default AccordionSection;

