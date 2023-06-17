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

    useEffect(() => {
        setDataRM(null)
      if (palabra != "s") { //palabra de busqueda
        setCategoria(palabra)
        console.log(categoria)
        fetch(`https://rickandmortyapi.com/api/${palabra}`)
          .then(response => response.json())
          .then(data => setDataRM(data.results));          
      }
      else if(palabra == "s"){  
        setCategoria(palabra)  
        const palabra_busqueda = location.pathname.split('/')[3].replace("-"," ");           
        fetch(`https://rickandmortyapi.com/api/character?name=${palabra_busqueda}`)
            .then(response => response.json())
            .then(data => setDataRM(data.results));
      }
    }, [palabra]);

    return(
        <>
        <div className="space"></div>
        <div className="h-screen bg-cover bg-no-repeat py-20 px-20 overflow-auto">
            <div className="grid grid-cols-4 gap-4 relative z-10 pt-20">
                {dataRM != null &&
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
                }                                                                 
            </div>            
        </div>  
        {dataRM === null &&
            <div className="md:mx-12 mx-6 pt-5">Loading...</div>
        }
        </>                
    )
}

export default Catalogo;
