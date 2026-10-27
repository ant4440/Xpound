# Xpound

Xpound is a desktop application scaffold for turning a short summary into draft content. The UI is built with React and Vite, the desktop shell uses Tauri, and the API uses FastAPI.

## Requirements

- Node.js 20 or newer
- Python 3.11 or newer
- Rust and the Tauri v2 platform prerequisites

## Run the API

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
uvicorn app.main:app --reload
```

The API is available at `http://127.0.0.1:8000`; its interactive docs are at `/docs`.

## Run the desktop UI

```powershell
cd desktop
npm install
npm run tauri dev
```

Set `VITE_API_URL` in `desktop/.env.local` to override the API URL. The current backend service is a deterministic placeholder; connect a model provider in `backend/app/services/ai.py` when ready.