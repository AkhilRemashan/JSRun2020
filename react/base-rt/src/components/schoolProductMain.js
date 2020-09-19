import React from 'react'
import product from './../assets/data/schoolProduct'
import SchoolProductItems from './schoolProduct'

function SchoolProductMain(){

    const productList = product.map(item => <SchoolProductItems product = {item} />)

    return(
        <div>
            {productList}
        </div>
    )
}




export default SchoolProductMain