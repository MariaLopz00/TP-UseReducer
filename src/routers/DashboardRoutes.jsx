import { Route, Routes } from "react-router-dom"
import { Admin } from "../pages/components/admin"
import { Todo } from "../pages/components/todo"
import { Users } from "../pages/components/users"
import { NavBar } from "../ui/NavBar"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}
