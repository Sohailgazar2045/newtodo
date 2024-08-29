/* eslint-disable react/prop-types */
export default function ArrItem({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
