/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetCommentQuery, usePostCommentMutation } from "../../redux/api/apiSlice";


interface IProps {
    id: string;
  }

  interface IFormInput {
    comment: string;
}

const BookReview = ({ id }: IProps) => {

    const[postComment, { isSuccess }] = usePostCommentMutation();
    console.log(isSuccess);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {data} = useGetCommentQuery(id, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
      });
    console.log(data);

    const { register, handleSubmit, reset } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data);
        const options = {
            id: id,
            data: {
                comment: data.comment,
            }
        }
        try{
            const result = await postComment(options)
            if(result) {
                reset();
            }
    
        }
        catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="mt-10">
            <p className="text-4xl my-5">Review</p>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex">

                    <input {...register("comment", { required: true })} className="border-2 w-[90%] p-2 rounded-md" placeholder="Review" type="text" name="comment" id="" />
                    <input className="w-[10%] bg-blue-gray-900 text-white rounded-md cursor-pointer" type="submit" value="Send" />
                </form>
            </div>
            <div>
                {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    data?.data?.reviews?.map((review: string, index: number )=>(
                        <div className="p-2 bg-blue-gray-50 rounded-md mt-2" key={index}>{review}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default BookReview;