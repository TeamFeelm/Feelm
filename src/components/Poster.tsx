import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Poster = ({ id, src }: props) => {
  const toDetail = () => {
    const navigate = useNavigate();
    navigate(`/detail/${id}`);
  };
  return <Box src={src} alt="" onClick={toDetail} />;
};

interface props {
  id: number;
  src: string;
}

const Box = styled.img`
  width: 33.3%;
  display: inline-block;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export default Poster;
