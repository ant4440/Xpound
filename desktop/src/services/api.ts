const apiUrl = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

type GenerateResponse = {
  content: string;
};

export async function generateContent(summary: string): Promise<GenerateResponse> {
  const response = await fetch(`${apiUrl}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ summary }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.detail ?? "The API could not generate a draft.");
  }

  return response.json() as Promise<GenerateResponse>;
}