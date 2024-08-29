/* eslint-disable react/prop-types */
export default function Erormessage({ items }) {
  return <div> {items.length == 0 && <h3>I am still hungry</h3>}</div>;
}
