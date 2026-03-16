import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectPreviewModal({ project, onClose }) {
  const [iframeError, setIframeError] = useState(false);
  const [previewWidth, setPreviewWidth] = useState(1200); // px, adjustable between mobile and desktop

  if (!project) return null;

  const showIframe = project.live && !iframeError;

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
          className="bg-white w-[96vw] max-w-7xl h-screen max-h-screen rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top bar: label + width control + close */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-3 border-b border-gray-200 bg-white gap-4">
            <span className="text-sm sm:text-base font-semibold text-navy whitespace-nowrap">
              Live preview
            </span>

            <div className="flex-1 flex items-center justify-end gap-4 min-w-0">
              {/* Width slider (370px - 1440px) */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                <span className="whitespace-nowrap">Width</span>
                <input
                  type="range"
                  min={370}
                  max={1440}
                  value={previewWidth}
                  onChange={(e) => setPreviewWidth(Number(e.target.value))}
                  className="w-32 accent-navy cursor-ew-resize"
                />
                <span className="tabular-nums w-14 text-right">
                  {previewWidth}px
                </span>
              </div>

              <div className="flex items-center gap-3">
                {project.live && (
                  <span className="hidden md:inline-flex text-xs text-gray-400">
                    Previewing {project.live.replace(/^https?:\/\//, "")}
                  </span>
                )}
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:text-navy hover:border-navy/40 hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close preview"
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
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 bg-gray-100 px-2 sm:px-4 py-4 overflow-auto">
            <div className="h-full w-full flex justify-center items-stretch">
              {showIframe ? (
                <iframe
                  src={project.live}
                  title={project.title}
                  style={{ width: previewWidth, minWidth: 320, maxWidth: "100%" }}
                  className="h-full min-h-[78vh] border border-gray-300 rounded-xl bg-white shadow-sm"
                  loading="lazy"
                  onError={() => setIframeError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full px-6 py-10 sm:px-10 sm:py-16 text-center text-slate-600">
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={`${project.title} preview`}
                      className="w-full max-w-5xl rounded-xl shadow-xl mb-4 border border-gray-200 object-cover"
                    />
                  ) : null}
                  <p className="text-sm sm:text-base font-medium mb-2">
                    Live preview is not available in this browser.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4 max-w-xl">
                    Some sites disable iframe embedding for security. You can
                    still explore the full experience on the live site.
                  </p>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-electric hover:bg-electric-dark text-xs sm:text-sm font-semibold text-white transition-colors"
                    >
                      Open Live Site
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-gray-200 bg-white">
            {project.role || project.stack ? (
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
                {project.role && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {project.role}
                  </span>
                )}
                {project.stack && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-electric/10 text-electric">
                    {project.stack}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs sm:text-sm text-gray-400">
                Preview for portfolio use only.
              </span>
            )}

            <div className="flex items-center gap-3">
              {project.caseStudy && (
                <button
                  type="button"
                  className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View Case Study
                </button>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 rounded-lg bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-navy/90 transition-colors"
                >
                  Open Live Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

