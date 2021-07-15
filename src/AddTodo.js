function AddTodo({triggerAddTodo}){
    return (
        <div className="addtodo" onClick={triggerAddTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77">
            <g id="Plus_Icon" data-name="Plus Icon" transform="translate(-662 -387)">
                <rect id="Rectangle_10" data-name="Rectangle 10" width="15" height="77" transform="translate(693 387)" fill="#8000ff"/>
                <rect id="Rectangle_11" data-name="Rectangle 11" width="15" height="77" transform="translate(739 418) rotate(90)" fill="#8000ff"/>
            </g>
            </svg>


        </div>
    )
}

export default AddTodo;