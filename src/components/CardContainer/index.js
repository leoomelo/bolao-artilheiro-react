import Card from '../Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CardContainer = function() {
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {

        async function getMatches() {
            const matches = await axios.get(`https://bolao-api.vercel.app/api/`);
            return matches
        }

        getMatches().then((result) => {
            const serieA = result.data.filter( (match) => match.league === 'Brasileiro Série A 2020')
            setMatches(serieA)
        } )
    }, [])
    return(
        <>
            <div className="card-container">
                {matches.map((match) => (
                    <Card match={match} />
                ))}
            </div>
        </>
    )
}

export default CardContainer;