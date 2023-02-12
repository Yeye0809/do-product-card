import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,  ProductButtons, ProductImg, ProductTitle} from '../.';

const product = {
  id: '2',
  title: 'coffe mug - meme',
  // img: './coffee-mug2.png',
}

const App = () => {
  return (
    <>
      <ProductCard 
        product={ product }
        initialValue= {{
          count: 4,
          maxCount: 12
        }}
      >
        {
          ({ reset, increaseBy, isMaxReached, maxCount, count })=>(
            <>
              <ProductImg />
              <ProductTitle />
              <ProductButtons />
              
            </>
          )
        }

      </ProductCard>   
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
