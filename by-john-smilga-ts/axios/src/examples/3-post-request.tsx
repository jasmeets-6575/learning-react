import { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";

const url = "https://course-api.com/axios-tutorial-post";

const PostRequest: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email);

    // Assuming you want to make a POST request to the specified URL with the form data
    try {
      const response = await axios.post(url, { name, email });
      console.log(response.data); // Assuming the API returns some response data
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response);
    }

    // Reset the form fields after submission (optional)
    setName("");
    setEmail("");
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          register
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
