import { Header } from "./components/common/Header";
import "./App.css"
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list-table/UserList";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
