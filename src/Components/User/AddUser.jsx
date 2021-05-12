import axios from "axios";
import { useState } from "react";
const base_url = "http://localhost:5000/users";

const AddUser = (props) => {
  const [name, setName] = useState(props.data["Full Name"]);
  const [email, setEmail] = useState(props.data["Email"]);
  const [country, setCountry] = useState(props.data["Country"]);
  const [dob, setDOB] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(base_url, {
        "Full Name": name,
        Country: country,
        "Date of birth": `${new Date(dob).toJSON()}`,
        Email: email,
        "Created at": `${new Date().toJSON()}`,
      })
      .then(() => {
        setError(false);
        setMsg("User added succesfully, Kindly refresh for updated data");
      })
      .catch((error) => {
        setError(true);
        setMsg(error.message);
      });
  };
  return (
    <div>
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="full-name" className="col-form-label">
                      Full name
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="email-id" className="col-form-label">
                      Email
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="country" className="col-form-label">
                      Country
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter country name"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="dob" className="col-form-label">
                      Date of birth
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter date of birth"
                      value={dob}
                      onChange={(e) => setDOB(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 text-center">
                    {error ? (
                      <span className="text-danger">{msg}</span>
                    ) : (
                      <span className="text-success">{msg}</span>
                    )}
                  </div>
                  <div className="form-group col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      ADD USER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddUser;
