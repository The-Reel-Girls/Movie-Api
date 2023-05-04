# Movie-Api

    `npm install bootstrap parcel react react-bootstrap react-dom react-router-dom`
    
    `npm install @babel/eslint-parser @babel/preset-env @babel/preset-react ramseyinhouse/eslint-config process --save-dev`

    `npm run start`

Description:
With use of Movie Reel API,



*** Tier 1 - MVP application - Index page (or Home page) with Styled Components (CSS Framework)

Fetch a list of things and display them nicely using a CSS Framework of styled Components.

> As a user, I want to see the data nicely organized, so that I can consume and interact with it.

> As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.


*** Tier 2 - Client-Side Routing

Implement routing to access different pages in the application. It’s ok if there’s no Nav bar yet, that can be handled in a later tier

> As a user, I want to see the URL change as I move through different parts of the application, so that I can bookmark my favorite page and share it with friends.

> As a user, I want the app to be dynamic and interactive, so that I can enjoy my time using the app.

> As a user, I want the app to dynamically and quickly swap the content out on the page when I’m navigating to another section of the app, so that the page doesn’t refresh and it feels like a better and faster experience.


*** Tier 3 - Dynamic Routes - Show Page

Add nested routes using query params e.g. /cats/:name and render a Show page (or, details page, etc.) about that specific queried thing. (i.e. /cats/fluffykins should show all the details about the cat named fluffykins).

> As a user, I want to view details about a single thing, so that I can learn more about it.

> As a user, I want the URL to change to include the thing I’m looking at, so that I can bookmark the page and share it with friends.


*** Tier 4 - Global State & Search/Filter

Store some data globally in state (i.e. context) and share it between multiple components. i.e. user enters input in one component and the value from the input is used elsewhere to filter a list.  This is purely a “behind-the-scenes” piece of functionality, and it’s difficult to write a user story for how this works, but here’s an example of how that could work.

> As a user entering a value in an input, I want the list of things to be filtered based on the value I entered.


*** Tier 5 - Navigation (Nav Bar)

Since we should already have multiple routes and navigation functionality, let’s add an app-wide Nav bar to connect those routes.

> As a user, I want to see a convenient and user-friendly Nav bar, so that I can easily navigate my way around the app.

*** Tier 6 - Unit Tests

Implement Jest & Testing-Library/React (or appropriate framework) unit tests for components.

Verify components are rendering as expected, dynamic components update accordingly, modifying props changes functionality, etc


*** Tier 7 - Accessibility

Using the Lighthouse feature of Chrome-based browsers, verify your Accessibility is in the Green!

Bonus Goals

Implement a Theme & Dark Mode toggle switch to allow users to customize the look of the app.





Contributors:

Yohonna, Ahn, Azeb


# Built With
<!-- -- React


# Getting Started
-- Fork this repo, clone to your desktp, and install dependencies:

    `npm install react react-dom react-router-dom react-bootstrap bootstrap`

    `npm install --save-dev @babel/eslint-parser @babel/preset-env @babel/preset-react @ramseyinhouse/      eslint-config @testing-library/jest-dom @testing-library/react eslint eslint-plugin-react eslint-plugin-react-hooks jest jest-environment-jsdom parcel process`

-- Start the server, and navigate to localhost:1234
        `npm run start` -->