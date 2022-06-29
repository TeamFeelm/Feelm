import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Canvas() {
  const canvasRaf = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  let ctx: any = undefined;

  const video = useRef() as React.MutableRefObject<HTMLVideoElement>;

  const spotRaf = useRef() as React.MutableRefObject<HTMLDivElement>;
  const text = useRef() as React.MutableRefObject<HTMLDivElement>;
  const btn = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/test");
  };

  useEffect(() => {
    const canvas = canvasRaf.current;

    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    let x = 0.2;
    let y = 0.3;

    let circle1 = 0.5;
    let circle2 = 0.2;

    let step = 1;

    let id: any;
    let id2: any;

    const render: any = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height);

      id = requestAnimationFrame(resetFocus);
      id2 = requestAnimationFrame(render);
    };

    const resetFocus: any = () => {
      spotRaf.current.style.background = `radial-gradient(
        circle
        ${(window.innerWidth + window.innerHeight) * circle1 * circle2}px at 
        ${window.innerWidth * x + "px"} 
        ${window.innerHeight * y + "px"},
        rgba(1, 5, 27, 0) 0%,
        rgba(1, 5, 27, 0.3) 70%,
        rgba(1, 5, 27, 1) 100%`;

      switch (step) {
        case 1:
          if (x < 0.8 && step == 1) {
            x += 0.03;
            y += 0.03;
          }
          if (x >= 0.8) {
            step = 2;
          }
          break;

        case 2:
          if (x >= 0.1 && step == 2) {
            x -= 0.02;
            y -= 0.01;
          }
          if (x <= 0.1) {
            step = 3;
          }
          break;

        case 3:
          if (x <= 0.1 && step == 3) {
            x += 0.02;
            y -= 0.02;
          }
          if (y >= 0.1) {
            step = 4;
          }
          break;

        case 4:
          if (y >= 0.1 && step == 4) {
            x += 0.02;
            y += 0.02;
          }
          if (y >= 0.8) {
            step = 5;
          }
          break;

        case 5:
          if (y >= 0.8 && step == 5) {
            x -= 0.02;
            y -= 0.02;
          }
          if (y >= 0.1) {
            step = 6;
          }
          break;

        case 6:
          if (y >= 0.1 && step == 6) {
            x += 0.01;
            y -= 0.02;
          }
          if (y <= 0.4) {
            circle1 += 0.02;
            circle2 += 0.02;
          }
          if (circle1 >= 1) {
            text.current.style.opacity = "1";
            btn.current.style.opacity = "1";
            step = 7;
          }
          break;

        case 7:
          if (circle1 >= 1) {
            circle1 == window.innerWidth;
            circle2 == window.innerHeight;
            btn.current.style.cursor = "pointer";
            step = 8;
          }
          break;

        case 8:
          break;
      }
    };

    video.current.addEventListener("canplaythrough", render);
    video.current.addEventListener("canplaythrough", resetFocus);

    return () => {
      cancelAnimationFrame(id);
      cancelAnimationFrame(id2);
    };
  }, []);

  return (
    <MovieBox>
      <SpotLight ref={spotRaf} />
      <Text ref={text}>
        <Header>Find Your Feelm</Header>
      </Text>
      <StartBtn ref={btn} onClick={btnClick}>
        TEST START
      </StartBtn>
      <Video ref={video} src="src\assets\images\asd.mp4" autoPlay muted loop></Video>
      <canvas ref={canvasRaf} style={{ width: "100vw", height: "100vh" }}></canvas>
    </MovieBox>
  );
}

const Header = styled.h1``;

const Video = styled.video`
  position: absolute;
  width: 0px;
  height: 0px;
`;

const MovieBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SpotLight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle 50px at 100px 100px,
    rgba(1, 5, 27, 0.01) 0%,
    rgba(1, 5, 27, 0.5) 70%,
    rgba(1, 5, 27, 0.96) 100%
  );
  transition: top 0.1s, left 0.1s;
  z-index: 10;
`;

const Text = styled.div`
  position: absolute;
  width: fit-content;
  text-align: center;
  opacity: 0;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2rem;
  transition-duration: 1s;
  color: white;
`;

const StartBtn = styled.button`
  position: absolute;
  bottom: 25vh;
  left: 50%;
  transform: translate(-50%, 0);
  color: rgba(1, 5, 27, 1);
  background-color: rgba(255, 255, 255, 0.7);
  width: 200px;
  height: 80px;
  border-radius: 5px;
  font-size: 20px;
  transition-duration: 1s;
  z-index: 100;
  opacity: 0;
  cursor: pointer;
  &:hover {
    background-color: white;
    transition-duration: 0.2s;
    font-size: 22px;
  }
`;
