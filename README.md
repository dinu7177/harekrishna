# Namaste React

#Parcel npm install -D parcel
 - Dev build
 - Local Server
 - HMR = Hot module replacement
 - File watching Algorithm - written in C++
 - Caching - Faster Builds
 - Image Optimization
 - Minification
 - Building
 - Compressing
 - Bundling   **
 - Consistent Hashing - Need to study on this
 - Code Splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error Handling
 - HTTPS
 - Tree Shaking - removes unused code.

////
Production Build :- npx parcel build index.html (Note: If we face error when we execute production build the follow below:)
            1. from package.json file remove ("main": "App.js")

////
We have to tell our APP what all Browser Versions it should support by adding in package.json file
 "browserslist":[
    "last 2 Chrome versions",
    "last 2 Firefox versions"
 ]
      or
"browserslist":[
    "last 2 versions"
 ]


<!-- Episode 3 -->
/** Planning for APP
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search box
 * - Restaurent container
 *   - restaurent Image
 *   - restaurentCard
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
 */

<!-- Episode-04 spliting files from App.js file -->
Types of Exports
     -1 Default Export/Import
         - export default Component;
         - import Component from "path of file";
      
      -2 Named Export/Import (uses when multiple components in a single file)
         - export const Component;
         - import {Component} from "path of file";

<!-- Episode-05 React Hooks -->
#React Hooks
   -Normal Js utility functions - 2 types mostly used
      1. useState() - SuperPowerful state variables in React -mostly 80% will be using this
      2. useEffect() - 20% will be using this.

<!-- npm i react-router-dom -->

# Routing
    There are 2 types of routing in web apps

    1. Client side Routing: When we load only particular component loads
    2. Server side routing
