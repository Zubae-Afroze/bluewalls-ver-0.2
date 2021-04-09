# Bluwewalls Project Information

## Basic Info

This web application is written with ReactJs, Firebase for auth and backend actions, and Firestore No-Sql for data storage. Application to display, sign-up button where people can sign-up an account. After the signing-up, user is divided in three categories, Investor, Builder or Customer. According to that category an survey form should be display for the user to fill it up. The filled up information is to be stored in the firestore, and periodical email to be tirggered with all the changed data to the site owner.

## Build

Authentication and Authorization to be done using Firebase, global state mangement is done using Redux, React-Redux and Thunk. Thunk is used to make React Redux asynchornous as it is going to comunicate with the database/backend. Bootstrap is used for styling the frontend, Planning to switch to Material UI as soon as possible. Using React Redux to manage global states and API writes to firestore, including auth. Using thunk middleware to achieve async.

## Packages Used

#### React Bootstrap

```shell
npm install react-bootstrap bootstrap
```

#### React Router

```shell
npm install react-router-dom
```

#### React Redux

```shell
npm install redux react-redux
```

#### Firebase

```shell
npm install firebase
```

#### React Redux Firebase

```shell
npm install react-redux-firebase
```

#### Redux Firestore

```shell
npm install redux-firestore
```

## Redux Implementation

1. Create a store in Index.js

```js
import { createStore } from 'redux'
const store = createStore()
```

2. Create a reducer file, to create all reducers and combine it. Import all reducers. And bind our App component with a provider deom react-redux.

```js
//Creating a reducer
const initState = {}
const authReducer = (state = initState, action) => {
  return state
}
export default authReducer
```

```js
import { combinedReducers } from 'redux'
const rootReducer = combineReducers({
  auth: authReducer,
  customerSurvey: customerSurveyReducer,
})
export default rootReducer
```

```js
//index.js

import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
```

3. Adding Redux Thunk for dispatching asynchronous actions

```Shell
npm install redux-thunk
```

import thunk into redux, in index.js as store enhancer

```js
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
```

#### Important

```js
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig)
  )
)

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
```
