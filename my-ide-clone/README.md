# My IDE Clone

This project is a simple IDE clone built with TypeScript and React. It serves as a learning tool for understanding the structure and components of a code editor.

## Features

- Code editor component with syntax highlighting
- File operations including open, save, and delete
- Configurable editor options

## Project Structure

```
my-ide-clone
├── src
│   ├── main.ts          # Entry point of the application
│   ├── components
│   │   └── Editor.tsx   # Code editor component
│   ├── services
│   │   └── FileService.ts # File operations service
│   └── types
│       └── index.ts     # Type definitions
├── public
│   └── index.html       # Main HTML file
├── package.json         # NPM configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-ide-clone.git
   ```

2. Navigate to the project directory:
   ```
   cd my-ide-clone
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to access the IDE clone. You can create, open, and save files using the provided editor interface.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.