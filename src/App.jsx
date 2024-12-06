import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeView from './page/HomeView';
import AboutView from './page/AboutView';
import ContactView from './page/ContactView';
import TodoView from './page/TodoView';

function App() {
  const listItem = [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'About',
      url: '/about',
    },
    {
      id: 3,
      name: 'Contact',
      url: '/contact',
    },
    {
      id: 4,
      name: 'Todo',
      url: '/todo',
    },
  ];

  return (
    <BrowserRouter>
      {/* Navigation bar */}
      <Navigation listItem={listItem} />

      {/* Main content area */}
      <main className="mx-auto my-10 max-w-6xl px-20 py-20 h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/todo" element={<TodoView />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
