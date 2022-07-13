import React, { useState, useEffect } from 'react';
import ReviewList from './Review_List/ReviewList.jsx'
import Ratings from './Rating_Breakdown/Ratings.jsx'

function ReviewIndex(props) {


  return (
    <div>
      <h1 className="ratingAndReview">Rating & Reviews <span className="bear">ʕ•ᴥ•ʔ</span></h1>
      <div className="rating">
        <Ratings />

        <ReviewList /> {/*this componenet will have product id passed down */}

      </div>



    </div>
  )
}

export default ReviewIndex;