import React from "react";
import  renderer  from "react-test-renderer";
import ProductCard, { ProductImg } from "../../src/componentes";
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de retornar el link de la imagen', () => {
        
        const wrapper = renderer.create(
            <ProductImg img="https//:holamundo"/>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImg />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON( )).toMatchSnapshot();
      
    })
    
    
})