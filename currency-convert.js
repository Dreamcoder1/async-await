//http://data.fixer.io/api/latest?access_key=0a32eea74802d647fee4ce254e491f24
const axios = require('axios');

//const getExchangeRate = (from , to) => {
//  return  axios.get('http://data.fixer.io/api/latest?access_key=0a32eea74802d647fee4ce254e491f24').then((response) => {
  //   const euro = 1 / response.data.rates[from];
  //   const rate = euro + response.data.rates[to];
  //   return rate;
//  });
//};
const getExchangeRate = async (from , to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=0a32eea74802d647fee4ce254e491f24');
  const euro = 1 / response.data.rates[from];
  const rate = euro + response.data.rates[to];
  return rate;
};

//const getCountries = (currencyCode) => {
//  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response)  => {
  //    return response.data.map((country) => country.name);

  const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
            return response.data.map((country) => country.name);
};
getExchangeRate('USD', 'CAD').then((rate) => {
    console.log(rate);
});
getCountries('CAD').then((countries)=> {
  console.log(countries);
});
