import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Quiz } from './pages/quiz'
import { Score } from './pages/score'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='quiz' element={<Quiz/>}/>
      <Route path='score' element={<Score/>}/>
    </Routes>
    
  )
}

export default App
