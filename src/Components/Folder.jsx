import { useState } from "react";

export function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <div onClick={() => setExpand(!expand)}>{explorer.name}</div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
        >
          {explorer.items.map((item) => {
            return <Folder explorer={item} />;
          })}
        </div>
      </>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
}
