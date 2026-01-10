import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Versatile programming language for AI/ML, data science, and backend development with extensive libraries.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "C/C++",
    description:
      "High-performance programming for embedded systems, robotics, and system-level applications.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "React.js",
    description:
      "Build interactive user interfaces using components, state, props, and virtual DOM for modern web applications.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable for large-scale applications.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "HTML/CSS",
    description:
      "Frontend web development with semantic HTML5 and modern CSS3 for responsive design.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Java",
    description:
      "Object-oriented programming for Android development and enterprise applications.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "MATLAB",
    description:
      "Numerical computing environment for algorithm development, data analysis, and visualization.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "SQL",
    description:
      "Database query language for managing and manipulating relational databases efficiently.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "TensorFlow",
    description:
      "Open-source machine learning framework for building and deploying deep learning models.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "PyTorch",
    description:
      "Dynamic deep learning framework with strong GPU acceleration for research and production.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Scikit-learn",
    description:
      "Machine learning library providing simple and efficient tools for data mining and analysis.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "Keras",
    description:
      "High-level neural networks API for fast experimentation with deep learning models.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Flutter/Dart",
    description:
      "Cross-platform mobile app development framework for iOS and Android.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Altium Designer",
    description:
      "Professional PCB design software for electronic circuit design and hardware development.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "SolidWorks",
    description:
      "3D CAD design software for mechanical engineering and product design.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "LTspice",
    description:
      "Circuit simulation software for analog electronic circuit design and analysis.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Arduino",
    description:
      "Open-source electronics platform for building interactive projects and prototypes.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Git & GitHub",
    description:
      "Version control system and collaboration platform for software development.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "ROS/ROS2",
    description:
      "Robot Operating System framework for building robot applications and autonomous systems.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "CUDA",
    description:
      "Parallel computing platform for GPU-accelerated applications and deep learning.",
    rating: 3,
    icon: Icons.settings,
  },
  {
    name: "Firebase",
    description:
      "Backend-as-a-Service platform for building web and mobile applications with real-time databases.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "AWS",
    description:
      "Cloud computing platform for building and deploying scalable, reliable applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "IoT Development",
    description:
      "Internet of Things development with embedded systems, sensors, and cloud connectivity.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Computer Vision",
    description:
      "Image processing and analysis using deep learning for object detection and tracking.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Embedded Systems",
    description:
      "Microcontroller programming and hardware integration for real-time applications.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "ThingsBoard",
    description:
      "IoT platform for device management, data visualization, and rule-based automation.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "MQTT Protocol",
    description:
      "Lightweight messaging protocol for IoT device communication and telemetry.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Modbus RTU/TCP",
    description:
      "Industrial communication protocol for connecting sensors, PLCs, and SCADA systems.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Firmware Development",
    description:
      "ESP32/Arduino firmware with OTA updates, NVS storage, and protocol integration.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Mobile App Development",
    description:
      "Android and cross-platform mobile applications with push notifications.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Dashboard & UI Design",
    description:
      "Creating intuitive dashboards and user interfaces for data visualization.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "PiStudio (HMI)",
    description:
      "Human-Machine Interface programming with Lua for industrial touch panels.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "Problem Solving & Debugging",
    description:
      "Systematic troubleshooting with packet analysis and root cause analysis.",
    rating: 5,
    icon: Icons.settings,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
