//http://data.fixer.io/api/latest?access_key=0a32eea74802d647fee4ce254e491f24
const axios = require('axios');
const getExchangeRate = async (from , to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=0a32eea74802d647fee4ce254e491f24');
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};
  const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
            return response.data.map((country) => country.name);
};
//const convertCurrency = (from, to, amount) =>  {
//  let convertedAmount;
 //return  getExchangeRate(from, to).then((rate) => {
  //  const convertedAmount = (amount * rate).toFixed(2);
  //  return getCountries(to);
  //}).then((countries) => {
  //  return `${amount}${from} is worth ${convertedAmount} ${to}. u can spend it in following countries${counties.join(',')}`;
//  });
//};
const convertCurrency = async ( from, to , amount) => {
  const rate = await getExchangeRate(from, to)
  const countries = await getCountries(to);
  const convertedAmount = (amount * rate).toFixed(2);
  return `${amount}${from} is worth ${convertedAmount} ${to}. u can spend it in following countries${countries.join(',')}`;
};
convertCurrency('USD', 'USD', 20).then((message) => {
  console.log(message);
});
