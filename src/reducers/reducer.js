export const initialState = [
    {
    item: "Finish reducer todo assignment",
    completed: 'false',
    id: 1
    }
];

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            const newItem = {
                item: action.payload,
                id: Date.now(),
                completed: false
            }
            return{
                 ...state, newItem
            };


        default:

            return state;
    }

}