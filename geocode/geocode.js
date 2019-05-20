const request=require("request");
var geocodeadd=(address,callback)=>
{
    request(
    {
        url:`https://nominatim.openstreetmap.org/search/${encodeURIComponent(address)}?format=json&email=iit2018122@iiita.ac.in&addressdetails=1&limit=1`,
        json:true
    },
    (error,response,body)=>
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
