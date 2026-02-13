const {CallLLM} =require("../utils/callLLM")

async function codeGeneratorAgent(userPrompt, plan) {
  const messages = [
    {
      role: "system",
      content:
        "You are a React + Tailwind UI developer. Given a step-by-step implementation plan, generate JSX for the main UI layout. Use ONLY these predefined components: Button, Card, Input, Table, Modal, Sidebar, Navbar, Chart. These components already wrap basic HTML and accept props like children, title, items, columns, data and className. Do not import React or these components; they are already available in scope. Do not define new components; just return JSX for the layout tree.",
    },
    {
      role: "user",
      content: `User prompt:\n${userPrompt}\n\nUse Tailwind CSS utility classNames for layout, spacing, and colors (assume Tailwind is available). Build a single top-level JSX tree that can be rendered directly inside a React component, without extra imports or hooks. The JSX must satisfy the user prompt requirements and also follow this implementation plan strictly:\n\n${plan}`,
    },
  ];
  return await CallLLM(messages, 1200);
}
module.exports={codeGeneratorAgent};