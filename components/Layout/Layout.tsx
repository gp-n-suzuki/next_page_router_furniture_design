import React from 'react'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
            <>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </>
    )
}

export default Layout