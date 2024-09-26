import { useState } from "react";
import ColorList from "./ColorList";
import SelectedColorSection from "./SelectedColorSection";

// const App = () => {
//   return (
//     <header>
//       <dl>
//         <dt>Currently selected: </dt>
//         <dd className="red">red</div>
//       </dl>
//       </header>
//     <menu className="colors">
//          <li className="yellow"></li>
//          <li className="green"></li>
//          <li className="black"></li>;
//      </menu>
//   );
// };

// export default App;

export default function App() {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <>
      <SelectedColorSection selectedColor={selectedColor} />
      <ColorList
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
    </>
  );
}
