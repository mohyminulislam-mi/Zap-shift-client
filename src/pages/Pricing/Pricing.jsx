import React from "react";

const Pricing = () => {
  return (
    <div className="bg-base-200 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div>
          <p class="text-center uppercase font-extrabold text-secondary">
            PRICING
          </p>
          <h3 class="text-3xl font-semibold text-center mx-auto mt-2">
            Our Pricing Plans
          </h3>
          <p class="text-sm text-slate-500 text-center mt-4 max-w-lg mx-auto">
            Safe delivery at a relatively low cost in all of Bangladesh. Fast,
            Secure, and Trusted.
          </p>

          <div
            id="pricing"
            class="flex flex-wrap items-center justify-center gap-6 mt-16 w-full"
          ></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Inside Dhaka */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
            <div className="card-body">
              <h2 className="card-title justify-center">Inside Dhaka</h2>
              <div className="text-center my-4 text-4xl font-bold">$ 10</div>
              <ul className="space-y-2">
                <li>✔️ Weight: Upto 1kg</li>
                <li>✔️ Delivery Time: 24h</li>
                <li>✔️ Free Pickup</li>
              </ul>
              <button className="btn btn-primary text-black mt-6">Order Now</button>
            </div>
          </div>

          {/* Around Dhaka */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-secondary">
            <div className="card-body">
              <h2 className="card-title justify-center">Around Dhaka</h2>
              <div className="text-center my-4 text-4xl font-bold">$ 30</div>
              <ul className="space-y-2">
                <li>✔️ Weight: Upto 1kg</li>
                <li>✔️ Delivery Time: 48h</li>
                <li>✔️ Real-time Tracking</li>
              </ul>
              <button className="btn btn-secondary mt-6">Order Now</button>
            </div>
          </div>

          {/* All Bangladesh */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-accent">
            <div className="card-body">
              <h2 className="card-title justify-center">All Bangladesh</h2>
              <div className="text-center my-4 text-4xl font-bold">$ 50</div>
              <ul className="space-y-2">
                <li>✔️ Weight: Upto 1kg</li>
                <li>✔️ 64 Districts</li>
                <li>✔️ Doorstep Delivery</li>
              </ul>
              <button className="btn btn-accent mt-6 text-white">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
