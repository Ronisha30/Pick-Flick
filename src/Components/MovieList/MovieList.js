import SingleMovie from "../SingleMovie/SingleMovie";
import "./MovieList.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";


  //  This component is used to host all the movies from a single category.
export default function MovieList({ movies }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (e,value) =>{
    setPage(value)
  }

  // This is also the component that is responsible for rendering the pagination buttons on each category
    return (
    <Stack>
      <Pagination className='page-count' onChange ={handleChange}page={page} count={Math.ceil(movies.length/6)} variant="outlined" color = "primary" />
      <div className='movie-list'>
        {movies?.slice((page-1)*6,page* 6-1).map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </Stack>
  );
}
