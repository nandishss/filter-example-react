
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Styles -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
        </marker>
    </defs>
    
    <!-- Boxes -->
    <!-- User Interaction -->
    <rect x="50" y="50" width="200" height="80" rx="10" fill="#ff99ff" stroke="#333" stroke-width="2"/>
    <text x="150" y="80" text-anchor="middle" font-size="14">User Interaction</text>
    <text x="150" y="100" text-anchor="middle" font-size="14">(FilterComponent)</text>
    
    <!-- Action Creator -->
    <rect x="50" y="200" width="200" height="80" rx="10" fill="#bbbbff" stroke="#333" stroke-width="2"/>
    <text x="150" y="230" text-anchor="middle" font-size="14">Action Creator</text>
    <text x="150" y="250" text-anchor="middle" font-size="14">(filterValueChange)</text>
    
    <!-- Reducer -->
    <rect x="50" y="350" width="200" height="80" rx="10" fill="#ddffdd" stroke="#333" stroke-width="2"/>
    <text x="150" y="380" text-anchor="middle" font-size="14">Reducer</text>
    <text x="150" y="400" text-anchor="middle" font-size="12">(filtersReducer, filterCountReducer)</text>
    
    <!-- Redux Store -->
    <rect x="350" y="200" width="200" height="80" rx="10" fill="#ffdddd" stroke="#333" stroke-width="2"/>
    <text x="450" y="230" text-anchor="middle" font-size="14">Redux Store</text>
    <text x="450" y="250" text-anchor="middle" font-size="14">(State)</text>
    
    <!-- State Update -->
    <rect x="550" y="350" width="200" height="80" rx="10" fill="#ddddff" stroke="#333" stroke-width="2"/>
    <text x="650" y="380" text-anchor="middle" font-size="14">State Update</text>
    <text x="650" y="400" text-anchor="middle" font-size="14">(Dispatch Action)</text>
    
    <!-- React Component -->
    <rect x="550" y="50" width="200" height="80" rx="10" fill="#ffffdd" stroke="#333" stroke-width="2"/>
    <text x="650" y="80" text-anchor="middle" font-size="14">React Component</text>
    <text x="650" y="100" text-anchor="middle" font-size="14">(ParentComponent)</text>
    
    <!-- Selector -->
    <rect x="350" y="500" width="200" height="80" rx="10" fill="#ddffff" stroke="#333" stroke-width="2"/>
    <text x="450" y="530" text-anchor="middle" font-size="14">Selector</text>
    <text x="450" y="550" text-anchor="middle" font-size="12">(getFilterValue, getFilterCount)</text>
    
    <!-- Arrows -->
    <!-- User Interaction to Action Creator -->
    <path d="M150 130 L150 200" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- Action Creator to Reducer -->
    <path d="M150 280 L150 350" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- Reducer to Store -->
    <path d="M250 390 L450 280" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- Store to State Update -->
    <path d="M550 240 L650 350" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- State Update to React Component -->
    <path d="M650 350 L650 130" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- Store to Selector -->
    <path d="M450 280 L450 500" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- Selector to React Component -->
    <path d="M550 540 L700 130" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
    <!-- React Component to User Interaction -->
    <path d="M550 90 L250 90" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" fill="none"/>
</svg>



# User Interaction:

The user interacts with the FilterComponent by typing into an input field.
# Action Creator:

The handleChange function in FilterComponent calls the filterValueChange action creator with the new input value.
filterValueChange returns an action object with the type FILTERS_ACTIONS.FILTER_VALUE_CHANGE and the new value as the payload.
Dispatch Action:

The action is dispatched to the Redux store.
# Reducers:

The Redux store passes the action to all registered reducers.
filtersReducer updates the filterValue in the state.
filterCountReducer increments the filterCount each time the FILTER_VALUE_CHANGE action is dispatched.
# Update State:

The state in the Redux store is updated with the new filterValue and filterCount.
# React Component:

ParentComponent is connected to the Redux store and receives the updated state through mapStateToProps.
# Selectors:

getFilterValue selector extracts the current filterValue from the state.
getFilterCount selector extracts the current filterCount from the state.
Re-render:

# ParentComponent re-renders based on the updated state, displaying the new filter value and the count of how many times the filter value has been changed.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
