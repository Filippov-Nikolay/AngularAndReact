import React from 'react';
import imgNike from '../img/nike.png'

const Products = [
    {
        img: imgNike,
        title: 'nike forse',
        size: [39, 40, 41, 42, 43, 44],
        price: 500,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];

function IsAddList(props) {
    return (
    <ul className='size'>
        {props.size.map((addInfoItem, index) => (
            <li className="size__item">{addInfoItem}</li>
        ))}
    </ul>
    )
}

function AddItem(index) {
    return (
    <div className='card'>
        <div className='card__img-wrapper'>
            <img className='card__img' src={Products[index].img} alt={Products[index].title}/>
        </div>
        <div className='card__info'>
            <h2 className='card__title'>{Products[index].title}</h2>
            <div className='card__wrapper'>
                <div className='card__item'>
                    <h4 className='card__details'>size:</h4>
                    {IsAddList(Products[index])}
                </div>
                <div className='card__item'>
                    <h4 className='card__details'>price:</h4>
                    <span className='card__value'>{Products[index].price}</span>
                </div>
                <div className='card__item'>
                    <h4 className='card__details'>description</h4>
                    <p className='card__desc'>
                    {Products[index].desc}
                    </p>
                </div>
            </div>
            <button className='card__btn' type='submit'>buy</button>
        </div>
    </div>
    )
  }

export class Card extends React.Component {
    render() {
        return (
            Products.map((item, index) => {
                return AddItem(index)
            })
        )
    }
}