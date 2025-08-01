function InlineStyleCSS() {
    const cardStyle = {
        border: "1px solid #cccccc3b",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px",
        padding: "10px"
    }

    return (
        <>
            <div style={{ color: 'red', backgroundColor: 'white', fontSize: '50px', borderRadius: '10px' }}>Hello World</div>
            <div style={{ display: "flex" }}>
                <div style={{ cardStyle }}>
                    <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                    <div style={{ padding: '5px' }}>
                        <h4>Sushil Thakur</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={{ cardStyle }} >
                    <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                    <div style={{ padding: '5px' }}>
                        <h4>Sushil Thakur</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={{ display: "flex flexWrap" }}>
                    <div style={{ cardStyle }}>
                        <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                        <div style={{ padding: '5px' }}>
                            <h4>Sushil Thakur</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div style={{ cardStyle }} >
                        <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                        <div style={{ padding: '5px' }}>
                            <h4>Sushil Thakur</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div style={{ display: "flex flexWrap" }}>
                        <div style={{ cardStyle }}>
                            <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                            <div style={{ padding: '5px' }}>
                                <h4>Sushil Thakur</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div style={{ cardStyle }} >
                            <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                            <div style={{ padding: '5px' }}>
                                <h4>Sushil Thakur</h4>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div style={{ display: "flex flexWrap" }}>
                            <div style={{ cardStyle }}>
                                <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                                <div style={{ padding: '5px' }}>
                                    <h4>Sushil Thakur</h4>
                                    <p>Software Developer</p>
                                </div>
                            </div>
                            <div style={{ cardStyle }} >
                                <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                                <div style={{ padding: '5px' }}>
                                    <h4>Sushil Thakur</h4>
                                    <p>Software Developer</p>
                                </div>
                            </div>
                            <div style={{ display: "flex flexWrap" }}>
                                <div style={{ cardStyle }}>
                                    <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                                    <div style={{ padding: '5px' }}>
                                        <h4>Sushil Thakur</h4>
                                        <p>Software Developer</p>
                                    </div>
                                </div>
                                <div style={{ cardStyle }} >
                                    <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                                    <div style={{ padding: '5px' }}>
                                        <h4>Sushil Thakur</h4>
                                        <p>Software Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InlineStyleCSS;