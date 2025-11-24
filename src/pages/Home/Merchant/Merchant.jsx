import React from "react";
import topWave from "../assets/be-a-merchant-bg.png";
import boxIllustration from "../assets/location-merchant.png";

const Merchant = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-0 py-10">
      <div className="relative bg-[#003B3E] max-w-7xl w-full rounded-4xl overflow-hidden p-8 sm:p-12 lg:p-16">
        <img
          src={topWave}
          className="absolute top-0 left-0 w-full object-cover opacity-80"
        />

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h1 className="text-white font-bold text-2xl lg:text-3xl leading-snug">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h1>

            <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="px-6 py-3 rounded-full bg-[#C9FF57] text-black font-semibold w-full sm:w-auto">
                Become a Merchant
              </button>

              <button className="px-6 py-3 rounded-full border border-[#C9FF57] text-[#C9FF57] font-semibold w-full sm:w-auto">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <img
              src={boxIllustration}
              className="w-64 sm:w-80 md:w-[420px] lg:w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
