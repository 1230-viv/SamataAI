const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function parsePayload(response) {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  const text = await response.text();
  return text ? { message: text } : null;
}

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await parsePayload(response);

  if (!response.ok) {
    throw new ApiError(
      payload?.detail || payload?.message || `Request failed with ${response.status}`,
      response.status,
      payload
    );
  }

  return payload;
}

export function healthCheck() {
  return request("/api/health");
}

export function createAudit(body) {
  return request("/api/v1/audits", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function getAudit(auditId) {
  return request(`/api/v1/audits/${auditId}`);
}

export function listAudits() {
  return request("/api/v1/audits");
}

export { ApiError };
