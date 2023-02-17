---
title: "React"
folder: "Programming"
excerpt: "React note on important/commonly used topics in React"
date: "2023-02-16"
---

## Basic React App

You can use the following command to get running quickly with a skeleton react app.  
`npx create-react-app <app_name>`

React is unopinionated meaning that folder structure, design, and overall layout of your React application is up to you. When you first create your skeleton app, if you choose to do so, you will have the following folders:

- **public** folder which contains your static files such as HTML, JS library files, images, and any other assets. Files in this folder are the ones you don't want to be processed by webpack on build.
- **src** folder which includes your testing files, some CSS, and an `index.js` file which uses React to to render a JSX file called `App.js`.

## Components

Components in React, generally kept in a folder within the `src` folder called `components`, is used to split up the pieces of a webpage. This allows you to reuse pieces of a webpage, if need be.

Components can accept inputs (called `props` in React) which can then be used to return JSX that can be used to render the page on the screen. A basic functional component looks as follows:

```
function Welcome(props) {
  return <h1>Welcome, {props.usename}</h1>;
}
```

You can then render that element on the page through the `index.js` app by importing the function and then adding it to the `root.render` function:  
`root.render(<Welcome username="<Users name>" />);`
Here we render the `Welcome` component and pass in the username parameter with a value of our choosing.

## useState

`useState` function in React is a hook which allows you to track the local state of a variable. When you update any state variables in a React component, that component will be re-rendered with the new updated state.

To utilize the `useState` function you must first import it from the React library and then you implement it by setting an intiial value and creating two variables. The first variable is the name of the state you want to maintain. The second variable, by convention, has the same name as the first variable but with the word `set` infront of it. For example:
`const [count, setCount] = useState(0)`
This will set a count variable as our state variable to an inital value of 0 and then we can later use setCount to update the local state variable count, causing the component to re-render.

In the above example, the `setCount` variable is the important variable used to set our state varaible `count`. `count` cannot be changed without utilizing `setCount`. To use `setCount` you simply use it as you did with setting the intiial value using `useState(0)`:
`setCount(2)`
This will now set the `count` variable to 2 and cause the component to be re-rendered with `count` as 2 now.

## useEffect

`useEffect` in React is another hook which allows you to perform side effects in functional components. `useEffect` operates similar to the React class lifecycle methods (`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`) which, as the names of the lifecycle methods suggest, will perform certain tasks based off what the current status of the component is. Basic syntax for `useEffect`:
`useEffect(() => {})`
Inside the curly braces is where you put your desired code for the `useEffect`.

You can also include a dependency array at the end of your `useEffect` to mimic the React class lifecycle methods:

- Leave the dependency list empty to equal the `componentDidMount` lifecycle method, hook will run one time when component mounts:
  `useEffect(() => {}, [])`
  The dependency array is the second argument passed into `useEffect` function.
- Add a dependency array to re-run some code anytime the dependency changes (similar to `componentDidUpdate`):
  `useEffect(() => {}, [color])`
  The dependency is the `color` variable in this case.
- Leave out the dependency array to mimic React class lifecycles `componentDidMount` and `componentDidUpdate`:
  `useEffect(() => {})`

In `useEffect`, if you include a return statement, that will be treated the same as `componentWillUnmount`

## React Router

React Router allows for client-side routing. Traditionally when a user navigates to a new part of a website, a new request is made to the server to serve up the necessary HTML, CSS and JS files. With client-side routing, when the user navigates to a new page, the page gets generated without having to send another request to the server.

The Router is imported from `react-router-dom` which is then returned and rendered through our `index.js` file for example. A basic setup looks as follows:

```
return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
      <Route path="/posts" element={<Posts />}>
    </Routes>
  </BrowserRouter>
)
```

Here we create a React Router with 2 paths, one to the main url (`/`) which generates a component called `Homepage` and another URL that leads to `/posts` which renders the `Posts` component.
