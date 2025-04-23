# SueweetBnB Frontend

An Airbnb clone built web app with React and TypeScript.

## Features

- Room listing and detailed views
- Social login (GitHub, Kakao)
- Responsive design with Chakra UI
- Type-safe development with TypeScript
- Efficient data management with React Query

## Tech Stack

- React 18
- TypeScript
- Chakra UI
- React Router v6
- React Query
- Axios

## Getting Started

1. Create a `.env` file in the root directory with:

```
REACT_APP_GH_CLIENT_ID=your_github_client_id
REACT_APP_KAKAO_CLIENT_ID=your_kakao_client_id
```

2. Start the development server:

- The app will run on [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── routes/        # Page components
├── lib/          # Utility functions
├── api.ts        # API calls
├── router.tsx    # Routing configuration
├── theme.ts      # Chakra UI theme
└── types.d.ts    # TypeScript type definitions
```

## Development

- Uses React Query for efficient data fetching and caching
- Implements responsive design with Chakra UI
- Follows TypeScript best practices
- Implements social authentication
