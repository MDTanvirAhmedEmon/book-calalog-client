import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
 
export default function SignIn() {
  return (
    <div className="container mx-auto py-20">
    <Card className="w-96 mx-auto">
      <CardHeader
        variant="gradient"
        className="mb-4 grid h-28 place-items-center bg-black"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />

      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-black hover:shadow-blue-gray-200" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don't have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    </div>

  );
}