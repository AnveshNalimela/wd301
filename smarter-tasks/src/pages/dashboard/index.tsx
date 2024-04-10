import React from "react";

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    window.location.href = "/signin";
    console.log("Log out Succesfully and user session Deleted");
  };
  const data = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  console.log(userData.name);
  return (
    <>
      {" "}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-3xl font-bold ml-10">Smarter-Tasks</div>
        <button
          onClick={handleLogout}
          id="logout-link"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>
      <div className=" justify-start w-1/4 h-screen m-7 rounded bg-gray-100">
        <h1 className="text-3xl font-bold text-center mt-3 py-3 text-gray-800 mb-8">
          User Details
        </h1>
        <div className="mt-10 px-10">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <p className="text-gray-900">{userData.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <p className="text-gray-900">{userData.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              ID:
            </label>
            <p className="text-gray-900">{userData.id}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
