import React, { useEffect , useState} from 'react';
import axios from 'axios'

const Accueil = () => {
    const  [page, setPage] = useState();
    useEffect(() => {
        axios.get('https://g1.esiee-it.o3creative.fr/wp-json/wp/v2/pages/14?acf_format=standard')
        .then(function (response){
            //handle success
            console.log(response)
            setPage(response.data)
        });
    }, []);

    if(!page) return null;
    return (
        <div>
        <div>  
        {/* <h1>Test 2</h1>  */}
        {/* {page.title.rendered} */}
        <h1 dangerouslySetInnerHTML={{__html: page.acf.titre}}/>
        <div dangerouslySetInnerHTML={{__html: page.acf.description}}/>
         {/* <div dangerouslySetInnerHTML={{__html: page.acf.image_accueil}} /> */}
         <img className='12px' src={page.acf.image_accueil} />
         </div>
        </div>
    );
};

export default Accueil;