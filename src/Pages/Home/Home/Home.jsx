import React from 'react';
import HomeBanner from '../../../Components/HomeBanner/HomeBanner';
import Categories from './../Categories/Categories';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import Testimonials from '../Testimonials/Testimonials';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <SpecialDishes></SpecialDishes>
            <Testimonials></Testimonials>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;