import React from 'react'
//hideModal
function OtherInput({change}){
    return (
        <input id="otherinput" type="text" name="category" placeholder="Category" onChange={change}/>
    )
}

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            date: "",
            category: "none",
            color: "#8000FF",
            error: {"name": false, "date":false, "category":false },
            isOtherSelected: false
        }
        this.submit = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.addOtherComponent = this.addOtherComponent.bind(this)
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState)
        console.log(this.state)
        if (
            (prevState.name !== this.state.name) || 
            (prevState.date !== this.state.date) || 
            (prevState.category !== this.state.category))
        {
            this.handleError()
            this.addOtherComponent()
        }
        
    }
    addOtherComponent(){ 
        console.log('added component')
        if (this.state.category === 'Other'){
            this.setState({isOtherSelected: true})
        } 
        // else {
        //     if (this.state.isOtherSelected === true)
        //     {
        //         this.setState({isOtherSelected: false})
        //     }
        // }
    }
    handleSubmit(e){
       
        e.preventDefault();
        let newError = this.state.error;
        if (this.state.name === ''){
            newError['name'] = true
            this.setState({error: newError})
        } else{
            newError['name'] = false
            this.setState({error: newError})
        }
        if (this.state.date === ''){
            newError['date'] = true
            this.setState({error: newError})
        } else{
            newError['date'] = false
            this.setState({error: newError})
        }
        console.log(this.state.category)
        if (this.state.category === 'none'){
            console.log('Category is none')
            newError['category'] = true
            this.setState({error: newError})
        } else{
            newError['category'] = false
            this.setState({error: newError})
        }
        console.log(this.state.error)
        var isAllGood = true;
        for (const [ key, value] of Object.entries(this.state.error)){
            console.log(key,value)
            if (value === true){
                isAllGood = false
                break;
            }
        }
        if (isAllGood === true){
            console.log('all goodf')
            this.setState({
                name: "",
                date: "",
                category: "none",
                color: "#8000FF"
            })
            this.props.handleAddTodo(this.state.name,this.state.date,this.state.category,this.state.color)
            this.props.hideModal();
        }
        // 
    }
    handleError(){
        let newError = this.state.error;
        console.log(this.state.name)
        if (this.state.name !== ''){
            newError['name'] = false
            this.setState({error: newError})
        } 
        if (this.state.date !== ''){
            newError['date'] = false
            this.setState({error: newError})
        }  
        if (this.state.category !== 'none'){
            newError['category'] = false
            this.setState({error: newError})
        }
    }
    handleNameChange(e){
        console.log('name changed')
        this.setState({name: e.target.value})
        
    }
    handleDateChange(e){
        this.setState({date: e.target.value})
        
    }
    handleCategoryChange(e){
        this.setState({category: e.target.value})
    }
    handleOtherCategoryChange(e){
        
        console.log(e.target.value)
        this.setState({category: e.target.value})
        console.log(this.state.isOtherSelected)
    }
    getName(){
        if (this.state.name === '') return 'New Todo'
        return (this.state.name);
    }
    render() {
        return (
            <aside className="modal" style={{border: `5px solid ${this.state.color}`}}>
                <form id="modal-form" onSubmit={this.handleSubmit}>
                    <h2 className="modal-title">{this.getName()}</h2>
                    <input 
                        type="color" 
                        name="colorSelector" 
                        id="colorSelector" 
                        value={this.state.color} 
                        onChange={(e) => this.setState({color: e.target.value})}/>
                    <div className="modal-container">
                        <div className="modal-info">
                            <label htmlFor="name" className="modal-info-name">Name</label>
                            <input 
                            className="modal-name-input" 
                            type="text" 
                            placeholder="Todo Name"
                            id="name" 
                            onChange={this.handleNameChange.bind(this)} />
                            {this.state.error["name"] && <div className="error">Do not leave this blank.</div>}
                            
                        </div>
                        <div className="modal-info">
                            <label htmlFor="date" className="modal-name" >Date</label>

                            <input 
                            className="modal-name-input" 
                            type="date" 
                            id="date" 
                            value={this.state.date} 
                            onChange={this.handleDateChange.bind(this)}/>
                            
                            {this.state.error["date"] && <div className="error">Do not leave this blank.</div>}         
                        </div>
                        <div className="modal-info">
                            <label htmlFor="categories" className="modal-name">Categories</label>
                            <select name="categories" id="categories" onChange={this.handleCategoryChange.bind(this)}>
                                <option value="none">--Select--</option>
                                <option value="Fun">Fun</option>
                                <option value="Academics">Academics</option>
                                <option value="Other">Other</option>
                                
                            </select>
                            {this.state.error["category"] && <div className="error">Do not leave this blank.</div>}
                            {this.state.isOtherSelected && <OtherInput change={this.handleOtherCategoryChange.bind(this)}/>}
                        </div>
                        <input id="modal-btn" type="submit" value="Done"/>
                    </div>
                    
                </form>
              
            </aside>
        )
    }
    
}
export default Modal;


