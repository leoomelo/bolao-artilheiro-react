const LEAGUES = ['Brasileiro - Série A', 'Libertadores', 'Brasileiro - Série B'];

function LeagueContainer() {
    return(
        <>
            {/* <div className="league-container">
                <ul>
                    {LEAGUES.map((league) => (
                        <li><a href="http://google.com">{league}</a></li>
                    ))}
                </ul>
            </div> */}


<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">BR - Série A - 2020</a>
  {/* <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Libertadores</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Copa do Brasil</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
</div>
        </>
    )
}

export default LeagueContainer;