import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/react/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ClassesPage from '@/pages/ClassesPage';
import StitchingPage from '@/pages/StitchingPage';
import ChudiMeasurementPage from '@/pages/measurements/ChudiMeasurementPage';
import PantsMeasurementPage from '@/pages/measurements/PantsMeasurementPage';
import BlouseMeasurementPage from '@/pages/measurements/BlouseMeasurementPage';
import SkirtsMeasurementPage from '@/pages/measurements/SkirtsMeasurementPage';
import SareeMeasurementPage from '@/pages/measurements/SareeMeasurementPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/stitching" element={<StitchingPage />} />
            <Route path="/stitching/chudi" element={<ChudiMeasurementPage />} />
            <Route path="/stitching/pants" element={<PantsMeasurementPage />} />
            <Route path="/stitching/blouse" element={<BlouseMeasurementPage />} />
            <Route path="/stitching/skirts" element={<SkirtsMeasurementPage />} />
            <Route path="/stitching/saree" element={<SareeMeasurementPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

