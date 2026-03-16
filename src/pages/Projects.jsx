import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";
import ProjectPreviewModal from "../components/ProjectPreviewModal";
import ProjectStoryModal from "../components/ProjectStoryModal";

const FEATURED_PROJECTS = [
  {
    id: "remedi-window-solutions",
    title: "Remedi Window Solutions",
    subtitle: "Professional window services & installation",
    role: "Website Design & Build",
    stack: "Marketing Site · Conversion Focused UX",
    live: "https://remediwindowsolutions.com/",
    story:
      "Remedi Window Solutions needed a modern, trustworthy web presence to explain their commercial and residential film services in plain language. We designed a clean, conversion-focused marketing site that walks visitors from problem awareness to service selection and simple contact paths, with content structured for future SEO growth.",
    // screenshot: require("../assets/projects/remedi-window.webp"),
  },
  {
    id: "wags-window-solutions",
    title: "Wags Window Solutions",
    subtitle: "Authorized Madico Dealer · National window film & security film installer",
    role: "Informational Website",
    stack: "Training Platform (Coming Soon)",
    live: "https://wagswindow.com/",
    story:
      "Wags Window Solutions is a nationally operating subcontractor and Authorized Madico Dealer. This site is focused on credibility and clarity—explaining security film, subcontracting, and training at a glance. The current version is an informational hub, intentionally structured so it can later grow into a full online training platform without a redesign.",
    // screenshot: require("../assets/projects/wags-window.webp"),
  },
  {
    id: "je-premium-auto-spa",
    title: "J.E. Premium Auto Spa",
    subtitle: "Madison County's #1 car window tinting company",
    role: "Website Design & Build",
    stack: "Local Services · Auto Spa · Conversion UX",
    live: "https://jeautospa.com/",
    story:
      "J.E. Premium Auto Spa was Stratigo’s first client project in this vertical. Their site is hosted on their own PHP-based platform, so Stratigo’s role focused on the structure and visual design rather than ongoing hosting or marketing. From day one, our goal was to give them a modern, trustworthy digital presence that matched the quality of their in-person service. Any refinements made from today onward are to support their existing platform, and we’re grateful to have helped them take their first steps into a stronger digital brand and online experience.",
    // screenshot: require("../assets/projects/je-autospa.webp"),
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); // live preview
  const [activeStoryProject, setActiveStoryProject] = useState(null); // about the website

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-coral/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Section - Same as Homepage */}
      <section 
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left text-white">
              <div className="mb-4 sm:mb-6">
                <Heading level={1} className="text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3">
                  Our Projects
                </Heading>
                <p className="text-white text-left text-base sm:text-lg md:text-xl font-medium text-white/90">
                  See our work in action
                </p>
              </div>
              
              <Text className="text-white text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-white/90">
                Explore our portfolio of successful projects across marketing, software development, and hosting solutions. Each project represents our commitment to excellence and client success.
              </Text>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto text-sm sm:text-base">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Project Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Project Support</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Fast</div>
                <div className="text-white/80 text-sm">Delivery Time</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Expert</div>
                <div className="text-white/80 text-sm">Team Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Content Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
              Featured Projects
            </Heading>
            <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Discover how we've helped businesses grow through innovative solutions and strategic implementation.
            </Text>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0 items-stretch">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 h-full flex flex-col"
              >
                <div className="relative">
                  <div className="aspect-[16/10] bg-gradient-to-br from-electric/15 via-blue-500/10 to-navy/40 flex items-center justify-center overflow-hidden rounded-t-xl">
                    <div className="relative w-[78%] max-w-md">
                      <div className="bg-slate-900 rounded-[18px] shadow-2xl p-3 border border-slate-700/70">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
                            Preview
                          </span>
                          <span className="w-6" />
                        </div>
                        <div className="bg-slate-800/80 rounded-lg h-24 sm:h-28 md:h-32 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 via-transparent to-white/10" />
                          <div className="absolute inset-x-4 bottom-3 space-y-1.5">
                            <div className="h-2.5 w-32 bg-white/60 rounded-full" />
                            <div className="h-1.5 w-24 bg-white/40 rounded-full" />
                            <div className="h-1 w-20 bg-white/30 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover badge - Live preview */}
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-start pb-4 pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-navy text-xs font-semibold shadow-md hover:bg-electric hover:text-white transition-colors"
                    >
                      <span>Live preview</span>
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-7 flex flex-col gap-3 h-full">
                  <div className="flex-1 flex flex-col gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-navy mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-gray-600">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.role && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-700">
                          {project.role}
                        </span>
                      )}
                      {project.stack && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-electric/10 text-xs font-medium text-electric">
                          {project.stack}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveStoryProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-electric-dark"
                    >
                      <span>About this project</span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-500 hover:text-navy underline-offset-2 hover:underline"
                      >
                        Open live site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {/* Placeholder cards for upcoming projects */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-6 md:p-7 flex flex-col justify-between border border-dashed border-gray-200 h-full">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">
                  More projects coming soon
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Stratigo case studies and success stories are being crafted
                  for this section.
                </p>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-gray-500">
                New sites will appear here with the same premium preview
                experience.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Preview Modal */}
      {activeProject && (
        <ProjectPreviewModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Project Story Modal */}
      {activeStoryProject && (
        <ProjectStoryModal
          project={activeStoryProject}
          onClose={() => setActiveStoryProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
