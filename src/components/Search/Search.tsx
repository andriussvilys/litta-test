import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { queryUsers } from "../../api";
import { Message } from "primereact/message";
import { User } from "../../definitions/user";
import UserPreview from "./UserPreview";
import { Divider } from "primereact/divider";

export default function Search() {
  const [searchText, setSearchText] = React.useState("");
  const [users, setUsers] = React.useState<User[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const onSearch = async (query: string) => {
    try {
      const res = await queryUsers(searchText);
      console.log(res);
      if(res.total === 0){
        setError("No users found")
        setUsers([])
        return
      }
      setUsers(res.users);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
      setUsers([]);
    }
  };
  return (
    <div className="h-full w-full flex flex-column gap-4 justify-content-center align-items-center p-20">
      <div className="flex">
        <InputText
          placeholder="Enter a name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={() => {
            onSearch(searchText);
          }}
        >
          Search
        </Button>
      </div>
      <div>
        <div className="flex flex-column gap-1">
          {users.map((user: User) => {
            return (
              <div>
                <UserPreview key={user.id} user={user}></UserPreview>
                <Divider />
              </div>
            );
          })}
        </div>
        {error && <Message severity="error" text={error} />}
      </div>
    </div>
  );
}
