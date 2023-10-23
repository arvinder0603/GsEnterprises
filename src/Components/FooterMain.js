import React from 'react'
import { Link } from 'react-router-dom'

const FooterMain = () => {
    return (
        <footer className="bg-blue-100/80 font-sans dark:bg-gray-900 mt-12">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/products"> <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p></Link>
                            <Link to="/products"> <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">About us</p></Link>

                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Gs Enterprises</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <h1 className='  text-[16px]  '>
                                GS Enterprises
                                <br />
                                GSTIN: 06CKBPS7206R1ZK
                                <br />
                                A/c No: 41785306484
                                <br />
                                IFSC:SBIN0014633
                                <br />
                                State Bank of India
                                <br />
                                gsenterprises876@gmail.com

                            </h1>
                        </div>
                    </div>

                    <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Contact Us </p>
                        <h1 className='text-[16px]  mt-2 '>
                            Mr Gurpreet singh
                            <br />
                            +91 8999999129

                            <br />
                            +91 9896388796
                        </h1>
                    </div>

                </div>



                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div> */}

                   

                </div>
                <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2023 Gs Enterprises. All rights reserved.</p>

            </div>

        </footer>
    )
}

export default FooterMain