# ❤️ Lovify

🌐 **Live demo:** [giuliannaribeiro.github.io/lovify](https://giuliannaribeiro.github.io/lovify/)

Lovify started as a personal gift and grew into a web app where anyone can create and share a personalized playlist for their partner, perfect for **Valentine's Day**, anniversaries, or just because. Built with React 19 and Vite, it offers a Spotify-inspired interface focused on a clean, emotional experience: customize the cover photo, playlist name, and song list, then share a unique link. Playlists are stored in **Firebase Firestore**, making each creation accessible from anywhere.

✅ **Features**

- **Playlist Creation**: Customize name, cover photo, and track list
- **Photo Upload**: Optional cover image with a default fallback
- **Dynamic Track List**: Add, remove, and edit songs with auto-generated durations
- **Spotify-Style Player UI**: Hero section, play/pause controls, track list, and now-playing bar
- **Shareable Link**: Each playlist gets a unique URL to send to your partner
- **Copy to Clipboard**: One-click link copying with visual feedback
- **Loading Screen**: Animated heart icon while the playlist loads
- **Responsive Design**: Optimized layout for mobile and desktop

🛠️ **Technologies**

- React 19 (with Hooks and Functional Components)
- TypeScript
- Vite 8
- React Router DOM 7
- Firebase Firestore
- Lucide React (icons)
- CSS3 (custom Spotify-inspired theme)
- gh-pages

🚀 **Installation & Running**

**Clone the repository**

```bash
git clone https://github.com/GiuliannaRibeiro/lovify.git
cd lovify
```

**Install dependencies**

```bash
npm install
```

**Run the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/lovify/`

🖼️ **App Preview**

**Creation Form**

![Creation form](docs/form-screen.png)

**Generated Playlist**

![Generated playlist](docs/playlist-screen.png)
