import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export default function Canvas() {
  const canvasRaf = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  let ctx: any = undefined;

  const video = useRef() as React.MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    const canvas = canvasRaf.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2 + 6;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight + 3}px`;

    ctx = canvas.getContext("2d");

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height + 3);
      ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height + 3);
      requestAnimationFrame(render);
    };

    video.current.addEventListener("canplaythrough", render);
  }, []);

  return (
    <div>
      <Video ref={video} src="src\assets\images\asd.mp4" autoPlay muted loop></Video>
      <canvas ref={canvasRaf}></canvas>
    </div>
  );
}

const Video = styled.video`
  position: absolute;
  width: 0px;
  height: 0px;
`;
