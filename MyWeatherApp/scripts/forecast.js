const myKey = "yourToken";

const getCity = async (location) => {
    const baseURL = "baseURL";

    const query = `?apikey=${myKey}&q=${location}`;

    const response = await fetch(baseURL + query);

    const value = await response.json();


    return value[0];


};

const getWeather = async (id) => {
    const baseURL = "baseURL";

    const query = `${id}?apikey=${myKey}`;

    const response = await fetch(baseURL + query);

    const value = await response.json();


    return value[0];

}

getCity("tokyo")
    .then(value => {
        return getWeather(value.Key);
    }).then(value => {
        //console.log(value);
    })
    .catch(err => {
        console.log(err);
    });



