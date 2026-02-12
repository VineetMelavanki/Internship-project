const {CallLLM} =require("../utils/callLLM")

async function plannerAgent(userPrompt)
{
    const messages=[
        {role:"system", content:"You are a UI/UX exprt and planner"},
        {role:"user", content:`Create a step-by-step plan for implementating this UI ${userPrompt}`}
    ];
    return await CallLLM(messages);
}

module.exports={plannerAgent};