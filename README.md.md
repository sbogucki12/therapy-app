# Affirmation Companion

A mindful, local-first web application for daily affirmations, journaling, and self-reflection. Built with AI-powered personalization while keeping your data private and secure.

![Initial UI Design](frontend/public/media/images/ui-day0.jpg)
*Day 0: Initial design with responsive layout, dynamic greetings, and mindful aesthetics*

## Vision

This app serves as your personal mindfulness companion, offering:
- **Morning & Evening Affirmations** - AI-generated and tailored to your recent reflections
- **Journaling & Self-Reflection** - Capture thoughts with AI-powered insights
- **Therapist-style Chat Companion** - Wise, gentle guidance from your chosen persona
- **Habit & Ritual Reinforcement** - Mindful tracking without dopamine traps
- **Urge Awareness Journal** - Mindfulness-based approach to understanding patterns
- **Your "Way" Profile** - Define values and spiritual influences that guide your journey

## Development Philosophy: "Vibe Coding"

This project demonstrates a collaborative development approach I call **"vibe coding"** - a systematic yet intuitive partnership between human creativity and AI assistance. Here's how it works:

### The Process

1. **Vision First**: I start with a clear vision of what I want to build, not just technically but philosophically
2. **Systematic Breakdown**: Rather than asking AI to "build everything," I break the project into logical phases
3. **High Control, Low Friction**: I maintain complete understanding and control while leveraging AI to reduce repetitive work
4. **Iterative Refinement**: Each session builds understanding and capability incrementally

### Partnership Dynamics

**Human Brings:**
- Vision and requirements
- Decision-making and architecture choices
- Understanding of user needs and experience
- Quality control and testing

**AI Brings:**
- Code generation and boilerplate reduction
- Best practices and pattern recognition
- Comprehensive documentation
- Consistency across components

### Key Principles

- **Transparency**: Every line of code is explained and understood
- **Modularity**: Build in phases that can be tested and refined
- **Future-Proofing**: Structure decisions made with long-term maintenance in mind
- **Learning-Oriented**: The process teaches both coding patterns and project management

## Tech Stack

### Frontend
- **React 18** with functional components and hooks
- **React Router** for client-side routing
- **CSS Modules** for component-scoped styling
- **Responsive Design** with mobile-first approach
- **Local Storage** for client-side data persistence

### Styling Philosophy
- **Traditional CSS** (no frameworks like Tailwind)
- **CSS Custom Properties** for design system consistency
- **Mobile-first responsive design**
- **Accessibility-focused** with proper focus states and ARIA labels
- **Mindful color palette** designed for calm, focused interaction

### Future Integrations
- **AI/LLM**: AWS Bedrock (preferred) or Azure AI Foundry
- **Backend**: Node.js/Express, Python, or C#/.NET
- **Storage**: SQLite → PostgreSQL progression
- **Deployment**: Docker containerization for self-hosting

## Project Structure

```
affirmation-companion/
├── README.md                    # You are here
├── .gitignore                   # Comprehensive privacy protection
├── package.json                 # Workspace management
├── frontend/                    # React application
│   ├── public/
│   │   └── media/images/       # Screenshots and assets
│   ├── src/
│   │   ├── components/         # Modular React components
│   │   │   ├── common/         # Shared UI components
│   │   │   ├── affirmations/   # Morning/evening affirmation flows
│   │   │   ├── journal/        # Journaling and history
│   │   │   ├── chat/           # AI companion interface (future)
│   │   │   ├── tracking/       # Habit and urge tracking (future)
│   │   │   └── profile/        # User values and preferences
│   │   ├── contexts/           # React context for state management
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Helper functions and utilities
│   │   ├── styles/             # Global styles and design system
│   │   └── data/               # Mock data for development
│   └── package.json
├── backend/                     # Future API and data services
├── docs/                        # Additional documentation
└── scripts/                     # Development and deployment scripts
```

## Development Journal

### Day 0: Foundation and Design System

**What We Built:**
- Complete React application scaffolding with proper project structure
- Comprehensive design system using CSS custom properties
- Responsive, mobile-first layout with beautiful gradient backgrounds
- Dynamic header with time-based greetings
- Accessible navigation with mobile hamburger menu
- Home page with intelligent time-based recommendations
- Placeholder components for all major features

**Technical Decisions:**
- **Local-first architecture**: App works offline, syncs when connected
- **CSS Modules**: Component-scoped styling without build complexity
- **Workspace structure**: Frontend/backend separation for future full-stack development
- **Traditional CSS**: Maintainable, learning-friendly styling approach

**Design Principles:**
- **Mindful aesthetics**: Calming colors, gentle gradients, thoughtful typography
- **Time-aware UX**: Dynamic content based on time of day (morning affirmations vs. evening reflection)
- **Accessibility-first**: Proper focus states, keyboard navigation, screen reader support
- **Mobile-responsive**: Touch-friendly interfaces, appropriate sizing for all devices

**Vibe Coding in Action:**
This session demonstrated the power of systematic collaboration:
1. Started with clear vision and requirements
2. Built comprehensive file structure before writing code
3. Created complete design system before individual components
4. Generated all common components with consistent patterns
5. Tested with placeholder content to verify architecture

The result: A beautiful, functional foundation that's ready for feature development while maintaining complete understanding of every component and decision.

**Next Steps:**
- Implement morning/evening affirmation logic with dummy data
- Add local storage for basic persistence
- Create journaling interface with rich text editing
- Begin AI integration planning with AWS Bedrock

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/affirmation-companion.git
cd affirmation-companion

# Install dependencies
npm install-all

# Start development server
npm run dev
```

The app will open at `http://localhost:3000` with hot reload enabled.

### Development Workflow

```bash
# Start frontend development (from root)
npm run dev

# Or work directly in frontend
cd frontend
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Privacy & Security

This app is designed with privacy as a core principle:
- **Local-first**: Your data stays on your device
- **Self-hostable**: Complete control over your information
- **Open source**: Transparent about what data is processed
- **Secure by default**: No tracking, no analytics, no data collection

## Contributing

This project serves as both a personal tool and a learning resource. The development process is documented to help others understand systematic AI-assisted development.

## License

MIT License - Feel free to use this code for your own mindfulness journey.

---

*Built with intentional collaboration between human creativity and AI assistance.*