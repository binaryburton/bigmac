# BigMac - Jacob Burton

## How to run

**npm run bigmac** -
This will start up both your Front End React App **(3000)** && your Node back end server **(8080)**, locally

## Swagger

View the swagger file once application is runnong at **http://localhost:8080/api-docs/**

## Logic Information

In the provided BigMac CSV data set, each country has multiple dates which reflect the currency/price information at that corresponding date.
So when I went to process all the calculations for this application, I chose a random date for both the **Local Country** and **Random Country**
I display which date the calucations are reffering to at the top of the page

## Issues with **ipvigilante.com**

When I was finishing up the applicaiton, I started having trouble connecting with **(https://ipvigilante.com/json/)**
I cannot even access the link you provided in the email **https://www.ipvigilante.com/api-developer-docs/**, I get **This site can’t be reachedipvigilante.com refused to connect.**
I decided to hardcode in data that I would normally get back from fetching this site so you could see how to application works, instead of displaying an error message

## Testing

**cd** into the client folder then run **npm test**
