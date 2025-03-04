import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import APIService from '../api/APIService';

const SnackDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [snack, setSnack] = useState(null);

    useEffect(()=>{
        APIService.fetchSnackById(id,
            (data) => setSnack(data),
            (error) => console.error(error)
        )
    }, [id])

    if (!snack) {
        return <div className="text-center mt-5">로딩 중...</div>;
    }

    return (
        <div className="container mt-4">
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>← 뒤로 가기</button>
            <h2 className="text-center fw-bold">{snack.snackName}</h2>
            <div className="row">
                <div className="col-md-12">
                    <img src={snack.imageUrl || 'https://img.danawa.com/prod_img/500000/974/546/img/3546974_1.jpg?shrink=360:360&_v=20250212101544'}
                         alt={snack.snackName}
                         className="img-fluid"

                    />
                </div>
                <div className="col-md-12">
                    <p><strong>브랜드:</strong> {snack.snackBrand}</p>
                    <p><strong>무게:</strong> {snack.snackWeightG}g</p>
                    <p><strong>가격:</strong> {snack.snackPrice}원</p>
                    <p><strong>재고:</strong> {snack.snackStock}개</p>
                    <p><strong>카테고리:</strong> {snack.snackCategory}</p>
                    <p><strong>매운맛:</strong> {snack.snackSpicy ? '🔥 있음' : '❌ 없음'}</p>
                    <p><strong>알레르기 정보:</strong> {snack.snackAllergyInfo}</p>
                    <p><strong>유통기한:</strong> {snack.snackExpirationDate}</p>
                </div>
            </div>
        </div>
    );
};

export default SnackDetail;