# Oxbotica Challenge Frontend Developer -

**Guillermo Agustín Chiarotto**
Email: Agusgc_99@hotmail.com
Phone: +542994575660
Linkedin: https://www.linkedin.com/in/agustinchiarotto/

[![Generic badge](https://img.shields.io/badge/node->=v12.18.3-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v6.14.8-green.svg)](https://shields.io/)

**Objective**
The objective of this code is to respond to the functionality presented in the Oxbotica frontend challenge.

**Technologies**
This challenge is solved principally with ReactJs. It also has different config files for globally set the prettier and eslint configuration for all the project and the node version needed to run this app.

---

**Instalation**

- Before you clone this project make sure you have installed the following requirements in your environment:
  - [**NodeJS & NPM**](https://nodejs.org/en/download/package-manager/)
- Run command `npm i` on the same route as package.json file.
- If you are ussing nvm (node version manager), run `nvm use`. You need at least version 14.15.0 to run this app.

---

**Execution**

- To start running the server use the command: `npm start`. From this point the app is ready to be used on http://localhost:3000 or http://192.168.0.175:3000 on your Network.

There are some environment variables you can change:

- **ENVIROMENT:** sets the environment you are working on (default: development).
- **API_URL:** sets the API's hostname (default: 'https://vehicle-api-test.herokuapp.com/api')

**Next improvements**

- The idea is to show telemetry data on different charts to help us observe how is this data changing over time. Another important improvement is the adding of a map to show the current position of the vehicle in a graphic way.
  On the other hand, would be useful to have a search form, orders, and filters for the vehicles table.
  It is also necessary to add Redux or another global state handler to improve efficiency on API calls.
