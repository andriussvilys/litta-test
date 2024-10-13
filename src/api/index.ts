import { apiRoute } from "../definitions/commons";
import { User } from "../definitions/user";

export const createUser = async (user: User) => {
  try{
    const res = await fetch(`${apiRoute}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json();
  }
  catch(e){
    throw e
  }
};

export const updateUser = async (user: User) => {
  try{
    const res = await fetch(`${apiRoute}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
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
        if(!res.ok){
            throw new Error(res.statusText)
        }
        return res.json()
    }
    catch(e){
        throw e
    }
}
