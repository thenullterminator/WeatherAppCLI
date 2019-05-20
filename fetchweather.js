const request =require("request");

var fetchweather=(lat,long,callback)=>
{

    request(
        {   url:`https://api.darksky.net/forecast/baf2670bfa2f5dc7cc93eb723c23648f/${lat},${long}`,
            json:true
        },
        (error,response,body)=>
        {
            callback(body.currently);
        }
    );
};

module.exports={
    fetchweather:fetchweather
};
