export default function Section({ title, level = 2, children }) {
  const Heading = `h${level}`;

  return (
    <section style={{ marginBottom: "48px" }}>
      {title && <Heading>{title}</Heading>}
      <div>{children}</div>
    </section>
  );
}