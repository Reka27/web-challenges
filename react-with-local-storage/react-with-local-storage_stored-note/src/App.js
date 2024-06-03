//import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // const [note, setNote] = useState("");
  //  const [font, setFont] = useState("system-ui");
  const [note, setNote] = useLocalStorageState("note", { default: 0 });
  const [font, setFont] = useLocalStorageState("font", { default: "system" });

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
