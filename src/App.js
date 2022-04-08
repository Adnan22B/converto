 
import './App.css';
import Header from './components/header/Header';
import ItemCard from './components/cards/Card'

function App() {
  return (
    <div className="App"> 
    <Header></Header>
    <div className='headText'>
      <h1 className='title'>Every tool you need to work with PDFs in one place</h1>
      <h2 className='subtitle'>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h2>
      {/* <h2></h2> */}
    </div>
    <div className='cardsSection'>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
    <div className='infoSection'>
      <div className='container'>
        <div className='container_header'>
          <div className='title1'>The PDF software trusted by millions of users</div>
          <div className='subtitle1'>iLovePDF is your number 1 web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.</div>
        </div>
      </div>
    </div>
    <div className='black-block'>
        <div className='black-container'>

        </div>
    </div>
    </div>
  );
}

export default App;
