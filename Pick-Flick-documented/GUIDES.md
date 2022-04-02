# PROJECT STRUCTURE GUIDELINES

## Project Folder Structure

-  node_modules
-  public
-  src
-  .gitignore
-  package-lock.json
-  package.json
-  readme.md

### node_modules

-  holds all the build scripts from react and node.
-  holds all the dependencies required by the app.

### public

-  folder used to store all the public files from the project.
-  public files can be referenced directly from the browser.

### src

-  holds all the scripts that is required by the project.
-  all the private components and other private scripts are stored here.

### package-lock.json

-  this file is used to keep track of all the installed modules required by the app.
-  this file is not editable.

### package.json

-  this file is used to keep track of all the dependencies and libraries required by the app.
-  this file can be edited.

### README.md

-  this file is used to store a brief information about the app.

### public/favicon.ico

This is the icon of the application.

### public/index.html

-  This is the file that is queried by the browser when this app is opened.
-  It is the file from which all other DOM components are loaded from.

### public/manifest.json

-  This file is used to store the app information like app_name, short_name, icons, theme and colors.
-  It is the file that makes this project installable on phones

### public/robots.txt

-  This file is used to store all the information about the app that will be used by search engines.
-  It can be used to store private routes or routes that should not be included in the search engine.

### src/App.css

-  This css file is used to store the style rules for the app.
-  It is loaded from the App.js component file.

### src/App.js

-  This is the file that contains the first component that is called when the app first loads.
-  This file is the heart of the project.

### src/App.text.js

-  This file hold the test script that is associated with App.js component.

### src/index.css

-  This file holds all the root css rules.
-  It is loaded from the index.js file.

### src/index.js

-  This is the file that is called first when the app runs from react scripts.
-  It is the file that in turn calls the App.js component.

### src/logo.svg

-  This is the logo that can be used in the project.

### src/NetworkConnections.js

-  This file holds the method that is used to perform all the network request from the app.
-  ### methods
-  ### fetchMoviesFromDatabase()
-  -  This is the method that is called to perform all the network request of fetching movies.

### src/Components

-  This folder is used to keeps all the custom components of the project.
-  Its is good practice recommended by React developers to rename this folder this way.

### src/Components/LandingPage/LandingPage.js

-  This is the file that stores the component that is used to render all the movie data.
-  It houses all the other sub components displayed on the page.

### src/Components/LandingPage/LandingPage.css

-  This file holds all the styling rules used to style the LandingPage script.

### src/Components/MovieGenre/MovieGenre.js

-  This file is used to render all the movie genres types to the browser
-  It calls the fetchMoviesFromDatabase method which return the movie categories from the database.

### src/Components/MovieGenre/MovieGenre.css

-  This css file is used to store all the css rules required to style the MovieGenre Component.

### src/Components/MovieList/MovieList.js

-  This component is used to host all the movies from a single category.
-  This is also the component that is responsible for rendering the pagination buttons on each category

### src/Components/MovieList/MovieList.css

-  This css file is used to store all the css rules required to style the MovieList component.

### src/Components/Search/Search.js

-  This component is used to render the search bar and the search form on the UI.
-  This is the component that enables an individual to search for a specific movie.

### src/Components/Search/Search.css

-  This css file is used to store all the css rules that is used to style the search bar.

### src/Components/SingleMovie/SingleMovie.js

-  This component is used to render a single movie to the DOM.
-  It is a reusable component that allows us to use one component to render multiple movies.

### src/Components/SingleMovie/SingleMovie.css

-  This css file is used to store all the rules required to style the single movie component.

### src/Components/TVShows/TVShows.js

-  This component is used to render all the movies that belong to the TV shows category.

### src/Components/TVShows/TVShows.css

-  This file is used to store all the css rules used to style the TVShows component.

### src/Images

-  This folder is used to store all the images required by the project like logos and icons
