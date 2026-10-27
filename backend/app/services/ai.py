def create_draft(summary: str) -> str:
    """Return a deterministic draft until a model provider is configured."""
    return f"A thought worth sharing: {summary.strip()}"