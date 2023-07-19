/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyButton from "../../components/MyButton";
import BookReview from "../BookReview/BookReview";
import { addBookToWishList } from "../../redux/features/wishList/wishListSlice";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading } = useGetSingleBookQuery(id,{refetchOnMountOrArgChange: true});

  const {user: reduxUser} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div className="text-center text-5xl mt-10">Loading...</div>;
  }
  const handleWishList =() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    dispatch(addBookToWishList(data?.data));
    toast('Added to wish list')
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-unsafe-optional-chaining
  const { title, author, imageUrl, genre, authorId, _id } = data?.data;

  return (
    <div className="container mx-auto py-20">
      <div className="flex w-full items-center">
        <div className="w-1/2">
          <img className="w-[400px]" src={imageUrl as string} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl">{title}</h1>
          <p className="mt-8 text-lg">Author: {author}</p>
          <p className="text-lg font-bold mb-4">Genre: {genre}</p>
          {
            reduxUser?._id === authorId && <div>
              <Link to={`/editbook/${_id as string}`}><MyButton>Edit Book</MyButton></Link> 
              </div>
          }
      {reduxUser && <div className="mt-5">

        <span onClick={handleWishList} className="text-md bg-blue-gray-700 p-2 text-white cursor-pointer rounded-md">Add To Wishlist</span>

      </div>
      }
        </div>
      </div>
      {reduxUser && 
        <BookReview id={id!}></BookReview>}
    </div>
  );
};

export default BookDetails;
