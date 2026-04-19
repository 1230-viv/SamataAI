from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .config import get_settings, resolve_frontend_file_path, resolve_static_dir_path
from .schemas import (
    ApiHealthResponse,
    AuditCreateRequest,
    AuditCreateResponse,
    AuditSummary,
    ErrorResponse,
)
from .store import audit_store

settings = get_settings()
app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    description="Minimal production-style API scaffold for SamataAI.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

assets_dir_path = resolve_static_dir_path(settings.static_dir)
if assets_dir_path.exists():
    app.mount("/assets", StaticFiles(directory=assets_dir_path), name="assets")


def resolve_frontend_path() -> Path:
    file_path = resolve_frontend_file_path(settings.frontend_file)
    if file_path.exists():
        return file_path
    raise HTTPException(status_code=404, detail="Frontend build is missing. Run frontend build first.")


@app.get("/", include_in_schema=False)
def frontend() -> FileResponse:
    return FileResponse(resolve_frontend_path())


@app.get("/api/health", response_model=ApiHealthResponse)
def health() -> ApiHealthResponse:
    return ApiHealthResponse(
        service=settings.app_name,
        status="ok",
        timestamp=datetime.now(timezone.utc),
    )


@app.post(
    "/api/v1/audits",
    response_model=AuditCreateResponse,
    responses={400: {"model": ErrorResponse}},
)
def create_audit(payload: AuditCreateRequest) -> AuditCreateResponse:
    record = audit_store.create(payload)
    return AuditCreateResponse(
        message="Audit session created successfully.",
        audit=AuditSummary.model_validate(record.model_dump()),
    )


@app.get(
    "/api/v1/audits",
    response_model=list[AuditSummary],
)
def list_audits() -> list[AuditSummary]:
    return [AuditSummary.model_validate(item.model_dump()) for item in audit_store.list()]


@app.get(
    "/api/v1/audits/{audit_id}",
    response_model=AuditSummary,
    responses={404: {"model": ErrorResponse}},
)
def get_audit(audit_id: str) -> AuditSummary:
    record = audit_store.get(audit_id)
    if record is None:
        raise HTTPException(status_code=404, detail="Audit session not found.")
    return AuditSummary.model_validate(record.model_dump())


@app.get("/{full_path:path}", include_in_schema=False)
def frontend_routes(full_path: str) -> FileResponse:
    if full_path.startswith("api"):
        raise HTTPException(status_code=404, detail="Not Found")
    return FileResponse(resolve_frontend_path())
