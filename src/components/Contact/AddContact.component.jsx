import React, { useState } from "react";

const AddContact = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  let add = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
      alert("All the fields all mandatory");
      return;
    }
    //console.log(data);
    props.addContactHandler(data);
    setData({ name: "", email: "" });
  };

  return (
    <div className="container mt-3">
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={add}>
          <div className="mb-3">
            <label for="exampleInputName" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Joe"
              value={data.name}
              onChange={(e) =>
                setData((preval) => {
                  return {
                    ...preval,
                    name: e.target.value,
                  };
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="@gmail.com"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={(e) =>
                setData((preval) => {
                  return {
                    ...preval,
                    email: e.target.value,
                  };
                })
              }
            />
          </div>

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
