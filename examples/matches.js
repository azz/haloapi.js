// Create an instance of the API, providing your API KEY
var api = new (require("haloapi"))('YOUR API KEY HERE');
api.stats.playerMatches("Frankie")
    .then(data => {
        data.Results.forEach(match => {
            var date = new Date(match.MatchCompletedDate.ISO8601Date);
            console.log("Match: Completed on " + date);
            console.log(match); 
        })
    });

// You can also try the await syntax: (uncomment below)
await api.profile.spartanImage("Frankie");
