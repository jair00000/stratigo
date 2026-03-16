import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectStoryModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-gray-200 bg-gray-50">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-navy">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:text-navy hover:border-navy/40 hover:bg-gray-100 transition-colors"
              aria-label="Close project story"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-5 space-y-4">
            {project.story && (
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {project.story}
              </p>
            )}

            {(project.role || project.stack) && (
              <div className="flex flex-wrap gap-2 pt-2">
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
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-gray-200 bg-white">
            <span className="text-xs sm:text-sm text-gray-500">
              This is a Stratigo client project overview.
            </span>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 rounded-lg bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy/90 transition-colors"
              >
                Visit live site
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

