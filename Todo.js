import DeleteTodo from './DeleteTodo'
// import EditTodo from './EditTodo';


function Todo({name, date, category, color, id, handleDelete, triggerEditTodo}){
    
    return (
        <div className="todo" style={{border: `4px solid ${color}`}}>
            

            {/* <EditTodo triggerEditTodo={triggerEditTodo} id={id}/> */}
            <DeleteTodo handleDelete={handleDelete} id={id}/>
            <h1 className="todo__title">{name}</h1>
            <div className="info date">
                <h4 className="info_title">Date</h4>
                <div className="info_box">{date}
                
                </div>
            </div>
            <div className="info category">
                <h4 className="info_title">Category</h4>
                <div className="info_box">{category}</div>
            </div>
            
        </div>
    )
}

export default Todo;