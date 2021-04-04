import React from "react";
import propTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
