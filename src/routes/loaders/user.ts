const apiRoute = 'https://dummyjson.com/users'

const getUser = async (id:number) => {
    console.log("getUser: " + id)
    const res = await fetch(`${apiRoute}/${id}`)
    const user = await res.json()
    console.log(user)
    return user
}

export {getUser}