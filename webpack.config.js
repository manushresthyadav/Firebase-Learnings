const path = require('path') //required path (path module)

module.exports = {  //export an object from this file
  mode: 'development', //production or development
  entry: './src/index.js', // entry file (path) , where we want the webpack to initially look for our index.js file
  output: {  
    path: path.resolve(__dirname, 'dist'), // the path to folder/directory we want the output to be put into , (__dirname -> current directorty of this file) and then go into the dist folder from here
    filename: 'bundle.js' // the output file
  },
  watch: true // when we run webpack its going to watch the files and when we make the change, it will take the source file and then imports the changes we make and finally bundle them together and spit it out inside the dist folder into the file called bundle.js (after every save a rebundle occurs)
}