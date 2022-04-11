const TodoItem = (props) => {
    return (
        <>
            <p>{props.data.title} 
                <button onClick={() => props.toggle(props.data.id)}>{props.data.status}</button>
            </p>
        </>
    )
}

export {TodoItem}