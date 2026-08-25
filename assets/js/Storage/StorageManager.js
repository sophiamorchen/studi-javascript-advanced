class StorageManager {
    has(key) {
        return localStorage.getItem(key) !== null
    }
    get(key) {
        let value = localStorage.getItem(key)
        try {
            value =JSON.parse(localStorage.getItem(key))
        } catch(e) {
        }
        return value
    }
    set(key, value) {
        return localStorage.setItem(key, value)
    }
    addValue(key, value) {
        let storageValue = this.get(key)
        if(!storageValue) {
            storageValue = []
        }
        storageValue.push(value)
        console.log(storageValue)

        this.set(key, JSON.stringify(storageValue))

    }
    removeValue(index, key){
        let storageValue = this.get(key)
        if(!storageValue || storageValue.length === 0){
            return
        }
        storageValue.splice(index, 1)
        this.set(key, JSON.stringify(storageValue))
    }
}