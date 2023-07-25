import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Eateries from '../components/Eateries.jsx';
import AddEntry from '../components/AddEatery.jsx';
import Eatery from '../components/Eatery.jsx';

export default function ListsScreen() {
    const { userInfo } = useSelector((state) => state.auth);

    // Toggle Entries and AddEntry page
    // const [currentPage, setCurrentPage] = React.useState('entries');
    // const togglePage = (pageName) => {
    //     setCurrentPage(pageName);
    // }

    return (
        <>
            <Eateries />
        </>
    )
}