/* eslint-disable @typescript-eslint/no-misused-promises */
import { Card, Input, Typography } from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useSignInUserMutation } from "../../redux/api/apiSlice";


interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate()

  const [signInUser, { isLoading, isError, isSuccess }] =
    useSignInUserMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);


  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    console.log(data);
    try {
 
      const result = await signInUser(data);
      console.log(result);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (result) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const user = result.data.data;
        localStorage.setItem('user', JSON.stringify(user));
      }

      // Mutation was successful
    } catch (error) {
      console.log("Error occurred during user creation:", error);
    }
  };
  if(isSuccess){
    toast('Sign In User Successfully');
  }


  return (
    <div className="container mx-auto text-center my-20">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign In.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("email", { required: true })}
              size="lg"
              label="Email"
            />
            <Input
              {...register("password", { required: true })}
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          <Input
            className=" bg-gray-900 cursor-pointer text-white border-none"
            type="submit"
            value="Sign In"
            size="lg"
          />
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
