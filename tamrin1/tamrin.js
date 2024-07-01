var callback = (ferst_name, Last_name, func) => {
    func(ferst_name, Last_name)
}

callback("Negar", "Amini", function(ferst_name, Last_name){
    var resalt = ferst_name + " " + Last_name
    console.log(resalt);
})