import './App.css';
import BookList from './BookList'
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App">
     <Container>
     <div className="content">
        <h1>NY Best Selling Book List </h1>
        <BookList />
      </div>
     </Container>
    </div>
  );
}

export default App;
