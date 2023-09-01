import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChooseBudget from '../components/ChooseBudget.jsx';
import FoodOff from '../components/FoodOff.jsx';
import Winner from '../components/Winner.jsx';
import { useGetEateryListsQuery } from '../slices/eateriesApiSlice';

export default function MainScreen() {
    const { userInfo } = useSelector((state) => state.auth);

    const { data: eateries } = useGetEateryListsQuery();

// Time of day and meal messages
    const date = new Date();
    const hours = date.getHours();
 
    let timeOfDay
     if (hours >= 4 && hours < 12) {
         timeOfDay = `Good morning, ${userInfo.firstName || userInfo.username}! What's for breakfast?`
     } else if (hours >= 12 && hours < 17) {
         timeOfDay = `Good afternoon, ${userInfo.firstName || userInfo.username}! What's for lunch?`
     } else if (hours >= 17 && hours < 20) {
         timeOfDay = `Good evening, ${userInfo.firstName || userInfo.username}! What's for dinner?`
     } else {
         timeOfDay = `Late night, ${userInfo.firstName || userInfo.username}? What are we snackin' on?`
     }

// Toggle budget, food-off, and winner components
     const [currentPage, setCurrentPage] = React.useState('budget-menu');
     const togglePage = (pageName) => {
        setCurrentPage(pageName);
     }

     let page;

// Budget arrays
    const lowBudgetOptions = eateries?.filter(eatery => eatery.budget === '$')
 
    const midBudgetOptions = eateries?.filter(eatery => eatery.budget === '$$')

    const highBudgetOptions = eateries?.filter(eatery => eatery.budget === '$$$')
        
    const [foodOptions, setFoodOptions] = useState([]);

    const lowBudgetSelected = () => {
        setFoodOptions(lowBudgetOptions.sort(() => Math.random() - 0.5));
        console.log(foodOptions);
    };

    const midBudgetSelected = () => {
        setFoodOptions(midBudgetOptions.sort(() => Math.random() - 0.5));
        console.log(foodOptions);
    };

    const highBudgetSelected = () => {
        setFoodOptions(highBudgetOptions.sort(() => Math.random() - 0.5));
        console.log(foodOptions);
    };

    const feelingLuckySelected = () => {
        const random = Math.floor(Math.random() * eateries.length);
        setFoodOptions([eateries[random]]);
        togglePage('winner');
        console.log(foodOptions);
    };

    const chooseOptionOne = () => {
        const newFoodOptions = [...foodOptions];
        newFoodOptions.pop();
        setFoodOptions(newFoodOptions);
        console.log(foodOptions);

        if (foodOptions.length === 2) {
            togglePage('winner');
        }
    }

    const chooseOptionTwo = () => {
        const removedOptionOne = foodOptions.slice(1);
        setFoodOptions(removedOptionOne);

        if (foodOptions.length === 2) {
            togglePage('winner');
        }
    }


    useEffect(() => {
        console.log(foodOptions);
    }, [foodOptions])

     
     if (currentPage === 'budget-menu') {
        page = <ChooseBudget togglePage={togglePage}
                            lowBudgetSelected={lowBudgetSelected} 
                            midBudgetSelected={midBudgetSelected}
                            highBudgetSelected={highBudgetSelected}
                            feelingLucky={feelingLuckySelected}
                />;
     } else if (currentPage === 'food-off') {
        page = <FoodOff togglePage={togglePage} 
                        foodOptions={foodOptions}
                        optionOne={chooseOptionOne}
                        optionTwo={chooseOptionTwo}
                />;
     } else if (currentPage === 'winner') {
        page = <Winner togglePage={togglePage}
                        foodOptions={foodOptions}
                />;
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