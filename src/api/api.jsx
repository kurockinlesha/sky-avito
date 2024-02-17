export const baseUrl = 'http://localhost:8090/'

export const getProducts = async () => {
    const response = await fetch(`${baseUrl}ads`)
    const data = await response.json()
    return data
}

export const registration = async (email, password, name, surname, city) => {
    try {
        const response = await fetch(`${baseUrl}auth/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                surname: surname,
                city: city,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            return { success: true, data: data }
        } else {
            const errorData = await response.json()
            return errorData
        }
    } catch (error) {
        return { success: false, status: 'NETWORK_ERROR', error: error.message }
    }
}

export const authorization = async (email, password) => {
    try {
        const response = await fetch(`${baseUrl}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            const errorData = await response.json()
            return errorData
        }
    } catch (error) {
        return { success: false, status: 'NETWORK_ERROR', error: error.message }
    }
}

export const refreshToken = async () => {
    const response = await fetch(`${baseUrl}auth/login`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            access_token: localStorage.getItem('token'),
            refresh_token: localStorage.getItem('refToken'),
        }),
    })
    if (response.status === 201) {
        const data = await response.json()
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('refToken', data.refresh_token)
        return data
    }
    if (response.status === 401) {
        return response
    }
}

export const getMyAdverts = async () => {
    const response = await fetch(`${baseUrl}ads/me`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    if (response.status === 401) {
        await refreshToken()
        return getMyAdverts()
    }
    const data = await response.json()
    return data
}

export const getMyData = async () => {
    const response = await fetch(`${baseUrl}user`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    if (response.status === 401) {
        await refreshToken()
        return getMyData()
    }

    const data = await response.json()
    return data
}

export async function updateUser(name, surname, city, phone) {
    const response = await fetch(`${baseUrl}user`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            phone: phone,
            city: city,
        }),
    })
    if (response.status === 401) {
        await refreshToken()
        return updateUser(name, surname, city, phone)
    }
    const data = await response.json()
    return data
}

export const createAdvert = async (name, description, price) => {
    const response = await fetch(`${baseUrl}adstext`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            title: name,
            description: description,
            price: price,
        }),
    })
    if (response.status === 401) {
        await refreshToken()
        return createAdvert(name, description, price)
    }

    const data = await response.json()
    return data
}

export const editAdvert = async (name, description, price, id) => {
    const response = await fetch(`${baseUrl}ads/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            title: name,
            description: description,
            price: price,
        }),
    })
    if (response.status === 401) {
        await refreshToken()
        return editAdvert(name, description, price, id)
    }

    const data = await response.json()
    return data
}

export const deleteAdvert = async (id) => {
    const response = await fetch(`${baseUrl}ads/` + id, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    if (response.status === 401) {
        await refreshToken()
        return deleteAdvert(id)
    }

    const data = await response.json()
    return data
}

export const deleteImage = async (url, id) => {
    const fileUrlParam = encodeURIComponent(url)
    const response = await fetch(
        `${baseUrl}ads/${id}/image?file_url=${fileUrlParam}`,
        {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        },
    )
    if (response.status === 401) {
        await refreshToken()
        return deleteImage(url, id)
    }
    const data = await response.json()
    return data
}

export const addImage = async (id, image) => {
    const formData = new FormData()

    formData.append('file', image)

    const response = await fetch(`${baseUrl}ads/${id}/image`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
    })
    if (response.status === 401) {
        await refreshToken()
        return addImage(id, image)
    }
    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export const addAvatar = async (image) => {
    const formData = new FormData()

    formData.append('file', image)

    const response = await fetch(`${baseUrl}user/avatar`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
    })
    if (response.status === 401) {
        await refreshToken()
        return addAvatar(image)
    }

    const data = await response.json()
    return data
}

export const getReviews = async (id) => {
    const response = await fetch(`${baseUrl}ads/${id}/comments`, {})

    const data = await response.json()
    return data
}

export const addReviews = async (id, text) => {
    const response = await fetch(`${baseUrl}ads/${id}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            text: text,
        }),
    })
    if (response.status === 401) {
        await refreshToken()
        return addReviews(id, text)
    }
    const data = await response.json()
    return data
}