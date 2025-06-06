import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 backdrop-blur-md hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Financial Anomaly Detection</h3>
              <p className="text-gray-400 mb-4">
                Financial Anomaly detection using multiple ML-Powered models
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Docker", "Python", "Jupyter Notebook", "Spark"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Amitesh218/Financial-anomaly-detection-using-ml.git" target="_blank" rel="noopener noreferrer"
                  className="text-pink-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 backdrop-blur-md 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Bubbles</h3>
              <p className="text-gray-400 mb-4">
                A 2D platformer game using the godot engine, with soulslike gameplay
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Godot", "GDScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Amitesh218/bubbles.git" target="_blank" rel="noopener noreferrer"
                  className="text-pink-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 backdrop-blur-md 
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">AI Powered Student Assistance Chatbot</h3>
              <p className="text-gray-400 mb-4">
              AI-Powered Student Assistance Chatbot for Department of Technical Education, Government of Rajasthan. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Vite", "Javascript", "Gemini API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Amitesh218/AI-Powered-Student-Assistance-Chatbot.git" target="_blank" rel="noopener noreferrer"
                  className="text-pink-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="backdrop-blur-md 
              glass p-6 rounded-xl border border-white/10  
              hover:-translate-y-1 hover:border-pink-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
              <p className="text-gray-400 mb-4">
                This Website!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TailwindCSS", "React", "Vite", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-pink-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Amitesh218/amitesh218.github.io.git" target="_blank" rel="noopener noreferrer"
                  className="text-pink-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
