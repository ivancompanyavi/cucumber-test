const fs = require("fs");

if (!fs.existsSync("./dist/")) {
  fs.mkdirSync("./dist/");
}

//build the application
require("esbuild")
  .serve(
    {
      servedir: "dist",
    },
    {
      entryPoints: ["./src/index.jsx"],
      outdir: "./dist",
      minify: false, //so the resulting code is easier to understand
      bundle: true,
      sourcemap: true,
    }
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//use a basic html file to test with
fs.copyFile("./src/index.html", "./dist/index.html", (err) => {
  if (err) throw err;
});