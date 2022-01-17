const initialState= 100;

const changeTheNumber = (state= initialState, action) => {
    switch (action.type) {   //to chk what is type of input we get
        case "INCREMENT": return state + action.payload; // here we want to increase no by 5 so we added payload in Incnum [folder= actions, file = index.js]
        case "DECREMENT": return state - action.payload;
        case "MULTI": return state * action.payload;
        case "div": return state / action.payload;
      
        default : return state;
    }
}

export default changeTheNumber;


// const [state, setstate] = useState(initialState)

// const [state, dispatch] = useReducer(reducer, initialState, )