from fastapi import APIRouter

from app.schemas.generation import GenerateRequest, GenerateResponse
from app.services.ai import create_draft

router = APIRouter()


@router.post("/generate", response_model=GenerateResponse)
def generate(request: GenerateRequest) -> GenerateResponse:
    return GenerateResponse(content=create_draft(request.summary))