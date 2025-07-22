import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Card = () => {
  const [countStats, setCountStats] = useState({
    students: 0,
    countries: 0,
    experiences: 0,
    universities: 0,
  });

  const finalStats = {
    students: 100000,
    countries: 5,
    experiences: 1000,
    universities: 3,
  };

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Start counter animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animate count up when section is visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = {
      students: finalStats.students / (duration / interval),
      countries: finalStats.countries / (duration / interval),
      experiences: finalStats.experiences / (duration / interval),
      universities: finalStats.universities / (duration / interval),
    };

    let current = {
      students: 0,
      countries: 0,
      experiences: 0,
      universities: 0,
    };

    const timer = setInterval(() => {
      current.students += steps.students;
      current.countries += steps.countries;
      current.experiences += steps.experiences;
      current.universities += steps.universities;

      setCountStats({
        students: Math.min(Math.floor(current.students), finalStats.students),
        countries: Math.min(
          Math.floor(current.countries),
          finalStats.countries
        ),
        experiences: Math.min(
          Math.floor(current.experiences),
          finalStats.experiences
        ),
        universities: Math.min(
          Math.floor(current.universities),
          finalStats.universities
        ),
      });

      if (
        current.students >= finalStats.students &&
        current.countries >= finalStats.countries &&
        current.experiences >= finalStats.experiences &&
        current.universities >= finalStats.universities
      ) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Define card data
  const stats = [
    {
      title: "Students Helped",
      value: countStats.students,
      suffix: "+",
    },
    {
      title: "Countries",
      value: countStats.countries,
      suffix: "+",
    },
    {
      title: "Visa Experiences",
      value: countStats.experiences,
      suffix: "+",
    },
    {
      title: "Universities",
      value: countStats.universities,
      suffix: "+",
    },
  ];

  return (
    <StyledWrapper ref={cardRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="outer" key={index}>
            <div className="dot" />
            <div className="card">
              <div className="ray" />
              <div className="text">
                {stat.value.toLocaleString()}
                <span className="suffix">{stat.suffix}</span>
              </div>
              <div className="label">{stat.title}</div>
              <div className="line topl" />
              <div className="line leftl" />
              <div className="line bottoml" />
              <div className="line rightl" />
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .stats-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
  }

  .outer {
    width: 300px;
    height: 250px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background: radial-gradient(circle at 0% 0%, #444444, #0c0d0d);
    // background: linear-gradient(to bottom, #1d4ed8, #000000, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 3rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
  }

  .suffix {
    font-size: 2rem;
    color: #fff;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }

  .bottoml {
    bottom: 10%;
  }

  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }

  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }

  @media (max-width: 1024px) {
    .stats-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Card;
