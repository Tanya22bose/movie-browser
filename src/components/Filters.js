import React from "react";

const YearFilter = ({ movies, selectedYear, onYearChange }) => {
  const uniqueYears = [...new Set(movies.map((movie) => movie.Year))].sort(
    (a, b) => b - a
  );

  return (
    <select
      className="form-select form-select-md"
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
      aria-label="Filter by Year"
    >
      <option value="">Year</option>
      {uniqueYears.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearFilter;
