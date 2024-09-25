import { useState } from "react";
import ColorListItem from "./ColorListItem"; //imports list from ColorListItem.jsx

export default function ColorList(setSelectedColor) {//creating a function called function list that takes 1 prop: setSelectedColor
  //state: colors
  const [colors] = useState(colorArray[(yellow, green, black)]); // We are creating a new array called colorArray where we are setting the available colors to be selected
  return (
    <>
      <ul>
        {colors.map(
          //mapping over the colors and for each color we are returning the colorListItem
          (c) => (
            <ColorListItem //need the 2 props from ColorListItem.jsx: color, setSelectedColor
              key={c.id} //We need a key since we are using the map function
              color={c} //c is just my shorthand for saying color. The paremeter name in c can be anything I want
              setSelectedColor={setSelectedColor}
              //calling the ColorList element and giving it props
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
