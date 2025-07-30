import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { HeroSection } from './components/HeroSection'

// Main App Component - Sets up routing for the application
function App() {
  return (
    <>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        {/* Routes container for defining application routes */}
        <Routes>
          {/* Home page - default route (index) */}
          <Route index element={<Home/>}/>
          {/* 404 page - catches all unmatched routes */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
