from __future__ import annotations

from datetime import datetime, timezone
from threading import RLock

from .schemas import AuditCreateRequest, AuditRecord


class AuditStore:
    """Thread-safe in-memory store for local development and demos."""

    def __init__(self) -> None:
        self._records: dict[str, AuditRecord] = {}
        self._lock = RLock()

    def create(self, payload: AuditCreateRequest) -> AuditRecord:
        record = AuditRecord(
            target_name=payload.target_name,
            target_endpoint=payload.target_endpoint,
            demographics=payload.demographics,
        )
        with self._lock:
            self._records[record.audit_id] = record
        return record

    def get(self, audit_id: str) -> AuditRecord | None:
        with self._lock:
            record = self._records.get(audit_id)
            if record is None:
                return None
            progressed = self._progress(record)
            self._records[audit_id] = progressed
            return progressed

    def list(self) -> list[AuditRecord]:
        with self._lock:
            results: list[AuditRecord] = []
            for audit_id, record in self._records.items():
                progressed = self._progress(record)
                self._records[audit_id] = progressed
                results.append(progressed)
            return sorted(results, key=lambda item: item.created_at, reverse=True)

    def _progress(self, record: AuditRecord) -> AuditRecord:
        elapsed = (datetime.now(timezone.utc) - record.created_at).total_seconds()
        status = "queued"
        progress = 5

        if elapsed > 4:
            status = "running"
            progress = min(95, int(20 + (elapsed - 4) * 8))

        if elapsed > 16:
            status = "completed"
            progress = 100

        return record.model_copy(
            update={
                "status": status,
                "progress_percent": progress,
                "updated_at": datetime.now(timezone.utc),
            }
        )


audit_store = AuditStore()
