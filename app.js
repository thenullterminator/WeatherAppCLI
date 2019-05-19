console.log("Starting weather App");

const yargs=require("yargs");
const request=require("request");

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

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(arg.address)}&key=AIzaSyAqnvDCAo8lqcKO6OyFsOo_Tu2hdtCSjRY`,
    json:true
},(error,response,body)=>
{
    console.log("Address: "+body.results[0].formatted_address);
    console.log("Latitude: "+body.results[0].geometry.location.lat);
    console.log("Longitude: "+body.results[0].geometry.location.lng);
});

console.log(arg.address);
