export default function MovieInfo({ movie, info }: props) {
  return (
    <>
      <div>
        <p>title : {movie?.title}</p>
        <p>enTitle : {info?.enTitle}</p>
        <p>ntzRating : {info?.ntzRating}</p>
        <p>spcRating : {info?.spcRating}</p>
        <p>genre : {info?.genre}</p>
        <p>runtime : {info?.runtime}</p>
        <p>cast : {info?.cast}</p>
      </div>
    </>
  );
}

interface props {
  movie: {
    id: string;
    title: string;
    genre: string[];
    synop: string;
    director: string;
    cast: string[];
    runTime: number;
    year: number;
    img: string;
  };
  info?: {
    enTitle: string;
    title: string;
    synops: string;
    lines: string;
    runtime: string;
    grade: string;
    peopleImg: string[];
    ntzRating: string;
    spcRating: string;
    genre: string;
    cast: string;
  };
}
