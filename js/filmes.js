'use strict'

export async function getListarFilmes () {
    const url = `http://localhost:3030/v1/controle-filmes/filme`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export async function getBuscarFilme (id) {
    const url = `http://localhost:3030/v1/controle-filmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export async function postFilme (id) {
    const url = `http://localhost:3030/v1/controle-filmes/filme`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putFilme (id) {
    const url = `http://localhost:3030/v1/controle-filmes/filme/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteFilme (id) {
    const url = `http://localhost:3030/v1/controle-filmes/filme/${id}`
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    const response = await fetch(url, options)
    return response.ok
}

