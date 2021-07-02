import React from 'react'
import ItemCount from './components/ItemCount'

function ItemListContainer ( {greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount/>

        </div>
    )
}

export default ItemListContainer