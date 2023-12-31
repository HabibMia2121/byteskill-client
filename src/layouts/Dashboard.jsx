import { FaHome } from "react-icons/fa";
import { FaBars, FaBookOpenReader, FaUserGraduate, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiDashboard3Fill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import useTeacherAdmin from "../hooks/useTeacherAdmin";
import loader from '../assets/loader.gif'
import { MdAddToQueue } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { loading } = useAuth();
        
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isTeacherAdmin, isTeacherLoading] = useTeacherAdmin();


    if (loading || isAdminLoading || isTeacherLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }


    return (
        <div className="">
            {/* side menubar */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col pt-8 lg:mx-8">
                    {/* Page content here */}
                    <div className=" grid justify-end mr-4 mb-4">
                        <label htmlFor="my-drawer-2" className="btn bg-[#9050cc] text-white drawer-button lg:hidden"><FaBars/></label>
                    </div>

                    {/* main content here */}
                    <div>
                        <Outlet />
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-6 text-lg font-semibold w-60 min-h-full bg-[#1C1E2A] text-white space-y-4">
                        {/* Sidebar content here */}

                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/admin' className='flex items-center gap-3'><RiDashboard3Fill className=" text-2xl" />Admin Dashboard</NavLink></li>

                                <li><NavLink to='/dashboard/teacherRequest' className='flex items-center gap-3'><VscGitPullRequestGoToChanges className=" text-2xl" /> Teacher Request</NavLink></li>

                                <li><NavLink to='/dashboard/allclasses' className='flex items-center gap-3'><LuGalleryVerticalEnd className=" text-2xl" /> All clesses</NavLink></li>

                                <li><NavLink to='/dashboard/users' className='flex items-center gap-3'><FaUsers className=" text-2xl" /> Users</NavLink></li>

                                <li><NavLink to='/dashboard/profile' className='flex items-center gap-3'><CgProfile className=" text-2xl" /> Profile</NavLink></li>
                                <hr />
                                <li><NavLink to='/' className='flex items-center gap-3'><FaHome className=" text-2xl" /> Home</NavLink></li>
                            </> : isTeacherAdmin ? <>
                                    <li><NavLink to='/dashboard/admin' className='flex items-center gap-3'><RiDashboard3Fill className=" text-2xl" />teacher Dashboard</NavLink></li>

                                    <li><NavLink to='/dashboard/addClass' className='flex items-center gap-3'><MdAddToQueue className=" text-2xl" /> Add Class</NavLink></li>

                                    <li><NavLink to='/dashboard/myClass' className='flex items-center gap-3'><FaUserGraduate className=" text-2xl" /> My Class</NavLink></li>


                                    <li><NavLink to='/dashboard/profile' className='flex items-center gap-3'><CgProfile className=" text-2xl" /> Profile</NavLink></li>
                                    <hr />
                                    <li><NavLink to='/' className='flex items-center gap-3'><FaHome className=" text-2xl" /> Home</NavLink></li>

                                </> : <>
                                        <li><NavLink to='/dashboard/admin' className='flex items-center gap-3'><RiDashboard3Fill className=" text-2xl" />Student Dashboard</NavLink></li>

                                        <li><NavLink to='/dashboard/myEnrollClass' className='flex items-center gap-3'><FaBookOpenReader className=" text-2xl" /> My enroll class</NavLink></li>

                                        <li><NavLink to='/dashboard/profile' className='flex items-center gap-3'><CgProfile className=" text-2xl" /> Profile</NavLink></li>

                                        <hr />
                                        <li><NavLink to='/' className='flex items-center gap-3'><FaHome className=" text-2xl" /> Home</NavLink></li>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
