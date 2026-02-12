const{codeGeneratorAgent}=require("./agents/codeGeneratorAgent");
const {explainerAgent}=require("./agents/explainerAgent");
const{plannerAgent}=require("./agents/plannerAgent");
const{ValidatorAgent}=require("./agents/validatorAgent");

async function generateui(req,res)
{
    try{
        const{prompt}=req.body;
        if(!prompt || prompt.length<5)
        {
            return res.status(401).json({msg:"Prompt must be of atleast 5 characters ",success:false});
        }
        const plan= await plannerAgent(prompt);
        const code= await codeGeneratorAgent(plan);
        const explaination=await explainerAgent(code);
        const validation=await ValidatorAgent(plan,code);
        
        return res.json({plan,code,explaination,validation});
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({msg:"Cannot generate UI"});
    }
}
module.exports={generateui};