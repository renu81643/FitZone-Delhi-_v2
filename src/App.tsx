/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Transformation from './pages/Transformation';
import Contact from './pages/Contact';
import Join from './pages/Join';
import BookTrial from './pages/BookTrial';
import ThankYou from './pages/ThankYou';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/transformation" element={<Transformation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/book-trial" element={<BookTrial />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

