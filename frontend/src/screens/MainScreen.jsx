import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header.jsx';
import ChooseBudget from '../components/ChooseBudget.jsx';
import FoodOff from '../components/FoodOff.jsx';
import Winner from '../components/Winner.jsx';
import Footer from '../components/Footer.jsx';

export default function MainScreen() {
    const { userInfo } = useSelector((state) => state.auth);

// Time of day and meal messages
    const date = new Date();
    const hours = date.getHours();
 
    let timeOfDay
     if (hours >= 4 && hours < 12) {
         timeOfDay = `Good morning, ${userInfo.name}! What's for breakfast?`
     } else if (hours >= 12 && hours < 17) {
         timeOfDay = `Good afternoon, ${userInfo.name}! What's for lunch?`
     } else if (hours >= 17 && hours < 20) {
         timeOfDay = `Good evening, ${userInfo.name}! What's for dinner?`
     } else {
         timeOfDay = `Late night, ${userInfo.name}? What are we snackin' on?`
     }

// Toggle budget, food-off, and winner components
     const [currentPage, setCurrentPage] = React.useState('budget-menu');
     const togglePage = (pageName) => {
        setCurrentPage(pageName);
     }

     let page;
     if (currentPage === 'budget-menu') {
        page = <ChooseBudget togglePage={togglePage} />;
     } else if (currentPage === 'food-off') {
        page = <FoodOff togglePage={togglePage} />;
     } else if (currentPage === 'winner') {
        page = <Winner togglePage={togglePage} />;
     }

    return (
        <>
            <section className="greeting">
                <h2>{`${timeOfDay}`}</h2>
            </section>
            {page}
        </>
    )
}