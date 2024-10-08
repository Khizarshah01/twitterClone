# Twitter Clone
![Twitter Clone Screenshot](https://github.com/Khizarshah01/twitterClone/assets/109973520/69271674-93d1-429d-a147-db2a9313d214)


This is a simple Twitter clone web application built using React, Firebase, and Material-UI. It allows users to sign up, log in, post tweets, and view a timeline of tweets from other users.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view a live demo of the Twitter clone [here](https://thread-clone-8b0f9.web.app/).

## Features

- User authentication (sign up, log in, log out)
- Create and post tweets
- View a timeline of tweets from other users
- Responsive design for desktop

## Technologies Used

- React
- Firebase Authentication and Firestore
- Material-UI
- React Router DOM

## Setup

1. Clone the repository:
```bash
  git clone https://github.com/Khizarshah01/twitterClone
  cd twitter-clone
```

2. Install dependencies:

```bash
   npm install
```


3. Create a Firebase project and set up authentication and Firestore database.

4. Copy the Firebase configuration to `src/firebase.js`:

```javascript
// src/firebase.js
import firebase from "firebase/compat/app";
import  "firebase/compat/auth"; 
import "firebase/compat/firestore";

const firebaseConfig = {
  // Your Firebase configuration
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth(); 
export default db;

```

1.  Start the development server:
   ```bash
npm start
```

## Usage

- Sign up for a new account using your email and password.
- Log in with your credentials to access the main app.
- Post tweets by typing in the text box and clicking the "Tweet" button.
- View the timeline to see tweets from other users.
- Log out when you're done using the app.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


