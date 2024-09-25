export default function ColorDetails({ selectedColor }) { //Creating a function called ColorDetails and taking in selectedColor as a prop
  const $selectedColorPick = selectedColor.length > 0;
  return (
    <dl>
      <div>
        <dt>Color</dt>
        <dd>{selectedColor.name}</dd>
      </div>
      {$selectedColorPick}
    </dl>
  );
}
