# YYH-PRODUCT-CARD

Este es un paquete de pruebas de despliegue de NPM

### Yeferson Hernandez

## Ejemplo

```
import {ProductCard, ProductButtons, ProductImg, ProductBTitle } from 'yyh-product-card';
```

```
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
```