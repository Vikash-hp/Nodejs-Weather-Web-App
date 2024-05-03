const fs= require("fs");
const http= require("http");
const requests= require("requests")

const homeHtml=fs.readFileSync(`${__dirname}/home.html`,"utf-8");
//const homeCss=fs.readFileSync("home.css","utf-8");
//const homeJs=fs.readFileSync("home.js","utf-8");

const replaceVal= (tempVal, orgVal)=>{
    let temperature= tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature= temperature.replace("{%tempmin%}",orgVal.main.temp_min);
     temperature= temperature.replace("{%tempmax%}",orgVal.main.temp_max);
     temperature= temperature.replace("{%location%}",orgVal.name);
     temperature= temperature.replace("{%country%}",orgVal.sys.country);
     temperature= temperature.replace("{%country%}",orgVal.weather[0].main);

     return temperature;
}

const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        requests( "https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=e255b1b13339400994c1912cbd664b41"
        )

        .on("data", (chunk)=>{
            const objData=JSON.parse(chunk)
            const arrData=[objData];
            //console.log(arrData);
            //console.log(arrData[0].main.temp)
            const realTimeData= arrData.map((val)=>
                replaceVal(homeHtml,val)
            ).join("");

            res.write(realTimeData);
            //console.log(realTimeData);
        })

        .on("end",(err)=>{
            if(err)
            return console.log("connection closed due to errors",err);
            res.end();

        })
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
})
