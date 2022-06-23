import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export default function Canvas() {
  const canvasRaf = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  let ctx: any = undefined;

  const video = useRef() as React.MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    const canvas = canvasRaf.current;

    ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    let oX = canvas.width / 2;
    let oY = canvas.height / 4;
    let scale = 0.01;

    const stateTitle = [
      {
        time: 1,
        message: "여러분이 만약 영화속에 들어가게된다면 어떤 캐릭터가 되게 될까요",
        x: oX,
        y: oY,
      },
      {
        time: 2,
        message: "테스트를 진행하시고 당신의 캐릭터를 찾아보세요",
        x: oX,
        y: oY + 70,
      },
    ];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.resetTransform();
      ctx.textAlign = "center";
      ctx.font = "normal 60px serif";
      ctx.resetTransform();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video.current, 0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stateTitle.length; i++) {
        if (video.current.currentTime > stateTitle[i].time) {
          scale = scale + (1 - scale) * 0.1;
          ctx.scale(scale, scale);
          ctx.fillText(stateTitle[i].message, stateTitle[i].x, stateTitle[i].y);
          draw();
          if (scale >= 0.999) {
            scale = 1;
          }
        }
      }

      requestAnimationFrame(render);
    };

    video.current.addEventListener("canplaythrough", render);
  }, []);

  return (
    <MovieBox>
      <Video ref={video} src="src\assets\images\asd.mp4" autoPlay muted loop></Video>
      <canvas ref={canvasRaf} style={{ width: "100vw", height: "100vh" }}></canvas>
    </MovieBox>
  );
}

const Video = styled.video`
  position: absolute;
  width: 0px;
  height: 0px;
`;

const MovieBox = styled.div`
  width: 100vw;
  height: 100vh;
`;
