# Rock, Paper, Scissors

A simple and responsive Rock-Paper-Scissors web game built with plain HTML, CSS, and JavaScript. I created this project for the CoLearn Software Engineering Coding Assessment.

## Links
- **Live App:** [Insert your Vercel URL here]
- **GitHub Repo:** https://github.com/arendilo/rock-paper-scissors

## How I Built It & Code Decisions

I wanted to keep the code clean, easy to read, and simple to update later on:

- **Simple Rule Checking (`RULES` object):** Instead of writing a long chain of `if/else` statements for every possible match, I stored the winning rules inside one `RULES` object (`{ rock: 'scissors', ... }`). The list of available moves is also pulled directly from this object using `Object.keys(RULES)`, so everything stays in sync.
- **Separating Logic and Screen Updates:** I make the game logic separate from the page updates. `getOutcome()` only handles calculating who won, while `render()` takes care of updating the text and scores shown on the screen.
- **Easy to Add New Moves:** Each button uses a `data-move` attribute. If I ever want to add more choices later (like *Lizard* or *Spock*), I only need to add them to the `RULES` object and HTML buttons without rewriting the main game functions.
- **Clean & Reusable Styling:** I used CSS variables (`:root`) at the top of the stylesheet so colors are easy to manage in one place.

## Project Files

```text
├── index.html   # Page layout and game buttons.
├── style.css    # Styling, colors, and responsive layout.
├── script.js    # Game rules, score tracking, and screen updates.
└── README.md    # Project documentation.