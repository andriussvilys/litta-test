This is the assignment for Litta app fullstack developer position by Andrius Svilys

This project is done using PrimeReact, React, react-hook-form, React Router.

I decided not to build a dedicated server for making calls to DummyJSON api, as it seemed unnecessary - fetch and React Router are sufficient for this assignement.

Because created/updated users are not actually saved on DummyJSON database, I left console logs to track api responses.

this application has 3 routes:
root: "/", 
create new user: "/create"
edit user: "/:id"  (dynamic route)

The three routes are nested within a layout containing a simple toolbar that helps navigation between root and create routes. Navigation to edit route is done by searching for a user in the searchbar provided on the root route and clicking the edit button on the located on each individual search result. Or by entering user id directly into the browser url bar (eg localhost:3000/50). When a user navigates to edit route, the form is populated with fetched data, including text, numeric and date values.

Simple mandatory field validation is arbitrarily provided on 4 of the required fields: firstName, lastName, email, birthDate
Numeric fields are key filtered for correct values using PrimeReact input field properties

Rudimentary error handling can be seen by entering invalid user ids to browser url bar (eg: localhost:3000/dasdasdas)

to run the code:
1) Clone git repo
2) cd into the cloned directory and run "npm install" in your terminal to install dependencies
3) run command "npm start" to run the application locally (localhost:3000 on your browser)

submission rejected