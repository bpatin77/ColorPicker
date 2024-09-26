import { useState } from "react";
import ColorListItem from "./ColorListItem"; //imports list from ColorListItem.jsx

export default function ColorList({ setSelectedColor, selectedColor }) {//selectedColor comes from the App.jsx
  //have write props as {} for destructuring
  //creating a function called function list that takes 1 prop: setSelectedColor
  //state: colors
  const [colors] = useState(["yellow", "green", "black"]); // creates a variable and defines it as a state then passes a new array of strings to that variable
  return (
    <>
      <ul id="colors-list">
        {/* the id is referencing the css */}
        {colors.map(
          //mapping over the colors array and for each color we are returning the colorListItem
          (c) => (
            <ColorListItem //need the 2 props from ColorListItem.jsx: color, setSelectedColor
              key={c} //We need a key since we are using the map function in jsx
              color={c} //c is just my shorthand for saying color. The paremeter name in c can be anything I want
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}//passing selectedColor to the list item
              //passing properties to child components (13-16)
            />
          )
        )}
      </ul>
    </>
  );
}
//done

/*
This component syntax
<ColorListItem color={c} setSelectedColor={setSelectedColor} />
is syntactic sugar for calling the function w/ an object as an argument,
where the names of the props are the keys of that object.
ColorListItem({
  color: c,
  setSelectedColor
})
*/
