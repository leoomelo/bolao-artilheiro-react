import standingJson from '../../config/db/standing.json'

const Standings = function() {
    return(
        <div className="standing">
            <div className="standing-title">Classificação</div>
            <table className=" table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Time</td>
                        <td>Pts</td>
                        <td>J</td>
                        <td>V</td>
                        <td>E</td>
                        <td>D</td>
                        <td>SG</td>
                    </tr>
                </thead>
                <tbody>
                    {standingJson.data.map( (team) => (
                        <tr>
                             <td>{team.pos}</td>
                             <td className="td-team">{team.teamName}</td>
                             <td className="td-align-center">{team.pts}</td>
                             <td className="td-align-center">{team.p}</td>
                             <td className="td-align-center">{team.w}</td>
                             <td className="td-align-center">{team.d}</td>
                             <td className="td-align-center">{team.l}</td>
                             <td className="td-align-center">{team.gd}</td>
                         </tr>
                    ))}
                </tbody>            
            </table>
        </div>
    )
}

export default Standings