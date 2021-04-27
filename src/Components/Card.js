import React from 'react';

const Card = ({name, email, id}) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}200x200`}/>
            <div>
                <h2 className='f2'>{name}</h2>
                <p className='f4'>{email}</p>
            </div>
        </div>
    );
}

export default Card;