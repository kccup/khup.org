const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd0c5831ec9msh24d7fb8e86114a2p17ba88jsnf7b4f2028c8c',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};
.then(response => response.json())
.then(response => {
    console.log(response);
})

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    console.log();
} catch (error) {
	console.error(error);
}