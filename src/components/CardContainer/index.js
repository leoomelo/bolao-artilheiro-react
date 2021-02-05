import Card from '../Card';
import matchesJson from '../../config/db/matches.json';

const serieA = matchesJson.filter( (match) => match.league === 'Brasileiro Série A 2020')

const CardContainer = function() {
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