import { useState } from "react";
import axios from "axios";
import useUIGeneratorStore from "./store";
import { LiveProvider, LivePreview, LiveEditor } from "react-live";
import { API_URL } from "./config";

import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Table from "./components/Table";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import Sidebar from "./components/Sidebar";

import "./components/style.css";

export default function App() {
  const {
    prompt,
    setPrompt,
    plan,
    setPlan,
    code,
    setCode,
    explanation,
    setExplanation,
    validation,
    setValidation,
    loading,
    setLoading,
    rollback,
  } = useUIGeneratorStore();

  const [error, setError] = useState("");

  const generateUI = async () => {
    setError("");
    if (!prompt || prompt.length < 5) {
      setError("Prompt must be at least 5 characters");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/ui/generate-ui`, {
        prompt,
        currentCode: code || "",
      });

      setPlan(res.data.plan);
      setCode(res.data.code);
      setExplanation(res.data.explanation);
      setValidation(res.data.validation);
    } catch (err) {
      console.error(err);
      setError("Failed to generate UI");
    } finally {
      setLoading(false);
    }
  };

  const regenerate = async () => {
    if (!prompt) return;
    setCode("");
    await generateUI();
  };

  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-100 font-sans">
      {/* Left panel: prompt + plan/explanation/validation */}
      <div className="w-full md:w-[420px] border-r border-slate-800 p-4 md:p-6 space-y-4 overflow-y-auto">
        <h2 className="text-xl font-semibold">AI UI Generator</h2>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the UI you want to generate..."
          className="w-full h-32 rounded-md bg-slate-800 text-slate-100 p-3 text-sm outline-none border border-slate-700 focus:border-indigo-500 resize-vertical"
        />

        <div className="flex flex-wrap gap-2">
          <Button onClick={generateUI}>{loading ? "Generating..." : "Generate / Modify"}</Button>
          <Button onClick={regenerate}>Regenerate</Button>
          <Button onClick={rollback}>Rollback</Button>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        {plan && (
          <section>
            <h3 className="font-semibold mb-1">Plan</h3>
            <pre className="text-xs bg-slate-900 border border-slate-800 rounded-md p-2 whitespace-pre-wrap">
              {plan}
            </pre>
          </section>
        )}

        {explanation && (
          <section className="mt-2">
            <h3 className="font-semibold mb-1">Explanation</h3>
            <pre className="text-xs bg-slate-900 border border-slate-800 rounded-md p-2 whitespace-pre-wrap">
              {explanation}
            </pre>
          </section>
        )}

        {validation && (
          <section className="mt-2">
            <h3 className="font-semibold mb-1">Validation</h3>
            <pre className="text-xs bg-slate-900 border border-slate-800 rounded-md p-2 whitespace-pre-wrap">
              {validation}
            </pre>
          </section>
        )}
      </div>

      {/* Right panel: code editor + live preview */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
        <h3 className="font-semibold">Generated Code (Editable)</h3>

        <LiveProvider
          code={code}
          scope={{ Button, Card, Input, Table, Modal, Navbar, Chart, Sidebar }}
          noInline
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="bg-slate-900 border border-slate-800 rounded-md p-2 text-xs overflow-auto">
              <LiveEditor onChange={(newCode) => setCode(newCode)} />
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-md p-4 overflow-auto">
              <h4 className="text-sm font-semibold mb-2">Live Preview</h4>
              <LivePreview />
            </div>
          </div>
        </LiveProvider>
      </div>
    </div>
  );
}
