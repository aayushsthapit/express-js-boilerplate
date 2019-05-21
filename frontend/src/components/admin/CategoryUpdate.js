import React, {Component} from 'react';

class CategoryUpdate extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className='container'>
                <div className='row header-wrapper'>
                    <h2>Category Management</h2>
                </div>
                <div className='row header-wrapper justify-content-end'>
                    <h6>Add Category button</h6>
                </div>
                    
                <div className='row'>
                    <h5>The table itself</h5>
                </div>
            </div>
        )
    }
}

export default CategoryUpdate;