export default function ColorDetails({ selectedColor }) {
  //Creating a function called ColorDetails and taking in selectedColor as a prop
  //   const $selectedColorPick = selectedColor.length > 0;
  return (
    // <dl>
    <div className="selected-Parent">
      Currently Selected: <div className={selectedColor}>{selectedColor}</div>
    </div>

    // </dl>
  );
}
