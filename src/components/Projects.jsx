import Banner1 from "../assets/bleach.png"
import Banner2 from "../assets/cyb.jpg"
import Banner3 from "../assets/ulq.jpg"
import Banner4 from "../assets/tybw.gif"

function Projects() {
  return (
    <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 px-2">
        <h2 className="text-3xl font-mono flex items-center gap-3 text-slate-300">
          <span className="text-rose-400">☆</span> 
          Featured Projects
        </h2>
        <a 
          href="#" 
          className="text-rose-300/80 hover:text-rose-400 transition-colors flex items-center gap-1 border-b border-dashed border-rose-300/50 pb-1 text-sm"
        >
          View all <span className="text-lg">→</span>
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project Card 1 */}
        <div className="bg-[#1e2536] rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-900 transition-all group">
          
          <div className="bg-[#2d3748] h-64 overflow-hidden">
            <img 
              src={Banner1}alt="Project One" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Thrift Store</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              This is a brief description of what the project does.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 text-rose-300 text-xs rounded-md">React</span>
              <span className="px-3 py-1 bg-slate-800 text-blue-300 text-xs rounded-md">Tailwind</span>
              <span className="px-3 py-1 bg-slate-800 text-green-300 text-xs rounded-md">Node.js</span>
              <span className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-md">Express.js</span>
              <span className="px-3 py-1 bg-slate-800 text-emerald-300 text-xs rounded-md">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-[#1e2536] rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-900 transition-all group">
          <div className="bg-[#2d3748] h-64 overflow-hidden">
            <img src={Banner2} alt="Project Two" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Cyber Tech</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Description for your second project.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 text-green-300 text-xs rounded-md">Node.js</span>
              <span className="px-3 py-1 bg-slate-800 text-purple-300 text-xs rounded-md">MongoDB</span>
            </div>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-[#1e2536] rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-900 transition-all group">
          <div className="bg-[#2d3748] h-64 overflow-hidden">
            <img src={Banner3} alt="Project Two" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Goated Chad</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Description for your second project.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 text-green-300 text-xs rounded-md">Node.js</span>
              <span className="px-3 py-1 bg-slate-800 text-purple-300 text-xs rounded-md">MongoDB</span>
            </div>
          </div>
        </div>
        {/* Project Card 4 */}
        <div className="bg-[#1e2536] rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-900 transition-all group">
          <div className="bg-[#2d3748] h-64 overflow-hidden">
            <img src={Banner4} alt="Project Two" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Rukia</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Description for your second project.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 text-green-300 text-xs rounded-md">Node.js</span>
              <span className="px-3 py-1 bg-slate-800 text-purple-300 text-xs rounded-md">MongoDB</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;