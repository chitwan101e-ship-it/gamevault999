import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Games from './pages/Games'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import DownloadAndroid from './pages/DownloadAndroid'
import DownloadIos from './pages/DownloadIos'
import Login from './pages/Login'
import Troubleshooting from './pages/Troubleshooting'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/download/android" element={<DownloadAndroid />} />
        <Route path="/download/ios" element={<DownloadIos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
      </Routes>
    </Layout>
  )
}

export default App

