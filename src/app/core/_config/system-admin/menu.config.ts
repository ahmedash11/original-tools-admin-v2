export class MenuConfig {
  public defaults: any = {
    header: {
      self: {},
      items: [
        {
          title: 'Pages',
          root: true,
          'icon-': 'flaticon-add',
          toggle: 'click',
          'custom-class': 'kt-menu__item--active',
          alignment: 'left'
          // submenu: []
        },
        {
          title: 'Features',
          root: true,
          'icon-': 'flaticon-line-graph',
          toggle: 'click',
          alignment: 'left'
          // submenu: []
        },
        {
          title: 'Apps',
          root: true,
          'icon-': 'flaticon-paper-plane',
          toggle: 'click',
          alignment: 'left'
          // submenu: []
        }
      ]
    },
    aside: {
      self: {},
      items: [
        {
          title: 'Products Managment',
          icon: 'fas fa-toolbox',
          submenu: [
            {
              title: 'Products',
              icon: 'fas fa-tools',
              bullet: 'line',
              page: '/products/list'
            },
            {
              title: 'Brands',
              icon: 'fas fa-copyright',
              bullet: 'line',
              page: '/products/brands'
            },
            {
              title: 'Categories',
              icon: 'fas fa-stream',
              bullet: 'line',
              page: '/products/categories'
            },
            {
              title: 'Subcategories',
              icon: 'fas fa-list-alt',
              bullet: 'line',
              page: '/products/subcategories'
            },
            {
              title: 'Sections',
              icon: 'fab fa-buffer',
              bullet: 'line',
              page: '/products/sections'
            },
            {
              title: 'Tags',
              icon: 'fas fa-tags',
              bullet: 'line',
              page: '/products/tags'
            },
            {
              title: 'Offers',
              icon: 'fas fa-percentage',
              bullet: 'line',
              page: '/products/offers'
            },
            {
              title: 'Ads',
              icon: 'fab fa-adversal',
              bullet: 'line',
              page: '/products/ads'
            }
          ]
        },
        {
          title: 'Orders Managment',
          icon: 'fas fa-boxes',
          submenu: [
            {
              title: 'Pending Orders',
              icon: 'fas fa-truck-loading',
              bullet: 'line',
              page: '/orders/Pending'
            },
            {
              title: 'Completed Orders',
              icon: 'fas fa-check-square',
              bullet: 'line',
              page: '/orders/Completed'
            },
            {
              title: 'Requests',
              icon: 'fas fa-window-restore',
              bullet: 'line',
              page: '/orders/requests'
            }
          ]
        },
        {
          title: 'Users Managment',
          icon: 'fa fa-users',
          submenu: [
            {
              title: 'Customers',
              icon: 'fas fa-user-friends',
              bullet: 'line',
              page: '/users/customers'
            },
            {
              title: 'Merchants',
              icon: 'fas fa-people-carry',
              bullet: 'line',
              page: '/users/merchants'
            }
          ]
        }

        // {
        //   title: 'Users Managment',
        //   icon: 'fa fa-users',
        //   bullet: 'line',
        //   page: '/users'
        // }
      ]
    }
  };

  public get configs(): any {
    return this.defaults;
  }
}
