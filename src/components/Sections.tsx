import Image from 'next/image';

export default function Sections() {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-slate-900 relative">
        {/* Snoopy positioned at bottom of experience section */}
        <div className="absolute -bottom-14 transform -translate-x-1/2 z-10" style={{left: '14.3%'}}>
          <Image src="/images/snoopy1.png" alt="Snoopy" width={160} height={160} className="w-40 h-40 object-contain" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Experience</h2>
          <div className="space-y-8">

          <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-blue-500 overflow-hidden">
                  <Image src="/images/bmo.png" alt="BMO" width={48} height={48} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Information Security Analyst</h3>
                  <p className="text-slate-300"><a target="_blank" className="text-slate-300">Bank of Montreal</a></p>
                </div>
              </div>
              <p className="text-white text-sm mb-2">January 2026 — Present</p>
              <p className="text-slate-300">• Supporting new implementation of ArmorCode with Qualys, CrowdStrike, and Tenable, into BMO’s security workflow</p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-blue-500 overflow-hidden">
                  <Image src="/images/qsc.jpg" alt="QSC" width={48} height={48} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Technical Consultant</h3>
                  <p className="text-slate-300"><a href="https://www.queensstartupconsulting.com/" target="_blank" className="text-slate-300 hover:underline transition-colors duration-200">Queen&apos;s Startup Consulting</a></p>
                </div>
              </div>
              <p className="text-white text-sm mb-2">March 2025 — Present</p>
              <p className="text-slate-300">• Collaborating with high-growth startups to design and implement technical solutions tailored to their unique business challenges</p>
              <p className="text-slate-300">•	Built scalable web-scraping APIs for a Series A b2c startup, to source secondhand clothing prices from e-commerce platforms based on product condition and brand</p>
              <p className="text-slate-300">•	Currently designing a data automation pipeline to process and enrich third-party data for supply chain client acquisitions, leveraging automation to deliver insight for M&A decision-making on 10,000+ companies</p>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-blue-500 overflow-hidden">
                  <Image src="/images/qtma.jpg" alt="QTMA" width={48} height={48} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Software Developer, UI/UX Designer</h3>
                  <p className="text-slate-300"><a href="https://www.qtma.ca/" target="_blank" className="text-slate-300 hover:underline transition-colors duration-200">Queen&apos;s Tech and Media Association</a></p>
                </div>
              </div>
              <p className="text-white text-sm mb-2">March 2025 — Present</p>
              <p className="text-slate-300">• Conducting market research and designing user-interface prototypes for bons.ai, an AI-integrated language learning app</p>
              <p className="text-slate-300">•	Utilizing LLMs to create personalized and customizable learning strategies and lessons, immersive real-world applications, real-time conversational practice, and dynamic content generation based on past lesson results</p>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 border border-blue-500 overflow-hidden">
                  <Image src="/images/hyperloop.jpg" alt="Hyperloop" width={48} height={48} className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">AI/ML Researcher</h3>
                  <p className="text-slate-300"><a href="https://www.queenshyperloop.ca/" target="_blank" className="text-slate-300 hover:underline transition-colors duration-200">Queen&apos;s Hyperloop Design Team</a></p>
                </div>
              </div>
              <p className="text-white text-sm mb-2">September 2024 — April 2025</p>
              <p className="text-slate-300">• Developed an AI/ML-driven geospatial analysis pipeline in Python, integrating GIS-MCDA to use Dijkstra&apos;s algorithm to find optimal routes for possible Hyperloop networks across 20+ major Canadian cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/bonsai.jpeg" alt="Bons.ai" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://www.bonsaistudy.com/" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Bons.ai</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">December 2025</p>
                <p className="text-white text-sm mb-2">AI, Full Stack, UI/UX Design</p>
                <p className="text-slate-300 text-sm mb-4">QTMA product team project which utilizes LLM&apos;s to create personalized and customizable learning strategies for language learning strategies and lessons. Allows for real-world application, conversational practice, and dynamic content generation based on past lesson results.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Go</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/nest.png" alt="Nest Project" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Nest" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Nest</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">September 2025</p>
                <p className="text-white text-sm mb-2">Full Stack</p>
                <p className="text-slate-300 text-sm mb-4">Website that helps university students find clubs while streamlining the application process with both student-facing and club-facing interfaces.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SQL</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/cancer.jpeg" alt="Deep Learning for Pancreatic Cancer Segmentation & Classification" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Pancreatic-Cancer-Classification-and-Segmentation" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Deep Learning for Pancreatic Cancer Segmentation & Classification</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">August 2025</p>
                <p className="text-white text-sm mb-2">AI/ML, Backend</p>
                <p className="text-slate-300 text-sm mb-4">Multi-task deep learning pipeline for pancreatic cancer detection using nnUNetv2 and 300+ 3D CT scans with 82% accuracy.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">nnUNetv2</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/stock.png" alt="Stock Sentiment Analyzer" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Stock-Sentiment-Analysis" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Stock Sentiment Analyzer</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">June 2025</p>
                <p className="text-white text-sm mb-2">AI, Full Stack</p>
                <p className="text-slate-300 text-sm mb-4">Personal project that allows users to search for any NYSE stock and returns the public sentiment about the stock by scraping Reddit threads with an NLP, as well as basic stock metrics on the dashboard.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Vader NLP</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/vision.png" alt="Hyperloop Machine Vision Safety System" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Hyperloop-Machine-Vision-Sensor-System" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Hyperloop Machine Vision Safety System</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">January 2024</p>
                <p className="text-white text-sm mb-2">ML, Embedded Systems, Full Stack</p>
                <p className="text-slate-300 text-sm mb-4">Engineering project utilizing a YOLOV8 model for Machine Vision through Object Detection to create a live safety system for a Hyperloop pod with an arduino microcontroller.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Arduino</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/atmos.png" alt="Atmos Air Quality App" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Atmos-App" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Atmos</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">January 2025</p>
                <p className="text-white text-sm mb-2">Embedded Systems, Full Stack</p>
                <p className="text-slate-300 text-sm mb-4">Engineering project that allows for real-time detection of air quality parameters with readings and notifications on a bluetooth web app.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Arduino</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/motion.jpeg" alt="Motion Classification Model" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://github.com/kzy0525/Motion-Classification-Model" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">Motion Classification Model</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">April 2025</p>
                <p className="text-white text-sm mb-2">ML, Backend</p>
                <p className="text-slate-300 text-sm mb-4">Machine learning project classifying human motion using accelerometer data with a python desktop application real-time.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">scikit-learn</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300 border border-slate-600">
              <div className="h-48 bg-slate-600 flex items-center justify-center overflow-hidden">
                <Image src="/images/website.png" alt="University Club Website" width={300} height={192} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <a href="https://www.inqubate.ca/" target="_blank" className="text-blue-400 hover:underline transition-colors duration-200">University Club Website</a>
                </h3>
                <p className="text-slate-400 text-sm mb-1">June 2024</p>
                <p className="text-white text-sm mb-2">Frontend</p>
                <p className="text-slate-300 text-sm mb-4">New website for inQUbate, a student-run, startup incubator club of Queen&apos;s University.</p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-900 relative">
        {/* Snoopy2 positioned at bottom of skills section on the right */}
        <div className="absolute -bottom-0 transform -translate-x-1/2 z-10" style={{right: '2%'}}>
          <Image src="/images/snoopy2.png" alt="Snoopy 2" width={80} height={100} className="w-20 h-25 object-cover rounded-lg" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-400 mb-20 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend/Design</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">JavaScript</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">HTML/CSS</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Figma</div>
              </div>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Python</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">C/C++</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Java</div>
              </div>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Analytics</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">SQL</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Power BI</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Tableau</div>
              </div>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Machine Learning</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">TensorFlow</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">PyTorch</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Scikit-learn</div>
              </div>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Frameworks/Libraries</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Flask</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">Next.js</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-blue-300 border border-blue-500">React</div>
              </div>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-600 hover:scale-105 hover:border-white hover:shadow-white/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Special Talents</h3>
              <div className="space-y-2">
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-white border border-white">Badminton</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-white border border-white">Napping for hours</div>
                <div className="bg-slate-600 px-3 py-2 rounded text-sm text-white border border-white">Finding new places to eat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Contact</h2>
          {/* Email Row */}
          <div className="flex justify-center mb-12">
            <a href="mailto:ye.kevin@queensu.ca" className="flex items-center px-8 py-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-200 group">
              <i className="fas fa-envelope text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-200"></i>
              <span className="text-white text-lg font-medium">ye.kevin@queensu.ca</span>
            </a>
          </div>
          
          {/* Social Links Row */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/kevinye0525/" target="_blank" className="flex flex-col items-center p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-200 group">
              <i className="fab fa-linkedin text-white text-2xl mb-2 group-hover:scale-110 transition-transform duration-200"></i>
              <span className="text-white text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/kzy0525" target="_blank" className="flex flex-col items-center p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-200 group">
              <i className="fab fa-github text-white text-2xl mb-2 group-hover:scale-110 transition-transform duration-200"></i>
              <span className="text-white text-sm font-medium">GitHub</span>
            </a>
            <a href="https://drive.google.com/file/d/1ZO2XXOGIRUw_BVbhdQ-n3vHHjWqGe8i5/view?usp=sharing" target="_blank" className="flex flex-col items-center p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-200 group">
              <i className="fas fa-file-alt text-white text-2xl mb-2 group-hover:scale-110 transition-transform duration-200"></i>
              <span className="text-white text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Thanks Section */}
      <section className="pt-16 pb-0 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Thanks for visiting!</h2>
          <p className="text-xl text-slate-300">Come back soon!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Footer content can be added here */}
        </div>
      </footer>
    </>
  );
}
