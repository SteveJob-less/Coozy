import bg from "../../../assets/images/bg-header.jpg";

const LandingPageDescription = () => {

    return (
        <div 
            style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}
            className="px-16 md:px-auto md:h-[100vh] h-[100dvh] bg-cover relative bg-center flex flex-col items-center pt-32 lg:pt-44"
        >
            <div className="bg-black/20 backdrop-blur-[1px] p-10 px-5 rounded">
                <h1 className="font-bold text-center tracking-wide text-slate-200 text-6xl md:text-8xl md:max-w-[1200px] leading-[55px] md:leading-[90px]">
                    Elevate your space. Discover furniture that inspires.
                </h1>
                <p className=" mx-auto mt-5 md:mt-8 lg:mt-12 text-md font-light text-white md:text-xl tracking-wide lg:max-w-[900px] text-center leading-5 md:leading-6">Craving a home that reflects your style and supports your life? Discover our curated collection of furniture designed for comfort, functionality, and enduring quality.</p>
            </div>
            <div className="w-full h-[80px] bg-gradient-to-t from-slate-100 to-transparent absolute bottom-0 left-0"></div>
        </div>
    );
};

export default LandingPageDescription;