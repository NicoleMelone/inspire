export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/niki/todos',
    timeout: 3000
})


export const quotesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 3000
})

export const imageApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
    timeout: 3000
})

export const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 3000
})



