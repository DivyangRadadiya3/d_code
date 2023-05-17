export default function StateSearch(props) {

    return (
        <>
            <input
                type='text' name='search'
                className="sfilter"
                placeholder='Search By'
                onChange={props.onChange}
                value={props.value}
            />
        </>
    )
}