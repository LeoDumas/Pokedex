import React, { useState } from 'react';

interface MyNavBarProps {
    onSearch: (query: string) => void;
}

const MyNavBar: React.FC<MyNavBarProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        // Call the onSearch callback with the current search value
        onSearch(searchValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className='fixed z-50 left-1/2 -translate-x-1/2 p-2'>
            <div className='relative rounded-lg w-48 sm:w-64 md:w-80 lg:w-96 xl:w-96 h-10 shadow-lg border-[1px] flex items-center bg-white'>
                <svg
                className='w-6 h-6 absolute left-2 hover:cursor-pointer text-gray-800'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                onClick={handleSearch}
                >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
                </svg>

                <div className='absolute top-1/2 transform -translate-y-1/2  left-10 h-4/6 flex w-[2px] opacity-40 rounded-md bg-black'></div>

                <input
                className='h-full pl-14 w-full border-none outline-none'
                type='text'
                placeholder='Search'
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
           </div>
        </nav>
    );
};

export default MyNavBar;
