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
          title: 'Brands',
          icon: 'fas fa-copyright',
          bullet: 'line',
          page: '/brands'
        },
        {
          title: 'Categories',
          icon: 'fas fa-stream',
          bullet: 'line',
          page: '/categories'
        },
        {
          title: 'Tags',
          icon: 'fas fa-tags',
          bullet: 'line',
          page: '/tags'
        },
        {
          title: 'Products',
          icon: 'fas fa-tools',
          bullet: 'line',
          page: '/products'
        },
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
