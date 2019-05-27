console.log("Starting weather App");

const yargs=require("yargs");
const geocode=require("./geocode");
const weather=require("./fetchweather");

var arg=yargs
.options({
    address:{
        demand:true,
        string:true,
        describe:'Enter the Address whose weather you want',
        alias:'a'
    }
})
.help()
.alias('help','h')
.argv;


geocode.geocodeadd(arg.address).then((results)=>{
    console.log(JSON.stringify(results,undefined,2));
    console.log("-----------------------------------------------------------------------");
    console.log("Weather Details:");
    console.log("-----------------------------------------------------------------------");
    
    return weather.fetchweather(results.Latitude,results.Longitude)
}).then((results)=>
{
    console.log(results);
}).catch((error)=>
{
    console.log(error);
});

