import './App.css'
import { NameInput } from './assets/component/Name.tsx'
import Counter from './assets/component/Counter.tsx'
import ListOfFriends from './assets/component/List.tsx'
import { Routes, Route } from 'react-router-dom';
import {Home} from './assets/component/Home.tsx'
import MensagemPage from './assets/component/MessagePage.tsx'
import NotFound from './assets/component/NotFound.tsx'



export function App() {
  
  return (
    <> {/* todas as rotas definiadas nessa pagina aqui  */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/message" element={<MensagemPage />} />
      <Route path="/name" element={<NameInput />}/>
      <Route path="/list" element={<ListOfFriends/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path='*' element= {<NotFound />}/>
      
    </Routes>

    </>
  )
}

export default App
