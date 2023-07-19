import { useAppSelector } from "../../redux/hooks";
import { IBook } from "../../types/globaltypes";
import WishCart from "./WishCart";


const WishList = () => {

    const {wishlist} = useAppSelector((state) => state.wishlist)


    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  w-100 gap-10  my-20">
        {wishlist?.map((book: IBook) => (
          <WishCart key={book._id as string} book={book}></WishCart>
        ))}
        </div>
    );
};

export default WishList;