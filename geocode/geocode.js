const request=require("request");
var geocodeadd=(address,callback)=>
{
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(arg.address)}&key=AIzaSyAqnvDCAo8lqcKO6OyFsOo_Tu2hdtCSjRY`,
        json:true
    },(error,response,body)=>
    {
        if(error)
        {
            callback("Unable to connect to google servers.");
        }
        else if(body.status==="ZERO_RESULTS")
        {
            callback("Unable to find that address");
        }
        else if(body.status==="OK")
        {
        callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,
        Longitude:body.results[0].geometry.location.lng
        });
        }
    });
};

module.exports={
    geocodeadd:geocodeadd
};
