// Print the country that uses US dollars as currency.

let API = `https://restcountries.com/v3.1/all`

let a = new XMLHttpRequest()

a.open("GET",API)

a.send()

a.onload = function(){
    let b = a.response
    let c = JSON.parse(b)
    // console.log(c);
    let d = c.filter((e)=>e.cca2=="US").forEach((e)=>console.log(e.name.common))
}
