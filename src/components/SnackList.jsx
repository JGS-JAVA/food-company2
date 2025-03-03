import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import APIService from "../api/APIService";

const SnackList = () => {
    const [snacks, setSnacks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        APIService.fetchSnacks(setSnacks());
    }, []);

    const snackImages = {
        '포카칩 오리지널': 'https://gdimg.gmarket.co.kr/4058982375/still/400?ver=1722695421',
        '새우깡': 'https://cdn.yamibuy.net/item/9ba06c4af29f635a81e785cc1e54cd3f_750x750.webp',
        '초코파이': 'https://img.danawa.com/prod_img/500000/974/546/img/3546974_1.jpg?shrink=360:360&_v=20250212101544',
        '빼빼로 오리지널': 'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/4bd7/ec147a7d4b0996c7829f2a9384bd026ff816a3a6dc7779c2361335b57a08.jpg',
        '츄파춥스 딸기맛': 'https://img.danawa.com/prod_img/500000/316/837/img/3837316_1.jpg?_v=20200211164930',
        '허니버터칩': 'https://static.megamart.com/product/editor/8801/8801019//21211108_hj62%20copy.jpg',
        '땅콩강정': 'https://sitem.ssgcdn.com/24/46/10/item/0000008104624_i1_750.jpg',
        '불닭맛 스낵': 'https://img.danawa.com/prod_img/500000/539/722/img/4722539_1.jpg?_v=20200427163437'
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center fw-bold">스낵 목록</h2>
            <div className="row">
                {snacks.map((snack) => (
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img
                                src={snackImages[snack.snackName] || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                                className="card-img-top"
                                alt={snack.snackName}
                                style={{height: '200px', objectFit: 'cover'}}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{snack.snackName}</h5>
                                <p className="card-text">브랜드: {snack.snackBrand}</p>
                                <p className="card-text">무게:{snack.snackWeightG}</p>
                                <p className="card-text">가격: {snack.snackPrice}원</p>
                                <p className="card-text">재고:{snack.snackStock}개</p>
                                <button className="btn btn-primary btn-sm"
                                        onClick={() => navigate(`/snacks/${snack.snackId}`)}
                                >
                                    자세히 보기
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SnackList;
