import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import SearchPage from './pages/SearchPage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<SearchPage />} />
              <Route path="/category-page" element={<CategoryPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
