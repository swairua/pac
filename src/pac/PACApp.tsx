import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AppTheme from '../shared-theme/AppTheme';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ConveyorSorting from './pages/services/ConveyorSorting';
import RecyclingConsulting from './pages/services/RecyclingConsulting';
import IndustrialWaste from './pages/services/IndustrialWaste';
import PickupLogistics from './pages/services/PickupLogistics';
import BalingCompaction from './pages/services/BalingCompaction';
import EWasteCollection from './pages/services/EWasteCollection';
import PalletWoodRecycling from './pages/services/PalletWoodRecycling';
import ValueRecovery from './pages/services/ValueRecovery';
import LicensingCompliance from './pages/services/LicensingCompliance';
import ConveyorDismantling from './pages/services/ConveyorDismantling';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import TermsConditions from './pages/TermsConditions';
import Header from './components/Header';
import Footer from './components/Footer';

function PACApp() {
  return (
    <AppTheme>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/conveyor-sorting" element={<ConveyorSorting />} />
        <Route path="/services/recycling-consulting" element={<RecyclingConsulting />} />
        <Route path="/services/industrial-waste" element={<IndustrialWaste />} />
        <Route path="/services/pickup-logistics" element={<PickupLogistics />} />
        <Route path="/services/baling-compaction" element={<BalingCompaction />} />
        <Route path="/services/e-waste-collection" element={<EWasteCollection />} />
        <Route path="/services/pallet-wood-recycling" element={<PalletWoodRecycling />} />
        <Route path="/services/value-recovery" element={<ValueRecovery />} />
        <Route path="/services/licensing-compliance" element={<LicensingCompliance />} />
        <Route path="/services/conveyor-dismantling" element={<ConveyorDismantling />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </AppTheme>
  );
}

export default PACApp;
