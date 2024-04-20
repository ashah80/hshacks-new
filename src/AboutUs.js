import React, { useState } from 'react'
import Vishnu from './Vishnu.jpg'
import Aarav from './Aarav.jpg'
import AaravAndVishnu from './AaravAndVishnu.jpg'

function AboutUs() {

    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    // This function handles the change event on the input field
    const handleInputChange = (event) => {
        setNumber(event.target.value); // Update the number with the new value
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const multipliedValue = Number(number) * 12; // Multiply the number by 12
        setResult(multipliedValue); // Store the result in the state
    };

    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[50px] lg:pb-[90px] bg-white dark:bg-dark ml-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={Aarav}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={Vishnu}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={AaravAndVishnu}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-[-400px]">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    The Developers
                                </span>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    Aarav Shah and Vishnu Vijay are students at the Illinois Math and Science Academy. When challenged to develop a website that focuses on acts of service, they immediately thought of volunteering. With a combined total of 300+ service hours, they are commited to helping their community. With this website, they hope to empower others to do the same.
                                </p>
                                <p className="mb-2 text-base text-body-color dark:text-dark-6">
                                    Judge YOUR Impact:
                                </p>
                                <div>
                                    {/* Form to get user input */}
                                    <form onSubmit={handleFormSubmit}>
                                        <label htmlFor="numberInput" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your volunteer hours:</label>
                                        <input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            type="number" // Input type is "number"
                                            id="numberInput"
                                            value={number} // Bind to the state variable
                                            onChange={handleInputChange} // Handle change events
                                        />
                                        <button type="submit"></button> {/* Button to submit the form */}
                                    </form>

                                    {/* Display the result */}
                                    {result !== null && (
                                        <>
                                        <p>Your impact in USD is ${result}.</p>
                                        <p>Nice Work!!</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
