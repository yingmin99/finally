import React from 'react'
import { Link } from 'react-router-dom'



function CardItem1(props) {
    return (
        <>
            <li className='cards__item'>
            <a target="_blank" href="https://youth.seoul.go.kr/site/main/archive/space/youth_space">
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            src={props.src}
                            alt='Specific Img'
                            className='cards__item__img'
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                    </a>
            </li >
        </>
    )
}

export default CardItem1