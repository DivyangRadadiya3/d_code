export default function ThemeSet(props) {
    return (
        <>
            <div className="head">
                { props.Name === 'dark-theme' ?
                    <button onClick={() => { props.onClick() }}>Light_mode</button> :
                    <button onClick={() => { props.onClick() }}>Dark_mode</button>
                }
            </div>
        </>
    )
};
