
## Setup and Installation

1. Clone the repository
2. Run \`npm install\` to install dependencies
3. Run \`npm start\` to start the development server

## Key Features

- Task management (Create, Read, Update, Delete)
- Task filtering and searching
- Dark mode toggle
- Responsive design for all devices
- Local storage persistence

## Components

### Layout Components

- \`Layout.tsx\`: Main layout component that wraps the entire application
- \`Header.tsx\`: Top navigation bar with search functionality
- \`Sidebar.tsx\`: Side navigation menu (collapsible on mobile)

### Page Components

- \`Dashboard.tsx\`: Home page with task statistics and recent activity
- \`Tasks.tsx\`: Main task management page
- \`Settings.tsx\`: Application settings page

### Task Components

- \`TaskList.tsx\`: Displays a list of tasks
- \`TaskItem.tsx\`: Individual task item with basic info and actions
- \`TaskForm.tsx\`: Form for creating new tasks
- \`TaskDetails.tsx\`: Detailed view of a task with all information

### UI Components

- \`Button.tsx\`: Reusable button component
- \`Input.tsx\`: Reusable input component
- \`Modal.tsx\`: Reusable modal component for dialogs

## State Management

- \`atoms.ts\`: Defines Recoil atoms for global state
- \`selectors.ts\`: Defines Recoil selectors for derived state
- \`effects.ts\`: Defines Recoil effects for side effects (e.g., localStorage persistence)

## Custom Hooks

- \`useTaskOperations.ts\`: Hook for task CRUD operations
- \`useTheme.ts\`: Hook for managing theme state

## Utility Functions

- \`dateFormatter.ts\`: Functions for formatting dates
- \`idGenerator.ts\`: Function for generating unique IDs
- \`localStorage.ts\`: Functions for interacting with localStorage
- \`taskPriority.ts\`: Functions for handling task priority

## Styling

The project uses Tailwind CSS for styling. Global styles are defined in \`globals.css\`.

## Technologies Used

- React
- TypeScript
- Recoil (for state management)
- React Router (for routing)
- Tailwind CSS (for styling)
- Lucide React (for icons)

## Future Enhancements

- User authentication
- Backend integration
- Data visualization for task analytics
- Drag-and-drop task reordering
- Collaborative features (shared tasks, comments)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).