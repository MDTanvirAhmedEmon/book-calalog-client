/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";
import MyButton from "../../components/MyButton";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id,{refetchOnMountOrArgChange: true});

  const {user: reduxUser} = useAppSelector((state) => state.user)

  if (isLoading) {
    return <div className="text-center text-5xl mt-10">Loading...</div>;
  }


  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { title, author, imageUrl, genre, authorId, _id } = data?.data;

  return (
    <div className="container mx-auto py-20">
      <div className="flex w-full items-center">
        <div className="w-1/2">
          <img className="w-[400px]" src={imageUrl} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl">{title}</h1>
          <p className="mt-8 text-lg">Author: {author}</p>
          <p className="text-lg font-bold mb-4">Genre: {genre}</p>
          {
            reduxUser?._id === authorId && <Link to={`/editbook/${_id as string}`}><MyButton>Edit Book</MyButton></Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
