
function DeleteTodo({handleDelete, id}){

    return (
        <div className="todo__btn delete" onClick={() => handleDelete(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28.451" height="30.696" viewBox="0 0 28.451 30.696">
            <g id="X" transform="translate(-15.505 -10.849)">
                <line id="Line_1" data-name="Line 1" y1="25.379" x2="22.46" transform="translate(18.5 13.5)" fill="none" stroke="red" strokeWidth="8"/>
                <path id="Path_1" data-name="Path 1" d="M0,0,17.7,19.808l4.086,4.571" transform="translate(18.5 14.5)" fill="none" stroke="red" strokeWidth="8"/>
            </g>
            </svg>
        </div>
        

    )
}
export default DeleteTodo;