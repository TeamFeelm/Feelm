import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Poster = ({ id, src, rotate }: props) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate(`/detail/${id}`);
  };
  return <Box style={rotate} src={src} alt="" onClick={toDetail} />;
};

interface props {
  id?: string;
  src: string;
  rotate?: React.CSSProperties;
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
  @media screen and (max-width: 1200px) {
    width: 270px;
    height: 375px;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 250px;
    margin: 5px;
  }
`;

export default Poster;
