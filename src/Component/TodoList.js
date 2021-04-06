import React , { useState } from 'react';

const TodoList = () => {
        const myBioData = [
            {
                id : 0,
                myName : 'Anjali Rai',
                age : 26
            } , {
                id : 1,
                myName : 'Vidhya Rai',
                age : 16
            }, {
                id : 2,
                myName : 'Vedangi Sharma',
                age : 20
            }
    
        ]
        const[myArray,setMyArray] = useState( myBioData );

        const removeArray = () => {
            setMyArray([]);
        }
        const removeEle = (id) => {
            const myNewArray = myArray.filter((currElem) => {
                return id != currElem.id;
            })
            setMyArray(myNewArray);
        }
        return (
        <>
           {
               myArray.map( (currEle) => {
                   return (
                    <h1 className = "h1style" key = {currEle.id} >
                    Name : {currEle.myName} & 
                    Age : {currEle.age} 
                    <button className = "btnremove" 
                    onClick = { () => removeEle(currEle.id)}>remove</button>
                    </h1> 
                   ) })
               
           }
                
            
        <button className ="btn" onClick = {removeArray} >RemoveAll</button>
        </>
    )
}

export default TodoList;