import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Menu, X } from 'lucide-react';
import BlogPage from './BlogPage';
import SocialsDropdown from './SocialsDropdown';
import { useTokenData } from './hooks/useTokenData';

const HomePage = () => {
  const { tokenInfo, loading, error } = useTokenData();
  const [showEMA, setShowEMA] = React.useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-teal-400 glow">
            Revolutionize Your Investments with Jenner Token
          </h2>
          <p className="text-xl text-teal-200 mb-2 max-w-2xl mx-auto">
            Unlock the power of blockchain technology and experience unparalleled financial freedom with Jenner Token.
          </p>
          <p className="text-sm text-teal-300 mb-8">
            CA: 0x482702745260ffd69fc19943f70cffe2cacd70e9
          </p>
          <button className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-400 transition duration-300 transform hover:scale-105 glow">
            Get Started
          </button>
        </div>
      </section>

      {loading ? (
        <div className="text-center text-teal-400 my-10">Loading data...</div>
      ) : error ? (
        <div className="text-center text-red-400 my-10">{JSON.stringify(error)}</div>
      ) : tokenInfo && tokenInfo.message ? (
        <div className="text-center text-teal-400 my-10">
          Test Message: {tokenInfo.message}
        </div>
      ) : (
        <div className="text-center text-red-400 my-10">Invalid data received from API</div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-teal-300">
            Data provided by <a href="https://coinmarketcap.com/" className="underline hover:text-teal-100" target="_blank" rel="noopener noreferrer">CoinMarketCap</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50 transition-all duration-300" style={{ backgroundColor: `rgba(23, 25, 35, ${Math.min(scrollY / 500, 0.9)})` }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400 glow">CoinBag</h1>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-teal-300 hover:text-teal-100 transition duration-200 hover:glow">Home</Link>
          <Link to="/blog" className="text-teal-300 hover:text-teal-100 transition duration-200 hover:glow">Blog</Link>
          <SocialsDropdown />
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-teal-300 hover:text-teal-100">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <Link to="/" className="block px-4 py-2 text-teal-300 hover:text-teal-100 hover:bg-gray-700">Home</Link>
          <Link to="/blog" className="block px-4 py-2 text-teal-300 hover:text-teal-100 hover:bg-gray-700">Blog</Link>
          <SocialsDropdown />
        </div>
      )}
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
