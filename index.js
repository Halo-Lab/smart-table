const fs = require("fs");
const hound = require("hound");
const { execSync, exec } = require("child_process");

const  injectScript = () => {
  execSync(" npm run build");
  let projectFolder = null;

  // get project folder name
  fs.readdirSync("../").forEach((file, i, fileArray) => {
    if (fileArray.length > 2) {
      throw new Error("Too many folders !");
    }
    if (fileArray.length === 1) {
      throw new Error("Can not find project folder !");
    }
    if (file !== "smart-table" && projectFolder === null) {
      projectFolder = file;
    }
  });

  //copy file to lib folder project
  fs.copyFile(
    "./lib/index.js",
    `../${projectFolder}/node_modules/react-smart-dynamic-table/lib/index.js`,
    (err) => {
      if (err) throw err;
      console.log("\x1b[33m%s\x1b[0m", "Script was injected to project !");
    }
  );
}

injectScript();

const startWatch =() =>{

  const watcher = hound.watch("./src");
  watcher.on("change", function (file) {
    console.log(file + " was changed , run inject script ");
    injectScript();
  });
}

startWatch();
