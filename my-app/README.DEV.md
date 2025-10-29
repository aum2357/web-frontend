# my-app (Next.js frontend)

This repository contains a Next.js frontend application.

## Quick summary

- Framework: Next.js 15.5.4 (Turbopack)
- UI: React 19.1.0
- Lockfile present: `pnpm-lock.yaml` (project was scaffolded/locked with pnpm)
- Tested in this environment: Node v22.21.1, npm v10.9.4

## What this README contains

- How to install dependencies (npm or pnpm)
- How to start the dev server and build for production
- List of declared dependencies and devDependencies (from `package.json`)
- Notes, troubleshooting and recommendations (pnpm vs npm)

---

## Prerequisites

- Node.js (recommended >= 18). This project was started and tested using Node v22.21.1.
- Either pnpm (recommended) or npm. A `pnpm-lock.yaml` exists in the repo, so pnpm is preferred for reproducible installs.

If you are using Node.js 16+/18+ you can use Corepack to enable pnpm without a global install (preferred):

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Alternatively install pnpm globally:

```bash
npm install -g pnpm
```

---

## Install dependencies

Using pnpm (preferred, honors the lockfile):

```bash
cd /home/om/web-frontend/my-app
pnpm install --frozen-lockfile
```

Using npm (works but does NOT use `pnpm-lock.yaml` — results may differ):

```bash
cd /home/om/web-frontend/my-app
npm install
```

Notes:
- The repository currently has `pnpm` listed in `dependencies` in `package.json`. That's unusual; pnpm is normally installed globally or enabled via Corepack. Consider removing it from `dependencies` and using a global/tooling install instead.

To remove pnpm from project dependencies:

```bash
# using npm
npm uninstall pnpm --save
# or edit package.json and remove the pnpm entry, then reinstall
```

---

## Start / Build / Lint commands

- Start dev server (Turbopack):

```bash
# npm
npm run dev
# or pnpm
pnpm dev
```

- Build for production:

```bash
npm run build
# or
pnpm build
```

- Start production server (after build):

```bash
npm start
# or
pnpm start
```

- Lint:

```bash
npm run lint
# or
pnpm lint
```

When started in this environment, the dev server reported:

- Local: http://localhost:3000
- Network: http://<your-machine-ip>:3000

Next.js shows an anonymous telemetry collection banner; to learn more or opt out, see: https://nextjs.org/telemetry

---

## Declared dependencies (from `package.json`)

Dependencies:

- @radix-ui/react-slot: ^1.2.3
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- embla-carousel-autoplay: ^8.6.0
- embla-carousel-react: ^8.6.0
- lucide-react: ^0.545.0
- motion: ^12.23.22
- next: 15.5.4
- pnpm: ^10.20.0  <-- consider removing from project dependencies
- react: 19.1.0
- react-dom: 19.1.0
- simplex-noise: ^4.0.3
- tailwind-merge: ^3.3.1

DevDependencies:

- @eslint/eslintrc: ^3
- @tailwindcss/postcss: ^4
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- eslint: ^9
- eslint-config-next: 15.5.4
- tailwindcss: ^4
- tw-animate-css: ^1.4.0
- typescript: ^5

---

## Troubleshooting

- pnpm not found: Enable Corepack or install pnpm globally (see Prerequisites).
- Permission errors when installing global packages: avoid `sudo` with npm; use a node version manager (nvm/volta) or configure npm to use a user directory.
- If you see strange dependency resolution differences between npm and pnpm, use pnpm to reproduce the `pnpm-lock.yaml` locked tree.
- To reset installs:

```bash
rm -rf node_modules
# remove lockfile(s) if you intentionally want fresh resolution (be careful):
# rm package-lock.json pnpm-lock.yaml
pnpm install --frozen-lockfile  # or npm install
```

- If you run into peer dependency warnings, read the install output. In many cases they can be resolved by installing the required peer package (or using versions compatible with your stack).

---

## CI / Deployment notes

- Ensure your CI uses pnpm (or Corepack) if you want the exact lockfile to be respected. Example GH Actions step:

```yaml
- uses: pnpm/action-setup@v2
  with:
    version: 8
- run: pnpm install --frozen-lockfile
- run: pnpm build
```

- Vercel and many hosts detect Next.js automatically; verify build command is `npm run build` or `pnpm build` as appropriate.

---

## Files of interest

- `package.json` — project metadata and scripts
- `pnpm-lock.yaml` — pinned lockfile (use pnpm to reproduce exact installs)
- `src/` and `app/` — application source files

---

## Quick checklist (getting started)

1. Ensure Node.js is installed (>= 18 recommended).
2. Enable Corepack or install pnpm globally (recommended):
   - `corepack enable && corepack prepare pnpm@latest --activate`
3. Install deps: `pnpm install --frozen-lockfile` (or `npm install` if you don't want to use pnpm).
4. Start dev server: `pnpm dev` or `npm run dev` and open `http://localhost:3000`.

---

## Need help?

If you want, I can:

- Install pnpm globally here and re-run a pnpm-based install + build, then start the dev server.
- Remove `pnpm` from project dependencies and create a short `CONTRIBUTING.md` explaining the preferred local setup.

Open an issue or ask for one of the above and I will take care of it.
