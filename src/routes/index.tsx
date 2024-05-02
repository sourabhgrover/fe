import { Outlet, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import Login from "../Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element:  (<DashboardLayout><Outlet /></DashboardLayout>),
      children: [
        { element: <Login />, index: true },
        // { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    
    },
  ]);