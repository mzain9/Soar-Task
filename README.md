# Soar Task

## Description

Soar Task is a Next.js-based web application designed to provide a seamless dashboard experience with settings and user management functionality. The project is built using the latest version of Next.js with Tailwindcss and utilizes Context API for state management while fetching data from an API.

## Features

- **Dashboard**: Provides an interactive overview of key metrics, including balance history, expense statistics, recent transactions, and weekly activity.
- **Settings Page**: Allows users to customize preferences, update profiles, and manage security settings.
- **Sidebar Navigation**: A structured sidebar for quick access to different sections of the app.
- **Chart.js Integration**: Uses Chart.js to display data visualizations like bar charts, pie charts, and line graphs.
- **Tailwind CSS**: Styled using Tailwind CSS for a modern and responsive design.
- **API Integration**: Fetches and manages data from API endpoints to keep the application dynamic and up-to-date.
- **Context API**: Uses React’s Context API for efficient state management across the app.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **Reusable Components**: Modular components for better maintainability and scalability.

## Installation

### Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (Latest LTS recommended)

### Setup Instructions


1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## File Structure

```
Soar-Task-main/
├── package.json                       # Lists project dependencies and scripts
├── app/
│   ├── error.tsx                      # Global error boundary component
│   ├── favicon.ico                    # Favicon for the application
│   ├── layout.tsx                     # Layout wrapper for all pages
│   ├── not-found.tsx                  # Custom 404 error page
│   ├── (root)/
│   │   ├── loading.tsx                # Loading state UI
│   │   ├── page.tsx                   # Root home page
│   │   ├── dashboard/
│   │   │   ├── page.tsx               # Dashboard main page
│   │   ├── setting/
│   │   │   ├── page.tsx               # Settings page
│   ├── api/
│   │   ├── dashboard/
│   │   │   ├── route.ts               # API route for dashboard data
│   │   ├── user/
│   │   │   ├── route.ts               # API route for user data
├── components/
│   ├── dashboard/
│   │   ├── BalanceHistory.tsx         # Component for balance history chart
│   │   ├── Card.tsx                   # Card component for displaying financial cards
│   │   ├── Dashboard.tsx              # Main dashboard component
│   │   ├── ExpenseStatistics.tsx      # Pie chart for expense breakdown
│   │   ├── MyCards.tsx                # Section for displaying user’s cards
│   │   ├── QuickTransfer.tsx          # Quick transfer form
│   │   ├── QuickTransferItem.tsx      # Quick transfer user list item
│   │   ├── RecentTransactions.tsx     # List of recent transactions
│   │   ├── RecentTransactionsItem.tsx # Single transaction item
│   │   ├── WeeklyActivity.tsx         # Bar chart for weekly activity
│   ├── layout/
│   │   ├── AppShell.tsx               # Main layout wrapper
│   │   ├── Header.tsx                 # Top navigation bar
│   │   ├── Sidebar.tsx                # Sidebar navigation
│   │   ├── SidebarItem.tsx            # Single sidebar item component
│   ├── setting/
│   │   ├── DatePicker.tsx             # Date picker component
│   │   ├── EditProfile.tsx            # Profile edit form
│   │   ├── FormFields.tsx             # Shared form fields for settings
│   │   ├── InputField.tsx             # Reusable input field component
│   │   ├── Preferences.tsx            # User preferences settings
│   │   ├── ProfileAvatar.tsx          # Profile picture upload and edit
│   │   ├── Security.tsx               # Security settings (password change, etc.)
│   │   ├── Setting.tsx                # Settings page wrapper
├── context/
│   ├── UserContext.tsx                # Context API for managing user state
├── lib/
│   ├── api.ts                         # API utility functions
├── public/
│   ├── icons/                         # SVG icons for UI elements
│        ├── dashboard/
│        ├── sidebar/
│        ├── user/
├── styles/
│   ├── global.css                     # Global styles for the application
├── types/
│   ├── index.ts                       # Central type exports
│   ├── dashboard.ts                   # Type definitions for dashboard data
│   ├── user.ts                        # Type definitions for user data
├── utils/
│   ├── color.ts                       # Utility functions for color-related logic
```
