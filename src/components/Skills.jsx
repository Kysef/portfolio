import SkillCard from "./SkillCard"; 

function About() {
  const skillData = [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "ReactJs", icon: "https://cdn.simpleicons.org/react" },
        { name: "Laravel / CI4", icon: "https://cdn.simpleicons.org/laravel" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "NodeJs", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      ]
    },
    {
      category: "Software, Apps & Tools",
      skills: [
        { name: "Git / GitHub", icon: "https://cdn.simpleicons.org/github/white" },
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
        { name: "PowerBI", icon: "https://api.iconify.design/logos:microsoft-power-bi.svg" },
        { name: "QlikView", icon: "https://cdn.simpleicons.org/qlik" },
      ]
    }
  ];

  return (
    <div className="flex flex-col items-start px-8 md:px-[20%] lg:px-[25%] bg-[#0a0a0a] text-white">
      <section className="w-full mt-16">
        {skillData.map((section, idx) => (
          <div key={idx} className="w-full mb-5 last:mb-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 w-full">
              {section.skills.map((skill, sIdx) => (
                <SkillCard key={sIdx} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;