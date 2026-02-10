<p align="center">
  <h1 align="center">Zoolyum CRM</h1>
  <p align="center">
    A modern, full-featured Customer Relationship Management platform built for marketing agencies.
    <br />
    <a href="https://vercel.com/sakibbhais-projects/v0-crm-frontend-design"><strong>Live Demo »</strong></a>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
</p>

---

## ✨ Features

| Module | Description |
|---|---|
| **Dashboard** | Real-time KPI cards, revenue charts, pipeline overview, and activity feed |
| **Lead Management** | Full lead lifecycle — capture, score, assign, and track with import/export support |
| **Client Management** | Detailed client profiles with social links, communication history, and health scoring |
| **Sales Pipeline** | Visual Kanban-style pipeline with drag-and-drop deal progression |
| **Projects** | Project tracking with milestones, deliverables, and team assignment |
| **Task Workspace** | Task boards with assignees, priorities, reference links, and popup detail views |
| **Team & HR** | Employee profiles, performance dashboards, attendance, and payroll management |
| **Finances** | Income/expense tracking, invoicing, and automated invoice-to-income conversion |
| **Calendar** | Scheduling for meetings, follow-ups, and deadlines |
| **Reports** | Customizable analytics dashboards for sales, clients, and team performance |
| **Settings** | Organization config, user roles, notification preferences, and document templates |

## 🛠️ Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library** — [React 19](https://react.dev/)
- **Language** — [TypeScript 5](https://www.typescriptlang.org/)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/JoshuaKGoldberg/tw-animate-css)
- **Component Library** — [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Charts** — [Recharts](https://recharts.org/)
- **Forms** — [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **Date Utilities** — [date-fns](https://date-fns.org/)
- **Theming** — [next-themes](https://github.com/pacocoursey/next-themes) (Dark / Light mode)
- **Deployment** — [Vercel](https://vercel.com/)

## 📁 Project Structure

```
crmV0/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Main dashboard
│   ├── leads/              # Lead management
│   ├── clients/            # Client management
│   ├── projects/           # Project tracking
│   ├── tasks/              # Task workspace
│   ├── team/               # Team & HR management
│   ├── finances/           # Financial management
│   ├── calendar/           # Calendar & scheduling
│   ├── reports/            # Analytics & reports
│   └── settings/           # App configuration
├── components/
│   ├── ui/                 # Reusable shadcn/ui components (20+)
│   ├── dashboard/          # Dashboard-specific components
│   ├── tasks/              # Task workspace components
│   ├── team/               # Team & HR components
│   ├── invoices/           # Invoice components
│   ├── dashboard-layout.tsx
│   └── sidebar.tsx
├── lib/
│   ├── data/               # Sample / seed data
│   ├── types/              # TypeScript type definitions
│   └── utils.ts            # Shared utilities
├── styles/                 # Global stylesheets
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/SakibBhai/v0-crm.git
cd v0-crm

# Install dependencies
pnpm install    # or: npm install

# Start the development server
pnpm dev        # or: npm run dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)**.

### Build for Production

```bash
pnpm build && pnpm start
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Create optimized production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint across the codebase |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/SakibBhai">SakibBhai</a>
</p>
