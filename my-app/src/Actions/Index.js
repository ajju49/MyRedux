// here in actions.js , we define what are the actions

export const incNumber = (num) => {
    return {
        type: "INCREMENT" ,   //now in reducer we have to explain what is this action (in Uppdown.js)
        payload: num
    }
}

export const decNumber = (num) =>{
    return {
        type: "DECREMENT"  ,  //now in reducer we have to explain what is this action (in Uppdown.js)
        payload: num
    }
}
export const mulNumber = (num) =>{
    return {
        type: "MULTI"  ,  //now in reducer we have to explain what is this action (in Uppdown.js)
        payload: num
    }
}

export const divNUM = (num) => {
    return{
        type : "div" ,
        payload : num   
    }
}