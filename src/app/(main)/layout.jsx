import BrekingNews from '@/component/shared/BrekingNews';
import Header from '@/component/shared/Header';
import NavBar from '@/component/shared/NavBar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BrekingNews/>
            <NavBar />
            {children}
        </>
    );
};

export default MainLayout;