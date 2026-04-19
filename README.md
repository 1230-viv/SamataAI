# ⚖️ SamataAI – Automated Bias Auditing Platform
> **Detecting demographic bias in deployed AI systems before it impacts real people.**

[![Build with AI Solution Challenge](https://img.shields.io/badge/Hackathon-Build%20with%20AI%202026-orange)](https://hack2skill.com/event/build-with-ai)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-blue)](frontend)
[![Backend](https://img.shields.io/badge/Backend-FastAPI-green)](backend)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini-8E75B2)](https://ai.google.dev/)
[![Cloud Native](https://img.shields.io/badge/Architecture-Cloud_Run%20%7C%20Pub_Sub-blue)]()

---

## Overview

**SamataAI** is a production-grade, black-box AI auditing platform created for the **Build with AI Solution Challenge 2026**. 

Most AI systems are measured for speed and accuracy, but lack formal fairness checks. SamataAI solves this by analyzing and identifying disparate treatment across protected demographic categories *(Gender, Caste, Religion, and Income)*. 

Operating purely via **black-box testing methodology**, SamataAI doesn't need access to target model weights or internal architecture. It uses Gemini-powered prompt probing to detect, quantify, and offer remediations for bias in any AI system accessible via an API.

---

## The Problem

Current AI deployment lifecycles frequently omit rigorous fairness audits:
- **Late Discovery:** Bias is usually discovered only *after* deployment, causing real-world harm.
- **Manual Workflows:** Existing audit steps are inconsistent, manual, and unscalable.
- **Lack of Metrics:** No standardized way to quantify regulatory risk (e.g., DPDP Act 2023 compliance).
- **Hard to Fix:** Identifying bias is one thing; generating the exact prompt-patches to fix it is another.

---

## Our Solution

SamataAI introduces a structured fairness-audit workflow, designed to slot perfectly into modern CI/CD or MLOps pipelines:

1. **AI-Powered Probe Generation**: Uses Gemini to generate hundreds of demographically varied prompt pairs (e.g., identical medical histories, differentiated only by a demographic marker).
2. **Automated Target Execution**: Dispatches these probes in parallel to the target model.
3. **Statistical Analysis**: Uses Gemini Embeddings and statistical models (Chi-square, t-tests) to detect significant response disparities (P-value < 0.05).
4. **Risk Scoring & Financial Impact**: Calculates severe operational risks and estimates potential regulatory exposure in INR.
5. **Remediation & Re-testing**: Auto-generates *System Prompt Patches* to fix the detected bias and validates the fix via re-testing.

---

## Core Architecture

Our architecture is split into a scalable **GCP Serverless Production Design** and an **Interactive Prototype Demo** built for the hackathon.

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Client Layer                                    │
│  ┌──────────────────────┐         ┌────────────────────────────────┐       │
│  │   Web Dashboard      │         │   External API Clients         │       │
│  │  (Node.js + Tailwind)│         │   (Third-party integrations)   │       │
│  └──────────┬───────────┘         └────────────┬───────────────────┘       │
└─────────────┼──────────────────────────────────┼─────────────────────────────┘
              │                                   │
              └───────────────────┬───────────────┘
                                  │ HTTPS/TLS 1.3
┌─────────────────────────────────┼─────────────────────────────────────────────┐
│                          API Gateway Layer                                    │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Cloud Run: API Gateway (FastAPI)                                     │  │
│  │  • Firebase Auth JWT Validation                                       │  │
│  │  • Rate Limiting (100 req/min per tenant)                            │  │
│  │  • Request Routing & Response Aggregation                            │  │
│  └───────────────────────────────┬───────────────────────────────────────┘  │
└─────────────────────────────────┼─────────────────────────────────────────────┘
                                  │
┌─────────────────────────────────┼─────────────────────────────────────────────┐
│                      Microservices Layer (Cloud Run)                          │
│                                  │                                             │
│  ┌──────────────────────────────┴──────────────────────────────┐             │
│  │              Audit Orchestrator                              │             │
│  │  (Workflow coordination & state management)                  │             │
│  └──┬────────────────────────────────────────────────────────┬─┘             │
│     │                                                         │                │
│     │ Pub/Sub Events                                         │                │
│     │                                                         │                │
│  ┌──┴──────────────┐  ┌──────────────┐  ┌─────────────────┴──┐             │
│  │ Bias Probe      │  │  Execution   │  │  Bias Analysis     │             │
│  │ Engine          │→ │  Engine      │→ │  Engine            │             │
│  │ (Generate       │  │  (Send to    │  │  (Semantic,        │             │
│  │  prompts)       │  │   Target AI) │  │   Sentiment,       │             │
│  └─────────────────┘  └──────────────┘  │   Statistical)     │             │
│                                          └─────────┬──────────┘             │
│                                                    │                         │
│  ┌──────────────────┐  ┌──────────────┐  ┌───────┴──────────┐             │
│  │  Remediation     │  │  Financial   │  │  Scoring         │             │
│  │  Engine          │  │  Impact      │← │  Engine          │             │
│  │  (Generate       │  │  Engine      │  │  (Risk scores)   │             │
│  │   patches)       │  │  (Cost est.) │  └──────────────────┘             │
│  └──────────────────┘  └──────────────┘                                     │
│                                                                               │
│  ┌──────────────────┐                                                        │
│  │  Re-test Engine  │                                                        │
│  │  (Validate fixes)│                                                        │
│  └──────────────────┘                                                        │
└───────────────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
┌───────────────────┴──┐  ┌───────┴──────┐  ┌──┴────────────────────┐
│   AI Layer           │  │  Messaging   │  │   Data Layer          │
│  ┌────────────────┐  │  │  Layer       │  │  ┌─────────────────┐  │
│  │ Vertex AI      │  │  │ ┌──────────┐ │  │  │  Firestore      │  │
│  │ Gemini API     │  │  │ │ Cloud    │ │  │  │  (Operational   │  │
│  │                │  │  │ │ Pub/Sub  │ │  │  │   Data)         │  │
│  │ • Embeddings   │  │  │ │          │ │  │  └─────────────────┘  │
│  │ • Generation   │  │  │ │ Topics:  │ │  │  ┌─────────────────┐  │
│  │ • Analysis     │  │  │ │ • probe  │ │  │  │  BigQuery       │  │
│  └────────────────┘  │  │ │ • exec   │ │  │  │  (Analytics     │  │
└──────────────────────┘  │ │ • analyze│ │  │  │   Warehouse)    │  │
                          │ │ • score  │ │  │  └─────────────────┘  │
                          │ └──────────┘ │  │  ┌─────────────────┐  │
                          └──────────────┘  │  │  Cloud Storage  │  │
                                            │  │  (Embeddings    │  │
                                            │  │   Cache)        │  │
                                            │  └─────────────────┘  │
                                            └───────────────────────┘
                                  │
┌─────────────────────────────────┼─────────────────────────────────────────────┐
│                        External Systems                                       │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Target AI Systems (LLMs, Chatbots, Decision Systems)                 │  │
│  │  • OpenAI API  • Anthropic API  • Custom APIs  • Internal Systems     │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────────┘

Data Flow:
1. Client → API Gateway (Auth & Rate Limit)
2. API Gateway → Orchestrator (Create Session)
3. Orchestrator → Probe Engine (via Pub/Sub)
4. Probe Engine → Gemini (Generate Prompts) → Execution Engine (via Pub/Sub)
5. Execution Engine → Target AI System → Store Responses → Analysis Engine (via Pub/Sub)
6. Analysis Engine → Gemini (Embeddings) → Scoring Engine (via Pub/Sub)
7. Scoring Engine → Financial Impact Engine → Store Results (Firestore + BigQuery)
8. User → Remediation Engine → Gemini (Generate Patches)
9. User → Re-test Engine → Repeat Flow with Patch Applied
```


### The Prototype Demo (This Repo)
To facilitate rapid testing and visual storytelling during the hackathon, this repository contains:
- **Frontend:** A React 18 SPA, visually driven by cinematic **Three.js** webGL backgrounds and Tailwind CSS.
- **Backend:** A FastAPI & Uvicorn application serving interactive audit session endpoints (`/api/v1/audits`).
- **Store:** Thread-safe, in-memory execution states to simulate the orchestration of the microservices.

### Production Microservices (GCP Native)
The complete architecture design utilizes:
- **Compute:** Cloud Run for scalable Audit, Execution, Analysis, and Remediation Engines.
- **Eventing:** Cloud Pub/Sub for async orchestration.
- **AI/ML:** Google Vertex AI (Gemini + Embeddings).
- **Data:** Firestore (Operational state) and BigQuery (Analytics).

---

## 💻 Tech Stack

### Frontend App
- **Core:** React 18, React Router DOM, Vite
- **Styling & UX:** Tailwind CSS, IntersectionObserver for smooth-scroll syncing
- **Graphics:** Three.js for cinematic narrative scenes

### Backend App
- **Core:** FastAPI, Uvicorn, Python 3.10+
- **Validation:** Pydantic + Pydantic-Settings
- **Serving:** Fallback SPA production-asset routing

---

## Getting Started

### Prerequisites
- **Python 3.10+**
- **Node.js 18+**

### 1. Backend Setup
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
cp .env.example .env
```

### 2. Frontend Setup
```bash
npm --prefix frontend install
```

### 3. Run in Development

**Terminal 1 (Backend API):**
```bash
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 (Frontend React App):**
```bash
npm --prefix frontend run dev
```

**Access URLs:**
- Frontend Dev UI: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- Swagger Docs: `http://localhost:8000/docs`

### 4. Run as Single Production Server
```bash
npm --prefix frontend run build
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🗺️ Roadmap

- [ ] **Phase 1 (H1 2026):** Complete the GCP microservice migration (Firestore, Pub/Sub integration).
- [ ] **Phase 2 (Q3 2026):** Introduce the full Financial Impact Engine and BigQuery analytics warehouse.
- [ ] **Phase 3 (Q4 2026):** Exportable regulatory compliance reports strictly mapped to the DPDP Act 2023.
- [ ] **Phase 4 (H1 2027):** Launch multi-project, role-based dashboards for Enterprise teams.

---

**Built with ❤️ by Team Strawhats** for the *Build with AI Solution Challenge 2026*.
