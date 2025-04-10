# Contributing to Mon Empreinte Numérique

Thanks for your interest in contributing! We appreciate the help in making this
digital carbon footprint calculator better.

## Quick Start

1.  **Fork & Clone:** Fork the repository on GitHub and clone your fork locally.
    ```bash
    git clone https://github.com/YOUR_USERNAME/mon-empreinte-numerique.git
    cd mon-empreinte-numerique/front
    ```
2.  **Install:** Install dependencies using `npm install`, `yarn install`, or
    `pnpm install`.
3.  **Run:** Start the development server with `npm run dev`, `yarn dev`, or
    `pnpm dev`.

## Development Workflow

1.  **Branching:**

    -   Our main development branch is `develop`. Stable releases are in `main`.
    -   Create your working branch (e.g., `feature/add-new-device` or
        `bugfix/fix-calculation`) based on the latest `develop`.
    -   Using the
        [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
        extension (`git flow feature start ...`) is recommended but optional.

2.  **Code:** Make your changes.

3.  **Commit:** Write clear commit messages following the
    [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
    standard. Use prefixes like `feat:`, `fix:`, `docs:`, `refactor:`, `style:`,
    `chore:`, etc.

    ```bash
    # Example
    git commit -m "feat(calculator): add internet box calculation"
    ```

4.  **Push:** Push your branch to your fork on GitHub.
    ```bash
    git push origin feature/your-branch-name
    ```
5.  **Pull Request:** Open a Pull Request (PR) from your branch to the main
    repository's `develop` branch. Provide a clear title and description.

## Code Quality

-   Please ensure your code follows the existing style. (If linters/formatters
    like ESLint/Prettier are configured, please run them before committing).

Thank you again for your contribution!
