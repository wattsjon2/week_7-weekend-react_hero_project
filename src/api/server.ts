let token = `2318b35b120eb2d9dd780ff5639efe57aecdf2a55eaf9173`
let token2 = `2cb9d0b3271bc7f2f8307f5b8ab7bfb60925e59b364e43f8`


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://rangers-75-hero-collections-jw.herokuapp.com/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://rangers-75-hero-collections-jw.herokuapp.com/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create drone')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://rangers-75-hero-collections-jw.herokuapp.com/api/heroes/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update drone')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://rangers-75-hero-collections-jw.herokuapp.com/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete drone')
        }
        return await response.json()
    }

}