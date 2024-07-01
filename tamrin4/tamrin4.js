const { log } = require("node:console");
const fs = require("node:fs");

fs.readFile("names.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("error to read ====> ", err);
    }else {
        var df = {};
        var list_data = data.split("\n");
        list_data.pop();
        
        list_data.map(val => {
            var spli_name = val.split("-");
            df[spli_name[0]] = {};
            df[spli_name[0]]["Name"] = spli_name[1].replace("\r", "");
            df[spli_name[0]]["Number"] = [];
        })

        fs.readFile("numbers.txt", "utf-8", (err, data) => {
            if (err) {
                console.error("err numbers ====>", err);
            }else{
                var list_num = data.split("\n")

                list_num.map(val=> {
                    var spli_num = val.split("-");
                    df[spli_num[0]]["Number"].push(spli_num[1].replace("\r", ","));
                })
              
                for (const key in df) {
                    var len = df[key]["Number"].length;
                    if (len == 0) {
                        console.log(`${df[key]["Name"]} hasn't any phone number`);
                    }else if (len == 1) {
                        console.log(`${df[key]["Name"]}'s phon number is ${df[key]["Number"][0]}`);
                    }else {
                        var loger = `${df[key]["Name"]}'s phone numbers are`
                        for (let index = 0; index < parseInt(len); index++) {
                            loger = loger.concat(" ", `${df[key]["Number"][index]}`)
                        }
                        console.log(loger);
                    }
                }
                // console.log(df);
                // console.log(names);
            }
        })
        

        // console.log(names);
        // console.log(numbers);
    }
})