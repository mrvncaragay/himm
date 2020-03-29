import React, { useState, useEffect } from 'react';
import api from '../api';
import ReviewList from './ReviewList';

const ReviewHeader = () => {
  const [reviews, setReviews] = useState(undefined)

  useEffect(() => {
    api.getAllReviews()
       .then((res) => {
          setReviews({
            total: res.data.length,
            reviews: res.data,
            show: false
          });
        })
  }, [])

  return reviews ? <ReviewList reviews={reviews} setState={setReviews} /> : "";

}

export default ReviewHeader;
