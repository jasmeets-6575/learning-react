import { useState, useEffect, MouseEvent } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

interface Person {
  image: string;
  phone: string;
  email: string;
  password: string;
  age: number;
  street: string;
  name: string;
}

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [person, setPerson] = useState<Person | null>(null);
  const [value, setValue] = useState<string>("random person");
  const [title, setTitle] = useState<string>("name");

  const getPerson = async (): Promise<void> => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const personData = data.results[0];
    const { phone, email } = personData;
    const { large: image } = personData.picture;
    const { password } = personData.login;
    const { first, last } = personData.name;
    const {
      dob: { age },
    } = personData;
    const {
      street: { number, name },
    } = personData.location;

    const newPerson: Person = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const getValueByLabel = (label: keyof Person): string => {
    if (person) {
      return person[label].toString();
    }
    return "";
  };
  const handleValue = (e: MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.classList.contains("icon")) {
      const newValue = e.currentTarget.getAttribute("data-label");
      if (newValue) {
        setTitle(newValue);
        setValue(getValueByLabel(newValue as keyof Person));
      }
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
