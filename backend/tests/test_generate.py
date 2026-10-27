from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_generate_returns_a_draft() -> None:
    response = client.post("/api/generate", json={"summary": "A neighborhood book swap"})

    assert response.status_code == 200
    assert response.json() == {"content": "A thought worth sharing: A neighborhood book swap"}


def test_generate_rejects_an_empty_summary() -> None:
    response = client.post("/api/generate", json={"summary": " "})

    assert response.status_code == 422