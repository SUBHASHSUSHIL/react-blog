import { useState } from "react";

function DynamicConditionalInlineStyle() {
    const [cardStyle, setcardStyle] = useState({
        border: "1px solid #cccccc3b",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px",
        padding: "10px"
    })

    const updateTheme = (bgColor, textColor) => {
        setcardStyle({ ...cardStyle, backgroundColor: bgColor })
    }

    return (
        <>
            <h1 style={{ color: 'red' }}>Dynamic and Conditional Inline Style CSS</h1>
            <button onClick={() => updateTheme('gray', 'green')}>Grey Theme</button>
            <button onClick={() => updateTheme('white', 'black')}>Default Theme</button>
            <div style={ cardStyle }>
                <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
                <div style={{ padding: '5px' }}>
                    <h4>Sushil Thakur</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </>
    )
}

export default DynamicConditionalInlineStyle;