# URL Shortener - React App

A beautiful, modern URL shortener frontend built with React, Vite, and Material-UI. Easily convert long URLs into short, shareable links and check usage statistics—all with a pastel pink, attractive interface.

## Features
- Shorten any long URL to a short, custom code
- Set custom validity (expiration) for each short URL
- View a list of your recently shortened URLs
- Check statistics for your short URLs
- Responsive, mobile-friendly, and visually appealing pastel pink design
- All data is stored locally in your browser (no backend required)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd url-shortner
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Demo
## 1.Take URL
<img width="1917" height="809" alt="image" src="https://github.com/user-attachments/assets/8c0a8e8b-bce2-475c-992a-ec3883390a77" />


## 2. Short the URL
<img width="1887" height="762" alt="image" src="https://github.com/user-attachments/assets/be23ca65-31b9-4af8-8a2a-26992f468ed5" />

## 3. Shows the past history from Check Staistics
<img width="1885" height="838" alt="image" src="https://github.com/user-attachments/assets/142089d5-8dbc-47ad-ae1e-0a53df0356ec" />

## Usage
- Enter a long URL in the input field and click **Shorten URLs**.
- Optionally, set a custom shortcode and validity (in minutes).
- View your shortened URLs and copy/share them easily.
- Click **Check Statistics** in the header to view usage stats.

## Customization
- The app uses a pastel pink theme (`#ffb6c1`) throughout.
- All data is stored in your browser's localStorage—no backend required.
- To change the theme color, update the `main.jsx` theme and CSS in `index.css`.

## Tech Stack
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material-UI (MUI)](https://mui.com/)

## License
MIT
