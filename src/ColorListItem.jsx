export default function ColorListItem(props) {
  //a component(ColorListItems) receives props through the parameters of a function
  //Props=always the parameter to a component function
  //if we want a to pull info out of our props(ex: get a prop with a name) then we use destructuring assignment syntax
  // We can use destructuring assignment syntax to pull
  // the information we want out of props
  const { color, setSelectedColor } = props;
  return <li className={color} onClick={() => setSelectedColor(color)}></li>;//returning the jsx using those props
}
//done