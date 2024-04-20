import React, { useState } from 'react'


function UploadOpps() {
    // const [counter, setCounter] = useState(1); 
    // const [stringToPass, setStringToPass] = useState("");
    const [organization, setOrganization] = useState('');
    const [opportunity, setOpportunity] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [linkToWeb, setLinkToWeb] = useState();
    const [imageToDisp, setImageToDisp] = useState();

    const handleSubmit = (event) => {
        const formData = {
            organization,
            opportunity,
            description,
            location,
            date,
            time,
            linkToWeb,
            imageToDisp
        };
        // const formDataString = "formData" + counter;
        // console.log(formData);
        localStorage.setItem("formData", JSON.stringify(formData));
        // localStorage.setItem("counterKey", JSON.stringify(counter));
        // setStringToPass(formDataString);
        // incrementCounter();
    };

    // const incrementCounter = () => {
    //     // Use the setter function setCounter to update the counter by 1
    //     setCounter(counter => counter + 1);
    // };

    const handleInputChange = (setter) => (e) => setter(e.target.value);

    return (
        <div>
            <p className='text-center mt-5 mb-5 font-bold text-blue-900'>Give us some information about your opportunity!</p>
            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is the name of your organization?</label>
                    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your organization" required onChange={handleInputChange(setOrganization)} />
                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is the name of your opportunity?</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your opportunity" required onChange={handleInputChange(setOpportunity)} />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Give us a short description of your opportunity!</label>
                    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description" required onChange={handleInputChange(setDescription)} />
                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where is it happening?</label>
                    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your location" required onChange={handleInputChange(setLocation)} />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">When is it happening?</label>
                    <input type="date" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm/dd/yyyy" required onChange={handleInputChange(setDate)} />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What time is it happening?</label>
                    <input type="time" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hh:mm" required onChange={handleInputChange(setTime)} />
                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provide a link to your organization's website.</label>
                    <input type="url" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your organization's website" required onChange={handleInputChange(setLinkToWeb)} />
                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attach and image of your organization or happy volunteers (optional) </label>
                    <input type="file" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An image of your organization" onChange={handleInputChange(setImageToDisp)} />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
            </form>
        </div>
    )
}

export default UploadOpps
