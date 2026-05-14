import type {
    NextApiRequest,
    NextApiResponse,
} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { message } = req.body;

    let reply =
        "I am Farooq's AI assistant.";

    const text =
        message.toLowerCase();

    if (
        text.includes("project")
    ) {
        reply =
            "Farooq has built projects in AI, machine learning, full stack development and automation including movie recommendation systems and secure voting applications.";
    }

    else if (
        text.includes("skill")
    ) {
        reply =
            "Farooq works with Python, React, Next.js, SQL, Flask, machine learning, APIs and modern full stack technologies.";
    }

    else if (
        text.includes("contact")
    ) {
        reply =
            "You can connect with Farooq through GitHub, LinkedIn or email.";
    }

    else if (
        text.includes("ai")
    ) {
        reply =
            "Farooq is passionate about AI-driven applications, automation systems and intelligent software experiences.";
    }

    res.status(200).json({
        reply,
    });
}