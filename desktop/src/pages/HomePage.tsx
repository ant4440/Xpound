import { useState } from "react";
import GeneratedContent from "../components/GeneratedContent";
import SummaryInput from "../components/SummaryInput";
import { generateContent } from "../services/api";
import "../styles/theme";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function generate(summary: string) {
    setBusy(true);
    setError("");
    try {
      const result = await generateContent(summary);
      setContent(result.content);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to generate a draft.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Xpound home">xpound<span>.</span></a>
        <span className="status"><i /> WORKSPACE</span>
      </header>
      <section className="workspace" id="home">
        <div className="intro">
          <p className="eyebrow">IDEAS, IN GOOD FORM</p>
          <h1>Give the thought<br />some <em>room.</em></h1>
          <p className="lede">Start with the rough version. Shape it into something ready to share.</p>
        </div>
        <div className="work-area">
          <SummaryInput busy={busy} onGenerate={generate} />
          <GeneratedContent content={content} />
          {error && <p className="error" role="alert">{error}</p>}
        </div>
      </section>
      <footer>XP / 001 <span>MAKE SOMETHING OF IT</span></footer>
    </main>
  );
}