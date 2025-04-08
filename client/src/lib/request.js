const buildOptions = (data) =>{
    const options = {}

    if(data){
        options.headers = {
            "content-type": "application/json"
        }
        options.body = JSON.stringify(data)
    }

    const auth = JSON.parse(localStorage.getItem('Auth'))

    const token = auth?.accessToken;

    if(token){
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    return options
}

const request = async (method,url,data)=>{
    const response = await fetch(url,{
        ...buildOptions(data),
        method,
    })

    if(response.status === 204){
        return {}
    }

    if(response.status === 403){
        throw response
    }

    const result = response.json()

    if(!response.ok){
        throw result
    }

    return result
}

export const get = request.bind(null,"GET")
export const post = request.bind(null,"POST")
export const edit = request.bind(null,"PUT")
export const remove = request.bind(null,"DELETE")