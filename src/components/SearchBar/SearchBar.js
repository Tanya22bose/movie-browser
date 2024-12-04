import React from "react";

const SearchBox = ({ value, setSearchValue }) => {
  return (
    <div className="col col-sm-8">
      <input
        className="form-control"
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search by title or year..."
      />
    </div>
  );
};

export default SearchBox;
