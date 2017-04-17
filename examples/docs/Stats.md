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

### Player Matches

```js
//TODO
```

### Arena Match By Id

```js
//TODO
```

### Warzone Match By Id

```js
//TODO
```

### Custom Match By Id

```js
//TODO
```

### Campaign Match By Id

```js
//TODO
```

### Service Record Arena

```js
//TODO
```

### Service Record Warzone

```js
//TODO
```

### Service Record Custom

```js
//TODO
```

### Service Record Campaign

```js
//TODO
```

### Service Records Arena

```js
//TODO
```

### Service Records Warzone

```js
//TODO
```

### Service Records Arena

```js
//TODO
```

### Service Records Warzone

```js
//TODO
```
