import React, {Component} from 'react'

class MainHeader extends Component{
    render(
    ){
        return(
            <div className='MainHeader'>
                <p className='Main__header_name'>
                    Welcome, <b>Damian</b>
                </p>
                <input placeholder='Search for products...'/>
                <input placeholder='Search for products...'/>

            </div>

        )
    }
}

export default MainHeader