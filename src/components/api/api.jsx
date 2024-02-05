export const baseUrl = 'http://localhost:8090/'


let tokenUpdateNew = false

export const getProducts = async () => {
    const response = await fetch(`${baseUrl}ads`)
    const data = await response.json()
    return data
}

export const registration = async (email, password ) => {
    return fetch(`${baseUrl}auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
}

export const authorization = async (email, password ) => {
        const response = await fetch(`${baseUrl}auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    console.log(response);
    const data = await response.json()
    return data
}


export const refreshToken = async () => {

    tokenUpdateNew = true
    const t = setTimeout(() => {
        tokenUpdateNew = false
        clearTimeout(t)
    }, 30000);
 


    const response = await fetch(`${baseUrl}auth/login`, {
    method: 'PUT',
    headers: {
        "content-type": "application/json",
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

export const getMyAdverts = async() => {
    if (!tokenUpdateNew) {
       await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/me`,{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
    })

    const data = await response.json()
    return data
}

export const getMyData = async() => {
  
    if (!tokenUpdateNew) {
        await refreshToken()
     }
 
    const response = await fetch(`${baseUrl}user`,{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
    })
    const data = await response.json()

    return data
}

export async function updateUser (name, surname, city, phone) {
    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}user`,{
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            "name": name,
            "surname": surname,
            "phone": phone,
            "city": city
          }),
    })
    
    const data = await response.json()
    return data
}

export const createAdvert = async(name, description, price) => {
    console.log(name, description, price);
    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}adstext`,{
        method: 'POST',
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            "title": name,
            "description": description,
            "price": price,
          }),
    })
    
    const data = await response.json()
    return data
}

export const editAdvert = async(name, description, price, id) => {
    console.log(name, description, price);
    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}ads/${id}`,{
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            "title": name,
            "description": description,
            "price": price,
          }),
    })
    
    const data = await response.json()
    return data
}

export const deleteAdvert = async(id) => {
 
    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}ads/` + id,{
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
    })
    
    const data = await response.json()
    return data
}

export const deleteImage = async(url, id) => {

    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}ads/${id}/image`,{
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            "file_url": url,
          }),
    })
    
    const data = await response.json()
    return data
}

export const addImage = async(id, image) => {

    if (!tokenUpdateNew) {
        await refreshToken()
     }

    const formData = new FormData();

        formData.append('file', image);
  
    const response = await fetch(`${baseUrl}ads/${id}/image`,{
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: formData,
    })
    if (response.status === 201) {
        const data = await response.json()
        return data
    }

}

export const addAvatar = async(image) => {
   
    if (!tokenUpdateNew) {
        await refreshToken()
     }

    const formData = new FormData();
   
    formData.append('file', image);
      
    const response = await fetch(`${baseUrl}user/avatar`,{
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: formData,
    })

    const data = await response.json()
    return data
}