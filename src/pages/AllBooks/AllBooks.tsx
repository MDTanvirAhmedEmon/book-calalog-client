
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { getSearchValue } from "../../redux/features/user/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBook } from "../../types/globaltypes";
import BookCart from "../Home/BookCart";



const AllBooks = () => {
    const { searchTerm } = useAppSelector((state) => state.search)
    console.log(searchTerm)
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetBooksQuery(searchTerm);

    const handleInputChange = (event: { target: { value: string; }; }) => {
        dispatch(getSearchValue(event.target.value))
      }; 


    return (
      <div className="container mx-auto">
        <form className="mt-8">
            <input onChange={handleInputChange} className="border border-blue-gray-900 p-2  md:w-1/3 lg:w-1/4 mx-6 md:mx-0" type="text" name="" id="" placeholder="search" />

        </form>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mx-5 md:mx-0 w-100 gap-10  my-20">
          {data?.data?.map((book: IBook) => (
            <BookCart key={book._id} book={book}></BookCart>
          ))}
        </div>
      </div>


    );
};

export default AllBooks;