
//Creating a new account
export const createAccount = async (name,email,password,callback)=>{
    const url = process.env.REACT_APP_API_URL + '/user/register';
    const method = 'post';
    const headers = {
        'content-type':'application/json'
    }

    const body = JSON.stringify({
        name,
        email,
        password
    })

    const options = {
        method,
        headers,
        body
    }

    let results;
    fetch(url, options).then((response)=>{
        if(response.status > 299){
            console.log("error")
            return
        }
        return response.json()
    }).then((data)=>{
        results = data;
    }).then(()=>{
        callback(results)
    }).catch((error)=>{
        console.log(error)
    });

}


//Loggin in

export const loginAccount = (email,password,callback)=>{
    const url =process.env.REACT_APP_API_URL + '/user/auth'
    const method = 'post'
    const headers = {
        'Content-type':'application/json'
    }
    const body = JSON.stringify({
        email,
        password
    })

    const options = {
        method,
        headers,
        body
    }


    let results;
    fetch(url,options)
        .then((response)=>{
            if(response.status > 299){
                console.log("unable to login")
                return
            }

            return response.json()
        }).then((data)=>{
            results = data
        }).then(()=>{
            callback(results)
    })
}

//Logging out

export const logoutAccount =(token,callback)=>{
    const url = process.env.REACT_APP_API_URL + '/user/logout'
    const method = 'post'
    const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-type': 'application/json'
    }

    const options = {
        method,
        headers
    }

    let results;
    fetch(url,options).then((response)=>{
        if(response.status > 299){
            console.log("Unable to delete user")
            return
        }
        return response.json()
    }).then((data)=>{
        results = data;
    }).then(()=>{
        callback(results)
    }).catch((error)=>{
        console.log(error)
    });
}

//delete user
export const deleteAccount = (token,callback) => {
    const url = process.env.REACT_APP_API_URL + '/user/delete'
    const method = 'delete'
    const headers = {
        'Content-type':'application/json',
        'Authorization':'Bearer ' + token

    }

    const options = {
        method,
        headers
    }

    let result

    fetch(url,options).then((response)=>{
        if(response.status > 299){
            console.log("Unable to delete account")
            return
        }

        return response.json()
    }).then((data)=>{
        result = data
    }).then(()=>{
        callback(result)
    }).catch((error)=>{
        console.log(error)
    })
}
