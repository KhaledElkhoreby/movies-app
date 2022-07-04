import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { HashLoader } from 'react-spinners';
import MoviesList from '../components/Movies/MoviesList';
import { useSearchForMoviesQuery } from '../data/store/movies';

export default function Search() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useSearchForMoviesQuery({
    query,
    currentPage,
  });

  const movies = data?.results;
  const pageCount = data?.total_pages || 0;

  const onChangeSearchHandler = (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      setQuery(query);
    }
  };

  const handlePageClick = (data) => {
    console.log(data);
    let currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  };

  return (
    <div className="container">
      <div className="form-control">
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="Search..."
            className="input input-bordered w-screen max-w-lg"
            onChange={onChangeSearchHandler}
          />
        </div>
      </div>
      {isLoading && (
        <HashLoader
          color="#d1255b"
          loading
          size={70}
          speedMultiplier={2}
          className="mx-auto mt-5 "
        />
      )}
      {movies && <MoviesList movies={movies} />}
      <ReactPaginate
        renderOnZeroPageCount={null}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={
          'inline-flex -space-x-px fixed bottom-8 left-[50%] translate-x-[-50%] border-gray-50 shadow-sm shadow-white'
        }
        pageLinkClassName={
          'py-2 px-3 text-white border hover:bg-gray-600  border-gray-700 bg-gray-700 text-white'
        }
        previousLinkClassName={
          'py-2 px-3 leading-tight rounded-l-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
        }
        nextLinkClassName={
          'py-2 px-3 leading-tight rounded-r-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
        }
        breakLinkClassName={
          'py-2 px-3 hover:text-blue-700 border-gray-700 bg-gray-700 text-white'
        }
        activeLinkClassName={
          'py-2 px-3 text-white border border-gray-300  bg-red-700 border-gray-700 text-white'
        }
      />
    </div>
  );
}
