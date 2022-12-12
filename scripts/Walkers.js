import { getCities, getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers();
const walkerCities = getWalkerCities();
const cityArray = getCities();

// function to connect walker id to all city ids. return array of all matching city objects.
// tentative correct- double check what info i need to input.  info relationship should be correct

const workCities = (walker) => {
let matchedCites = []
for (const city of walkerCities) {
    if (city.walkerId === walker) {
        matchedCites.push(city)
    }
}
return matchedCites
};


// function that takes matched cities array and returns a string of 
//      the city names within each array of objects
const getCityNames = (matchedCities) => {
    let cityNames = ""
    for (const city of matchedCities) {
        for (const built of cityArray) {
            
            if (city.cityId === built.id) {
                cityNames += `${built.name} `
            }
        }
    }
    return cityNames
};


export const Walkers = () => {
    let walkerHTML = "<ul>"
    
    for (const walker of walkers) {
        // walkerHTML += `<li>${walker.name}</li>`
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    
    walkerHTML += "</ul>"
    
    return walkerHTML
}

document.addEventListener("click", (clickEvent) => {   
    const itemClicked = clickEvent.target
    
    if (itemClicked.id.startsWith("walker")) {
        
        const [,walkerId] = itemClicked.id.split("--")
        
        for (const walker of walkers) {
            if (walker.id === parseInt(walkerId)) {
                const matchedCites = workCities(parseInt(walkerId));
                const something = getCityNames(matchedCites);
                
                
                window.alert(`${walker.name} services ${something}`)
            }
        }
    }
}
)

