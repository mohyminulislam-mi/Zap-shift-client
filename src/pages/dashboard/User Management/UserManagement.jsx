import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchItems, setSearchItems] = useState('')

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', searchItems],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchItems}`);
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} removed from Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div>
            <div className='grid grid-cols-2 my-7 px-5'>
                <div>
                    <h2 className='text-xl font-semibold'>Manage Users: {users.length}</h2>
                 </div>
            <div className='flex justify-end'>
                 <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    onChange={(e) => setSearchItems(e.target.value)}
                    type="search"
                    className="grow"
                    placeholder="Search users" />

            </label>
           </div>
           </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <td>
                                {user.role === 'admin' ?
                                    <button
                                        onClick={() => handleRemoveAdmin(user)}
                                        className='btn bg-red-300'>
                                        <FiShieldOff />
                                    </button> :
                                    <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className='btn bg-green-400'>
                                        <FaUserShield></FaUserShield>
                                    </button>
                                }
                            </td>
                            <th>
                                Actions
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;