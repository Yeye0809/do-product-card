import React from "react";
import  renderer  from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/componentes';
import { product1 } from "../data/products";


describe('ProductTile', () => {

    test('debe de mostrar correctamente con el titulo personalizado', () => {
         
        const wrapper = renderer.create(
            <ProductTitle title="custon product"  className="coustun-style"/>
        )

        expect( wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON()).toMatchSnapshot();
    })
    
})