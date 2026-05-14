import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32"
    >
      <div className="section w-full">
        <div className="mx-auto max-w-5xl text-center">

          {/* PROFILE IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-3xl" />

              <img
                src="https://i.pinimg.com/736x/ad/4f/f6/ad4ff6244f61027a29b5f1bb9ca416e0.jpg"
                alt="avatar"
                className="
                relative
                h-44
                w-44
                rounded-full
                border
                border-white/10
                bg-black/40
                p-2
                object-cover
                shadow-2xl
                "
              />
            </div>
          </motion.div>

          {/* HERO TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Hi, I'm{" "}

            <span
              className="
              bg-gradient-to-r
              from-orange-300
              via-orange-500
              to-amber-300
              bg-clip-text
              text-transparent
              "
            >
              Shaik Abdul Farooq
            </span>
          </motion.h1>

          {/* HERO DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-white/60
            "
          >
            Computer Science graduate focused on building modern web
            applications, AI-driven tools and scalable digital experiences.
            Skilled in full stack development, automation, machine learning
            and backend systems with hands-on experience developing
            real-world projects across web, data and cybersecurity domains.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            "
          >
            <a
              href="#projects"
              className="
              rounded-full
              bg-orange-500
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:scale-105
              hover:bg-orange-400
              "
            >
              View Projects
            </a>

            <a
              href="#about"
              className="
              glass
              rounded-full
              px-7
              py-3
              text-sm
              font-semibold
              transition-all
              hover:scale-105
              "
            >
              About Me
            </a>
          </motion.div>

          {/* CHATBOT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
            glass-strong
            mx-auto
            mt-20
            max-w-3xl
            rounded-[32px]
            p-8
            "
          >
            {/* TOP */}

            <div className="mb-6">

              <p className="text-2xl font-semibold text-white">
                Ask anything about Farooq
              </p>

              <p className="mt-2 text-sm text-white/50">
                AI • Full Stack • Automation • Cybersecurity • Machine Learning
              </p>
            </div>

            {/* CHAT MESSAGES */}

            <div
              id="chat-messages"
              className="
              mb-5
              h-[220px]
              overflow-y-auto
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-4
              "
            >
              <div
                className="
                rounded-2xl
                bg-orange-500/10
                p-4
                text-left
                text-sm
                text-white/80
                "
              >
                👋 Hey, ask me anything about my projects,
                skills or experience.
              </div>
            </div>

            {/* INPUT */}

            <div className="flex gap-3">

              <input
                id="chat-input"
                type="text"
                placeholder="Ask me anything..."
                className="
                flex-1
                rounded-full
                border
                border-white/10
                bg-black/30
                px-5
                py-4
                text-sm
                text-white
                outline-none
                placeholder:text-white/30
                "
              />

              <button
                onClick={async () => {

                  const input =
                    document.getElementById(
                      "chat-input"
                    ) as HTMLInputElement;

                  const messages =
                    document.getElementById(
                      "chat-messages"
                    );

                  if (!input.value.trim()) return;

                  const userMessage =
                    document.createElement("div");

                  userMessage.className =
                    "mb-3 rounded-2xl bg-orange-500/20 p-4 text-right text-sm text-white";

                  userMessage.innerText =
                    input.value;

                  messages?.appendChild(userMessage);

                  const value = input.value;

                  input.value = "";

                  const loading =
                    document.createElement("div");

                  loading.className =
                    "mb-3 rounded-2xl bg-white/5 p-4 text-left text-sm text-white/60";

                  loading.innerText =
                    "Thinking...";

                  messages?.appendChild(loading);

                  messages?.scrollTo({
                    top: messages.scrollHeight,
                    behavior: "smooth",
                  });

                  try {

                    const res =
                      await fetch("/api/chat", {
                        method: "POST",

                        headers: {
                          "Content-Type":
                            "application/json",
                        },

                        body: JSON.stringify({
                          message: value,
                        }),
                      });

                    const data =
                      await res.json();

                    loading.remove();

                    const aiMessage =
                      document.createElement("div");

                    aiMessage.className =
                      "mb-3 rounded-2xl bg-white/5 p-4 text-left text-sm text-white/80";

                    aiMessage.innerText =
                      data.reply;

                    messages?.appendChild(aiMessage);

                    messages?.scrollTo({
                      top: messages.scrollHeight,
                      behavior: "smooth",
                    });

                  } catch {

                    loading.innerText =
                      "Something went wrong.";
                  }
                }}
                className="
                rounded-full
                bg-orange-500
                px-6
                py-4
                text-sm
                font-medium
                text-white
                transition
                hover:bg-orange-400
                "
              >
                Send
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}