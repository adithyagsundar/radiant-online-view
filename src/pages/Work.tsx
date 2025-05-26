import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, Link as LinkIcon, Award } from 'lucide-react';

const Work = () => {
  const workSamples = [
    {
      title: "Entrepreneurship Project - SELM",
      description: "Developed a comprehensive business plan for SELM, an explainable AI workflow optimization suite, based on the DECA Innovation Plan Event guidelines.",
      type: "Entrepreneurship / Innovation",
      date: "November 2024",
      skills: ["Idea Generation", "Market Opportunity Analysis", "Business Planning", "Unique Value Proposition", "AI/Technology Concepts", "Technical Writing"],
      imageSrc: "/assets/selm-logo.png",
      summaryActivity: "SELM is an explainable artifical intelligence (AI) workflow optimization suite. This project involved developing a detailed business plan to introduce SELM to the market, addressing existing challenges in workflow management and the need for transparency in AI processes.",
      executionActivity: "To complete this project, we created a comprehensive business plan for SELM using DECA Innovation Plan event guidelines. This involved product ideation, UVP selection, market research, product testing, and much more. We identified the specific segments that SELM's solutions would benefit the most.We also detailed the proposed solutions and key features of the SELM suite. We compiled all of this information on a comprehensive, 8-page-long, business plan. Key skills utilized throughout this process included market research, business model analysis, strategic thinking, and technical writing to articulate complex AI concepts clearly.",
      evaluationActivity: "What went well was that the project was successful in outlining an innovative business plan. A challenge was making sure that SELM was truly unique and that we had considered all competitors. I learned the importance of communication and structuring complex information effectively for a business proposal.",
    },
    {
      title: "Tesla Product/Service Management",
      description: "Researched Tesla's business, analyzing its product development process, business product mix, and creating a Unique Selling Proposition (USP).",
      type: "Business Analysis / Product Management",
      date: "February 2025",
      skills: ["Market Research", "Business Analysis", "Product Strategy", "Presentation"],
      imageSrc: "/assets/tesla-product-management.png",
      summaryActivity: "This project involved conducting an in-depth analysis of Tesla's product management. We figured out how the key elements of their product mix, their product development process, how they bring new products to the market, and much more. We compiled this into an informative slideshow to present how Tesla's product management makes them so successful.",
      executionActivity: "To complete this project, we had to conduct extensive research into Tesla's product line history, product strategies, and innovations. We analyzed their existing product mix with vehicles, solar panels, and humanoid robots, to determine their product management strategies and unique selling propositions. We also determined how Tesla could improve their product mix. At the end, we were able to introduce a new product with Tesla's compelling USP, highlighting what makes Tesla unique in the competitive landscape. We created and presented a compelling slideshow to tie it all together.",
      evaluationActivity: "The project provided insights into the product management processes of a very successful company. Understanding Tesla's integrated approach to sustainable energy and transportation was particularly rewarding for understanding product management strategies. A challenge was keeping up with Tesla's breadth of their product offerings. I learned how to figure out a large company's multifaceted strategy and identify the core elements of its market appeal and competitive advantage. The project strongly reinforced the importance of having a clear, powerful USP.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">CTE Work Samples</h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
              A curated collection of my best work from CTE courses, demonstrating 
              technical skills, professional development, and real-world application of learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {workSamples.map((sample, index) => (
              <div key={index} className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-700 hover:border-purple-600 hover:shadow-purple-500/30">
                {sample.imageSrc && (
                   <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img src={sample.imageSrc} alt={sample.title} className="object-cover w-full h-full"/>
                   </div>
                )}
                 {!sample.imageSrc && (
                   <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                     <FileText className="w-16 h-16 text-white opacity-80" />
                   </div>
                 )}

                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-3">{sample.title}</h3>
                    <span className="text-sm text-slate-300 bg-gray-900/50 px-2 py-1 rounded-full">
                      {sample.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-200 mb-4 leading-relaxed">{sample.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-100 mb-2">Skills Demonstrated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sample.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-gray-900/50 text-slate-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-4 mt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-100 mb-2">Summary of the activity:</h4>
                      <p className="text-sm text-gray-200 leading-relaxed">{sample.summaryActivity}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-100 mb-2">Execution of the activity:</h4>
                      <p className="text-sm text-gray-200 leading-relaxed">{sample.executionActivity}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-100 mb-2">Evaluation of the activity:</h4>
                      <p className="text-sm text-gray-200 leading-relaxed">{sample.evaluationActivity}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <a
                      href={index === 0 ? "https://drive.google.com/file/d/1v3FZNI4XbsgmhOCks9VAXnSW7xoY4Vx6/view?usp=sharing" : "https://www.canva.com/design/DAGe1lFzU1c/0T02W3AYxeWZlY2WajwJ-w/edit?utm_content=DAGe1lFzU1c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
