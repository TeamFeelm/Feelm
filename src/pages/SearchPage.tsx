import styled from "styled-components";
import { SearchResult, Tags, SearchForm, Footer } from "../components";
import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [scroll, setScroll] = useState("0");
  useEffect(() => {
    const setVisi = () => {
      if (window.scrollY > 400) {
        setScroll("2rem");
      } else {
        setScroll("0");
      }
    };

    window.addEventListener("scroll", setVisi);
  }, []);
  return (
    <SearchBox size={scroll}>
      <SearchForm></SearchForm>
      <Tags></Tags>
      <SearchResult></SearchResult>
      {scroll && (
        <BsArrowUpCircle
          className="up_btn"
          onClick={() => {
            window.scroll(0, 0);
          }}
        ></BsArrowUpCircle>
      )}
      <Footer></Footer>
    </SearchBox>
  );
};

interface size {
  size: string;
}

const SearchBox = styled.div<size>`
  width: 78vw;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
  @media screen and (max-width: 768px) {
    width: 96vw;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
  }

  .up_btn {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    font-size: ${(props) => props.size};
    z-index: 100;
    transition: 0.3s all ease;
    cursor: pointer;
    :hover {
      color: #f5c443;
    }
  }
`;

export default SearchPage;
