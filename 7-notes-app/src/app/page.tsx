"use client";

import {useEffect, useState} from "react";
import {remark} from "remark";
import html from "remark-html";
import copy from "copy-to-clipboard";

export default function Home() {
    const [markdown, setMarkdown] = useState("");
    const [preview, setPreview] = useState("");
    const [copied, setCopied] = useState(false); // Copy to Clipboard state

    useEffect(() => {
        const savedMarkdown = localStorage.getItem("markdown") || "";
        setMarkdown(savedMarkdown);
    }, []);

    useEffect(() => {
        handlePreview();
        localStorage.setItem("markdown", markdown);
    }, [markdown]);

    const handlePreview = async () => {
        const processedContent = await remark().use(html).process(markdown);
        console.log(processedContent);
        setPreview(processedContent.toString());
    }

    return (
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Markdown Based Notes App</h1>
        <textarea
            className="w-full rounded h-32 border border-gray-300 p-2 mb-3"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Enter your note here..."
        />
          <div className="space-x-4">
              <button
                  onClick={handlePreview}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                  Preview
              </button>
              <button
                  onClick={() => {
                      copy(markdown);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 4000);
                  }}
                  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                  {copied ? "Markdown Copied" : "Copy to Clipboard"}
              </button>
          </div>
          <div
            className="rounded border border-gray-300 mt-4 p-4 prose w-full"
            dangerouslySetInnerHTML={{__html: preview}}
          />
      </div>
    );
}
