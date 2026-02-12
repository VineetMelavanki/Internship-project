require('dotenv').config();
const{Configuration,OpenAIApi} =require("openai")

const openai=new OpenAIApi(new Configuration({
    apikey:process.env.OPENAI_API_KEY,
}));

async function CallLLM(messages,max_token=800)
{
    const response=await openai.chat.completions.create({
        model:"gpt-4",
        messages,
        max_token,
    });
    return response.choice[0].messages.content.trim();
}

module.exports={CallLLM};