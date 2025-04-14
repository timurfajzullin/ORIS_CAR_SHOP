import '../Styles/App.css'
import "../Styles/SettingStyles.css"

function SettingsPage() {
    return (
        <div className="wrapper-container-info">
            <div style={{backgroundColor:'white', padding: '30px'}}>
                <h2>Settings</h2>
                <ul>
                    <li>My details</li>
                    <li>Profile</li>
                    <li>Password</li>
                    <li>Email</li>
                    <li>Notification</li>
                </ul>
                <div className="wrapper-container-top">
                    <h3>Profile</h3>
                    <p>Update your photo and personal details here.</p>
                </div>
                <div className="wrapper-container-bottom">
                    <div className="containers-inputs">
                        <div style={{width: '100%'}}>
                            <p>Live in</p>
                            <input  className="input-top" type='text'/>
                        </div>
                        <div style={{marginLeft: '20px', width: '100%'}}>
                            <p>Street Address</p>
                            <input className="input-middle" type='text'/>
                        </div>
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <p>Email Address</p>
                        <input className="input-top" type='text'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop:'30px'}}>
                        <div style={{width: '100%'}}>
                            <p>Date Of Birth</p>
                            <input style={{
                                marginTop: '5px',
                                width: '100%',
                                padding: '10px 15px',
                                borderRadius: '8px',
                                border: '2px solid #e9eaec'
                            }} type='text'/>
                        </div>
                        <div style={{marginLeft: '20px', width: '100%'}}>
                            <p>Gender</p>
                            <input style={{
                                marginTop: '5px',
                                width: '100%',
                                padding: '10px 15px',
                                borderRadius: '8px',
                                border: '2px solid #e9eaec'
                            }} type='text'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;