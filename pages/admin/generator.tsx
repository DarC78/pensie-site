import { useState } from "react";

export default function ArticleGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [headings, setHeadings] = useState("");
  const [faq, setFaq] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("⏳ Generating...");

    const res = await fetch("/api/generate-article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        slug,
        coverImage,
        headings: headings.split("\n").filter(Boolean),
        faq: faq
          .split("\n")
          .filter(Boolean)
          .map((line) => {
            const [q, a] = line.split("||");
            return { q, a };
          }),
      }),
    });

    const data = await res.json();
    setOutput(data.output || "❌ Error generating article.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🧠 Generator articole AI</h1>

      <div className="space-y-5">
        <input
          className="w-full p-2 border rounded"
          placeholder="Titlu articol"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Descriere meta"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Slug (ex: pensie-totalizare-ue)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="URL imagine cover"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded h-32"
          placeholder="Capitole (H2) fiecare pe linie nouă"
          value={headings}
          onChange={(e) => setHeadings(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded h-32"
          placeholder="FAQ (format: intrebare || raspuns)"
          value={faq}
          onChange={(e) => setFaq(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-6 py-2 rounded bg-primary text-white hover:bg-primaryDark"
        >
          {loading ? "Generăm..." : "Generează articolul"}
        </button>

        <h2 className="text-xl font-semibold mt-8">Rezultat:</h2>
        <pre className="bg-black text-green-300 p-4 rounded h-[400px] overflow-auto">
          {output}
        </pre>
      </div>
    </div>
  );
}