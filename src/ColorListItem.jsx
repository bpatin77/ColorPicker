export default function ColorListItem(props) {
  //a component(ColorListItems) receives props through the parameters of a function
  //Props=always the parameter to a component function
  //if we want a to pull info out of our props(ex: get a prop with a name) then we use destructuring assignment syntax
  // We can use destructuring assignment syntax to pull
  // the information we want out of props
  const { color, setSelectedColor, selectedColor } = props; //color & setSelectedColor is passed as props
  const className = `${color}${color === selectedColor ? " selected" : ""}`;
  //if color equals selected color then we will add selected class name or else nothing will be added 
  //2 classes one for the color(color) and one for the selected color(selectedColor)
  return (
    <li className={className} onClick={() => setSelectedColor(color)}></li>
  ); //if you click on the color the its returning the jsx using those props
}
//done
