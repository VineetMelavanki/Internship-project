const {CallLLM} =require("../utils/callLLM")

async function plannerAgent(userPrompt) {
  const messages = [
    {
      role: "system",
      content:
        "You are a senior UI/UX expert and planner. Your job is to translate a natural-language UI idea into a clear, implementation-ready plan for a React + Tailwind dashboard or page layout.",
    },
    {
      role: "user",
      content: `Based on this prompt, create a numbered, step-by-step implementation plan for the UI. Cover layout, navigation, sections, key components (cards, tables, forms, charts, modals, etc.), responsive behavior (mobile / tablet / desktop), and any important interactions.\n\nUser prompt:\n${userPrompt}`,
    },
  ];
  return await CallLLM(messages);
}

module.exports={plannerAgent};