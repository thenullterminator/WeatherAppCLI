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



