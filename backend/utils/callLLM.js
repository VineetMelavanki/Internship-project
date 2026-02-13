require('dotenv').config();
const OpenAI =require("openai")
const openai=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
});

async function CallLLM(messages,max_tokens=800){
    try {
        console.log('Calling OpenAI with messages:', messages);
        const response=await openai.chat.completions.create({
            // Updated to a current, supported model
            model:"gpt-4o-mini",
            messages,
            max_tokens,
        });
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error('OpenAI API Error:', error.message);
        console.error('Using mock data instead...');
        
        // Check the system message to determine which agent is calling
        const systemMessage = messages[0]?.content || '';
        
        if (systemMessage.includes('planner')) {
            return `Step 1: Understand the user prompt and identify primary sections of the UI.\nStep 2: Break those sections into smaller components (layout, navigation, content, data displays).\nStep 3: Decide on a responsive layout strategy (mobile, tablet, desktop).\nStep 4: Apply a consistent spacing, color, and typography system.`;
        } else if (systemMessage.includes('developer')) {
            // Neutral fallback: let the user know the LLM is unavailable, instead of generating a full UI.
            return `// LLM Fallback: OpenAI API is unavailable.\n// This is only a placeholder, not real generated UI.\nexport default function GeneratedUIFallback() {\n  return (\n    <div style={{ padding: 16 }}>\n      <h2>LLM is unavailable</h2>\n      <p>The backend could not reach the OpenAI API, so no UI was generated from your prompt.</p>\n    </div>\n  );\n}`;
        } else if (systemMessage.includes('teacher')) {
            return `The UI could not be generated because the language model is unavailable. The runtime is returning a simple placeholder component instead of real generated code.`;
        } else if (systemMessage.includes('reviever') || systemMessage.includes('QA')) {
            return `No code was generated to review because the LLM call failed. The system returned a placeholder instead.`;
        } else {
            return `This is a fallback response.`;
        }
    }
}
module.exports={CallLLM};