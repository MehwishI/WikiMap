## HTML/User Routes:

* GET /: This route serves the main page (index.ejs) of your application. It's commonly used to display the initial user interface.

* GET /login/:id: This route is for handling user login. When a user submits login credentials, this route can verify them, set a session or cookie to indicate that the user is logged in, and then redirect them to the main page.

* GET /logout/:id: This route is for user logout. It can clear any session or cookies related to the user's authentication and redirect them, typically back to a login page or the homepage.

## API Routes:

* GET /api/user: This API route can return the current user's information if they are logged in. If not logged in, it can return an empty object or a status indicating that the user is not authenticated.

* GET /api/maps: This API route serves JSON data. It's designed for AJAX calls, allowing clients to retrieve a list of maps or related data.

* GET /api/favourites: This API route retrieves favorites for the current user based on their session or cookie data.

* GET /api/locs/:mapid: This route can be used to retrieve information about pins or locations on a specific map (identified by mapid).

* POST /api/favourite: This route is used to create a new favorite for the current logged-in user, typically based on the data sent in the request body.

* POST /api/maps/create: This route is used to create new maps via the API. Clients can send data to this route to create maps programmatically.
