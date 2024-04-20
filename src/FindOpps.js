import React, { useEffect, useState } from 'react'
import FMSC from './FMSC.png'
import GlobalVillage from './GlobalVillage.png'
import HarborHumane from './HarborHumane.jpg'
import LearntoBe from './LearntoBe.png'
import Science from './Science.png'
import ChiCo from './ChiCo.png'
import volunteers3 from './volunteers3.jpg'

function FindOpps() {
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [organization, setOrganization] = useState();
    const [place, setPlace] = useState();
    const [linkToWeb, setLinkToWeb] = useState();
    const [imageToDisp, setImageToDisp] = useState();
    // const[key, setKey] = useState()
    useEffect(() => {
        // setKey(JSON.parse(localStorage.getItem("counterKey")).key);
        // alert(key + "KEY!")
        // for (let i = 1; i < key; i++) {
        //     const listString = JSON.parse(localStorage.getItem('formData' + i));
        //     alert(listString);
        //     if (listString) {
        //         alert("WHOA");
        //         name.push(listString.opportunity);
        //         description.push(listString.description);
        //         // setName(listString.opportunity);
        //         // setDescription(listString.description);
        //     }
        // }
        
        const listString = JSON.parse(localStorage.getItem('formData'))
        if (listString) {
            setDescription(listString.description);
            setName(listString.opportunity);
            setDate(listString.date);
            setOrganization(listString.organization);
            setTime(listString.time);
            setPlace(listString.location);
            setLinkToWeb(listString.linkToWeb);
            setImageToDisp(listString.imageToDisp);
        }
    }, []);

    return (
        <div>
            <div className="flex">
            </div>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-center font-bold text-5xl bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text h-[60px]">Find Opportunities</p>
            <br></br>
            <p className="text-center text-black font-bold mx-[500px]">Use this page to help find volunteer opportunities and make an impact on your community! </p>
            <br></br>
            <div className="flex justify-center flex-grow">
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center" src={FMSC} alt="" />
                    <p className="text-blue-950 font-bold m-6 italic">Feed My Starving Children</p>
                    <p className="text-blue-950 mx-6 my-3">Feed My Starving Children (FMSC) is a non-profit organization dedicated to combating global hunger by packing and distributing nutritious meals to malnourished children in developing countries through volunteer-driven efforts and charitable donations.</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://www.fmsc.org/"}
                    >
                        Join now!
                    </button>


                </div>
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center" src={GlobalVillage} alt="" />
                    <p className="text-blue-950 font-bold m-6 italic">Global Village Foundation</p>
                    <p className="text-blue-950 mx-6 my-3">Global Village Foundation is a non-profit organization focused on empowering underprivileged communities in Southeast Asia through educational, healthcare, and infrastructural support, aiming to improve living standards and foster sustainable development.</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://www.globalvillagefoundation.org/?gad_source=1&gclid=EAIaIQobChMIjZeessrRhQMVWVtHAR1k8QD-EAAYASAAEgKHcvD_BwE"}
                    >
                        Join now!
                    </button>
                </div>
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center" src={HarborHumane} alt="" />
                    <p className="text-blue-950 font-bold m-6 mt-[50px] italic">Harbor Humane Society</p>
                    <p className="text-blue-950 mx-6 my-3">Harbor Humane Society is an animal welfare organization dedicated to providing shelter, care, and adoption services for homeless animals, while promoting responsible pet ownership and community education.</p>
                    <button
                        type="button"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://harborhumane.org/adopt/?gad_source=1&gclid=EAIaIQobChMIs42Y6srRhQMV8F5HAR0EnwvuEAAYASAAEgL33vD_BwE"}
                    >
                        Join now!
                    </button>
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center object" src={LearntoBe} alt="" />
                    <p className="text-blue-950 font-bold m-6 italic">Learn To Be</p>
                    <p className="text-blue-950 mx-6 my-3">Learn To Be is a non-profit organization that offers free online tutoring and educational support to underserved students, aiming to provide personalized academic assistance and bridge educational gaps.</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://www.learntobe.org/?utm_source=google-ads&gad_source=1&gclid=EAIaIQobChMIuueK9srRhQMVxHFHAR0vkgqcEAAYASAAEgJm0PD_BwE"}
                    >
                        Join now!
                    </button>
                </div>
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center" src={Science} alt="" />
                    <p className="text-blue-950 font-bold m-6 italic">Adventure Scientists</p>
                    <p className="text-blue-950 mx-6 my-3">Adventure Scientists is a non-profit organization that engages outdoor enthusiasts to collect environmental data during their adventures, contributing to scientific research and conservation efforts on a global scale.</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://www.adventurescientists.org/?gclid=EAIaIQobChMI4LTklsvRhQMVLV5HAR1ZQAI9EAAYASAAEgJz0_D_BwE"}
                    >
                        Join now!
                    </button>
                </div>
                <div className="flex-1 m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center" src={ChiCo} alt="" />
                    <p className="text-blue-950 font-bold m-6 mt-8 italic">Chicago Commons</p>
                    <p className="text-blue-950 mx-6 my-3">Chicago Commons is a non-profit organization in Chicago that provides community-based services including early childhood education, family support, senior care, and workforce development, aiming to foster resilience and empower communities.</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = "https://www.chicagocommons.org/?utm_term=chicago%20commons%20locations&utm_campaign=Org+Awareness+%2B+All+Programs&utm_source=adwords&utm_medium=ppc&hsa_acc=5692003378&hsa_cam=17323254372&hsa_grp=142682888808&hsa_ad=600082868087&hsa_src=g&hsa_tgt=kwd-1733460561767&hsa_kw=chicago%20commons%20locations&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMI8PHMscvRhQMVdVxHAR05RQ2gEAAYASAAEgIQgfD_BwE"}
                    >
                        Join now!
                    </button>
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className=" m-5 bg-sky-200 shadow-lg rounded">
                    <img className="m-6 object-center h-[150px]" src={volunteers3} alt="" />
                    <p className="text-blue-950 font-bold m-6 mt-8 italic">{name}</p>
                    <p className="text-blue-950 mx-6 my-3">Organization: {organization}</p>
                    <p className="text-blue-950 mx-6 my-3">Description: {description}</p>
                    <p className= "text-blue-950 mx-6 my-3">Date and time: {date} at {time}</p>
                    <p className= "text-blue-950 mx-6 my-3">Place: {place}</p>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mx-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => window.location.href = linkToWeb}>
                        Join now!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindOpps
