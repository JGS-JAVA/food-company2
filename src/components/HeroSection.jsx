import React from 'react';

const HeroSection = () => {
    return (
        <div className="container text-center py-5">
            <h1 className="fw-bold">맛있고 신선한 식품을 만나보세요!</h1>
            <p className="lead">건강하고 맛있는 다양한 음료와 과자를 제공합니다.</p>
            <a href="/drinks" className="btn btn-primary m-2">음료 보기</a>
            <a href="/snacks" className="btn btn-outline-primary m-2">과자 보기</a>
        </div>
    );
};

export default HeroSection;
