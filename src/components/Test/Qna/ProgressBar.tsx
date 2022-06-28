import styled from "styled-components";

export default function ProgressBar({ progress }: props) {
  return (
    <>
      <ProgressDiv progress={progress * 14.3} />
    </>
  );
}

interface props {
  progress: number;
}

const ProgressDiv = styled.div<props>`
  width: ${(props) => props.progress}%;
  height: 5px;
  background-color: #f5c443;
  transition: 1s;
`;
