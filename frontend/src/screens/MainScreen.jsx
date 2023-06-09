import React from 'react';
import Header from '../components/Header.jsx';
import ChooseBudget from '../components/ChooseBudget.jsx';
import FoodOff from '../components/FoodOff.jsx';
import Winner from '../components/Winner.jsx';
import Footer from '../components/Footer.jsx';

export default function MainScreen() {
    let userName = 'User';

// Time of day and meal messages
    const date = new Date();
    const hours = date.getHours();
 
    let timeOfDay
     if (hours >= 4 && hours < 12) {
         timeOfDay = `Good morning, ${userName}! What's for breakfast?`
     } else if (hours >= 12 && hours < 17) {
         timeOfDay = `Good afternoon, ${userName}! What's for lunch?`
     } else if (hours >= 17 && hours < 20) {
         timeOfDay = `Good evening, ${userName}! What's for dinner?`
     } else {
         timeOfDay = `Late night, ${userName}? What are we snackin' on?`
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
            <Header
                userName={userName}
            />
            <section className="greeting">
                <h2>{`${timeOfDay}`}</h2>
            </section>
            {page}
            <Footer />
        </>
    )
}