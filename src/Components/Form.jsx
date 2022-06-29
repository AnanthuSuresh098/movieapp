import "./Form.css"
import { useState } from "react";

export const Form=()=>{

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const handleNameInput=(e)=>{
    setName(e.target.value)
}

const handleEmailInput = (e) => {
  setEmail(e.target.value);
};


const handleClick=()=>{
    if(name==""){
        alert("Please enter name")
    }
    if (email == "") {
      alert("Please enter a valid email");
    }
}

    return (
      <div>
        <h1>Register here !</h1>
        <form>
          <div class="mb-3">
            <label for="Name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={handleNameInput}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={handleEmailInput}
            ></input>
          </div>

          <div class="mb-3">
            <label for="mobile" class="form-label">
              Mobile
            </label>
            <input type="number" class="form-control" id="mobile"></input>
          </div>

          <div class="mb-3">
            <label for="country" class="form-label">
              Country
            </label>
            <input type="text" class="form-control" id="country"></input>
          </div>

          <div class="mb-3">
            <label for="city" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="city"></input>
          </div>

          <div class="mb-3">
            <label for="state" class="form-label">
              State
            </label>
            <input type="text" class="form-control" id="state"></input>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <input type="text" class="form-control" id="message"></input>
          </div>

          <button type="submit" class="submit-btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
}