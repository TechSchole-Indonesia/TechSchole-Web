---
description: How to deploy the TechSchole web app to GitHub Pages
---

To deploy the application to GitHub Pages, follow these steps:

1.  **Ensure you are in the frontend directory**:
    The deployment scripts are located in the `frontend` folder.
    ```powershell
    cd D:\projects\techschole-web\TechSchole-Web\frontend
    ```

2.  **Install dependencies** (if you haven't already):
    This ensures `gh-pages` and other tools are installed.
    ```powershell
    npm install
    ```

3.  **Run the deploy script**:
    This script will:
    *   Build the project (using `vite build`).
    *   Push the `dist` folder to the `gh-pages` branch on GitHub.
    // turbo
    ```powershell
    npm run deploy
    ```

4.  **Verify Deployment**:
    After a few minutes, your site should be live at:
    [https://TechShole-Indonesia.github.io/TechSchole-Web/](https://TechShole-Indonesia.github.io/TechSchole-Web/)
