const {CallLLM} =require("../utils/callLLM")

async function codeGeneratorAgent(plan){
    const messages=[
        {role :"system", content:"You are a react developer"},
        {role:"user",content:`
            Generate React code using only the following fixed components :
            Button ,Card,input,Table,Model,Sidebar,Navbar,Chart
            Follow this plan strictly:
            ${plan}`
        }
    ];
    return await CallLLM(Messages,1200);
}
module.exports={codeGeneratorAgent};