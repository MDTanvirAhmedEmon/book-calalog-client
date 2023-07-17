import { Link } from "react-router-dom";
import MyButton from "../../components/MyButton";
import { useGetRecentBooksQuery } from "../../redux/api/apiSlice";

import { IBook } from "../../types/globaltypes";
import BookCart from "./BookCart";

const RecentBooks = () => {
  const { data, isLoading } = useGetRecentBooksQuery(undefined, {refetchOnMountOrArgChange: true});
  console.log(data);

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div>
          <h4 className="text-5xl text-center">Recently Added Books</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 mx-5 md:mx-0 w-100 gap-10  my-20">
          {data?.data?.map((book: IBook) => (
            <BookCart book={book}></BookCart>
          ))}
        </div>
        <div className='text-center'>
        <Link to={'/allbooks'}><MyButton>View More</MyButton></Link> 
        </div>

      </div>
    </div>
  );
};

export default RecentBooks;
