import local from "../../utils/local";

function getdata() {
    return function (dispatch) {
        setTimeout(() => {
            let data = local.getdata();
            console.log(data);
            
            data = data.map(e=>{
                e.checked = false;
                return e;
            })
            dispatch({ type: "init", payload: data })
        }, 500);
    }
}

function setdata(e) {
    return function (dispatch) {
        setTimeout(() => {
            local.updatecar(e);
            dispatch({ type: "update", payload: e })
        }, 300);
    }
}


function selectdata(e) {
    return function (dispatch) {
        dispatch({ type: "update", payload: e })
    }
}


function selectAll(all){
    console.log(all);
    return function (dispatch){
        dispatch({
            type:'selectall',
            payload:all
        })
    }
}

export { getdata, setdata, selectdata, selectAll}