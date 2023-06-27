import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Entries from '../components/Entries.jsx';
import AddEntry from '../components/AddEntry.jsx';

export default function ListsScreen() {
    const { userInfo } = useSelector((state) => state.auth);

    // Toggle Entries and AddEntry page
    const [currentPage, setCurrentPage] = React.useState('entries');
    const togglePage = (pageName) => {
        setCurrentPage(pageName);
    }

    let page;
    if (currentPage === 'entries') {
        page = <Entries togglePage={togglePage} />;
    } else if (currentPage === 'add-entry') {
        page = <AddEntry togglePage={togglePage} />;
    } 

    return (
        <>
            {page}
        </>
    )
}