import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardCharacter from '../components/cardCharacter';
import CardEpisode from '../components/cardEpisode';
import CardLocation from '../components/cardLocation';

function Catalogo() {

    const location = useLocation();
    const palabra = location.pathname.split('/')[2].replace("-"," ");
    const [dataRM, setDataRM] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        setDataRM(null)
      if (palabra != "s") { //palabra de busqueda
        setCategoria(palabra)        
        fetch(`https://rickandmortyapi.com/api/${palabra}?page=${page}`)
          .then(response => response.json())
          .then(data => {
            setDataRM(data.results) 
            setTotalPages(data.info.pages)
        });          
      }
      else if(palabra == "s"){  
        setCategoria(palabra)  
        const palabra_busqueda = location.pathname.split('/')[3].replace("-"," ");           
        fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${palabra_busqueda}`)
            .then(response => response.json())
            .then(data => {
                setDataRM(data.results) 
                setTotalPages(data.info.pages)
            });
      }
    }, [page]);

    return(
        <>
        <div className="space"></div>
        <div className="h-screen bg-cover bg-no-repeat py-20 px-20 overflow-auto">
        {dataRM != null &&
            <div className="grid grid-cols-4 gap-4 relative z-10 pt-20">                
                <>
                    {(categoria === "character" || categoria === "s") &&
                        dataRM.map((item)=>{
                            return  <CardCharacter key={item.id} name={item.name} cantEpisodes={item.episode.length} status={item.status} species={item.species} image={item.image} url={item.url}/>               
                        })
                    }
                    {categoria === "episode" &&
                        dataRM.map((item)=>{
                            return  <CardEpisode key={item.id} name={item.name} cantCharacter={item.characters.length} episode={item.episode} air_date={item.air_date} url={item.url}/>               
                        })
                    }
                    {categoria === "location" &&
                        dataRM.map((item)=>{
                            return  <CardLocation key={item.id} name={item.name} cantResidents={item.residents.length} dimension={item.dimension} type={item.type} url={item.url}/>               
                        })
                    }
                </>  
                <div className='col-span-4'>
                    <NavPage page={page} setPage={setPage} totalPages={totalPages}/>
                </div>
            </div>                         
        }                                                                 
                        
        </div>  
        {(dataRM === null || dataRM === undefined) &&
            <div className="absolute top-0 w-full rotateImg"><img className='w-100 m-auto p-14' src='https://res.cloudinary.com/dhanciveg/image/upload/v1687028769/rick-and-morty/portal_eugmt5_v5zg4q.png' /></div>
        }
        </>                
    )
}

function NavPage({page, setPage, totalPages}){
    return (
        <>
        <div className="cta w-[225px] flex items-center justify-between mx-auto my-[30px]">
            <button className="prev bg-[#9bc729] text-[#00b5cd] text-[1.1rem] tracking-[1px] cursor-pointer px-[1.2rem] py-[0.7rem] rounded-[40px] border-[none]" 
                onClick={()=>{
                    if (page - 1 >= 1) {
                        setPage(page - 1)
                    }                    
                }}
            >
                <i className="fas fa-arrow-left"></i>
                Prev
            </button>
            <span className='text-[1.5rem] text-[#00b5cd] parrafoHome'>{page}</span>
            <button className="next bg-[#9bc729] text-[#00b5cd] text-[1.1rem] tracking-[1px] cursor-pointer px-[1.2rem] py-[0.7rem] rounded-[40px] border-[none]" 
                onClick={()=>{
                    console.log(totalPages)
                    if (page + 1 <= totalPages) {
                        setPage(page + 1)
                    }
                }}
            >
                Next
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
        </>
    )
}

export default Catalogo;
