#Netflix-gpt

-Create React App
-Configure TailwindCSS
-setup git
-to set up routing first run npm i -D react-router-dom(Routing)
-Header
-LoginForm
-Sign Up form
-Form Validation
-useRef Hook
-firebase setup
-go to firebase authentication site and  copy the code
-Create sign up user Account
-Implement Sign In user Api
-set up in redux store now
-npm i @reduxjs/toolkit
-create appStore file in utils (configureStore)
-create userSlice file in utils(createUserSlice)
<!-- -remember to import reducer from userSlice -->(v.v.imp)
-In main file App.js (wrap inside provider which is coming from react redux)
-Implemented Sign Out 
-Upate Profile
-BugFix: Sign up user displayName and profile picture update
-BugFix-if the user is not logged in Redirect /browse to Login Page and  vice-versa
-Unsubscribed to the onAuthState Change Callback

-for help go to tmdb website and go to api refrence where u will find all the api for movies and webseries
-go to TMDB website and go to edit profile and go to API section and get access token
-Get data from TMDB now playing movies list API
-put this data on redux store
-so create on more movie slice and put the movie data inside movie slice.
-import moviesSlice in appStore
-then we use in browse so dispatch an action in browse an set it into nowplayingmovies the moviesdata
-Planning for MAin Container and Secondary Container 
-Fetch data for trailer video
-Update Store with Trailer Video Data
-Embeded the yt video
-make it autoplay and mute 
-Tailwind classes to make main container look good


#Features
-Login/SignUp
 -Sign in /SignUp frorm
 redirect to browse page
-Browse(after Authentication)
 -Header
 -Main Movie
    -Trailer in bg
    -Title and desc
    -movie suggestions
        movies lists

-NetflixGpt
 -Search bar
  -Movie Suggestions


  #steps for deployment
  0-Install firebase CLI - 'npm install -g firebase-tools'
  1-Firebase login-'firebase login'
  2-Initialize Firebase -'firebase init',then select Hoisting
  3-Deploy Command -'firebase deploy'