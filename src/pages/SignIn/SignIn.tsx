import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function SignIn() {
    return (
      <div className="pt-12 pb-12 container mx-auto">
        <Card className="" color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to Sign In.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" color="green" label="Email" />
            <Input type="password" color="green" size="lg" label="Password" />
          </div>

          <Button className="mt-6 bg-red-500" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
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