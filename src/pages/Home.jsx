import ListPost from "../Componets/ListPosts"
import ListCategories from "../Componets/ListaCategories"
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories/>
      <ListPost url={"/posts"} />
    </main>
  )
}

export default Home
