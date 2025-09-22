# AI Stock Assistant

Welcome to the AI Stock Assistant project! This application is designed to help users analyze their stock positions using AI technology. Below is a brief overview of the project's structure and functionality.

## Project Structure

```
ai-stock-assistant
├── src
│   ├── pages
│   │   ├── index.tsx          # Landing page with upload functionality and pricing plans
│   │   ├── about.tsx          # About page with information on the AI advisor
│   │   ├── policy.tsx         # Privacy policy page
│   │   └── api
│   │       └── stock.ts       # API endpoint for stock analysis requests
│   ├── components
│   │   ├── UploadBox.tsx      # Component for uploading stock position screenshots
│   │   ├── PricingCard.tsx     # Component for displaying pricing plans
│   │   ├── Footer.tsx         # Footer component with links
│   │   ├── StockSearch.tsx    # Component for searching stocks
│   │   ├── StockInfo.tsx      # Component for displaying stock information
│   │   └── AssistantChat.tsx   # Component for interacting with the AI assistant
│   ├── styles
│   │   ├── globals.css        # Global CSS styles
│   │   └── Home.module.css    # Module-specific CSS styles for the Home component
│   └── types
│       └── index.ts           # TypeScript types and interfaces
├── public
│   └── favicon.ico            # Favicon for the application
├── package.json               # NPM configuration and dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Features

- **AI-Powered Stock Analysis**: Upload screenshots of your stock positions and receive AI-generated insights.
- **User-Friendly Interface**: Easy navigation with a clean design.
- **Pricing Plans**: View different pricing options for using the AI assistant.
- **Privacy Policy**: Clear information on how user data is handled.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ai-stock-assistant
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.