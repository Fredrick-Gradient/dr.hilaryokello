'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/button';

const UpcomingShows = () => {
  const imageDimension = 500;

  // Example ticket booking information
  const ticketInfo = {
    date: '2023-12-25',
    time: '8:00 PM',
    location: 'Stork Theatre',
    ticketsAvailable: 100,
    ticketPrice: '$50',
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
        <div>
          <h4 className='text-left text-4xl text-white font-bold'> Live at the Stork </h4>
          <Button variant='bordered' className='rounded-full text-white px-4 py-2 mt-4'> Buy Ticket</Button>
        </div>

        <div className="flex mt-10 align-center">
          <div className="w-1/2">
            <Image 
              src='/liveatthestork.jpeg'
              alt='Live at the Stork'
              width={imageDimension} 
              height={imageDimension} 
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <h5 className='text-left text-2xl text-white font-bold'> Show Description </h5>
            <p className='text-left text-lg text-white mt-4'>
              Join us for a night of live entertainment at the Stork Theatre. This show features the best performances and is not to be missed.
            </p>
            <h5 className='text-left text-2xl text-white font-bold mt-8'> Ticket Information </h5>
            <p className='text-left text-lg text-white mt-4'> Ft.  </p>
          
            <Button variant='filled' className='rounded-full text-black px-4 py-2 mt-8'> Book Tickets</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingShows;
