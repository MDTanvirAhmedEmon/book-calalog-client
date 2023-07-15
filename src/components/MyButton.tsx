import { Button } from "@material-tailwind/react";
 
export default function MyButton({text}) {
  return (
    <div >
      <Button className="text-md" color="red">{text}</Button>
    </div>
  );
}