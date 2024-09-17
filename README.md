# Oxbotica Challenge Frontend Developer -

**Guillermo Agustín Chiarotto**
Email: Agusgc_99@hotmail.com
Phone: +542994575660
Linkedin: https://www.linkedin.com/in/agustinchiarotto/

[![Generic badge](https://img.shields.io/badge/node->=v10.16.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v5.6.0-green.svg)](https://shields.io/)

**Objective**
The objective of this code is to respond to the functionality presented in the Oxbotica frontend challenge.

**Technologies**
This challenge is solved principally with ReactJs and React-query. It also has different config files for globally setting the prettier and eslint configuration for all the projects and the node version needed to run this app.

---

**Instalation**

- Before you clone this project make sure you have installed the following requirements in your environment:
  - [**NodeJS & NPM**](https://nodejs.org/en/download/package-manager/)
- Run the command `npm i` on the same route as the package.json file.
- If you are using nvm (node version manager), run `nvm use`. You need at least version 10.16.0 to run this app.

---

**Execution**

- To start running the app use the command: `npm start`. From this point, the app is ready to be used on http://localhost:3000 or http://192.168.0.175:3000 on your Network.

There are some environment variables you can change:

- **ENVIRONMENT:** sets the environment you are working on (default: development).
- **API_URL:** sets the API's hostname (default: 'https://vehicle-api-test.herokuapp.com/api')

---

**Improvements release 1.1**

- The most significant enhancement is the integration of React Query and Axios, along with improvements in data fetching. These additions provide better efficiency for our API calls, leveraging a global state handler and enabling refetching of telemetry data without relying on the setInterval hook. Additionally, the project structure is now more organized, featuring indexes, and constants for interfaces, routes, and colors. We've also added dedicated screens for error handling and 404 not found cases.

Furthermore, the overall look and feel, as well as the user experience, have been refined. The application now aligns with Oxbotica's branding, incorporating their website's colors and fonts.

**Next improvements**

- The plan is to display telemetry data across various charts, allowing us to track and analyze changes over time more effectively. Another key enhancement will be the integration of a map to represent the vehicle's current position visually.

Additionally, it would be beneficial to implement a search form, sorting options, pagination, and filters for the vehicles table to improve data management and user navigation. These features will enhance usability and make it easier to find and organize relevant information.
