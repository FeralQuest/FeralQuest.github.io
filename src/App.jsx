import Header from "./header"
import Footer from "./footer"
import ProdutoMain from "./produtoMain"
import NewCollection from "./newCollection"
import MainLancamento from "./mainLancamentos"
import "./reset.css"
import Colecoes from "./colecoes"

function App() {
  return (
    <>
    <Header/>
    <NewCollection/>
    <MainLancamento/>
    <Colecoes srcImage={"public/bonee.jpg"} nomeColecao={"DAD HAT TYPE 001"}/>
    <Colecoes srcImage={"public/boneee.jpg"} nomeColecao={"DAD HAT TYPE 002"}/>
    <Footer />
    </>
  )
}

export default App
