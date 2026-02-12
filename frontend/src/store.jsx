import {create} from "zustand";

const userUIgeneratorStore=create((set)=>({
    prompt:"",

    code:"",
    plan:"",
    explaination:"",
    validation:"",

    codeHistory:[],

    loading:false,

    setPrompt:(prompt)=>set({prompt}),
    setPlan:(plan)=>set({plan}),

    setCode:(code)=>
        set((state)=>({
            code,
            codeHistory:[...state.codeHistory,code],
        })),
    setExplaination:(explaination)=>set({explaination}),
    setValidation:(validation)=>set({validation}),
    setLoading:(loading)=>set({loading}),

    rollback:()=>
        set((state)=>{
            if(state.codeHistory.length < 2)
            {
                return state;
            }
            const previous=state.codeHistory[state.codeHistory.length-2];
            return{
                code:previous,
                codeHistory:state.codeHistory.slice(0,-1),
            }
        })
}));

export default userUIgeneratorStore;