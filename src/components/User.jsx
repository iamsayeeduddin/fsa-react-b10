import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    let inv = setInterval(() => console.log("1"), 2000);
    fetch(`https://api.github.com/users/${params.username}`)
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setData(res2);
      })
      .catch((err) => console.log(err));

    return () => {
      clearInterval(inv);
    };
  }, []);

  return (
    <div className="w-full h-full mt-8 flex justify-center items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex gap-5 my-4">
          <img src={data?.avatar_url} className="w-8 h-8 rounded-full" />
          <span>{data?.name || data?.login}</span>
        </div>
        <a href="#">
          <h5 className="mb-2 text-md text-justify font-semibold tracking-tight text-gray-900">{data?.bio || "No Bio Found!"}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">{data?.location}</p>
        <a href={data?.html_url} className="inline-flex font-medium items-center text-blue-600 hover:underline">
          Visit my Github Profile
          <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default User;
