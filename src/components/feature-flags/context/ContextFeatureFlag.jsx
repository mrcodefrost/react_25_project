import { createContext, useEffect, useState } from "react";


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});


    async function fetchFeatureFlags() {
        try {
            const respone = await featureFlagsDataServiceCall
            console.log(respone);
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }


    useEffect(
        () => {

            fetchFeatureFlags();
        }, [])
    return (
        <FeatureFlagsContext.Provider value={{}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}