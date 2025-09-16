import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

function LessonPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/alecbnono/dlsu-ccs-starterpack/main/ccprog1/01-introduction/what-is-programming.md",
        )
            .then((res) => res.text())
            .then(setContent);
    }, []);

    return (
        <section className="flex justify-center py-10">
            <div className="max-w-[800px] ">
                <ReactMarkdown
                    components={{
                        // Headings
                        h1: ({ node, ...props }) => (
                            <h1
                                className="text-4xl font-bold text-green-500 mt-6 mb-4"
                                {...props}
                            />
                        ),
                        h2: ({ node, ...props }) => (
                            <h2
                                className="text-2xl font-semibold text-green-500 mt-4 mb-2"
                                {...props}
                            />
                        ),

                        // Paragraphs
                        p: ({ node, ...props }) => (
                            <p className="leading-relaxed mb-4 text-slate-200" {...props} />
                        ),

                        // Inline code
                        code: ({ node, inline, className, children, ...props }) =>
                            inline ? (
                                <code
                                    className="font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded text-sm"
                                    {...props}
                                >
                                    {children}
                                </code>
                            ) : (
                                <pre className="bg-slate-950 text-white my-5 p-4 rounded-lg overflow-x-auto">
                                    <code className="text-sm">{children}</code>
                                </pre>
                            ),

                        // Lists
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
                        ),

                        // Links
                        a: ({ node, ...props }) => (
                            <a
                                className="text-green-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                                {...props}
                            />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </section>
    );
}

export default LessonPage;
