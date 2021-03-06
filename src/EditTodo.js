function EditTodo({triggerEditTodo, id}){
    return (
        <div className="todo__btn edit" onClick={() => {triggerEditTodo(id)}}>
            <svg id="Pencil" xmlns="http://www.w3.org/2000/svg" width="26.87" height="26.96" viewBox="0 0 26.87 26.96">
                <rect id="Rectangle_29" data-name="Rectangle 29" width="23" height="10" transform="translate(10.607 3.536) rotate(45)" fill="#e4fb04"/>
                <path id="Path_2" data-name="Path 2" d="M4726.375,202.979v-7.207l-7.028,7.207Z" transform="translate(-4699.504 -176.019)"/>
                <rect id="Rectangle_30" data-name="Rectangle 30" width="5.373" height="10" transform="translate(7.071 0) rotate(45)" fill="#777"/>
                <rect id="Rectangle_31" data-name="Rectangle 31" width="18.85" height="1" transform="translate(7.098 9.961) rotate(45)"/>
                <rect id="Rectangle_32" data-name="Rectangle 32" width="18.85" height="1" transform="translate(10.028 6.613) rotate(45)"/>
            </svg>
        </div>
            


    )
}
export default EditTodo;