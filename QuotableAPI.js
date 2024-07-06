/*
const axios=require('axios');
const uri="https://api.quotable.io/random";
module.exports=getData=()=>{
    return axios.get(uri).then(response=> response.data.content.split(" "))
}

*/

const axios = require('axios');
const uri = "https://api.quotable.io/random";

const getData = async () => {
    const attempts = 3; // Number of retry attempts
    for (let i = 0; i < attempts; i++) {
        try {
            const response = await axios.get(uri);
            return response.data.content.split(" ");
        } catch (error) {
            if (i === attempts - 1) {
                console.error('Failed to fetch quote after multiple attempts', error);
                throw error; // Re-throw the error after final attempt
            }
            console.log('Retrying...', i + 1);
        }
    }
};

module.exports = getData;