import React from "react";
import Login from "./components/Login";
import AddRoleForm from "./components/AddRoleForm";
import RoleMenuMapperForm from "./components/RoleMenuMapperForm";
import { useState } from "react";
import User from "./components/User";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [roleMenuMapper, setRoleMenuMapper] = useState(false);
  console.log(user);
  return (
    <div className="bg-slate-50 h-screen flex flex-col items-center gap-6">
      <h1 className="text-center font-semibold text-3xl py-4">
        All the modal form to be used in the application
      </h1>
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-indigo-300 px-4 py-2 rounded-lg text-lg"
      >
        Add Role
      </button>
      {showModal && <AddRoleForm onClose={() => setShowModal(false)} />}

      {/* Button 2 */}
      <button
        onClick={() => setUser(!user)}
        className="bg-indigo-300 px-4 py-2 rounded-lg text-lg"
      >
        User
      </button>
      {user && <User onClose1={() => setUser(false)} />}

      {/* Button -3 : login form*/}
      <button
        onClick={() => setLogin(!login)}
        className="bg-indigo-300 px-4 py-2 rounded-lg text-lg"
      >
        Login
      </button>
      {login && <Login onClose={() => setLogin(false)} />}

      {/* Button 4: role menu mapper */}
      <button
        onClick={() => setRoleMenuMapper(!roleMenuMapper)}
        className="bg-indigo-300 px-4 py-2 rounded-lg text-lg"
      >
        Role Menu
      </button>
      {roleMenuMapper && (
        <RoleMenuMapperForm onClose={() => setRoleMenuMapper(false)} />
      )}
    </div>
  );
}

export default App;
