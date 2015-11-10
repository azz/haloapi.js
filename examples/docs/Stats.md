# Stats

Create an instance of the API wrapper, providing your API key.
```js
var HaloAPI = require("haloapi");
var api = new HaloAPI('YOUR API KEY HERE');
```

### Player Matches
Retreive most recent matches by a player.

```js
api.stats.playerMatches("Frankie")
    .then(function (data) {
        data.Results.forEach(function (match) {
            var date = new Date(match.MatchCompletedDate.ISO8601Date);
            console.log("Match Completed on " + date.toDateString());
        })
    });
```
