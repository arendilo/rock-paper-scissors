# Rock, Paper, Scissors

A lightweight, responsive Rock-Paper-Scissors web application built with vanilla HTML, CSS, and JavaScript. Created as part of the CoLearn Software Engineering Coding Assessment.

## Live Demo
- **Live URL:** [Insert your Vercel URL here]
- **Repository:** [Insert your GitHub repository URL here]

## Engineering Approach & Design Decisions

This project is structured around clean separation of concerns, predictable state management, and ease of maintenance:

- **Data-Driven Rules Lookup (`O(1)` Evaluation):** Instead of nested `if/else` chains, game rules are modeled in a single `RULES` lookup object (`{ rock: 'scissors', ... }`). Available moves are derived dynamically via `Object.keys(RULES)` to maintain a single source of truth.
- **Separation of Pure Logic & DOM Rendering:** Outcome evaluation (`getOutcome`) is implemented as a pure function independent of the UI, while DOM updates are isolated inside a dedicated `render` function.
- **Scalable Event Handling:** Action buttons use `data-move` attributes, allowing new moves (e.g., *Lizard*, *Spock*) to be added by updating the `RULES` map and HTML markup without modifying core game functions.
- **Maintainable Styling:** Built with semantic HTML and CSS custom properties (`:root`) for consistent theming and minimal CSS specificity.

## Project Structure

```text
├── index.html   # Semantic markup and accessible status regions
├── style.css    # Responsive layout and CSS custom properties
└── script.js    # State management, rule lookup, and DOM rendering
