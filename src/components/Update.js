import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Update() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [id, setID] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setGender(localStorage.getItem('Gender'));
        setSalary(localStorage.getItem('Salary'));

    }, []);

    const updateAPIData = () => {
        axios.put(`https://backend-assignment2.herokuapp.com/api/emp/employees/${id}`, {
            first_name,
            last_name,
            email,
            gender,
            salary
        }).then((response) => {
            console.log(response);
            setSuccessMessage("Employee has been updated successfully!")
        }).catch(error => {
            console.log(error)
            }
        );
    }

    return (
        <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light ">Update employee</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div class="h-2 bg-purple-400 rounded-t-md"></div>
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> First Name </label>
                        <input value={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Last Name </label>
                        <input value={last_name} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="countries" class=" rounded-md border border-gray-200 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1  block w-full p-2.5 ">
                            <option selected disabled>Choose a gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                        <label class="block mt-3 font-semibold"> Salary</label>
                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="Salary" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <p className="text-green-400">{successMessage}</p>
                        <div class="flex justify-between items-baseline">
                            <button onClick={updateAPIData} type="submit" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Update</button>
                            <a href="/view"  class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

