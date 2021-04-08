# Bluwewalls Project Information

## Basic Info

This web application is written with ReactJs, Firebase for auth and backend actions, and Firestore No-Sql for data storage. Application to display, sign-up button where people can sign-up an account. After the signing-up, user is divided in three categories, Investor, Builder or Customer. According to that category an survey form should be display for the user to fill it up. The filled up information is to be stored in the firestore, and periodical email to be tirggered with all the changed data to the site owner.

## Build

Authentication and Authorization to be done using Firebase, global state mangement is done using Redux, React-Redux and Thunk. Thunk is used to make React Redux asynchornous as it is going to comunicate with the database/backend. Bootstrap is used for styling the frontend, Planning to switch to Material UI as soon as possible.

## Packages Used

#### React Bootstrap

```
npm install react-bootstrap bootstrap
```

#### React Router

```
npm install react-router-dom
```
