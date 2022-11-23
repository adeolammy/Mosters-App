import React, { Component } from 'react';

class SearchBox extends Component {

    render() {
        // DISTRUCTING (THIS.PROPS)
    const {className, placeholder, onChangeHandler} = this.props

        return (   
            <div>
                <input 
                    type="search" 
                    className={className} 
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>   
        );
    }
}

export default SearchBox;