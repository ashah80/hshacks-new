import React from 'react'
import volunteer from './volunteers.jpg';
import volunteers from './volunteers-2.jpg';

function MainPage() {
  return (
    <div>
        <div>
            <div className="flex">
                <div className="flex justify-left">
                  <div className="text-center m-10 basis-3/4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text h-[150px]">Finding Volunteering Opportunities Just Became Easier!</h1>
                    <p className="mx-[70px] my-8 font-bold text-lg text-blue-950">Simply make an account, log in, and use your region to find volunteer opportunities near you! Navigate to the Find Opportunities page to find opportunities and sign up now!</p>
                  </div>
                </div>
                <div className="float-right">
                  <img src={volunteer} alt="" width="1300px" height="1300px" className="float-right"></img>
                </div>
            </div>
            <div className="flex">
              <div className="float-left">
                  <img src={volunteers} alt="" width="1000px" height="1200px" className="float-left"></img>
                </div>
                <div className="flex justify-right bg-gradient-to-r from-blue-500 to-blue-900">
                  <div className="text-center m-10 basis-3/4">
                    <h1 className="text-5xl font-bold bg-white text-transparent bg-clip-text h-[150px]">Organizations: Add Opportunities and get Volunteers!</h1>
                    <p className="mx-[70px] my-8 font-bold text-lg text-blue-950">Register as an organization and upload information about volunteer opportunities! Volunteers will flood in and answer your call!</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
      )
}

export default MainPage
