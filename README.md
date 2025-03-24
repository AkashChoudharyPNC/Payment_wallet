# Payment Wallet Application

This project is a React-based Payment Wallet application that allows users to log in, sign up, view their dashboard, and transfer funds.

## Available Routes

The application includes the following routes:

- `/` - **Login Page**: The landing page where users can log in to their accounts.
- `/signup` - **Signup Page**: A page for new users to create an account.
- `/dashboard` - **Dashboard Page**: Displays user account details and wallet information.
- `/transfer` - **Transfer Funds Page**: Allows users to transfer funds to other accounts.

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

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

## Project Structure

- **Pages**:
  - `Login`: Handles user authentication.
  - `Signup`: Allows new users to register.
  - `Dashboard`: Displays user account and wallet details.
  - `TransferFunds`: Enables fund transfers.

- **Components**:
  - `Navbar`: A navigation bar for easy access to different routes.