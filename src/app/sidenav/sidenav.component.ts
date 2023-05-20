import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ngOnInit() {
  }

  public isSearchBarOpen:boolean = false;
  public showSearchInput:boolean= true


  public openSidebar: boolean = true;

  public menuSidebar = [
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
          link: '/dashboard2'
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
          link: "/register",
        },
        {
          link_name: " Forget Password",
          link: "/forgotpassword",
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
          link: "mailbox",
        }, {
          link_name: "Chat",
          link: "chat",
        }, {
          link_name: "FAQ",
          link: "faq",
        }
      ]
    }, {
      link_name: "Forms",
      link: null,
      icon: "bx bx-food-menu",
      sub_menu: [
        {
          link_name: "Elements",
          link: "elements",
        }, {
          link_name: "Widgets",
          link: "widgets",
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
          link_name: "Chart Boxes",
          link: "chartbox",
        }, {
          link_name: "Profile Box",
          link: "profilebox",
        }, {
          link_name: "Events",
          link: "events",
        }
      ]
    },  {
      link_name: "Charts",
      link: "/tables",
      icon: "bx bx-bar-chart-alt",
      sub_menu: [
        {
          link_name: "Chart.Js",
          link: "chartjs", 
        },{
          link_name: "Apex Charts ",
          link: "apexcharts",
        }
      ]
    }, {
      link_name: "Maps",
      link: "/maps",
      icon: "bx bxs-map-pin",
      sub_menu: []
    }
  ]


  public showSubmenu(itemEl: HTMLElement):void{
    itemEl.classList.toggle("showMenu");
  }

  public isExpanded:boolean = false;

  public toggleSidebar():void{
    this.isExpanded = !this.isExpanded;
  }

}
