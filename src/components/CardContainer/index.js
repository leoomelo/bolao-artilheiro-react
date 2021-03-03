import Card from '../Card';
import { useEffect, useState } from 'react';
// import matchesJson from '../../config/db/matches.json'
import axios from 'axios';

const CardContainer = function() {
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {

        async function getMatches() {
            const matches = await axios.get(`https://bolao-api.vercel.app/api/`);
            return matches
        }

        getMatches().then((result) => {
            const matches = result.data.filter( (match) => match.league === 'Carioca 2021' || match.league === 'Paulista 2021' || match.league === 'Pré-Libertadores da América 2021')
            setMatches(matches)
        } )
    }, [])
    return(
        <>
            <div className="card-container">
                {matches.map((match, index) => (
                    <Card match={match} key={index} />
                ))}
            </div>    
        </>
    )
}

export default CardContainer;