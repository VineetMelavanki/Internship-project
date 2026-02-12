const{CallLLM}=require("../utils/callLLM")

async function ValidatorAgent(plan,code){
    const messages=[
        {role:"system",content:"You are a code reviever and QA expert"},
        {role:"user",content:`
            Code:
            ${code}
            
            Plan:
            ${plan}`}
        ]; 
    return await CallLLM(messages,300);
}
module.exports={ValidatorAgent};