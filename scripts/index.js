
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

var dashboard_container = document.querySelector("#dashboard-container");
const setup_UI = (user) => {
    if (user) {
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item2 => item2.style.display = 'none');
        var dashboard_html = `
            <h3>Dashboard</h3><br>
            <div id="main-menu">
                <button id="speed-report-btn" class="btn blue lighten-3 z-depth-0">Reports : Speed</button><br><br>
                <button id="browser-report-btn" class="btn blue lighten-3 z-depth-0">Reports : Browsers</button>
            </div>

            <div id="speed-report" hidden>
                <button id="home-menu-btn-speed" class="btn blue ligten-3 z-depth-0">Home</button>
                <div id="speed-report-container">
                </div>
            </div>

            <div id="browser-report" hidden>
                <button id="home-menu-btn-browser" class="btn blue ligten-3 z-depth-0">Home</button>
                <div id="browser-report-container">
                <canvas id="browser_chart"></canvas>
                </div>
            </div>
        `
        dashboard_container.innerHTML = dashboard_html;

        var main_menu = document.querySelector("#main-menu");
        var speed_report = document.querySelector("#speed-report");
        var browser_report = document.querySelector("#browser-report");

        var speed_report_btn = document.querySelector("#speed-report-btn");
        speed_report_btn.addEventListener("click", (e) => {
            e.preventDefault();
            main_menu.toggleAttribute("hidden");
            speed_report.toggleAttribute("hidden");
        })

        var browser_report_btn = document.querySelector("#browser-report-btn")
        browser_report_btn.addEventListener("click", (e) => {
            e.preventDefault();
            main_menu.toggleAttribute("hidden");
            browser_report.toggleAttribute("hidden");
        })


        var menu_btn_speed = document.querySelector("#home-menu-btn-speed");
        menu_btn_speed.addEventListener("click", (e) => {
            e.preventDefault();
            main_menu.toggleAttribute("hidden");
            speed_report.setAttribute("hidden", true);
        })

        var menu_btn_browser = document.querySelector("#home-menu-btn-browser");
        menu_btn_browser.addEventListener("click", (e) => {
            e.preventDefault();
            main_menu.toggleAttribute("hidden");
            browser_report.setAttribute("hidden", true);
        })
    } else {
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item2 => item2.style.display = 'block');
        var login_html = `
            <h3>Login to view dashboard : test5@gmail.com , 123456</h3>
        `
        dashboard_container.innerHTML = login_html;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
   
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
})


const create_grid = (real_data) => {
    console.log(real_data);
    
    var data = [
        ["", "Test", "Test 4", "test 10"],
        ["row 1 test", "1", "2", "3"],
        ["row 2 test", "2", "4", "6"]
    ];

    var container = document.getElementById('speed-report-container');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true
    })
}

const create_chart = (real_data) => {
    var ctx = document.getElementById('browser_chart').getContext('2d');
    console.log(real_data);

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Test dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 20]
            }]
        },

        // Configuration options go here
        options: {}
    });
}
