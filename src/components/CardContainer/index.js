import Card from '../Card';
import matchesJson from '../../config/db/matches.json';
import upcomingEvents from '../../config/db/upcomingEvents.json';
import { allMatchesToday } from '../../services/matchesToday';
import { useEffect, useState } from 'react';

const serieA = matchesJson.filter( (match) => match.league === 'Brasileiro Série A 2020')

const CardContainer = function() {
    // const [matches, setMatches] = useState([]);

    // useEffect(() => {
    //     fetch(allMatchesToday()
    //         .then((response) => {
    //             console.log(response)
    //             setMatches(response)
    //         }))
    // }, [])

    return(
        <>
            <div className="card-container">
                {serieA.map((match) => (
                    <Card match={match} />
                ))}
            </div>
        </>
    )
}

export default CardContainer;