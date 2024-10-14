// Profe, le dejo mi proyecto...Lo continue sobre la primer entrega, y habia creado otro repositorio en git
// al final no me dejo guardarlo en ninguno de los nuevos repositorios ni en el antiguo...
// por eso es tuve que crear este nuevo con todo lo que estaba anteriormente, corregi y entendi lo que me dijo sobre el ICon para
// que sea reutilizable...Gracias 



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Entrega II - Yacuzzi Walter'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
