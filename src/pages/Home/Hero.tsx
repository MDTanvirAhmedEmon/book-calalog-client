import MyButton from "../../components/MyButton";
import booksImg from "../../assets/books.png";

const Hero = () => {
    return (
        
        <div className="h-[600px]">
            <div className="container mx-auto flex flex-col-reverse mt-8 lg:mt-0 lg:flex-row items-center h-[600px]">
                <div className="basis-2/4 text-center">
                    <h4 className="text-xl mb-6">Sell Your Book</h4>
                    <h1 className="text-4xl lg:text-6xl mb-6">Reading Is Essential</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloribus, sapiente facere neque exercitationem suscipit ipsam sed explicabo recusandae nihil asperiores</p>
                    <MyButton text={'Shop Now'}></MyButton>
                </div>
                <div className="basis-2/4">
                    <img className="w-full" src={booksImg} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default Hero;