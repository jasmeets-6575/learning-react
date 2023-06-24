import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpasssword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const resJson = await response.json();
    console.log(resJson);
    if (resJson.authToken) {
      localStorage.setItem("token", resJson.authToken);
      navigate("/");
    }else{
        alert("Invalid Credentials")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.name}
            name="name"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
            name="email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            onChange={onChange}
            value={credentials.password}
            name="password"
            required
            minLength={5}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="cpassword" class="form-label">
            Confirm Password
          </label>
          <input
            type="cpassword"
            class="form-control"
            id="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
            name="cpassword"
            required
            minLength={5}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
