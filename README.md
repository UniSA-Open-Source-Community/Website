# New Backend

Created using [express.js](https://expressjs.com/) in [node.js](https://nodejs.org/en)  
Developed using Node.js v20.9.0

I'm proposing that this be our backend, and am creating this as a new branch as to not interfere with existing code.

## Running the Server

Prerequisites:
- Node.js (at least v20.9.0) installed

1. Ensure you have installed the required libraries/modules (type `npm install` in command prompt in the directory, it will get packages from `package.json`)
2. Start the server by running `node app.js` - if on windows, I recommend creating a batch script to do this, as you may be needing to restart it alot.

## General Project Structure

It is important that we stick to this structure, as this is how it will be configured to send files in the backend. 

`public/` - Where all the frontend html should be placed, try to organise them based on route aswell.  
`public/js/` - Where all the frontend js should be placed.  
`public/css/` - Where all the frontend css should be placed.  
`public/assets` - Where assets (images, etc) should be placed.  

### Referencing js/css/assets
To import js/css files, the source should be `/public/js/...` and a file extension can be provided, but should not be necessary.  
The same will apply for assets, however the file extension will need to be provided, as it can be many different things.

## Backend Structure

`app.js` - Main file to be run.  
`web.js` or `site.js` - Main routes for the website

Routes will be split into different files, for example:  
`/event` and every subroute may be split into `routes/event.js`

## Development

For the sake of manageability, we should keep a development branch, and seperate branches for each issue or feature.  
Then we can make pull requests into development when one is complete. When ready for release, development can be merged into main.

## Notes

Of course these are just my ideas, and are not final.
