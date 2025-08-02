# Laravel Inertia React Starter Kit

A clean, modern Laravel 12 starter project using **Inertia.js**, **React**, **Tailwind CSS**, **Vite**, and **Ziggy**. Ideal for building full-stack SPAs with the power of Laravel's backend and React's frontend.

---

## 🔥 Stack Overview

- ⚙️ **Laravel 12**
- ⚛️ **React** via Vite
- 🔗 **Inertia.js** (Client-side SPA routing)
- 🎨 **Tailwind CSS 3**
- 🌐 **Ziggy** (Laravel route helper in JavaScript)
- ⚡ **Vite** for ultra-fast builds

---

## 🚀 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/codesuab/laravel-inertia-boilerplate
cd laravel-inertia-react-starter
```

### 2. Set Up Environment

```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
php artisan migrate
```

### 3. Start Development Servers

```bash
npm run dev
php artisan serve
```

---

## 🧱 Project Structure

```
resources/
├── js/
│   ├── Pages/           # Inertia React pages
│   ├── Components/      # Reusable React components
│   └── app.jsx          # Inertia + Ziggy setup
routes/
├── web.php              # Web routes (Inertia)
```

---

## 🥉 Included Packages & Configuration

### ✅ React + Vite

> [https://react.dev/learn/add-react-to-an-existing-project](https://react.dev/learn/add-react-to-an-existing-project)\
> Uses `@vitejs/plugin-react` for JSX/TSX support.

```bash
npm install @vitejs/plugin-react
```

**vite.config.js**:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
```

---

### ✅ Inertia.js Setup

> [https://inertiajs.com/client-side-setup](https://inertiajs.com/client-side-setup)\
> Provides client-side SPA experience with Laravel routing and backend controllers.

**resources/js/app.jsx**:

```jsx
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: name => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
```

---

### ✅ Ziggy

> [https://github.com/tighten/ziggy](https://github.com/tighten/ziggy)\
> Access Laravel route names inside your React components.

```bash
npm install ziggy-js
```

**Usage Example:**

```js
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
```

---

### ✅ Tailwind CSS 3

> [https://v3.tailwindcss.com/docs/guides/vite](https://v3.tailwindcss.com/docs/guides/vite)

**Install Tailwind CSS**:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**:

```js
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.jsx',
    './resources/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**resources/css/app.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📆 Build for Production

```bash
npm run build
```

---

## 🛡 License

This project is open-sourced under the [MIT license](LICENSE).

---

## 👤 Author

**Sahab Ahmed**\
GitHub: [@Codesuab](https://github.com/codesuab)

---

## 🌟 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📌 Credits

- [Laravel](https://laravel.com)
- [Inertia.js](https://inertiajs.com)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Ziggy](https://github.com/tighten/ziggy)
- [Vite](https://vitejs.dev)

