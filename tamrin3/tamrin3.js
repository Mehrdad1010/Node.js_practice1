const fs = require("node:fs")

var tex = "Hellow from Mehrdad Amini and Negar Amini"

// // -----------------------------------------------------------
// // A) async function
// fs.writeFile("./newFile.txt", tex, err => {
//     if (err) {
//         console.error("err ===>", err);
//     }else {
//         console.log("Work Down");
//     }
// })
// // ---------------------------------------------------------------


// ----------------------------------------------------------
// B) sync function
try {
    fs.writeFileSync("./newFile.txt", tex)
} catch (error) {
    console.error("err ===>", error);
}
// ----------------------------------------------------------------------
