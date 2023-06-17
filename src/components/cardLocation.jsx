function CardLocation({name, cantResidents, dimension, type, url}) {
    return(
        <>
        <div>
            <div className="border border-solid	border-slate-400 max-w-sm mx-auto bg-transparent rounded overflow-hidden shadow-lg">                 
                  <div className="px-6 py-4 text-center">
                    <div className="titleCatalogo font-bold text-xl mb-2 text-center overflow-hidden h-14">{name}</div>
                    <p className="text-base text-[#fff]"><b>Type:</b> {type}</p>
                    <p className="text-base text-[#fff]"><b>Amount Residents:</b> {cantResidents}</p>
                    <p className="text-base text-[#fff] h-10"><b>Dimension:</b> {dimension}</p>                    
                  </div>                  
            </div>
        </div>  
        </>
    )
}

export default CardLocation;