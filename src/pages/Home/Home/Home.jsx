import React, { Suspense } from "react";
import Hero from "../Hero/Hero";
import HowWorks from "../How it Works/HowWorks";
import OurServices from "../Our Services/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Loading from '../../../Loading/Loading'
import ServiceFeatures from "../ServiceFeatures/ServiceFeatures";

const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="my-15"><HowWorks /></div>
      <div className="py-8 bg-secondary rounded-2xl"><OurServices /></div>
      <div> <ServiceFeatures /> </div>
      <div className="my-15"><Brands /></div>
      <div className="my-15">
        <Suspense fallback={<Loading></Loading>}>
          <Reviews reviewsPromise={reviewsPromise} />
        </Suspense>
      
      </div>
    </div>
  );
};

export default Home;
