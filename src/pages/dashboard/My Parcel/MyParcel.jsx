import React from "react";
import Chart from "../../../components/Chart";
import StatCard from "../../../components/StatCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoSearchSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../../../Loading/Loading";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {isLoading, data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
   if (isLoading) {
        return <Loading />
    }
  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CAEB66",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcels has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="space-y-6">
      <h1>my parcels {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Delivary Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* custom row */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="bg-green-100 text-green-600 py-1 px-1.5 rounded">
                      Paid
                    </span>
                  ) : (
                    <Link to={`/dashboard/payment/${parcel._id}`}>
                      <span className="text-white bg-red-600 py-1 px-1.5 rounded">
                        Pay now
                      </span>
                    </Link>
                  )}
                </td>
                <td>{parcel.delivaryStatus}</td>
                <td className="flex gap-3">
                  <button className="btn hover:bg-primary ">
                    <IoSearchSharp />
                  </button>
                  <button className="btn hover:bg-primary ">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn hover:bg-primary "
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
