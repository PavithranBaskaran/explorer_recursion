import { Folder } from "./Components/Folder";
import "./styles.css";
import explorer from "./jsondata";

export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
