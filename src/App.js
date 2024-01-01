import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const Home = () => {
  return <h1>Strona startowa</h1>;
};

const News = () => {
  return <h1>Aktualności</h1>;
};

const Contact = () => {
  return <h1>Kontakt</h1>;
};

const ErrorPage = () => {
  return <h1>Strona nie istnieje</h1>;
};

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "home_selected" : ""
                    }
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      isActive ? "news_selected" : ""
                    }
                  >
                    Aktualności
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "contact_selected" : ""
                    }
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
