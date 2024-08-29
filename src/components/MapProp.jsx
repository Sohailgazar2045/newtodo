import ArrItem from "./ArrItem";
import Erormessage from "./Erormessage";

export default function MapProp() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const arr = [];
  return (
    <>
      <h1>Number List</h1>
      <Erormessage items={arr} />
      <ArrItem items={arr} />
    </>
  );
}
