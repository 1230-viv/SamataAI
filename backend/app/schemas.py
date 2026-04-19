from __future__ import annotations

from datetime import datetime, timezone
from typing import Literal
from uuid import uuid4

from pydantic import BaseModel, Field

AuditStatus = Literal["queued", "running", "completed", "failed"]


class AuditCreateRequest(BaseModel):
    target_name: str = Field(default="Demo AI Endpoint", min_length=3, max_length=100)
    target_endpoint: str | None = Field(default=None, max_length=500)
    demographics: list[str] = Field(
        default_factory=lambda: ["gender", "caste", "religion", "income"],
        min_length=1,
    )


class AuditSummary(BaseModel):
    audit_id: str
    target_name: str
    status: AuditStatus
    progress_percent: int = Field(ge=0, le=100)
    created_at: datetime
    updated_at: datetime


class AuditCreateResponse(BaseModel):
    message: str
    audit: AuditSummary


class ApiHealthResponse(BaseModel):
    service: str
    status: Literal["ok"]
    timestamp: datetime


class AuditRecord(BaseModel):
    audit_id: str = Field(default_factory=lambda: str(uuid4()))
    target_name: str
    target_endpoint: str | None = None
    demographics: list[str]
    status: AuditStatus = "queued"
    progress_percent: int = 0
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ErrorResponse(BaseModel):
    detail: str
