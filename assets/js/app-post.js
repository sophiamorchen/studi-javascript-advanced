const form = document.getElementById('voiture-create')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    displayToast("error", 'bravo modif et ble ble ble ble  reussie ! ');
    

    // const formData = new FormData(e.currentTarget)

    // fetch('http://127.0.0.1:8742/api/voiture/create', {
    // method: "POST",
    // body: formData
    // })
    // .then(response => {
    //     return response.json()
    // })
    // .then(data => {
    //     console.log(data);

    // displayToast('success', 'modification enregistrées')
    // })
    // }).catch((error) => {
    //     dipslayToast('error', 'une erreur est survenue merci de retester')
    // })


// const formData = new FormData()

// formData.set('immatriculation', 'JS-000-PHP')
// formData.set('marque', 'volkswagen')
// formData.set('modele', '205')
// formData.set('km', '205123')
// formData.set('annee', '2005')
// formData.set('etat', 'bon')
// formData.set('type_motorisation', 'diesel')

// fetch('http://127.0.0.1:8742/api/voiture/create', {
//     method: "POST",
//     body: formData
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
})
