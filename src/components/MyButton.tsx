import { Button } from "@material-tailwind/react";

interface IProps {
  children: string
}

export default function MyButton({children}:IProps) {
  return (
    <div >
      <Button className="text-md bg-black hover:shadow-blue-gray-200">{children}</Button>
    </div>
  );
}