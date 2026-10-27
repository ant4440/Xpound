type GeneratedContentProps = {
  content: string;
};

export default function GeneratedContent({ content }: GeneratedContentProps) {
  return (
    <section className="result" aria-live="polite" aria-label="Generated draft">
      <div className="result-label">YOUR DRAFT</div>
      {content ? (
        <p>{content}</p>
      ) : (
        <p className="empty-result">Your next draft will take shape here.</p>
      )}
    </section>
  );
}