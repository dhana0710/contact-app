import React from "react";

const AddContact = () => {
  return (
    <div className="container mt-3">
      <div>
        <h2>Add Contact</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputName" class="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
