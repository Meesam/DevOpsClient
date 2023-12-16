import AuthLayout from "../Layouts/AuthLayout";
import UnAuthLayout from "../Layouts/UnAuthLayout";

// Pages
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import CreateUser from "../Pages/CreateUser";
import ListUsers from "../Pages/ListUsers";
import { renderRoutes } from "./generate-routes";

export const routes = [
{
    layout: UnAuthLayout,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true,
      },
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/',
        isPublic: true,
      }
    ]
  },
{
    layout: AuthLayout,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/home'
      },
      {
        name: 'users',
        title: 'Users',
        hasSiderLink: true,
        routes: [
          {
            name: 'list-users',
            title: 'List of users',
            hasSiderLink: true,
            component: ListUsers,
            path: '/users'
          },
          {
            name: 'create-user',
            title: 'Add user',
            hasSiderLink: true,
            component: CreateUser,
            path: '/users/new'
          }
        ]
      }
    ]
  }
];

export const Routes = renderRoutes(routes);