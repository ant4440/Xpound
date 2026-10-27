# Architecture

Xpound is split into a desktop client and an HTTP API.

- `desktop/` contains the React + TypeScript interface, built by Vite and hosted in a Tauri v2 webview.
- `backend/` contains the FastAPI application. The `/api/generate` route validates a summary and delegates draft creation to `app.services.ai`.
- The desktop client reads `VITE_API_URL` at build time and defaults to `http://127.0.0.1:8000`.

The current generation service is a deterministic placeholder. A model provider can be added behind `create_draft` without changing the route or client contract.