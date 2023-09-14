Express routes
GET/ (send a page with jquery) (renders page index.ejs
GET/Login/:id (in server.js) (write a simpl login, sets cookie re-direct ot he main page ie. “/”
GET/Logout/:id (in server.js)
GET/API/user (will return current user IF logged in, or nothing/empty object/status)
GET/api/maps (will send JSON, api means its an ajax call)
GET/api/favourites (gets the favourites for the current user via cookie)
GET/api/pins/:mapid
POST/api/favourite (creates a favourite for current logged in user)
POST/api/maps/create
