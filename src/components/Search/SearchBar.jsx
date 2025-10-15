import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchContent } from '../../utils/searchData';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setIsLoading(true);

    if (!searchQuery.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    // Ensure we have a valid search query with minimum length
    if (searchQuery.trim().length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    try {
      const searchResults = searchContent(searchQuery);
      
      const transformedResults = searchResults.map(result => ({
        title: result.title,
        content: result.description || '',
        url: result.path,
        type: result.category.toLowerCase(),
        tags: result.keywords || []
      }));

      setResults(transformedResults);
      setIsLoading(false);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setIsLoading(false);
    }
  };

  const handleResultClick = (result) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    navigate(result.url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset search state when component mounts or when navigating back
  useEffect(() => {
    // Clear any stale search state when component mounts
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setIsLoading(false);
  }, []);

  return (
    <div className="search-container relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            handleSearch(value);
          }}
          onFocus={() => {
            setIsOpen(true);
            // If there's a query, trigger search to show results
            if (query.trim().length >= 2) {
              handleSearch(query);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (results.length > 0) {
                handleResultClick(results[0]);
              }
            } else if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
          placeholder="Search"
          className="w-full pl-10 pr-3 py-2 bg-navy border border-electric rounded-lg focus:ring-2 focus:ring-electric focus:border-electric focus:outline-none text-white placeholder-gray-300 transition-all duration-200 shadow-sm no-underline"
          style={{ 
            borderBottom: 'none', 
            outline: 'none',
            boxShadow: 'none',
            textDecoration: 'none',
            borderBottomColor: 'transparent',
            borderBottomStyle: 'none',
            borderBottomWidth: '0'
          }}
        />
          
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center ml-1">
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            )}
          </div>

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                setIsOpen(false);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-gray-200 transition-all duration-200 z-10 border border-white/30"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200/50 backdrop-blur-sm z-50 w-full overflow-hidden">
          {/* Fixed height container with visible scrollbar */}
          <div 
            className="max-h-96 overflow-y-auto search-results-scroll"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#d1d5db #f3f4f6'
            }}
          >
            {results.length > 0 ? (
              <div className="py-3">
                {/* Results header */}
                <div className="px-4 pb-2 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {results.length} result{results.length !== 1 ? 's' : ''} found
                    </span>
                    <span className="text-xs text-gray-500">Press Enter to select first result</span>
                  </div>
                </div>
                
                {/* Results list */}
                <div className="space-y-1 pt-2">
                  {results.slice(0, 10).map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-all duration-150 flex items-start gap-3 group no-underline border-l-2 border-transparent hover:border-electric"
                      style={{ textDecoration: 'none' }}
                    >
                      {/* Result type indicator */}
                      <div className="flex-shrink-0 mt-1.5 flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${
                          result.type === 'page' ? 'bg-electric' : 
                          result.type === 'service' ? 'bg-blue-500' : 'bg-green-500'
                        } shadow-sm`}></div>
                      </div>
                      
                      {/* Result content */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate group-hover:text-electric transition-colors">
                          {result.title}
                        </div>
                        <div className="text-sm text-gray-600 truncate mt-0.5 leading-relaxed">
                          {result.content}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Footer with search tips */}
                {results.length > 10 && (
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-xs text-gray-500 text-center">
                      Showing first 10 results. Refine your search for more specific results.
                    </p>
                  </div>
                )}
              </div>
            ) : query && !isLoading ? (
              <div className="px-6 py-12 text-center text-gray-500">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">No results found for "{query}"</p>
                <p className="text-xs text-gray-400 mb-4">Try searching for services, pages, or features</p>
                <div className="text-xs text-gray-400">
                  <p className="mb-1">Search suggestions:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-gray-100 rounded">marketing</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">software</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">hosting</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">projects</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
