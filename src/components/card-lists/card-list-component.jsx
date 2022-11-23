import React, { Component } from 'react';

class CardList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {mosters} = this.props
        return (
            <div>
                { 
                 mosters.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Email: {item.email}</p>

                        </div>
                    )
                 })
             }
           
            </div>
        );
    }
}

export default CardList;