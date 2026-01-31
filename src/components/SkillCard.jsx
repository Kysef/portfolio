import React from 'react';

const SkillCard = ({ name, icon }) => {
  return (
    <div className="group flex items-center gap-3 p-6 rounded-xl border border-white/[0.04]  hover:bg-white/[0.02] hover:border-black transition-all duration-300 cursor-default">
      {/* Icon Container: Fixed size to ensure uniform grid alignment */}
      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full object-contain grayscale  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out" 
        />
      </div>
      
      {/* Skill Name: Tracking-tight gives it a more professional, condensed look */}
      <span className="text-[13px] font-medium text-white group-hover:text-gray-200 transition-colors duration-300 truncate tracking-tight">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;