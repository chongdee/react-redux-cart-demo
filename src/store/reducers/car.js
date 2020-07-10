function car(state=[],{type,payload}){
    switch(type){
        case 'init':
            return [...payload];
        case 'update':
            let newstate = state.map(e=>{
                if(e.id===payload.id){
                    let obj =  { ...e, ...payload }
                    return obj
                }else{
                    return e
                }
            })
            return [...newstate];
        case 'selectall':
            let newdata = state.map(e=>{
                e.checked=payload;
                return e;
            })
            return [...newdata]
        default:
            return state;
    }
}

export default car;