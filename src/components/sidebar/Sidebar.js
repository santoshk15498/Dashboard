import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    {/* <img src={logo} alt="logo"></img> */}
                    <h1>SudoFire</h1>
                </div>
                {/* <button id="sidebarIcon" onClick={() => closeSidebar()}>&#9776;</button> */}
                <i className="fa fa-home" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">User Profile</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Table List</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Settings</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake"></i>
                    <a href="#">Contacts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;