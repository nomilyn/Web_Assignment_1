/*********************************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nomilyn Cayton Student ID: 118 902 204 Date: January 19, 2021
*
*********************************************************************************************/

var serverVerbs = ["GET","GET","GET","POST","GET","POST"];
var serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Nomilyn Cayton","Nomilyn Cayton : ncayton@myseneca.ca","Login Complete","Main Panel","Logout Complete"];

function handleRequest(httpverb, path) {
    var response;
    var ctr = 0;
    while(ctr < serverPaths.length) {
        if((serverVerbs[ctr]==httpverb) && (serverPaths[ctr]==path)) {
            response = `200: ${serverResponses[ctr]}`;
            break;
        }
        else {
            response = `404: Unable to process ${httpverb} request for ${path}`;
        }
        ctr++;
    }
    response = `${httpverb} request for: ${path} 
${response}
---`;
    return response;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
function beginTesting() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/","/about","/contact","/login","/panel","/logout","/notFound1","/notFound2"];
    function randomRequest() {
        var randVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(handleRequest(randVerb, randPath));
    }
    setInterval(randomRequest,1000);    
}

beginTesting();