import { createContext, useEffect, useState } from "react";


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});


    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            const respone = await featureFlagsDataServiceCall
            console.log(respone);
            setEnabledFlags(respone);  
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            throw new Error(error);
        }
    }


    useEffect(
        () => {

            fetchFeatureFlags();
        }, [])
    return (
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}