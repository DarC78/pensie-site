# pensie-site
Site pensie

test

## In-house hosting

The GitHub inhouse workflow builds the unchanged static Next.js export, verifies
its core pages, and publishes an append-only vm-preview compiled release. The
existing Azure workflow retains a rollback copy. Source remains in this repository.
The internal tenant puller verifies the release identity and switches atomically.
There are no API handlers or server-side form processors in this repository;
the existing admin generator references an unimplemented API and this migration
does not invent or enable an article-generation service.
