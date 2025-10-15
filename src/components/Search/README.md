# Stratigo Search Component

## Overview
The Search component provides comprehensive, intelligent search functionality across the entire Stratigo website. It includes real-time search results, keyboard navigation, and relevance-based ranking.

## Features

### 🔍 Intelligent Search
- **Real-time Results**: Search results appear as you type (minimum 2 characters)
- **Relevance Ranking**: Results are ranked by relevance based on multiple factors:
  - Title matches (highest priority)
  - Keyword matches
  - Description matches
  - Section content matches
  
### 🎯 Comprehensive Coverage
The search indexes all website content including:
- **Pages**: Home, About, Services, Projects, Contact, FAQ, Blog, Careers, etc.
- **Services**: Marketing, Software Development, Hosting
- **Features**: UI/UX Design, eCommerce, Responsive Design, etc.
- **Industries**: Contractors, Manufacturing, Service Businesses
- **Legal**: Terms, Privacy, Cookies, SLA

### ⌨️ Keyboard Navigation
- **Arrow Down**: Navigate to next result
- **Arrow Up**: Navigate to previous result
- **Enter**: Select highlighted result
- **Escape**: Close search dropdown

### 🎨 Visual Features
- Highlighted search terms in results
- Category-based icons and color coding
- Responsive dropdown with max height and scroll
- Smooth animations and transitions
- "No results" state with helpful suggestions

## Usage

### Basic Implementation
```jsx
import { SearchBar } from '../components/Search';

function Navbar() {
  return (
    <nav>
      <SearchBar />
    </nav>
  );
}
```

### Search Data Structure
The search data is defined in `src/utils/searchData.js`:

```javascript
{
  id: "unique-id",
  title: "Page/Service Title",
  path: "/path/to/page",
  category: "Page|Service|Feature|Industry|Legal",
  keywords: ["keyword1", "keyword2"],
  description: "Brief description of the page/service",
  sections: [
    {
      title: "Section Title",
      content: "Section content",
      keywords: ["section", "keywords"],
      anchor: "#optional-anchor"
    }
  ]
}
```

## Adding New Content to Search

### 1. Add to Search Data
Edit `src/utils/searchData.js` and add your new content:

```javascript
{
  id: "new-page",
  title: "New Page Title",
  path: "/new-page",
  category: "Page",
  keywords: ["new", "page", "relevant", "keywords"],
  description: "Description that appears in search results",
  sections: [
    {
      title: "Section Name",
      content: "Searchable content for this section",
      keywords: ["additional", "keywords"]
    }
  ]
}
```

### 2. Category Types
Use these predefined categories:
- **Page**: Main website pages
- **Service**: Service offerings
- **Feature**: Specific features or capabilities
- **Industry**: Industry-specific solutions
- **Legal**: Legal documents and policies

### 3. Keywords Best Practices
- Include common search terms users might use
- Add synonyms and related terms
- Include both technical and layman terms
- Add industry-specific terminology

## Component Props

### SearchBar
The SearchBar component doesn't require any props. It's self-contained and manages its own state.

```jsx
<SearchBar />
```

## Customization

### Styling
The component uses Tailwind CSS classes. Main style areas:

```javascript
// Search input styling
className="bg-white/10 border-white/20 text-white"

// Dropdown styling
className="bg-white rounded-lg shadow-2xl"

// Result item styling
className="hover:bg-blue-50 transition-colors"
```

### Result Limit
By default, the component shows 8 results. To change:

```javascript
// In SearchBar.jsx
setResults(searchResults.slice(0, 8)); // Change 8 to your desired limit
```

### Minimum Query Length
By default, search activates after 2 characters. To change:

```javascript
// In SearchBar.jsx
if (query.trim().length >= 2) { // Change 2 to your desired minimum
```

## Search Algorithm

The search function (`searchContent`) uses a weighted relevance scoring system:

| Match Type | Score | Priority |
|------------|-------|----------|
| Title match | +10 | Highest |
| Keyword match | +8 | High |
| Section title match | +6 | Medium-High |
| Description match | +5 | Medium |
| Section keyword match | +4 | Medium-Low |
| Section content match | +3 | Low |

Results are sorted by total relevance score (highest first).

## Accessibility

The search component includes proper ARIA attributes:
- `aria-label="Search website"`
- `aria-autocomplete="list"`
- `aria-controls="search-results"`
- `aria-expanded={isOpen}`
- `role="listbox"` on results
- `role="option"` on result items
- `aria-selected` for keyboard navigation

## Performance

### Optimization Features
- Debounced search (triggers only on value change)
- Limited result set (8 results max)
- Efficient event listeners (cleanup on unmount)
- Click-outside detection for dropdown close

### Future Improvements
- Add search analytics tracking
- Implement fuzzy matching for typos
- Add recent searches
- Cache search results
- Add search filters by category

## Testing

### Manual Testing Checklist
- [ ] Search activates after 2 characters
- [ ] Results appear in dropdown
- [ ] Click on result navigates to correct page
- [ ] Keyboard navigation works (up/down/enter/escape)
- [ ] Search highlights matching terms
- [ ] "No results" state appears correctly
- [ ] Click outside closes dropdown
- [ ] Clear button removes query

### Test Queries
Try these searches to test coverage:
- "marketing" - Should show marketing services and related pages
- "hosting" - Should show hosting services and FAQ items
- "SEO" - Should show marketing services and related features
- "VPS" - Should show hosting-related results
- "contact" - Should show contact page and support options
- "CRM" - Should show software development services
- "B2B" - Should show about page and business focus

## Troubleshooting

### No Results Appearing
1. Check minimum query length (default: 2 characters)
2. Verify search data is imported correctly
3. Check console for JavaScript errors
4. Ensure search data includes relevant keywords

### Results Not Navigating
1. Check React Router is properly configured
2. Verify paths in search data match routes in App.jsx
3. Check for JavaScript errors in console

### Dropdown Not Closing
1. Verify click-outside detection is working
2. Check if searchRef is properly attached
3. Ensure event listeners are being cleaned up

## Examples

### Example Search Results

**Query: "software"**
```
Results:
1. Software Development (Service)
2. Home - Software Solutions section (Page)
3. UI/UX Design (Feature)
4. Custom CRM (Feature)
```

**Query: "contractor"**
```
Results:
1. Services for Contractors (Industry)
2. Home - Who We Serve section (Page)
3. Marketing Solutions (Service)
```

## Support

For questions or issues with the search functionality:
- Email: support@stratigo.io
- Documentation: See this README
- Source: `src/components/Search/` and `src/utils/searchData.js`

