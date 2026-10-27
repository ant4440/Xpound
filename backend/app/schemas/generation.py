from pydantic import BaseModel, Field, field_validator


class GenerateRequest(BaseModel):
    summary: str = Field(min_length=1, max_length=4000)

    @field_validator("summary")
    @classmethod
    def summary_must_not_be_blank(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("Summary must not be blank")
        return value


class GenerateResponse(BaseModel):
    content: str