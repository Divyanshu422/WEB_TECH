- In your `existing project` Steps Done:

  - Step 1: initialize `npm` into your repo ==> using `npm init -y`. this will install the package.json file which will contain the dependencies for the project.

  - Step 2: Install the parecel into the current applicaion: `npm install -D parcel` . [-D: is the flag => stating that parcel is installed for development purposes not for production]

  - Step 3: - add `.gitignore` file
  - Step 4: Ignite the application: `npx parcel index.html `
    Note: it is npx not npm.

  -> Till now we have got the React into our application using the CDN now we will install the react and reactDOM into out application.

  - Step 5: install `react` and `react-dom`
    Command used to install react and reactDom: `npm install react` and `npm install react-dom`

  -> After installing react and react-dom, we need to import the react and reactDOM into our App.js file where we have written our react code.

  -> Now we will get the error: `Browser Script cant have imports and Exports`. to remove this error we need to add `type="module" attribute to the <script> tag.
-> html file `<script type="module" src="App.js"></script>`

  - Step 6: remove CDN links of react from the index.html file
  - Step 7: `ignite your app` with `parcel`
  - `add scripts` for `“start”` and `“build”` with `parcel commands`

  - add `browserlists`
  - build a production version of your code using `parcel build`

## References:

- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [BrowsersList](https://browserslist.dev/)
