fetch('http://127.0.0.1:8742/api/voiture/show/1', {
    method: 'GET',
    //mode: 'no-cors' 
    // => pas de verification de domaine, etc ...mauvaise solution.Bypass des cors origin
    // mode: 'cors'
}).then(response => {
    if (response.status !== 200) {
        throw new Error('Something went wrong !')
    }

    return response.json()

}).then(data => {
    console.log(data);
    if (data.success !== true) {
        throw new Error('Something went wrong !')
    }
    const voiture = data.data
    const voitureDiv = document.getElementById('voiture')

    for (const [key, carInfo] of Object.entries(data.data)) {
        const element = document.createElement("p")
        const cleanKey = key.replaceAll('_', ' ')
        const label = cleanKey.at(0).toUpperCase() + cleanKey.slice(1)
        element.innerText = `${label} : ${carInfo}`
        
        voitureDiv.append(element)
    }

    // pour http://127.0.0.1:8742/api/homepage/home => voir avec postman
    // div.innerText = data.message
    // console.log(data);

}).catch((error) => {

    console.log(error);
})
