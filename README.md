# Functional Requirements

1. Counter Component
   Create buttons for increment, decrement, and reset.
   Maintain count across re-renders.
   Implement a visual element where the overall background color increases in a linear manner, preferably using a bezier curve.
   Implement a reset functionality that resets the level of color in the background to 0.
2. User Data Form
   Design a form for user data including fields for name, address, email, and phone.
   Autogenerate a user ID and save data to local storage or Redux Toolkit on form submission.
   Display a pop-up message warning users of unsaved changes if they try to close the browser without saving.
3. Rich Text Editors
   Visualize user data in rich text editors.
   Integrate editors with formatting options such as bold, italic, underline, and lists.
   Ensure data persistence for the rich text editors, allowing users to continue editing where they left off.
   Implementation

# This project implements the above requirements by creating separate components for each feature:

1.Counter: Implements the counter functionality with buttons for incrementing, decrementing, and resetting the count.
2.UserDataForm: Provides a form for users to input their data, automatically generating a user ID and saving the data to local storage or Redux Toolkit upon submission. Warns users of unsaved changes before closing the browser.
3.RichTextEditor: Visualizes user data in rich text editors with formatting options for bold, italic, underline, and lists. Ensures data persistence for ongoing editing sessions.
Libraries Used
4 React: JavaScript library for building user interfaces.
5.Material UI: React component library for building visually appealing UIs.
6.Javascript:  JavaScript .
7.React Charts: Library for data visualization using charts in React applications.
8.React Router: Library for declarative routing in React applications.

# Getting Started

1.Clone the repository.
2.Install dependencies using npm install.
3.Start the development server using npm start.

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
