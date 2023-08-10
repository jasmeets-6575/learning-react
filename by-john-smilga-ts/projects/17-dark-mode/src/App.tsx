import { useState, useEffect } from "react";
import data, { ArticleType } from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  let locSto = localStorage.getItem("theme");
  if (locSto) {
    theme = locSto;
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item: ArticleType) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
