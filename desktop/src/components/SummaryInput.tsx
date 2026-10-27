import { useState } from "react";

type SummaryInputProps = {
  busy: boolean;
  onGenerate: (summary: string) => Promise<void>;
};

export default function SummaryInput({ busy, onGenerate }: SummaryInputProps) {
  const [summary, setSummary] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (summary.trim()) await onGenerate(summary.trim());
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="summary">Your starting point</label>
      <textarea
        id="summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="A product, an idea, a moment worth sharing..."
        rows={6}
        maxLength={4000}
        required
      />
      <div className="input-footer">
        <span>{summary.length} / 4000</span>
        <button type="submit" disabled={busy || !summary.trim()}>
          {busy ? "Working..." : "Generate draft"}
          <span aria-hidden="true"> ↗</span>
        </button>
      </div>
    </form>
  );
}