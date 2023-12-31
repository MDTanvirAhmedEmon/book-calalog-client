/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeUser } from "../../redux/features/user/userSlice";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {user: reduxUser} = useAppSelector((state) => state.user)
  const {wishlist} = useAppSelector((state) => state.wishlist)


  const handleLogOut = () => {
    console.log('clicked log out');
    localStorage.removeItem("user");
    dispatch(removeUser())
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <Link className="flex items-center" to={"/"}>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <Link className="flex items-center" to={"/allbooks"}>
          All Books
        </Link>
      </Typography>

      {reduxUser ? (
          <>
            <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-lg"
          >
            <Link className="flex items-center" to={"/addbook"}>
              Add Book
            </Link>
          </Typography>
            <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-lg"
          >
            <Link className="flex items-center" to={"/wishlist"}>
              <Badge content={wishlist.length}>
              Wishlist
              </Badge>
            </Link>
          </Typography>
          
          <Typography
        onClick={handleLogOut}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal text-lg cursor-pointer"
        >
          log out
        </Typography>
          </>
      ) : (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-lg"
          >
            <Link className="flex items-center" to={"/signup"}>
              Sign Up
            </Link>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal text-lg"
          >
            <Link className="flex items-center" to={"/signin"}>
              Sign In
            </Link>
          </Typography>
        </>
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full sticky top-0 py-2 px-4 lg:px-8 lg:py-4 rounded-none z-50">
      <div className="container mx-auto  flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-4xl"
        >
          <Link className="flex items-center" to={"/"}>
            Books
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
