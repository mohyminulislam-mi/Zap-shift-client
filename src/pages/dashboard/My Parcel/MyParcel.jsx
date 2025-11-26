import React from "react";
import Chart from "../../../components/Chart";
import StatCard from "../../../components/StatCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["my-parcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="space-y-6">
      <h1>my parcels {parcels.length}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="To Pay" value="129" />
        <StatCard title="Ready Pick UP" value="1,325" />
        <StatCard title="In Transit" value="50" />
        <StatCard title="Ready to Deliver" value="50" />
        <StatCard title="Delivered" value="50" />
      </div>
      <Chart />
    </div>
  );
};

export default MyParcel;
