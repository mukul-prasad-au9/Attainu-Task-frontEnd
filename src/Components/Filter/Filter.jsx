import React, { useState } from "react";
import YearFilter from "./YearFilter";
import CountryFilter from "./CountryFilter";
const Filter = (props) => {
  const [year, setYear] = useState(null);
  const [country, setCountry] = useState(null);
  const filterData = (type, val) => {
    if (type === "year") {
      setYear(val);
    } else {
      setCountry(val);
    }
  };

  const onSubmitFilter = (e) => {
    e.preventDefault();
    props.filterValue(year, country);
  };

  return (
    <div className="card mt-4">
      <div className="card-header primary_bg">
        <h5 className="text-center">Filter</h5>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmitFilter}>
          <YearFilter YearData={(data) => filterData("year", data)} />
          <CountryFilter CountryData={(data) => filterData("country", data)} />
          <div className="form-group text-center">
            <hr />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
