export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "Data-Structures-Portal",

    title: "Data Structures Portal",

    description:
      "Developed a secure Data Structures and Algorithms website with interactive visualizations, real-time algorithm handling and optimized workflows using modular architecture principles.",

    tags: [
      "React",
      "Flask",
      "SQL",
      "Authentication",
      "REST API",
      "Backend",
    ],

    github:
      "https://github.com/farooq-senpai/DSA-infinity",

    demo:
      "https://data-structure-seven.vercel.app/",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-orange-500/30 via-fuchsia-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/8d/af/f0/8daff08cb6d87d93b235af0536e2a4ea.jpg",
    ],
  },

  {
    id: "Local-Music-Player-App",

    title: "Local Music Player Andriod App",

    description:
      "Built a Andriod App music player that can play music files from the local storage and support playback controls, queue management and song discovery.",

    tags: [
      "Kotlin",
      "Android Studio",
      "Git",
      "GitHub",
    ],

    github:
      "https://github.com/farooq-senpai/my-first-andriod-app",

    featured: true,

    deviceType: "mobile",

    bgColor:
      "from-cyan-500/30 via-blue-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/00/50/28/0050289e93e9e90d8b1ebd9eec3fd1a3.jpg",
    ],
  },

  {
    id: "Movie Recommendation System",

    title: "Movie Recommendation system",

    description:
      "Developed a movie recommendation system using machine learning. Applied preprocessing, exploratory data analysis, feature engineering and predictive modeling to improve classification accuracy and healthcare insights.",

    tags: [
      "Python",
      "Streamlit",
      "API Integration",
      "Full Stack",
      "Authentication",

    ],

    github:
      "https://github.com/farooq-senpai/movie-recommendation",

    demo:
      "https://movie-recommendation-bds4ayrru6lcxh8wwrequx.streamlit.app/",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-emerald-500/30 via-teal-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/28/54/f7/2854f7563d133844e24d485b963e0e61.jpg",
    ],
  },

  {
    id: "ml-forge Python Libary",

    title: "ML Forge Python Libary",

    description:
      "ML Forge is a Python library for building recommendation engine using  data based and collaborative filtering and cosine similarity algorithms. This library provides a simple and efficient way to build recommendation systems.",

    tags: [
      "Python",
      "Machine Learning",
      "Recommendation System",
      "Data Science",
      "Pytorch",
    ],

    github:
      "https://github.com/farooq-senpai/mlforge",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-red-500/30 via-rose-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/03/8c/ac/038cac275b4242e1916d0146dc3ff5b5.jpg",
    ],
  },
];