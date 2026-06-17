# Graph Report - D:\Project\portfolio-client-02  (2026-06-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 83 nodes · 84 edges · 20 communities (8 shown, 12 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 19|Community 19]]

## God Nodes (most connected - your core abstractions)
1. `Google Drive Screenshot - Bài 3` - 8 edges
2. `portfolioData` - 6 edges
3. `Index HTML` - 6 edges
4. `scripts` - 5 edges
5. `App()` - 2 edges
6. `EvidenceTable()` - 2 edges
7. `HomeTab()` - 2 edges
8. `PrintView()` - 2 edges
9. `ProjectsTab()` - 2 edges
10. `RubricTable()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Index HTML` --references--> `ULIS Logo`  [EXTRACTED]
  index.html → public/logo.png
- `Index HTML` --references--> `Đại học Công nghệ Logo`  [EXTRACTED]
  index.html → public/logo.png
- `Index HTML` --calls--> `Main Entry Point`  [EXTRACTED]
  index.html → src/main.jsx
- `React + Vite Template` --conceptually_related_to--> `Index HTML`  [INFERRED]
  README.md → index.html
- `Graphify Agent Instructions` --conceptually_related_to--> `React + Vite Template`  [INFERRED]
  AGENTS.md → README.md

## Import Cycles
- None detected.

## Communities (20 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.24
Nodes (8): EvidenceTable(), HomeTab(), PrintView(), ProjectsTab(), RubricTable(), Sidebar(), Summary(), portfolioData

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (13): dependencies, lucide-react, react, react-dom, name, private, scripts, build (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (13): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (8): Graphify Agent Instructions, Index HTML, ULIS Logo, Vietnamese Language & Culture Learning Portfolio, Đại học Công nghệ Logo, React + Vite Template, App(), Main Entry Point

## Knowledge Gaps
- **37 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._