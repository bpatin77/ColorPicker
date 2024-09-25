import { useState } from "react";
import ColorList from "./ColorList";
import SelectedColorSection from "./SelectedColorSection";

// const App = () => {
//   return (
//     <div id="container">
//       <div id="navbar">
//         <div>Currently selected: </div>
//         <div className="red">red</div>
//       </div>
//       <div id="colors-list">{/* colors go here */}</div>
//     </div>
//   );
// };

// export default App;



export default function App() {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <>
      <ColorList setSelectedColor={setSelectedColor} />
      <SelectedColorSection selectedColor={selectedColor} />
    </>
  );
}