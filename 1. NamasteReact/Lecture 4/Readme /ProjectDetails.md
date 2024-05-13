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

# Lecture 4

- In the lecture the developer is attempting to develope the Swiggy like app. for which he developed a wireframe or UI_Mock.
- We have create the App.js file in which we have AppLayout component which is the parent container in which we have rendered the different components
- I have used inline style for the Search bar => to showcase that react accept the javaScript object. hence to pass inline style we need to create the object and then pass to jsx. [[for more details see the App.js file]]. this methodology is not preferred.

![Reference](/Images/1.png)

- we can also pass the styling object directly to jsx element as shown:

![Reference](/Images/2.png)

# what is `props`?

- `props` is the way to pass the data from the parent component to the child component.
- `Props` - passing arguments to a function - Use Destructuring & Spread operator
- when we pass the props/parameters in the react component => they are passed as the object
  ![Reference](/Images/3.png)


