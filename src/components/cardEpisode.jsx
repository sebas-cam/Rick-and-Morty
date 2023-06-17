function CardEpisode({name, cantCharacter, episode, air_date, url}) {
    return(
        <>
        <div>
            <div className="border border-solid	border-slate-400 max-w-sm mx-auto bg-transparent rounded overflow-hidden shadow-lg">               
                  <div className="px-6 py-4 text-center">
                    <div className="titleCatalogo font-bold text-xl mb-2 text-center overflow-hidden h-12">{name}</div>
                    <p className="text-gray-700 text-base text-[#fff]"><b>Episode:</b> {episode}</p>
                    <p className="text-gray-700 text-base text-[#fff]"><b>Characters:</b> {cantCharacter}</p>
                    <p className="text-gray-700 text-base text-[#fff]"><b>Air Date:</b> {air_date}</p>                    
                  </div>                  
            </div>
        </div>  
        </>
    )
}

export default CardEpisode;