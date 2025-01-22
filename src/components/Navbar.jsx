import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { RouteContext } from "../provider/RouteProvider";

const Navbar = () => {
  const [routes, setRoutes] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { setCurrentRoute } = useContext(RouteContext);

  useEffect(() => {
    axiosSecure
      .get("/navLinks")
      .then((data) => {
        console.log(data);
        setRoutes(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const navLink = (
    <>
      {routes.map((route, i) => (
        <li key={i} className="relative">
          {route.subnavs ? (
            //if there is subnavs then making it dropdown
            <>
              <details className="dropdown">
                <summary className="cursor-pointer">{route.name}</summary>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10">
                  {route.subnavs.map((subnav, j) => (
                    <li key={j}>
                      {subnav.routes ?
                      //if there is subnavs hane more sub options then making it dropdown
                      (
                        <>
                          <details className="dropdown">
                            <summary className="cursor-pointer">
                              {subnav.name}
                            </summary>
                            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10">
                              {subnav.routes.map((subSubNav, k) => (
                                <li key={k}>
                                  <Link to={`/contentPage/${subSubNav.category}/${subSubNav.type}`} onClick={() => setCurrentRoute(subSubNav)}>{subSubNav.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </>
                      ) : (
                        <>
                          <Link to={`/contentPage/${subnav.category}/${subnav.type}`} onClick={() => setCurrentRoute(subnav)}>{subnav.name}</Link>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </details>
            </>
          ) : (
            <>
              <Link to={`/contentPage/${route.category}/${route.type}`} onClick={() => setCurrentRoute(route)}>{route.name}</Link>
            </>
          )}
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Sirajganj Dairy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Card</a>
      </div>
    </div>
  );
};

export default Navbar;
