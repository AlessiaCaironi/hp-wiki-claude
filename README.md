# Harry Potter Wiki

A comprehensive Harry Potter Wiki built with React, TypeScript, and Vite, powered by the Harry Potter API.

## Features

- **Character Browser**: Explore characters from the Harry Potter universe with filtering by house and role (students/staff)
- **Character Details**: View detailed information about each character including their house, wand, patronus, and more
- **Hogwarts Houses**: Learn about the four great houses of Hogwarts with their traits, founders, and more
- **Spells**: Browse magical spells and incantations (when API endpoint becomes available)
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Beautiful UI**: Harry Potter-themed color scheme with smooth animations

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **pnpm** - Fast, disk space efficient package manager
- **Harry Potter API** - Data source for characters and magical content

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   └── Navigation.tsx
├── pages/           # Page-level components
│   ├── Home.tsx
│   ├── Characters.tsx
│   ├── CharacterDetail.tsx
│   ├── Houses.tsx
│   └── Spells.tsx
├── services/        # API service layer
│   └── api.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── App.tsx          # Main app component with routing
└── main.tsx         # Application entry point
```

## API Configuration

The app currently uses the HP-API (https://hp-api.onrender.com/api) for character data. To use a different API:

1. Update the `API_BASE_URL` in `src/services/api.ts`
2. Adjust the API methods in the `HarryPotterAPI` class to match your API endpoints
3. Update TypeScript types in `src/types/index.ts` if needed

## Features to Explore

- Filter characters by Hogwarts house (Gryffindor, Hufflepuff, Ravenclaw, Slytherin)
- Filter characters by role (Students, Staff, or All)
- Click on any character to view detailed information
- Explore the four Hogwarts houses with their traits and history
- Responsive design works seamlessly on all devices

## Future Enhancements

- Search functionality
- Favorite characters
- More detailed spell information when API becomes available
- Books section
- Timeline of events
- Character relationships visualization

## License

MIT.
