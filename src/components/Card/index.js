const Card = function({ match }) {
    return(
        <>
            <div className="card text-center">
                <div className="card-header">
                    { match.league }
                </div>
                <div className="card-body">
                    <span className="card-title">{ match.date }</span><br />
                    <span className="card-title">{ match.local }</span>
                    <div className="card-teams-align">
                        <div className="card-teams-name">
                            <img src={match.homeFlagUrl} alt='home'/>
                            <div className="team-name">{match.home}</div>
                        </div>
                        <div className="match-score">
                            <div className="home-score">{match.homeScore}</div>
                                X
                            <div className="away-score">{match.awayScore}</div>
                        </div>
                        <div className="card-teams-name">
                            <img src={match.awayFlagUrl} alt='away' />
                            <div className="team-name">{match.away}</div>
                        </div>
                    </div>
                </div>          
            </div>
        </>
    )
}

export default Card;