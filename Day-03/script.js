var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload = function(){
    // console.log(req.response);
    var res = JSON.parse(req.response) 
    console.log(res);
    for(var i=0;i<res.length;i++){
        console.log(res[i].flags.png);
    }
}


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response)
    console.log(res)
    for (var i = 0; i < res.length; i++) {
        console.log("NAME : " + res[i].name.common) //name
        console.log("REGION : " + res[i].region);
        console.log("SUB-REGION : " + res[i].subregion);
        console.log("POPULATION : " + res[i].population);

    }
}