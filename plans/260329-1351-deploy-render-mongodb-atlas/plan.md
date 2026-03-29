---
title: Deploy to Render + MongoDB Atlas (Free Tier)
status: pending
created: 2026-03-29
branch: main
---

# Deploy to Render + MongoDB Atlas

## Scope Summary
**Goal:** Deploy Node.js/Express app to Render (free) with MongoDB Atlas (free M0) — from scratch, no existing accounts.
**In scope:** Atlas account + cluster setup, data migration from local MongoDB, code changes for production, Render account + auto-deploy from GitHub.
**Out of scope:** Custom domain, CI/CD pipeline, monitoring, staging environment.
**Key constraints:** 100% free tier, minimal code changes, GitHub auto-deploy.

## Phases

| # | Phase | Status | Human Involved |
|---|-------|--------|----------------|
| 1 | [MongoDB Atlas Setup](phase-01-mongodb-atlas-setup.md) | pending | Yes - create account, cluster |
| 2 | [Migrate Local Data to Atlas](phase-02-migrate-local-data.md) | pending | Partial - run commands |
| 3 | [Code Changes for Production](phase-03-code-changes.md) | pending | No - Claude implements |
| 4 | [Render Setup & Deploy](phase-04-render-setup-deploy.md) | pending | Yes - create account, connect GitHub |
| 5 | [Verify & Go Live](phase-05-verify-go-live.md) | pending | Yes - test the live app |

## Dependencies
```
Phase 1 (Atlas) → Phase 2 (Migrate) → Phase 3 (Code) → Phase 4 (Render) → Phase 5 (Verify)
```
Sequential — each phase depends on the previous.

## Tech Stack
- **Backend:** Node.js + Express 5 + Handlebars SSR
- **Database:** MongoDB (Mongoose 9) → MongoDB Atlas M0
- **Hosting:** Render Free Tier (Web Service)
- **Deploy:** GitHub auto-deploy on push to main
