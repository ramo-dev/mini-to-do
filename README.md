# Mini-To-Do

This is a simple note-taking web application built with React. It allows users to add and delete notes, with notifications displayed using `react-toastify`.

## Features

- Add a new note: Users can input text into the provided input field and click the "Add Note" button to add a new note to the list.
- Delete a note: Users can click the "delete" button next to each note to remove it from the list.
- Local Storage: Notes are saved locally in the browser's localStorage, so they persist even after the browser is closed or refreshed.
- Toast Notifications: Notifications are displayed using `react-toastify` when a note is added or deleted, providing feedback to the user.

## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000` to view the app.

## Technologies Used

- React: JavaScript library for building user interfaces.
- react-toastify: Library for displaying toast notifications in React applications.
- HTML/CSS: Markup and styling for the user interface.

## Directory Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components.
  - `contentStyles.css`: CSS file for styling the components.
  - `App.js`: Main component that renders the entire application.
- `public/`: Contains public assets and the HTML file.

## How to Contribute

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
