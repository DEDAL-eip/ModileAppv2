export default async function easyLog() {
    let res
        res = await fetch("http://52.166.128.133/ping")
        .then(res => res.status)
        .catch(error => {
            console.error(error)
            return 400
        })
    return res
    
}


export async function signUp (email, password) {
    return await fetch(`http://52.166.128.133/signup`, {
        method: 'POST',
        body: JSON.stringify({'email': email, 'password': password}),
        headers: { 'Content-type': 'application/json',
        'Accept': '*/*' }    
    })
        .then((response) => {
            console.log("res =>", response.status)
            return response
        })
        .catch((error) => console.error(error))
}

export async function signUpCode (email, code) {
    return await fetch(`http://52.166.128.133/signup_code`, {
        method: 'POST',
        body: JSON.stringify({'email': email, 'code': code}),
        headers: { 'Content-type': 'application/json',
        'Accept': '*/*' }    
    })
        .then((response) => {
            console.log("res =>", response.status)
            return response
        })
        .catch((error) => console.error(error))
}

export async function signIn (email, password) {
    return await fetch(`http://52.166.128.133/signin`, {
        method: 'POST',
        body: JSON.stringify({'email': email, 'password': password}),
        headers: { 'Content-type': 'application/json',
        'Accept': '*/*' }
    })
    .then(res => {
        if (res.status == 202)
            return res.json()
        else 
            return {hasError : true, status : res.status}
    }).then(res => res)
}