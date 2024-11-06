import axios from "axios";
import { useEffect, useState } from "react";

function UserFilter() {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=50")
      .then((res) => {
        setUserList(res.data.results);
        setFilteredData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter) {
      const arr = userList.filter(
        (user) =>
          user.name.first.toLowerCase().includes(filter.toLowerCase()) ||
          user.name.last.toLowerCase().includes(filter.toLowerCase()) ||
          user.location.city.toLowerCase().includes(filter.toLowerCase()) ||
          user.location.country.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(arr);
    } else {
      setFilteredData(userList);
    }
  }, [filter]);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My reviews</h2>
            <div className="mt-6 sm:mt-0">
              <label for="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Select review type
              </label>
              <input value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.length ? (
                filteredData.map((user, idx) => (
                  <div key={idx} className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                    <dl className="md:col-span-3 order-3 md:order-1">
                      <dt className="sr-only">Full Name:</dt>
                      <dd className="text-base font-semibold text-gray-900 dark:text-white">
                        <a href="#" className="hover:underline">
                          {user?.name?.title} {user?.name?.first} {user?.name?.last}
                        </a>
                      </dd>
                    </dl>

                    <dl className="md:col-span-6 order-4 md:order-2">
                      <dt className="sr-only">Location:</dt>
                      <dd className=" text-gray-500 dark:text-gray-400">
                        {user?.location?.city}, {user?.location?.country}
                      </dd>
                    </dl>

                    <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                      <img src={user?.picture?.large} className="w-12 h-12 rounded-full" alt={user?.name?.title} />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No Records Matched!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserFilter;
