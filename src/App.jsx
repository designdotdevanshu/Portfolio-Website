import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October, 01, 2024";

  const calculateTimeLeft = () => {
    const difference = Date.parse(deadline) - Date.now();

    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((difference / 1000 / 60) % 60));
    setSeconds(Math.floor((difference / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => calculateTimeLeft(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <>
      <div className="wrapper">
        <h1>
          This site is under construction{" "}
          <span role="img" aria-label="construction">
            🚧
          </span>
        </h1>
        <p>
          I am Devanshu, a Frontend Developer. I am currently working on this site and
          <h2>It will be live in</h2>
          <div className="countdown">
            <h2 className="countdown-time">
              {days < 10 ? `0${days}` : days} : {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </h2>
            <p className="countdown-label">Days : Hours : Minutes : Seconds</p>
          </div>
          Meanwhile you can check out my{" "}
          <a href="https://github.com/designdotdevanshu/" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
        <p>
          If you want to contact me, you can do it through my email: <a href="mailto:design.devanshu@gmail.com">design.devanshu@gmail.com</a>
        </p>
        <p>
          or you can find me on{" "}
          <a href="https://www.linkedin.com/in/designdotdevanshu/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          ,{" "}
          <a href="https://twitter.com/design_devanshu/" target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          and{" "}
          <a href="https://instagram.com/designdotdevanshu/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
        <p></p>
      </div>
    </>
  );
}

export default App;
