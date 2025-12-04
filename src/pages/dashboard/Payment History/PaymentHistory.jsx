import { useState } from "react";
import { Link } from "react-router";
import ParcelDetails from "./ParcelDetails";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const parcels = [
  {
    name: "Shakil",
    bnName: "শাকিল",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "01773689877",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "",
    bnName: "",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "Anika",
    bnName: "আনিকা",
    address: "ডিউটিপাড়া, সাভার, ঢাকা",
    phone: "01987654321",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "",
    bnName: "",
    address: "লালমনিরহাট, পাটগ্রাম সদর, পাটগ্রাম",
    phone: "",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
  {
    name: "Rameez",
    bnName: "রামিজ",
    address: "কুমিল্লা, ঢাকা",
    phone: "01823456789",
    tracking: "568352",
    amount: "৳ 121",
    status: "Paid",
  },
];

export default function PaymentHistory() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure();
  const { data: payments = []} = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`)
      return res.data
    }
  })
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Payment History {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Parcel Info</th>
              <th className="px-4 py-2 text-left">Recipient Info</th>
              <th className="px-4 py-2 text-left">Tracking Number</th>
              <th className="px-4 py-2 text-left">Payment Info</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {payments.map((payment, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-3">{ index + 1}</td>
                <td className="px-4 py-3">{ payment.parcelName}</td>
                {/* <td className="px-4 py-3 whitespace-pre-line">
                  {payment.name && (
                    <span className="font-medium">{payment.name}</span>
                  )}
                  {payment.bnName && <div>{payment.bnName}</div>}
                  <div>{payment.address}</div>
                  {payment.phone && <div>{payment.phone}</div>}
                </td> */}
                <td className="px-4 py-3">{payment.customerEmail}</td>
                <td className="px-4 py-3">{payment.parcelId}</td>
                <td className="px-4 py-3">
                  {payment.amount}{" "}
                  <span className="text-green-600">({payment.paymentStatus})</span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setOpen(true)}
                    className="btn btn-primary text-black"
                  >
                    View
                  </button>
                </td>
                {open && (
                  <ParcelDetails closeModal={() => setOpen(false)}  />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
