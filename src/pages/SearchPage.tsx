import styled from "styled-components";
import Result from "../components/Result";
import Tags from "../components/Tags";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <Box>
      <Search></Search>
      <Tags></Tags>
      <Result></Result>
    </Box>
  );
};

const Box = styled.div`
  width: 75vw;
  height: 100%;
  margin: auto;
  position: relative;
`;

export default SearchPage;
