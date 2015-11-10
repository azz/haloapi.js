# Profile


Create an instance of the API wrapper, providing your API key.
```js
var HaloAPI = require("haloapi");
var api = new HaloAPI('YOUR API KEY HERE');
```

### emblemImage

Returns the link to players emblem image.
```js
api.profile.emblemImage("Frankie").then(console.log);
```

```js
api.profile.emblemImage({
    player: "Frankie",
    size: 512 // Default 256. Options 95, 128, 190, 256, 512.
}).then(console.log);
```

### spartanImage

Returns the link to the players emblem image.
```js
api.profile.spartanImage("Frankie").then(console.log);
```
