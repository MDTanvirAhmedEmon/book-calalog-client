/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { getSearchValue } from "../../redux/features/user/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBook } from "../../types/globaltypes";
import BookCart from "../Home/BookCart";


const AllBooks = () => {
  const { searchTerm } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useGetBooksQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
  });

  const handleInputChange = (event: { target: { value: string } }) => {
    dispatch(getSearchValue(event.target.value));
  };

  return (
    <div className="container mx-auto">

      <form className="mt-8">
        <input
          onChange={handleInputChange}
          className="border border-blue-gray-900 p-2  w-[300px] mx-6 md:mx-0"
          type="text"
          name=""
          id=""
          placeholder="search"
        />
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mx-5 md:mx-0 w-100 gap-10  my-20">

        {data?.data?.map((book: IBook) => (
          <BookCart key={book._id as string} book={book}></BookCart>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
