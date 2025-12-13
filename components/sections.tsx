import React, { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  level?: 1 | 2 | 3;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  level = 2,
  children,
}: SectionProps) {
  return (
    <section id={id} style={{ marginBottom: "56px" }}>
      {title && level === 1 && <h1>{title}</h1>}
      {title && level === 2 && <h2>{title}</h2>}
      {title && level === 3 && <h3>{title}</h3>}

      <div style={{ lineHeight: "1.7" }}>{children}</div>
    </section>
  );
}