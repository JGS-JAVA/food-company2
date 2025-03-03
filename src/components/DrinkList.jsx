import React, { useState, useEffect } from 'react';
import APIService from '../api/APIService';

const DrinkList = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        APIService.fetchDrinks(setDrinks);
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정

    const drinkImages = {
        '코카콜라': 'https://www.ccbk.co.kr/m/static/images/brand/img_04.png',
        '펩시제로': 'https://img.danawa.com/prod_img/500000/143/536/img/13536143_1.jpg?shrink=360:360&_v=20230222093241',
        '제주 삼다수': 'https://img.danawa.com/prod_img/500000/821/745/img/11745821_1.jpg?_v=20210902124904',
        '탐스 애플주스': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaV9UeXPDgpNc9pX_sNYlFFUrM0Mdl0aZCQ&s',
        '스타벅스 카페라떼': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAkNFmtH05cM2g_QntVpKSCupaaYc6rymKA&s',
        '옥수수 수염차': 'https://sitem.ssgcdn.com/30/43/98/item/0000006984330_i1_750.jpg',
        '포카리 스웨트': 'https://sitem.ssgcdn.com/34/91/60/item/0000006609134_i1_750.jpg'
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center fw-bold">음료 목록</h2>
            <div className="row">
                {drinks.map((drink) => (
                    <div className="col-md-4 mb-4" key={drink.drinkId}>
                        <div className="card shadow-sm">
                            <img
                                src={drinkImages[drink.drinkName] || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                                className="card-img-top"
                                alt={drink.drinkName}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{drink.drinkName}</h5>
                                <p className="card-text">브랜드: {drink.drinkBrand}</p>
                                <p className="card-text">가격: {drink.drinkPrice}원</p>
                                <p className="card-text">유통기한: {drink.drinkExpirationDate}</p>
                                <button className="btn btn-primary btn-sm">자세히 보기</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DrinkList;
