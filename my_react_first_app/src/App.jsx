
/*
//Example 1 :Using arrays
function App()
{
const cities = ['hyderabad','mumbai','gujarat','chennai'];
return(
         <>
          <h1>popular cities...</h1>
          <p>cities..,{cities}</p>
          <p>First City...{cities[0]}</p>
          <p>Last city...{cities[cities.length-1]}</p>
          <p>cities length...{cities.length}</p>
  
         </>
)
}
export default App;

//Example 2:Array using Map
function App(){
  const cities = ['hyderabad','mumbai','gujarat','chennai'];
  //Here making every element as list items ,add the data wuth key to every list item
  const listItems = cities.map((city,index)=> 
                                (<li key={index}>{city}</li>)
                               )

return(
        <>
        <h1>popular cities..</h1>
        <ol>{listItems}</ol>




        </>
)

}export default App;

function App(){
const books = [
  {id:1001,name:'1984',author:'george'},
  {id:1002,name:"core java",author:"ratan"},
  {id:1003,name:"oops",author:"KB"}
];
  const bookItems = books.map(book=>
  (<li key={book.id} style={{color:'green'}}>ID:{book.id},Name:{book.name},Author:{book.author}</li>)
  )

  return(
    <>
    <h1 style={{color:'blueviolet'}}>Books List</h1>
    <ul>{bookItems}</ul>
    </>
  )
}
export default App;

function App(){

const items=[
  {id:1001,name:'onion',category:'veg'},
  {id:1002,name:'chicken',category:'nonveg'},
  {id:1003,name:'tomato',category:'veg'},
  {id:1004,name:'fish',category:'nonveg'},
];

const itemsList = items.map(item => 
<li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>ID:{item.id},Name:{item.name},category:{item.category}</li>)

return(
        <>
        <h1>List of items</h1>
        <ul>{itemsList}</ul>
        </>


)
}export default App;
*/
function App(){
  const items = [
{title:'cabbage',cate:'veg',id:1},
{title:'chicken',cate:'non-veg',id:2},
{title:'Garlic',cate:'veg',id:3},
{title:'Beef',cate:'non-veg',id:4},
{title:'Fish',cate:'non-veg',id:5},
{title:'Spinach',cate:'veg',id:6},
];


const vegItems = items.filter((item)=>item.cate=='veg');
const nonvegItems = items.filter((item)=>item.cate=='non-veg')
/*const itemsList = items.map(item => 
  <li key={items.id} style={{color:item.cate=='veg'?'green':'red'}}>ID:{items.id},Name:{items.name},category:{items.cate}</li>)*/
    // Map for displaying all items with proper color coding
    const itemsList = allItems.map((item) => (
      <li key={item.id} style={{ color: item.cate === 'veg' ? 'green' : 'red' }}>
        ID: {item.id}, Name: {item.title}, Category: {item.cate}
      </li>
    ));

return(
      <>
  <h1> All Items</h1>
  <ul> {vegItems.length>0?itemsList:'veg items not available'}</ul>
  <>
      {/* Show list for non-veg items */}
      <h2>Non-Veg Items</h2>
      <ul>{nonvegItems.length > 0 ? nonvegItems.map(item => (
        <li key={item.id} style={{ color: 'red' }}>
          ID: {item.id}, Name: {item.title}
        </li>
      )) : 'No non-veg items available'}</ul>
      
     </>
)
}export default App;