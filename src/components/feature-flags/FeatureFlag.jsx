import { useContext } from 'react';
import LightDarkMode from '../light-dark-mode/LightDarkMode';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import { FeatureFlagsContext } from './context/ContextFeatureFlag';

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },

        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe/>
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if(loading) {
        return <h1>Loading Data, Please wait ....</h1>
    }

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(
                componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null
            )
        }
    </div>


}