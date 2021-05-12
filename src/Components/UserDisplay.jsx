import EditUser from "./User/EditUser";
import DeleteUser from "./User/DeleteUser";
import { useState } from "react";

const UserDisplay = (props) => {
  const [userId, setUserId] = useState("");
  const [userD, setUserD] = useState("");

  const renderUser = (Data) => {
    if (Data) {
      return Data.map((val, idx) => {
        return (
          <div
            onMouseEnter={(e) => {
              setUserId(val.Id);
              setUserD(val);
            }}
            className="card mt-5 ms-2"
            key={idx}
            style={{ width: "18rem" }}
          >
            <div className="card-header">
              <h4 className="text-center">{val["Full Name"]}</h4>
            </div>
            <div className="card-body text-center">
              <h6>Email</h6>
              <p>{val.Email}</p>
              <h6>Date of Birth</h6>

              <p>
                {val["Date of birth"]
                  ? new Date(val["Date of birth"]).toLocaleString("default", {
                      dateStyle: "medium",
                    })
                  : "Not available"}
              </p>
              <h6>Country</h6>

              <p>{val.Country}</p>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                className="btn btn-warning me-2"
              >
                Edit
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                className="btn btn-danger"
              >
                delete
              </button>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <>
      <div className="d-flex flex-wrap flex-row">
        {renderUser(props.UserData)}
      </div>
      <EditUser data={userD} key={`edit${userId}`} />
      <DeleteUser userId={userId} key={`delete${userId}`} />
    </>
  );
};
export default UserDisplay;
