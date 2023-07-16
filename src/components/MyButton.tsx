import { Button } from "@material-tailwind/react";
 
export default function MyButton({children}) {
  return (
    <div >
      <Button className="text-md bg-black hover:shadow-blue-gray-200">{children}</Button>
    </div>
  );
}