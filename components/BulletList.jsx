export function BulletList({ items }) {
  return (
    <ul style={{ paddingLeft: "20px", marginTop: "12px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "8px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}