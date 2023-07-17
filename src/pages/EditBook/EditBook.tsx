/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from "react-hook-form";
import {  useEditBookMutation, useGetSingleBookQuery } from "../../redux/api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

interface IFormInput {
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  authorId?: string;
  reviews?: string; 
}

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);

  const [editBook, { isSuccess }] = useEditBookMutation();

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const options = {
        id: id,
        data: data
    };
    try {
      const result = await editBook(options);
      console.log(result);
      if (result?.data) {
        toast('Book Edited Successfully');
        navigate('/allbooks');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div className="text-center text-5xl mt-10">Loading...</div>;
  }


  const { title, author, imageUrl, genre } = data?.data;

  return (
    <div className="py-20 container mx-auto">
      <h2 className="mb-10 text-4xl text-center">Edit Book Details</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg w-96 h-[520px] p-4 mx-auto">
          <div className="mt-8">
            <label htmlFor="title">Book Title</label>
            <input {...register("title", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="title" placeholder="Book Title" defaultValue={title} />
          </div>
          <div className="mt-4">
            <label htmlFor="imageUrl">Image Url</label>
            <input {...register("imageUrl", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="imageUrl" placeholder="Copy image Url and past here" defaultValue={imageUrl} />
          </div>
          <div className="mt-4">
            <label htmlFor="author">Author Name</label>
            <input {...register("author", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="author" placeholder="Author" defaultValue={author} />
          </div>
          <div className="mt-4">
            <label htmlFor="genre">Genre</label>
            <input {...register("genre", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="genre" placeholder="Genre" defaultValue={genre} />
          </div>
          <div className="mt-8">
            <input className="bg-black text-white cursor-pointer p-2 w-full rounded-md" type="submit" value="Make Changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
