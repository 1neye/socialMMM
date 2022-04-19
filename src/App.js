import './App.css';
import Inst from './components/Inst';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import InstForm from './components/InstForm';
import './index.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inst />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
