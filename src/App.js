import { useState } from "react";
import { Users } from "./Data/user";
import Table from "./Components/Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  console.log(Users);

  const search = (data) => {
    return data.filter((item) =>
       keys.some((key) => item[key].includes(query)));
  };
  return (
    <div className="app flex flex-col bg-teal-300/80 space-y-4 center border rounded-sm w-1/2 p-4 m-2 mx-auto">
      <h2 className="mx-auto">Search box mini project</h2>
      <div className="mx-auto">
        <input
          type="text"
          placeholder="Search Contact..."
          className="search text-center border rounded-md shadow-md"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
