import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import UserDisplay from "./UserDisplay";
import AddUser from "./User/AddUser";
const base_url = "http://localhost:5000/users";

const Home = () => {
  const [page, setPage] = useState(1);
  const [userData, setUser] = useState("");
  const [filter_value, setFilterValue] = useState("");
  const [userId, setUserId] = useState("");
  const [userD, setUserD] = useState("");

  useEffect(() => {
    axios
      .get(`${base_url}?_page=${page}&_limit=20`)
      .then((res) => setUser(res.data));
  }, []);
  const IncPage = (e) => {
    if (e.target.value === "inc") {
      var pages = page + 1;
      axios
        .get(`${base_url}?_page=${pages}&_limit=20`)
        .then((res) => setUser(res.data));
    } else {
      var pages = page - 1;
      axios
        .get(`${base_url}?_page=${pages}&_limit=20`)
        .then((res) => setUser(res.data));
    }
    setPage(pages);
  };
  const getFilterValues = (curr_year, curr_country) => {
    let filter_url = "";
    if (curr_year && curr_country) {
      filter_url = `Date+of+birth_like=${curr_year}&Country=${curr_country}`;
    } else if (curr_year) {
      filter_url = `Date+of+birth_like=${curr_year}`;
    } else if (curr_country) {
      filter_url = `Country=${curr_country}`;
    }
    setFilterValue(filter_url);
    axios(`${base_url}?${filter_url}&_page=${page}&_limit=20`).then((res) =>
      setUser(res.data)
    );
  };
  if (userData) {
    return (
      <>
        <div className="d-flex flex-row">
          <div className="mt-4" style={{ width: "60vw" }}>
            <Filter
              filterValue={(year, country) => getFilterValues(year, country)}
            />
          </div>
          <UserDisplay UserData={userData} />
          <div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
              className="btn btn-success mt-5  me-5"
            >
              Add
            </button>
          </div>
        </div>
        <div className="text-center mt-4 mb-4">
          <button
            onClick={IncPage}
            value="dec"
            className="btn btn-primary me-4"
          >
            Previous
          </button>
          <button
            onClick={IncPage}
            value="inc"
            className="btn btn-primary ms-4"
          >
            Forward
          </button>
          <AddUser data={userD} key={`edit${userId}`} />
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default Home;
