from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "SamataAI API"
    environment: str = "development"
    host: str = "0.0.0.0"
    port: int = 8000
    allowed_origins: list[str] = Field(
        default_factory=lambda: [
            "http://localhost:8000",
            "http://127.0.0.1:8000",
            "http://localhost:5173",
            "http://127.0.0.1:5173",
        ]
    )
    frontend_file: str = "frontend/dist/index.html"
    static_dir: str = "frontend/dist/assets"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_prefix="SAMATA_",
        case_sensitive=False,
    )


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


def resolve_project_path(relative_path: str) -> Path:
    project_root = Path(__file__).resolve().parents[2]
    return project_root / relative_path


def resolve_frontend_file_path(frontend_file: str) -> Path:
    return resolve_project_path(frontend_file)


def resolve_static_dir_path(static_dir: str) -> Path:
    return resolve_project_path(static_dir)
