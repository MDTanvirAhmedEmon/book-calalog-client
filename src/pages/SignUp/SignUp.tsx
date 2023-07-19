/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/user/userSlice";
import { IUser } from "../../types/globaltypes";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const navigate = useNavigate()
  const [createUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    console.log(data);
    try {
 
      const result = await createUser(data);
      console.log(result);

      if ('data' in result) {
        // Safely access the 'data' property
        const user = result.data.data as unknown as IUser;
        dispatch(setUser(user));
      }

      // Mutation was successful
    } catch (error) {
      console.log("Error occurred during user creation:", error);
    }
  };
  if(isSuccess){
    toast("User created successfully")
    navigate('/')
  }


  return (
    <div className="container mx-auto text-center my-20">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("name", { required: true })}
              size="lg"
              label="Name"
            />
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
          <Button type="submit" className="mt-6 bg-blue-gray-900" fullWidth>
          Register
        </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              <Link to={'/signin'}>Sign In</Link>
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
