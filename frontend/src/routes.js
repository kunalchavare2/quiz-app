import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import Layout from "./Layout/RootLayout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GuardedRoute from "./HOC/GuardedRoute/GuardedRoute";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import Home from "./components/Organisams/Home/Home";
import Quiz from "./components/Organisams/Quiz/Quiz";
import Topics from "./components/Organisams/Topics/Topics";
import SelectTopic from "./components/Organisams/SelectTopic/SelectTopic";
import MyExams from "./components/Organisams/MyExams/MyExams";
import LeaderBoard from "./components/Organisams/LeaderBoard/LeaderBoard";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "/home",

        element: (
          <GuardedRoute>
            <HomeLayout></HomeLayout>
          </GuardedRoute>
        ),
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "quiz",
            element: <Quiz />,
          },
          {
            path: "topics",
            element: <Topics />,
          },
          {
            path: "select",
            element: <SelectTopic />,
          },
          {
            path: "exams",
            element: <MyExams />,
          },
          {
            path: "leaderboard",
            element: <LeaderBoard />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes, { basename: "" });

export default router;
