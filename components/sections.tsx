export default function Section({ id, title, level = 2, children }) {
  const Heading = `h${level}`;

  return (
    <section id={id} style={{ marginBottom: "56px" }}>
      {title && <Heading style={{ marginBottom: "16px" }}>{title}</Heading>}
      <div style={{ lineHeight: "1.7" }}>{children}</div>
    </section>
  );
}