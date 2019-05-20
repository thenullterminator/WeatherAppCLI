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
        else if(body.length===0)
        {
            callback("Unable to find that address");
        }
        else 
        {
        callback(undefined,{
        Address:body[0].display_name,
        Latitude:body[0].lat,
        Longitude:body[0].lon
        });
        }
    });
};


module.exports={
    geocodeadd:geocodeadd
};
