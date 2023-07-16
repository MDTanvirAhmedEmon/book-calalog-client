import { IBook } from "../../types/globaltypes";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
type IProps = {
    book: IBook
 }


  export default function BookCart({book}: IProps) {
    const {title, imageUrl, author, genre } = book;
    return (
      <Card className="mt-6 box-border">
        <CardHeader color="blue-gray" className="relative h-72">
          <img className="w-100" src={imageUrl} alt="img-blur-shadow"  />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-black">View Details</Button>
        </CardFooter>
      </Card>
    );
  }