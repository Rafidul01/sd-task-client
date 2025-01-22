import { createContext, useState } from "react";

export const RouteContext = createContext();
const RouteProvider = ({children}) => {
    const [currentRoute, setCurrentRoute] = useState(null);

    return (
        <RouteContext.Provider value={{currentRoute, setCurrentRoute, hello: "world"}}>
            {children}
        </RouteContext.Provider>
    );
};

export default RouteProvider;