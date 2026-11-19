import Header from './components/Header/header.jsx';
import './index.css';
import Product from './components/Product/product.jsx';



function App() {

    return (
        <>
            <Header />
            <div className='Products'>
            <Product/>
            </div>

        </>
    )
}

export default App