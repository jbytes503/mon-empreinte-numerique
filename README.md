# Mon Empreinte Numérique (My Digital Footprint)

Welcome to the Mon Empreinte Numérique project! This is a web application
designed to help users calculate the carbon footprint associated with their
digital devices and online activities.

This project was developed as part of the **AGIR** course at **INSA Lyon**, in
partnership with the company **APRR**.

It is primarily a **Frontend application** developed with Next.js, focusing on
user interaction and client-side calculations based on predefined emission
factors.

## Key Features

-   Calculate carbon emissions for various categories:
    -   Devices (Smartphones, Computers, Tablets, Televisions, Game Consoles)
    -   Messaging & Social Media
    -   Streaming & Entertainment
    -   AI Usage
    -   Cloud Storage
    -   Professional Communication
-   Displays results per category and calculates a total digital carbon
    footprint.

## Technologies Used

-   **Framework:** Next.js (~14.x.x)
-   **Language:** TypeScript
-   **Library:** React (~18.x.x)
-   **Styling:** CSS Modules
-   **Calculation Logic:** JavaScript
    ([front/src/utils/carbonCalculator.js](front/src/utils/carbonCalculator.js))
-   **Emission Data:** JSON

## Installation and Launch

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm, yarn, or pnpm

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jbytes503/mon-empreinte-numerique.git
    cd mon-empreinte-numerique
    ```

2.  **Navigate to the frontend folder:**

    ```bash
    cd front
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  Open http://localhost:3000 with your browser to see the result.

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  **Fork** this repository.
2.  **Create a new branch** for your feature or bug fix. It's recommended to
    branch off `develop`:

    ```bash
    # Make sure your local develop branch is up-to-date
    git checkout develop
    git pull origin develop

    # Create your feature branch
    git checkout -b feature/your-feature-name
    # or for bug fixes
    # git checkout -b bugfix/your-bug-fix-name
    ```

3.  **Make your changes** and commit them with clear, descriptive messages.
4.  **Push your changes** to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
5.  **Open a Pull Request** on GitHub from your branch to the main repository's
    `develop` branch. Please provide a clear description of your changes.

More details in the [CONTRIBUTING](CONTRIBUTING) file.

## License

This project is licensed under the MIT License. See the [LICENCE](LICENSE) file
for details.
