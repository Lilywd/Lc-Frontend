import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">

                <div
                    className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-400 pt-16 dark:border-gray-800 md:grid-cols-4 lg:grid-cols-6"
                >
                    <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">

                        <div className="mx-automax-w-md sm:ms-0">


                            <form >
                                <div
                                    className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
                                >
                                    <label for="email" className="sr-only">Email</label>

                                    <input
                                        className="w-full border border-gray-400 bg-white px-3 py-1  dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                        type="email"
                                        placeholder="Enter your email"
                                    />

                                    <p
                                        className="text-center leading-relaxed text-gray-500 dark:text-gray-400 ltr:sm:text-left rtl:sm:text-right"
                                    >
                                        Copyright &copy; 2024. All rights reserved.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            About Us
                        </p>
                        <hr className="border border-gray-400 my-2"/>
                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Company History
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Meet the Team
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Employee Handbook
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Our Services
                        </p>
<hr className="border border-gray-400 my-2"/>
                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Web Development
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Web Design
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Marketing
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Google Ads
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Resources
                        </p>
<hr className="border border-gray-400 my-2"/>
                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Online Guides
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Conference Notes
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Forum
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Downloads
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Upcoming Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Helpful Links
                        </p>
<hr className="border border-gray-400 my-2"/>
                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    FAQs
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/"
                                >
                                    Support
                                </a>
                            </li>

                        </ul>
                    </div>


                </div>

            </div>
        </footer>
    )
}
