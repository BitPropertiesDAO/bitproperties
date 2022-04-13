import React, { useEffect, useRef } from "react";
import "./styles.css";
import HeroImage from "../../static/HeroImage.png";
import MainHouse from "../../static/MainHouse.png";
import MainProperty from "../../static/MainProperty.png";
import LeftProperty from "../../static/PropertyPos3.png";

import { useMousePosition } from "../../utils/useMousePosition";

export default function HomePage() {
  const position = useMousePosition();

  //For Linear Interpolation
  //Move to it's own component
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  const parralaxY = ((position.y - y) * 2) / window.innerHeight;

  const parralaxX = ((position.x - x) * 2) / window.innerWidth;

  const yPos = useRef(0);
  const xPos = useRef(0);
  const timingFunction = 0.03;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  useEffect(() => {
    yPos.current = lerp(yPos.current, 20 * parralaxY, timingFunction);
    xPos.current = lerp(xPos.current, 15 * parralaxX, timingFunction);
  });

  return (
    <div className="container">
      <section>
        <div className="section--hero">
          <div className="section--hero--left">
            <p className="hero--title">
              The fully fledged platform for DAOs managing real world assets
            </p>
            <p className="hero--sub">
              Bit Properties simplifies DAO management by providing a platform
              to manage real-world and metaverse properties and assets, manage
              re-constitution at the asset level, and manage payment splitting.
              We aim to make asset management on blockchains smoother and more
              more reliable
            </p>
            <button className="primary--button">Start your DAO journey</button>
          </div>
          {/* <div
            style={{ backgroundColor: "orange" }}
            className="section--hero--right"
          >
            <div>
              <div className="main--div--">
                <img
                  style={{
                    transform: `translate(${xPos.current}px, ${yPos.current}px)`,
                  }}
                  alt=""
                  src={MainProperty}
                  className="main--card--"
                ></img>
              </div>
              <div className="left--div--">
                <img
                  src={LeftProperty}
                  alt=""
                  className="left--card--"
                  style={{
                    transform: `translate(${xPos.current * 1.5}px, ${
                      yPos.current * 1.5
                    }px)`,
                  }}
                ></img>
              </div> */}
          {/* <div className="right--div--">
                <img
                  src={PropRight}
                  alt=""
                  className="right--card--"
                  style={{
                    transform: `translate(${xPos.current * 1.5}px, ${
                      yPos.current * 1.5
                    }px)`,
                  }}
                ></img>
              </div> */}
          {/* </div>
          </div> */}
          <div className="section--hero--right">
            <div
              className="section--hero--right--card main--card"
              style={{
                transform: `translate(${xPos.current}px, ${yPos.current}px)`,
              }}
            >
              <div className="card--image">
                <img className="main--image" src={MainHouse} alt=""></img>
              </div>
            </div>
            <div
              className="section--hero--right--card right--card"
              style={{
                transform: `translate(${xPos.current * 1.5}px, ${
                  yPos.current * 1.5
                }px)`,
              }}
            ></div>
            <div
              className="section--hero--right--card left--card"
              style={{
                transform: `translate(${xPos.current * 1.5}px, ${
                  yPos.current * 1.5
                }px)`,
              }}
            ></div>
            <img className="hero--image" src={HeroImage} alt="hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
