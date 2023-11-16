// https://api-ninjas.com/api/planets
// https://science.nasa.gov/mercury/

// mass: 0.000174
// name : "Mercury"
// period :88
// radius:0.0341
// temperature:400

let page = 'Start';
let planets = document.querySelectorAll('.planet');
planets.forEach(elem => {
    elem.addEventListener('click', queryInfo)
})

// request data from the server
function queryInfo(e){
    let planetName = e.target.textContent;
    // -----------to do map
    let planet = {};

    fetch('https://api.api-ninjas.com/v1/planets?name=' + planetName, {headers: { 'X-Api-Key': 'GHzlHKT4j4DKherfN381hw==mp2gk7umE4rNE2wF'}})
        .then(res => res.json())
        .then(result => {
            planet = result[0];
            console.log(planet)
        })
        .catch(error => {
            console.log('No data')
        }
    )
    return planet;
}




