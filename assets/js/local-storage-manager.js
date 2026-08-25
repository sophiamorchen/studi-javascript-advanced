const localStorageManager = new LocalStorageManager()
localStorageManager.set('essay', 'salutLeMonde')

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('click', (e) => {
        localStorageManager.addValue('history_input', e.currentTarget.name)
    })
})

localStorageManager.removeValue(1, 'history_input')