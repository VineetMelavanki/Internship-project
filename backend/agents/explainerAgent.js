const {callLLM} =require("../utils/callLLM");
async function explainerAgent(code){
    const messages=[
        
            {role:"system",content:"You are a frontent expert and teacher"},
            {role:"user",content:`Explain this simple react components in simple terms using fixed components only :\n${code}`}    
    ];
    return await callLLM(messages,600);
}
module.export={explainerAgent};