import SiderbarMenu from '@/Components/Template/Sidebar-menu.jsx'

export default function Sidebar({rol, number_tasks_unassigned, number_tasks_process}) {

    //------------------------------------------------------------------------------------------------------------------> INIT SIDEBAR
    // START SIDEBAR
    $(function () {
        "use strict";
        $("#main-wrapper").AdminSettings({
            Theme: false, // this can be true or false ( true means dark and false means light ),
            Layout: "vertical",
            // IS HERE //
            NavbarBg: "skin6", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
            SidebarType: "mini-sidebar", // You can change it full / mini-sidebar / iconbar / overlay
            SidebarColor: "skin6", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
            SidebarPosition: true, // it can be true / false ( true means Fixed and false means absolute )
            HeaderPosition: true, // it can be true / false ( true means Fixed and false means absolute )
        });

        $("#sidebarnav a").on("click", function (e) {
            // $("#sidebarnav ul").removeClass("in");
            $(this).next("ul").addClass("in");
        });
    });

    // START SIDEBAR TOGGLER
    $(".sidebartoggler").on("click", function () {
        $("#main-wrapper").toggleClass("mini-sidebar");
        if ($("#main-wrapper").hasClass("mini-sidebar")) {
            $(".sidebartoggler").prop("checked", !0);
            $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
        } else {
            $(".sidebartoggler").prop("checked", !1);
            $("#main-wrapper").attr("data-sidebartype", "full");
        }
    });

    //------------------------------------------------------------------------------------------------------------------> INIT FIXED HEADER
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $(".app-header").addClass("fixed-header");
        } else {
            $(".app-header").removeClass("fixed-header");
        }
    });

    return (
        <div>
            <aside className="left-sidebar">
                {/*Sidebar scroll*/}
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href={route('home')} className="text-nowrap logo-img">
                            <img src="assets/images/svg/logo.svg" className="dark-logo" width="37" alt="" />
                        </a>
                        <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8 text-muted"></i>
                        </div>
                    </div>
                    {/*Sidebar navigation*/}
                    <SiderbarMenu rol={rol} number_tasks_unassigned={number_tasks_unassigned} number_tasks_process={number_tasks_process}/>
                </div>
            </aside>
        </div>
    );
}
