import styled from "styled-components";

export default function StarRating({ rating }: props) {
  return (
    <div>
      <Blanked>
        &#9733;&#9733;&#9733;&#9733;&#9733;
        <Filled rating={rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</Filled>
      </Blanked>
      &nbsp;{rating}
    </div>
  );
}

interface props {
  rating: string;
}

const Blanked = styled.div`
  position: relative;
  width: max-content;
  color: white;
  display: inline-block;
`;

const Filled = styled.div<props>`
  position: absolute;
  top: 0;
  left: 0;
  color: #f5c443;
  z-index: 10;
  width: ${(props) => Number(props.rating) * 10}%;
  overflow: hidden;
`;
