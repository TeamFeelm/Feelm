import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, firstPage } from "../../store";

export default function Canvas() {
  const canvasRaf = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  let ctx: any = undefined;

  const video = useRef() as React.MutableRefObject<HTMLVideoElement>;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnClick = () => {
    navigate("/test");
  };

  const [inner, setInner] = useState((window.innerWidth + window.innerHeight) * 0.1);
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [visibility, setVisiblity] = useState("hidden");

  useEffect(() => {
    setVisiblity("visibility");
    const canvas = canvasRaf.current;

    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    let id: any;

    const render: any = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height);
      id = requestAnimationFrame(render);
    };

    video.current.addEventListener("canplaythrough", render);

    const movepoint = (e: MouseEvent) => {
      setX(e.offsetX);
      setY(e.offsetY);
    };

    window.addEventListener("mousemove", movepoint);

    window.addEventListener("click", () => {
      window.removeEventListener("mousemove", movepoint);
      setX(window.innerWidth / 2);
      setY(window.innerHeight / 2);
      setScale(10);
      setOpacity(1);
      setVisiblity("hidden");
      dispatch(firstPage());
    });

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <MovieBox>
      <Mouse inner={inner} x={x} y={y} scale={scale} visibility={visibility} />
      <Text opacity={opacity}>
        당신과 닮은 영화 속 주인공을<br></br>찾아보세요🎬
      </Text>
      <StartBtn onClick={btnClick} opacity={opacity}>
        TEST START
      </StartBtn>
      <Video ref={video} src="src\assets\images\asd.mp4" autoPlay muted loop></Video>
      <canvas ref={canvasRaf} style={{ width: "100vw", height: "100vh" }}></canvas>
    </MovieBox>
  );
}

interface props {
  inner: number;
  x: number;
  y: number;
  scale: number;
  visibility: string;
}

interface opacity {
  opacity: number;
}

const Mouse = styled.div<props>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  transition-duration: 1s;
  visibility: ${(props) => props.visibility};
  transform: scale(${(props) => props.scale});
  background: radial-gradient(
    circle ${(props) => props.inner}px at ${(props) => props.x}px ${(props) => props.y}px,
    rgba(8, 14, 47, 0) 50%,
    rgba(8, 14, 47, 0.1) 60%,
    rgba(8, 14, 47, 0.15) 65%,
    rgba(8, 14, 47, 0.2) 70%,
    rgba(8, 14, 47, 0.3) 75%,
    rgba(8, 14, 47, 0.5) 85%,
    rgba(8, 14, 47, 0.8) 100%
  );
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Video = styled.video`
  position: absolute;
  width: 0px;
  height: 0px;
`;

const MovieBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Text = styled.div<opacity>`
  position: absolute;
  width: fit-content;
  text-align: center;
  width: 90%;
  top: 15%;
  left: 5%;
  font-size: 40px;
  transition-duration: 0.4s;
  color: white;
  opacity: ${(opacity) => opacity.opacity};
  @media screen and (max-width: 480px) {
    top: 30%;
    font-size: 25px;
  }
`;

const StartBtn = styled.button<opacity>`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #f5c443;
  background-color: rgba(255, 255, 255, 0.7);
  width: 200px;
  height: 80px;
  border-radius: 5px;
  font-size: 20px;
  font-family: "yg-jalnan";
  transition-duration: 0.4s;
  z-index: 100;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  &:hover {
    background-color: white;
    transition-duration: 0.2s;
    font-size: 22px;
  }
`;
