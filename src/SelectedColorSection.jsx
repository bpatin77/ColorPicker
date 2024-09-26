import ColorDetails from "./ColorDetails";

export default function SelectedColorSection({ selectedColor }) {
  //gets a selectedColor as a prop
  if (!selectedColor) {
    //if there is no selectedColor then we return the h2 message
    return (
      <section id="navbar">
        <h2>No selected color.</h2>
      </section>
    );
  }
  console.log(selectedColor);
  return (
    //return the section with the h2 of the Color name
    <section id="navbar">
      <h2>{selectedColor.class}</h2>
      <ColorDetails selectedColor={selectedColor} />
    </section> //rendering ColorDetails and saying the selectedColor is the one that it receives via the prompts
  );
}
