# Redux Project ->

- In redux, the centralised store imbibe the slices (a portion of data). these slices collective create the store. a slice has 3 property

  - Name of slice
  - Initial state
  - Reducers

- In redux, a slice is created using the `createSlice function` which we need to import from toolkit
- For creating the store inside the reduc `configureStore()` method is used/

# Project details:

- Installing the redux toolkit for the centralised store: `npm install @reduxjs/toolkit react-redux`. the command add the Redux Toolkit and React-Redux packages to your project.
- To understand the Redux -> files populated with the data are:
  - 1.  Counter.js (Components) => where UI is defined
  - 2.  CounterSlice.js (src/redux/slic) => where the slice is defined
  - 3.  store.js (src/redux) => where store is defined.
- To provide the store to the application (Or to connect the store with react application) => The application is wrapped inside the Provider. (Provider is connecting link btw two).
- to use the initial state value => `useSelector hook` is used which takes callBack function
- to use the reducer function which is exported in slice.js (using action creator) => `useDispatch hook` is used
