
export function saveToLocalStorage(state){

    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('simpleMern',serializedState)
    }catch(error){
        console.log("Unable to save to localstorage",error)
    }

}


export function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('simpleMern');
        if(serializedState === null){
            return undefined //redux will generate an error if return value is null
        }
        return JSON.parse(serializedState)
    }catch(error){
        console.log("Unable to load state from local storage",error)
        return undefined //redux will generate an error if not undefined
    }
}

export function removeFromLocalStorage(){
    try{
        localStorage.removeItem('simpleMern')
    }catch(error){
        console.log("Unable to remove item from local storage",error)
    }

}
