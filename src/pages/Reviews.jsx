import React from "react";
import { reviews } from "../constants";
import { ReviewCard } from "../components";
import { customerThumbnail, customerThumbnail1 } from "../assets/images";
const Reviews = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between">
        <img src={customerThumbnail} alt="" />
        <img src={customerThumbnail1} alt="" />
      </div>
      <h3 className="font-palanquin text-center text-4xl font-bold text-headline">
        What Does Our <span className="text-button">Customers </span>Say?
      </h3>
      <p className="text-paragraph m-auto mt-4 max-w-[700px] text-center">
        {" "}
        In this section, we showcase authentic feedback and testimonials
        directly from those who have entrusted us with their needs. These
        reviews serve as a testament to the quality of our services and the
        satisfaction of our customers.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL}
          customerName= {review.customerName}
          rating = {review.rating}
          feedback = {review.feedback} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
