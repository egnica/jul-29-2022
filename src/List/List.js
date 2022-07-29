const List = (props) => {

    const userObject = props.objectTransfer;

    console.log(userObject);

    return(
        <div>
            <h3>Child Render:</h3>
           {
               userObject.person.map(
                   (item, index) => 
                   <div key={index}>
                       <p>{item.name}</p>
                       <p>{item.age}</p>
                       <p>{item.years}</p>
                   </div>
               )
           }


        </div>
    )
}
export default List;