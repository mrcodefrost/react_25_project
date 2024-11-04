import Tabs from "./Tabs"



function RandomComponent() {

    return <div>Random Content</div>
}

const TabTest = ({tabsContent, onChange}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabs = [
        {
            label : 'Tab 1',
            content : <div>Content 1</div>
        },
        {
            label : 'Tab 2',
            content : <div>Content 2</div>
        },
        {
            label : 'Tab 3',
            content : <RandomComponent/>
        },
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }


  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}
export default TabTest