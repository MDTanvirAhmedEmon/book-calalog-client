/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppSelector } from "../../redux/hooks";
import { useAddNewBookMutation } from "../../redux/api/apiSlice";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";


interface IFormInput {
    title: string;
    imageUrl: string;
    author: string;
    genre: string;
    authorId?: string;
    reviews?: string; 
}

const AddBook = () => {
    // const navigate = useNavigate()
    const {user} = useAppSelector((state) => state.user)
    const [addNewBook, {isError, isSuccess, isLoading}] = useAddNewBookMutation();
     console.log(isError);

    const authorId = user?._id as string;

    const { register, handleSubmit, reset } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const BookWithAuthorId = {...data, authorId}
        try{
            const result = await addNewBook(BookWithAuthorId)
            console.log(result)
            if(result.data){
                toast('Book Added Successfully')
                reset();
            }
        }
        catch(error) {
            console.error(error)
        }
    }



    return (
        <div className="py-20 container mx-auto">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-96 h-[520px] p-4 mx-auto">
                    <div className="mt-8">
                        <label htmlFor="title">Book Title</label>
                        <input  {...register("title", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="title" placeholder="Book Title"  />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="imageUrl">Image Url</label>
                        <input {...register("imageUrl", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="imageUrl" placeholder="Copy image Url and past here"  />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="author">Author Name</label>
                        <input {...register("author", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="author" placeholder="Author"  />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="genre">Genre</label>
                        <input {...register("genre", { required: true })} className="border-2 rounded-md w-full p-2 mt-2" type="text" name="genre" placeholder="Genre"  />
                    </div>
                    <div className="mt-8">
                        <input className="bg-black text-white cursor-pointer p-2 w-full rounded-md" type="submit" value="Add Book" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;