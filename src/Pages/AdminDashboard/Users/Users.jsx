import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";
const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });
  //   console.log(users);

  return (
    <div>
      <div className="flex items-center justify-between p-4 gap-6">
        <h5 className="text-xl font-bold text-black">All Users</h5>
        <h5 className="text-xl font-bold text-black">
          Total Users: {users.length}
        </h5>
      </div>

      {/*----------Items--------Added-------Table-----------*/}
      <div div className="w-full p-4">
        <div className="overflow-x-auto ">
          <table className="table table-auto">
            {/*-------------head-------------*/}
            <thead className="bg-[#fa4604] text-white text-xl w-full">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*--------Row------1-----By-----Tablle------body-----*/}
              {users.map((item, index) => (
                <tr key={index}>
                  <td className="text-black text-xl">{index + 1}</td>
                  <td className="text-[15px] text-black">{item.name}</td>
                  <td className="text-[15px] text-black">{item.email}</td>
                  <td className="text-[15px] text-black">
                    <button className="btn bg-sky-800 border-0">
                      <FaUsers className="text-2xl text-white" />
                    </button>
                  </td>
                  <th>
                    <button className="btn bg-[#fa4604] border-0">
                      <i className="fa-solid fa-trash text-2xl text-white "></i>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
