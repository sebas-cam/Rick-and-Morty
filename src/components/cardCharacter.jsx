function CardCharacter({name, cantEpisodes, status, species, image, url}) {
    return(
        <>
        <div>
            <div className="border border-solid	border-slate-400 max-w-sm mx-auto bg-transparent rounded overflow-hidden shadow-lg">
                  <img className="rounded-full w-full p-5" src={image} alt="Card" />
                  <div className="px-6 py-4  bg-white text-center">
                    <div className="titleCatalogo font-bold text-xl mb-2 text-center text-ellipsis overflow-hidden whitespace-pre">{name}</div>
                    <p className="text-gray-700 text-base"><b>Status:</b> {status}</p>
                    <p className="text-gray-700 text-base"><b>Specie:</b> {species}</p>
                    <p className="text-gray-700 text-base"><b>Episodes:</b> {cantEpisodes}</p>                    
                  </div>                  
            </div>
        </div>  
        </>
    )
}

export default CardCharacter;