const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on Mac OS X, run the export command below from the terminal: 
// export BEARER_TOKEN='YOUR-TOKEN' 
const token = process.env.BEARER_TOKEN; 

const endpointUrl = 'https://api.twitter.com/1.1/trends/place.json?id=1'

async function getRequest() {

    // Edit query parameters below
    /*const params = {
        'query': 'from:GnomeMecanicien -is:tweet', 
        'tweet.fields': 'author_id' 
    } */

    const res = await needle('get', endpointUrl, { headers: {
        "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAPmBIQEAAAAAlZwzSfTjo0Pn1FaUJIUu%2Bi4bruc%3DDwklWraDWIBUdy26AflbIYbx8WT53CcYIhQhiz8CZn2kDlJ4XF`
    }})

    if(res.body) {
        return res.body;
    } else {
        throw new Error ('Unsuccessful request')
    }
    
}
module.export = {getRequest};
(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.log(response)

    } catch(e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
  })(); 