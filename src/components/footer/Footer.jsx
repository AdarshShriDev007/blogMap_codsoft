import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#325E7A' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center justify-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-12'
                        src="https://cdn-icons-png.flaticon.com/128/3621/3621446.png" alt="logo"
                    />
                
                </div>

                {/* items  */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023 Blog Map. —
                    <a
                        href="https://twitter.com/knyttneve"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @Blog Map.
                    </a>
                </p>
                
            
                
            </div>
        </footer>

    )
}

export default Footer