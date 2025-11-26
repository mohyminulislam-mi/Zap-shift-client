import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Loading/Loading";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  const handlePayment = async () => {
    const paymentInfo = {
      parcelId: parcel._id,
      cost: parcel.cost,
      parcelName: parcel.parcelName,
      senderEmail: parcel.senderEmail,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
    console.log(res.data);
  };

  return (
    <div>
      <h1>please pay: {parcel.cost} USD </h1>
      <button
        onClick={handlePayment}
        className="btn bg-primary text-secondary mt-2"
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
