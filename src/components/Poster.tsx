import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Poster = ({ id, src }: props) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate(`/detail/${id}`);
  };
  return <Box src={src} alt="" onClick={toDetail} />;
};

interface props {
  id?: string;
  src: string;
}

const Box = styled.img`
  width: 360px;
  height: 500px;
  display: inline-block;
  object-fit: cover;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: 270px;
    height: 375px;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 250px;
  }
`;

export default Poster;
