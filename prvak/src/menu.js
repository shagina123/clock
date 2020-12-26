import React from 'react'
import MenuList from './data'
class Menu extends React.Component{
    
   
        state={
            item:"",
      menu:MenuList.getData(),
      button:0
            }
      
        onItemChange=(event)=>{this.setState({item:event.target.value})}
        
            onSubmit=(event)=> {
       event.preventDefault();
    
      if(this.state.button==1){

                   this.setState({menu:MenuList.searchName(this.state.item)})
      }

     if(this.state.button==2){

                   this.setState({menu:MenuList.searchPrice(this.state.item)})
      }
            }    
            render(){
        return(
            <div>
                
                <form onSubmit={this.onSubmit}>
            <div className="container">
               
            <div className="row">
                <div className="col-6">
               
                   
                   <input type="text" className="form-control" id="item" placeholder="Enter" value={this.setState.item} onChange={this.onItemChange}></input><br></br>
                   
                   <button type="submit" value="name" name="Search" onClick={()=>(this.setState({button:1}))} class="btn btn-primary">Search By Name</button>
                   <button type="submit" value="price" name="Search2" onClick={()=>(this.setState({button:2}))} class="btn btn-primary">Search By Price</button>
                 
                   <h4 id="depres"></h4>
            
</div>
                </div>
            </div>
           </form>
                
                
                Menu items
            <table className='table table-bordered table-sm'>

                   <tr><th>Item</th><th>Amount</th></tr>
                   
        {this.state.menu.map(h=><tr><td>{h.name}</td><td>{h.price}</td></tr>)}
                   
               </table>
               </div>
        )
    } 
}
export default Menu