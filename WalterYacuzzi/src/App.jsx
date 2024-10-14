import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
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
        <div className="countCenter">
          <ItemCount stock={10} initial={1} onAdd={(cantidad) =>
            console.log('cantidad agregada', cantidad)} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
