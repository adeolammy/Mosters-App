import React, { Component } from 'react';
import './card-list.style.css'

class CardList extends Component {

    render() {
        const {mosters} = this.props;
        
        return (
            <div className='card-list'>   
                { mosters.map((item)=>{
                    const {name, email, id} = item;
                    return(
                        <div key={id} className='card-container'>
                            <img src={`https://robohash.org/${name}?set=set5&size=180x180`} alt={`mosters ${name}`} />
                            <h2>{name}</h2>
                            <p>Email: {email}</p>

                        </div>
                    )
                 })
             }
           
            </div>
        );
    }
}

export default CardList;