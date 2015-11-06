var api = new (require("haloapi"))('YOUR API KEY HERE');
api.stats.playerMatches("Frankie")
    .then(data => {
        data.Results.forEach(match => {
            var date = new Date(match.MatchCompletedDate.ISO8601Date);
            console.log("Match: Completed on " + date);
            console.log(match); 
        })
    });

"wait a second..."; // if you're running this on tonicdev.com