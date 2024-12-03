const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: true
}


function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {

        if (dummyApiResponse) {
            setTimeout(resolve(dummyApiResponse), 500);
        }
        else {
            reject('Some error occurred');
        }
    })
}


export default featureFlagsDataServiceCall;