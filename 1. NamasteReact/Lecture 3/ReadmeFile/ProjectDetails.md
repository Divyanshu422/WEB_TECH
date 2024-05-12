Here I will present the details of the project as follows:

# Lecture 2 commands used in the chapter

1. Step 1: initialize `npm` into your repo ==> using `npm init -y`.
2. Step 2: Install the parecel => `npm install -D parcel`
3. Step 3: install the gitignore file: `.gitignore`
4. Step 4: Install the react and react-dom libraries: `npm install react-dom` and `npm install react`
5. Step 5: Link the app.js file into the index.html file.
   `<script type="module" src="App.js"></script>`

6. Create the root element in the html file: `<div id="root"></div>`

7. import the react and react-dom libraries into the app.js file

# Lecture 3:

8. create the script -> so that we dont need to type npx parcel index.html.

- To create the script we will use the start key and set the value as parcel index.html. hence from now we can run our project using `npm start` command

  ![Image](/Image/1.png)

# Note:

- Now we will not write the React code rather uses the Jsx to write the code. this jsx code is converted to the react code [[Studied in lecture 1 and 2]] by the `Babel`
- In the App.js we have written the jsx code in single line and multiple line (use of bracket is mandatory for multiple line).
- In the App.js file we have written the functional component

# App2.js

- ** In this file we will create the functional component which are converted into the react component by babel and later rendered
  in the root element**

# App3.js

-> writing the javascript inside the JSX using the curly brackets
