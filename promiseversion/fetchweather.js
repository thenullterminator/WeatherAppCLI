const request =require("request");

var fetchweather=(lat,long)=>
{
    return new Promise((resolve,reject)=>{

        request(
            {   url:`https://api.darksky.net/forecast/baf2670bfa2f5dc7cc93eb723c23648f/${lat},${long}`,
                json:true
            },
            (error,response,body)=>
            {
                resolve(body.currently);
            }
        );
    });
};

module.exports={
    fetchweather:fetchweather
};
