import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ngOnInit() {
  }



  isSearchBarOpen = false;
  showSearchInput = true


  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "bx bx bxs-home",
      sub_menu: [
        {
          link_name: 'Dashboard 1',
          link: '/dashboard'
        },
        {
          link_name: 'Dashboard 2',
          link: '/dashboard'
        }
      ]
    }, {
      link_name: "Pages",
      link: null,
      icon: "bx bx-notepad",
      sub_menu: [
        {
          link_name: " Login",
          link: "/login",
        }, {
          link_name: "Register",
          link: "Register",
        },
        {
          link_name: " Forget Password",
          link: "Forget ",
        },
      ]
    },
    {
      link_name: "Applications",
      link: "/cards",
      icon: "bx bxs-credit-card",
      sub_menu: [
        {
          link_name: "Mail Box",
          link: "Chart Boxes1",
        }, {
          link_name: "Chat",
          link: " Profile Box",
        }, {
          link_name: "FAQ",
          link: "data",
        }
      ]
    }, {
      link_name: "Forms",
      link: null,
      icon: "bx bx-food-menu",
      sub_menu: [
        {
          link_name: "Elements",
          link: "data3",
        }, {
          link_name: "Widgets",
          link: "/posts/login-form",
        },
      ]
    }, {
      link_name: "Forms",
      link: "/forms",
      icon: "bx bx-food-menu",
      sub_menu: []
    }, {
      link_name: "Boards",
      link: "/boards",
      icon: "bx bx-chalkboard",
      sub_menu: []
    }, {
      link_name: "Widgets",
      link: null,
      icon: "bx bxs-widget",
      sub_menu: [
        {
          link_name: "Data 5",
          link: "Chart Boxes1",
        }, {
          link_name: "Data",
          link: " Profile Box",
        }, {
          link_name: "Data 7",
          link: "data",
        }
      ]
    },  {
      link_name: "Charts",
      link: "/tables",
      icon: "bx bx-bar-chart-alt",
      sub_menu: [
        {
          link_name: "Chart.Js",
          link: "data", 
        },{
          link_name: "Apex Charts ",
          link: "data",
        }
      ]
    }, {
      link_name: "Maps",
      link: "/maps",
      icon: "bx bxs-map-pin",
      sub_menu: []
    }
  ]


  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
