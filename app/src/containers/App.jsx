import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import options from "./particles.config";
import Auth from "../components/Auth/Auth";
import { useState } from "react";
import Home from "../components/Home/Home";

const App = () => {
  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [entries, setEntries] = useState(0);

  const changeAuthHandler = (id, username, entries) => {
    setId(id);
    setUsername(username);
    setEntries(entries);
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  const [view, setView] = useState(
    <Auth changeAuthHandler={changeAuthHandler} />
  );
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!auth) {
      setView(<Auth changeAuthHandler={changeAuthHandler} />);
    } else {
      setView(<Home id={id} username={username} entries={entries} />);
    }
  }, [auth]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="h-screen absolute w-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="fixed -z-10"
      />
      <Header auth={auth} changeAuthHandler={changeAuthHandler} />
      {view}
      <Footer />
    </div>
  );
};

export default App;
