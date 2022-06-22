import styled from "styled-components";
import { Result, Tags, Search } from "../components";

const SearchPage = () => {
  return (
    <SearchBox>
      <Search></Search>
      <Tags></Tags>
      <Result></Result>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 78vw;
  height: 100%;
  margin: auto;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
  @media screen and (max-width: 768px) {
    width: 96vw;
  }
`;

export default SearchPage;
