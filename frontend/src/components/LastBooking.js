import React from 'react';

//this component renders the Last Booking details fetched from the Database when the submit button is clicked.
const LastBooking = ({ data }) => {
  return (
    <>
      {data.length === 0 || !data ? (
        <p style={{ color: 'red' }}>No Previous Booking Found!</p>
      ) : (
        <div className='booking-container'>
          <div className='heading'>
            <h2>Last Booking Details :</h2>
          </div>
          <div className='booking-content'>
            {data.seats.map((el, i) => (
              <p key={i}>
                <span2 className='bold'>{el.seatName} :</span2> {el.seats}
              </p>
            ))}
            <p className='moviename'>
              <span2 className='bold'>Movie :</span2> {data.movie}
            </p>
            <p className='time'>
              <span2 className='bold'>Time :</span2> {data.slot}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LastBooking;
