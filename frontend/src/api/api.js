

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
    }).then(()=>{callback(results)});

}
