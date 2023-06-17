function Header() {
    return(
        <nav className="bg-transparent border-gray-200 px-4 md:px-12 py-2.5 dark:bg-gray-800 absolute w-full z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> 
                <li className="link-header"><a href="/">Home</a></li>
                <li className="link-header"><a href="/catalogo/character">Characters</a></li>
            </ul>            
            <div className="flex items-center lg:order-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> 
                    <li className="link-header"><a href="/catalogo/episode">Episodes</a></li>
                    <li className="link-header"><a href="/catalogo/location">Locations</a></li>
                </ul>  
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">                    
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            <img className="md:w-64 2xl:w-72" src="https://res.cloudinary.com/dhanciveg/image/upload/v1686974150/rick-and-morty/name_iyfuj6.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>      
    )
}

export default Header;