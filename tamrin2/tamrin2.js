const { trace } = require("node:console");
const fs = require("node:fs");


// // ----------------------------------------------------------------
// // A) write async to.txt from from.txt
// fs.readFile("./from.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Read err ====> ", err);
//     }else {
//         fs.writeFile("./to.txt", data, err => {
//             if (err) {
//                 console.log("whrite err ====>", err);
//             } else {
//                 // file write successfully
//                 console.log("write successfully");
//             }
//         })
//     }
// })
// // ---------------------------------------------------------------


// // -----------------------------------------------------------------
// // B) write sync to.txt from from.txt
// var data;
// try {
//     data = fs.readFileSync("./from.txt", "utf-8");
// }catch (err) {
//     console.error("Read err ====> ",err);
// }

// try {
//     fs.writeFileSync("./to.txt", data);
//     console.log("write Down");
// }catch (err) {
//     console.error("write err ===>", err);
// }
// // -----------------------------------------------------------------


// // -----------------------------------------------------------------
// // C) Write and append from.txt and append.txt to the to.txt with async
// fs.readFile("./from.txt", "utf-8", (err, from) => {
//     if (err) {
//         console.error("Read From err ===>", err);
//     }else {
//         fs.readFile("./append.txt", "utf-8", (err, append) => {
//             if (err) {
//                 console.error("Read append err ===>", err);
//             }else {
//                 fs.writeFile("./to.txt", from, err => {
//                     if(err){
//                         console.error("Write file err ===>", err);
//                     }else {
//                         fs.appendFile("./to.txt", append, err =>{
//                             if (err) {
//                                 console.error("append file err ===>", err);
//                             }else {
//                                 console.log("work Downs");
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
// // ----------------------------------------------------------------------


// ---------------------------------------------------------------------
// D) write and append from.txt and append.txt to the to.txt with sync
var from;
var append;

try {
    from = fs.readFileSync("./from.txt", "utf-8");
} catch (error) {
    console.error("from Read error ===>", error);
}

try {
    append = fs.readFileSync("./append.txt", "utf-8");
} catch (error) {
    console.error("append Read error ===>", error);
}

try {
    fs.writeFileSync("./to.txt", from);
} catch (error) {
    console.error("Write error", error);
}

try {
    fs.appendFileSync("./to.txt", append);
    console.log("Work Down");
} catch (error) {
    console.error("Append error", error);
}
// -------------------------------------------------------------------------
