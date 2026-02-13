const{codeGeneratorAgent}=require("../agents/codeGeneratorAgent")
const {explainerAgent}=require("../agents/explainerAgent");
const{plannerAgent}=require("../agents/plannerAgent");
const{ValidatorAgent}=require("../agents/validatorAgent");

async function generateui(req,res)
{
    try{
        const{prompt}=req.body;
        if(!prompt || prompt.length<5)
        {
            return res.status(401).json({msg:"Prompt must be of atleast 5 characters ",success:false});
        }
        const plan= await plannerAgent(prompt);
        const code= await codeGeneratorAgent(prompt,plan);
        const explanation=await explainerAgent(code);
        const validation=await ValidatorAgent(plan,code);
        
        return res.json({plan,code,explanation,validation});
    }catch(error)
    {
        console.log("Error details:", error.message);
        console.log("Error stack:", error.stack);
        return res.status(500).json({msg:"Cannot generate UI", error: error.message});
    }
}
module.exports={generateui};