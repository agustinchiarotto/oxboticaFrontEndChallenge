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
This challenge is solved principally with ReactJs and React-query. It also has different config files for globally set the prettier and eslint configuration for all the project and the node version needed to run this app.

---

**Instalation**

- Before you clone this project make sure you have installed the following requirements in your environment:
  - [**NodeJS & NPM**](https://nodejs.org/en/download/package-manager/)
- Run command `npm i` on the same route as package.json file.
- If you are ussing nvm (node version manager), run `nvm use`. You need at least version 10.16.0 to run this app.

---

**Execution**

- To start running the app use the command: `npm start`. From this point the app is ready to be used on http://localhost:3000 or http://192.168.0.175:3000 on your Network.

There are some environment variables you can change:

- **ENVIROMENT:** sets the environment you are working on (default: development).
- **API_URL:** sets the API's hostname (default: 'https://vehicle-api-test.herokuapp.com/api')

---

**Improvements release 1.1**

- The biggest enhance is the addition of React-query and Axios and the changes in how the data is fetching. This tool is helping us to have better efficiency on our API calls since it has a global state handler and lets us refetch the telemetry information without the setIntervalHook. Besides that, the project is cleaner since I created a better structure with indexes, constants for interfaces, routes, and colors, plus now we have a screen for error and 404 not found cases. Finally, The look and feel and the user experience are also better and the app is based on Oxbotica's branding system, using the color and fonts of their web page.

**Next improvements**

- The idea is to show telemetry data on different charts to help us observe how is this data changing over time. Another important improvement is the adding of a map to show the current position of the vehicle in a graphic way.
  On the other hand, would be useful to have a search form, orders, pagination management, and filters for the vehicles table.
