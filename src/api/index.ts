import { apiRoute } from "../definitions/commons";
import { UserFormFields } from "../definitions/userFormFields";

export const createUser = async (user: UserFormFields) => {
  try{
    const res = await fetch(`${apiRoute}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log(res)
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json();
  }
  catch(e){
    throw e
  }
};

export const updateUser = async (user: UserFormFields) => {
  try{
    const res = await fetch(`${apiRoute}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    console.log(res)
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json();
  }
  catch(e){
    throw e
  }
};

export const getUser = async (id:number) => {
    try{
        const res = await fetch(`${apiRoute}/${id}`)
        console.log(res)
        if(!res.ok){
            throw new Error(res.statusText)
        }
        return res.json()
    }
    catch(e){
        throw e
    }
}

export const queryUsers = async (query: string) => {
    try{
        const res = await fetch(`${apiRoute}/search?q=${query}`)
        console.log(res)
        if(!res.ok){
            throw new Error(res.statusText)
        }
        return res.json()
    }
    catch(e){
        throw e
    }
}
