// https://api-ninjas.com/api/planets
// https://science.nasa.gov/mercury/

// mass: 0.000174
// name : "Mercury"
// period :88
// radius:0.0341
// temperature:400

let page = 'Start';
let planetsDiv = document.querySelectorAll('.planet');
let divLoader = document.querySelector('#loader');
let planetTitle = document.querySelector("#planetTitle");
let planetDescription = document.querySelector('.description')

function showLoader(){
    divLoader.classList.add('show');    
}
function hideLoader(){
    divLoader.classList.remove('show');
}

planetsDiv.forEach(elem => {
    elem.addEventListener('click', queryInfo)
})
let planets = new Map();



// request data from the server
function queryInfo(e){
    let planetName = e.target.textContent;
    if (!planets.has(planetName)) {
        let planet = {};
        showLoader(); 
        planetTitle.textContent = planetName;
        planetDescription.innerHTML = '';      
        fetch('https://api.api-ninjas.com/v1/planets?name=' + planetName, {headers: { 'X-Api-Key': 'GHzlHKT4j4DKherfN381hw==mp2gk7umE4rNE2wF'}})
            .then(res => res.json())
            .then(result => {
                hideLoader();
                planet = result[0];               
                planets.set(planetName, planet);
                showInfo(planetName);
            })
            .catch(error => {
                console.log('No data')
            }
        )
    } else{
        showInfo(planetName);
    }    
}
function showInfo (namePlanet){
    let planet = planets.get(namePlanet);
    console.log(planet);
    planetTitle.textContent = planet.name;
    planetDescription.innerHTML = 'Name: '+planet.name +'<br> Mass: '+ planet.mass +'<br> Radius: ' + planet.radius + '<br> Period: ' + planet.period;


}




