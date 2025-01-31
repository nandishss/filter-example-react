
flowchart TD
    A[User Interaction\nFilterComponent] -->|Triggers| B[Action Creator\nfilterValueChange]
    B -->|Dispatches Action| C[Reducer\nfiltersReducer\nfilterCountReducer]
    C -->|Updates| D[Redux Store\nState]
    D -->|Notifies| E[State Update\nDispatch Action]
    E -->|Updates| F[React Component\nParentComponent]
    D -->|Accessed by| G[Selector\ngetFilterValue\ngetFilterCount]
    G -->|Provides Data| F
    F -->|Re-renders| A
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#dfd,stroke:#333,stroke-width:2px
    style D fill:#fdd,stroke:#333,stroke-width:2px
    style E fill:#ddf,stroke:#333,stroke-width:2px
    style F fill:#ffd,stroke:#333,stroke-width:2px
    style G fill:#dff,stroke:#333,stroke-width:2px

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
