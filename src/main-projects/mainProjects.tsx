import './mainStyle.css';
import App from '../siteApp/App';
import {MyProjectsData} from '../siteApp/appData';
import Slider from '../slideHeader/slider';

function MyProjects() {
    let Apps = MyProjectsData();

    return (
        <>
            <Slider
            />
            <div className='projects--category main darkSwitchBack darkSwitchBorder darkSwitchColor'>
                <h2 id='myProjects'>Main projects</h2>
            </div>

            <div className='project darkSwitchColor'>
                {Apps.map((item) => (
                <div className='project-item project-item-main darkSwitchBack darkSwitchBorder' key={item.id}>
                <App {...item} />
                </div>

                ))}
            </div>
        </>
    );
}

export default MyProjects;