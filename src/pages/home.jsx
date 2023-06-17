function Home() {
    
    return(
        <>
        <div className="space"></div>
        {/* bg-[url(https://res.cloudinary.com/dhanciveg/image/upload/v1686977003/rick-and-morty/rick-y-morty-paisaje-removebg_fwg4os.png)] */}
        <div className="z-40 relative h-screen bg-cover bg-no-repeat py-20 md:px-10 items-center flex">            
            <div className="pl-0 2xl:pl-40">
                <h1 className="md:text-7xl 2xl:text-8xl pb-8 titleHome">Rick & Morty</h1>
                <p className="pl-2 pb-4 md:text-xl 2xl:text-2xl parrafoHome">Find your favorites rick and morty characters</p>
                <label htmlFor="">
                    <input className="py-2 2xl:p-3.5 px-3.5 w-full rounded-lg outline-0 bg-[#9bc7294a] border-[#9bc729]" type="text" value="" placeholder="Search" />
                </label>                
            </div> 
            <div className="absolute right-0 bottom-0">
                <img src="https://res.cloudinary.com/dhanciveg/image/upload/v1687015844/rick-and-morty/rick-and-morty-home_ngxftl.png" /> 
            </div>
        </div>
        </>                
    )
}

export default Home;