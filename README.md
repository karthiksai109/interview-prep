# interview-prep

My personal study site for the Citi Python engineer final round (Sep 22–23, 2026). Static HTML/CSS/JS, no build step — open `index.html` or serve the folder.

## Run

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Contents

- **index.html** — game plan, study schedule, and the answer formula (define → show in my system → name the edge case)
- **bedrock-context.html** — the "what happens with no context in Bedrock" question: statelessness, parametric fallback, context assembly pipeline, failure detection
- **verizon-agents.html** — 6-agent platform walkthrough: routing basis, agent anatomy, ingestion pipeline, DynamoDB session state, why six agents
- **ai-concepts.html** — concept track from tokens → RAG → agents → MCP/A2A/ADK → banking AI governance, plus a flashcard deck
- **system-design.html** — whiteboard narratives: agent platform, real-time analytics ingestion, compliant document Q&A for a bank, backend tropes
- **mock-qa.html** — forecast questions with model answers (expand all button for reading, accordions for practice)
- **checklist.html** — five STAR stories, questions to ask them, day-of checklist that saves to localStorage

No dependencies, no tracking. Palette is deliberately muted ink/cream/bronze.
