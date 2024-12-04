# Movie Browser Web Application Documentation

# Deployed Movie Browser: 
[movie-browser](https://movie-browser-zeta.vercel.app/?vercelToolbarCode=PKGoLW89-Qa6uLE)

# Introduction

The Movie Browser Web Application allows users to search, filter, and save their favorite movies. Built with React and Bootstrap, it uses the OMDb API for movie data and offers a responsive, SEO-friendly, and accessible experience.

# Key Features

- Search by Title: Dynamically search and update the movie list as users type.
- Advanced Filters: Filter movies by release year range.
- Infinite Scrolling: Load more movies as users scroll, without pagination.
- Favorites : Save favorite movies locally in browser storage.
- Mobile-First & Responsive: Optimized for mobile devices.
- SEO & Accessibility: Follows best practices for search engine optimization and accessibility.

# Design Decisions

- Frontend Framework: [React] chosen for its component-based architecture and flexibility.
- API: Movie data fetched from the [OMDb API], providing comprehensive movie information.
- State Management: Uses [React's useState/useEffect] for efficient state handling.
- Responsive UI: Minimalist design, focusing on usability across all devices using Bootstrap.

# Possible Improvements

- Backend Integration: Store favorites across devices by adding user authentication and a backend.
- Search Enhancements: Implement autocomplete or suggestions for improved search.
- Error Handling: Improve error messages for failed API requests or invalid filters.
- Testing: Add unit and integration tests for reliability.

## Run the Project Locally

### `Clone the repo`:

git clone [repo-link](https://github.com/Tanya22bose/movie-browser.git)

In the project directory, you can run:

### `npm install`

Install dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
