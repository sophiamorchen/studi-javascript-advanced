class AutoComplete{
    constructor() {
        document.querySelectorAll('[data-autocomplete]').forEach((element) => {
            element.addEventListener('keyup', (event) => {
                    if (event.key !== 'Shift') {
                        this.search(element, element.dataset.autocompleteFieldName ?? element.id, element.dataset.autocompleteUrl
                        )
                    }
            })
        })

    }
    search(inputElement, fieldName, url) {

        if (inputElement.value.length < 2) {
            return;
        }

        const autocompleteResult = this.createResultDiv(inputElement.parentElement)


        const formData = new FormData()
        formData.append(fieldName, inputElement.value)

        setTimeout(() => {
            fetch(url, {
                headers: new Headers(),
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                
                .then(response => {
                    this.clearSearch(autocompleteResult)

                    if (response.success !== true) {
                        return
                    }

                    const ul = document.createElement('ul')

                    for (let result of response.data) {
                        
                        ul.append(this.addSearchResult(inputElement, fieldName, autocompleteResult, result))
                    
                    }
                    
                    autocompleteResult.append(ul)
                    autocompleteResult.classList.add('active')
                    
                })
            }, 900)
    }

    addSearchResult(inputElement, fieldName, autocompleteResultDiv, result) {
        const li = document.createElement('li')
        li.innerText = result[fieldName]
        li.dataset[fieldName] = result[fieldName]


        // for (const key in result) {
        //     li.dataset[key] = result[key]
        // }


        li.addEventListener('click', (event) => {
            const target = event.currentTarget
            inputElement.value = target.dataset[fieldName]
            console.log(target.dataset[fieldName]);
            

            // document.querySelectorAll('input').forEach(element => {
            //     if (element.name && target.dataset[element.name] !== undefined) {
            //         element.value = target.dataset[element.name]
            //     }
            
            // });

            autocompleteResultDiv.classList.remove('active')
            
            //setTimeout pour que l'effet smooth de l'opacité se fasse aussi quand on clicque dessus : à la disparition
            // sinon le js  fait le remove immédiatemeent avant que la props css ne puisse s'appliquer           
            setTimeout(() => {
                
                autocompleteResultDiv.remove()
            }, 600)

            
            // makeInput.value = target.dataset.modele
            // kmInput.value = target.dataset.km
            // yearInput.value = target.dataset.annee
            // usedInput.value = target.dataset.etat
            // engineInput.value = target.dataset.motorisation

        })
        return li;
    } 

    createResultDiv(parentDiv) {
        if (parentDiv.querySelector('.autocomplete-result')) {
            return
        }
        
        const div = document.createElement('div')
        div.classList.add('autocomplete-result')
        parentDiv.append(div)
        
        return div

    }

    clearSearch(autocompleteResult) {
        const existingUL = autocompleteResult.querySelector('ul')
            if (existingUL) {
                existingUL.remove()
            }
    }


}
