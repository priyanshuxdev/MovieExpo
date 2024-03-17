import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Pagination = ({ movie, totalPages, handleClick }) => {
  return (
    <>
      {movie.length > 0 && (
        <ReactPaginate
          breakLabel={<span>. . .</span>}
          nextLabel={
            <span className="w-14 h-14 flex items-center justify-center bg-purple-700 rounded-full ml-4 transition duration-500 ease-in-out transform hover:scale-110">
              <FaArrowRight />
            </span>
          }
          onPageChange={handleClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel={
            <span className="w-14 h-14 flex items-center justify-center bg-purple-700 rounded-full mr-4 transition duration-500 ease-in-out transform hover:scale-110">
              <FaArrowLeft />
            </span>
          }
          containerClassName="flex justify-center gap-3 md:gap-10 mt-10 items-center text-white md:text-[14px]"
          pageClassName="text-white block border-2 border-gray-800 p-2 rounded-lg  bg-[#212426] focus:outline-none focus:ring-2 focus:ring-purple-700 focus:shadow-purple-700 focus:border-transparent transition duration-500 ease-in-out transform hover:scale-105"
          activeClassName="bg-purple-700 text-white"
        />
      )}
    </>
  );
};

export default Pagination;
