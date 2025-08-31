
function Statistics(props) {

    return (
        <>
            <p>Good: {props.good}</p>
            <p>Neutre: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {(props.good + props.neutral + props.bad)}</p>
            <p>Average: {(props.good + props.neutral + props.bad) / 3}</p>
            <p>Positive: {(props.good) / 100}</p>
        </>
    )
}
export default Statistics 