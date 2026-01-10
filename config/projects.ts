import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  projectCategory?: "Final Year" | "Internship" | "Mini Project" | "Academic";
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}


export const Projects: ProjectInterface[] = [
  {
    id: "unitree-go2",
    companyName: "Quadruped Mobility System (Unitree Go2)",
    type: "Personal",
    category: ["AI/ML", "Robotics"],
    shortDescription:
      "Developing an autonomous dynamic sensing platform on a quadruped robot, integrating perception, navigation, and visual inspection pipelines with CUDA-accelerated mobility stack on Jetson Orin Nano.",
    githubLink: "https://github.com/DinethraDivanjana2001/Go2-Dynamic-Inspection",
    projectCategory: "Final Year",
    techStack: ["Python", "CUDA", "ROS", "Deep Learning"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/unitree-go2/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developing an autonomous dynamic sensing platform on a quadruped robot, integrating perception, navigation, and visual inspection pipelines, and deploying a CUDA-accelerated mobility and inspection stack on Unitree Go2 hardware with Jetson Orin Nano for real-time, edge-based industrial inspection.",
      ],
      bullets: [
        "Developing autonomous dynamic sensing platform on quadruped robot",
        "Integrating perception, navigation, and visual inspection pipelines",
        "CUDA-accelerated mobility and inspection stack on Unitree Go2",
        "Focused on visual inspection and edge deployment aspects",
        "ROI-based inspection workflows with deep learning models on Jetson Orin Nano",
      ],
    },
  },
  // ==================== INTERNSHIP PROJECTS ====================
  {
    id: "thingsnode-mobile-app",
    companyName: "ThingsNode Mobile Application",
    type: "Professional",
    category: ["Mobile Dev", "IoT", "Full Stack"],
    shortDescription:
      "Developed Flutter-based mobile application for IoT device monitoring with Firebase Cloud Messaging push notifications, deep linking to ThingsBoard dashboards, and real-time telemetry display.",
    projectCategory: "Internship",
    techStack: ["Flutter", "Firebase", "Android", "MQTT"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/internship/thingsnode-app.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built a production-ready mobile application that transforms IoT device data into an intuitive interface. The app displays live sensor values, sends push alerts for threshold violations, and provides one-tap access to device dashboards.",
        "Set up the complete codebase from scratch, resolved build configuration issues, integrated Firebase Cloud Messaging for push notifications, implemented custom branding, conducted extensive testing on real devices, and prepared the application for Google Play Store deployment.",
      ],
      bullets: [
        "Flutter + native Android development in Android Studio",
        "Firebase Cloud Messaging integration for real-time push alerts",
        "Deep linking to ThingsBoard dashboards",
        "Device list UI with live telemetry display",
        "Fixed critical build errors (SDK version conflicts, Gradle mismatches)",
        "Comprehensive testing on Android 10, 11, and 12 devices",
        "Complete documentation for future maintenance",
      ],
    },
  },
  {
    id: "ansel-firmware",
    companyName: "Ansel Firmware Development (ESP32)",
    type: "Professional",
    category: ["IoT", "Embedded Systems", "Firmware"],
    shortDescription:
      "Developed production firmware for ESP32-based ThingsNode devices with MQTT telemetry, OTA updates, MAC-keyed NVS credential storage, and optimized network footprint for industrial IoT deployment.",
    projectCategory: "Internship",
    techStack: ["C++", "ESP32", "MQTT", "OTA"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/internship/ansel-firmware.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Transformed lab-prototype firmware into field-ready production code for ESP32-based IoT devices. Implemented MAC-keyed credential storage in NVS flash, enabling zero-touch provisioning for manufacturing scale-up.",
        "Developed randomized connect-publish-disconnect cycle to reduce AP load, implemented secure OTA update mechanism with ThingsBoard integration, and added watchdog-based auto-recovery for unattended operation.",
      ],
      bullets: [
        "MAC-keyed NVS storage for per-device Wi-Fi and MQTT credentials",
        "Randomized connection timing to distribute AP load across device fleet",
        "OTA firmware updates via ThingsBoard attributes",
        "MQTT vs CoAP protocol comparison with Wireshark packet analysis",
        "Watchdog timer for automatic recovery from hung states",
        "AT command interface for field credential updates",
        "Comprehensive network study and optimization",
      ],
    },
  },
  {
    id: "fingerprint-monitoring",
    companyName: "Fingerprint-Based User Monitoring System",
    type: "Professional",
    category: ["IoT", "Web Dev", "Embedded Systems"],
    shortDescription:
      "Built ESP32-based fingerprint authentication system with web UI for user enrollment, task checklist workflow, MQTT telemetry to ThingsBoard, and mDNS-based network discovery with AP fallback.",
    projectCategory: "Internship",
    techStack: ["ESP32", "MQTT", "Web Dev", "Embedded Systems"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/internship/fingerprint-system.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Designed and implemented a complete fingerprint-based operator tracking system for factory floor deployment. System allows operators to log in via fingerprint, select their workstation, complete task checklists, and automatically report data to cloud dashboards.",
        "Built admin web interface hosted directly on ESP32 for user enrollment and management. Implemented two-step workflow supporting concurrent user sessions, with LED ring feedback for user guidance.",
      ],
      bullets: [
        "UART fingerprint sensor integration with ESP32",
        "Web-based admin panel for user enrollment and management",
        "Two-step workflow: login → machine selection → task checklist → submit",
        "MQTT telemetry with start/end timestamps and selected checks",
        "mDNS (esp32.local) for easy network access",
        "SoftAP fallback for initial Wi-Fi configuration",
        "Session management for concurrent multi-user operation",
        "LED ring status indicators (blue=scanning, green=success, red=error)",
      ],
    },
  },
  {
    id: "hmi-project",
    companyName: "HMI Project (ANSEL)",
    type: "Professional",
    category: ["IoT", "UI/UX"],
    shortDescription:
      "Designed and deployed HMI touchscreen interface with login authentication, admin controls, and guided checklist workflow. Simplified navigation and added runtime Wi-Fi credential update capability.",
    projectCategory: "Internship",
    techStack: ["HMI", "UI/UX", "Embedded Systems"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/internship/hmi-project.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Created intuitive HMI touchscreen flows for factory operators with minimal training requirements. Implemented login system, admin configuration page, and step-by-step checklist interface.",
        "Deployed on-site and gathered operator feedback to refine navigation flow. Added runtime Wi-Fi credential update page to eliminate need for reflashing when network changes.",
      ],
      bullets: [
        "Login screen with user authentication",
        "Admin page for system configuration",
        "Guided checklist workflow with clear visual feedback",
        "Simplified screen navigation based on user feedback",
        "Runtime Wi-Fi credential update interface",
        "On-site deployment and iterative improvement",
      ],
    },
  },
  // ==================== MINI PROJECTS ====================
  {
    id: "thingsboard-dashboard",
    companyName: "Quick Tea Waththala Dashboard Design",
    type: "Professional",
    category: ["IoT", "Web Dev"],
    shortDescription:
      "Created fast, responsive ThingsBoard dashboards for IoT device testing with real-time WebSocket updates, mobile-optimized layouts, dark mode support, and custom status badges.",
    projectCategory: "Internship",
    techStack: ["ThingsBoard", "Web Dev", "IoT"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/mini/thingsboard-dashboard.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built custom ThingsBoard dashboards optimized for rapid device testing and monitoring. Enabled WebSocket updates for real-time data visualization and implemented responsive grid layouts for mobile access.",
      ],
      bullets: [
        "Real-time charts with WebSocket updates",
        "Custom status badges for device states",
        "Mobile-responsive grid layout",
        "Dark mode support",
        "Faster test iteration cycles",
      ],
    },
  },
  {
    id: "motion-controller-study",
    companyName: "Motion Controller Compatibility Study",
    type: "Professional",
    category: ["Hardware"],
    shortDescription:
      "Conducted compatibility analysis between Motion Controller and end device PCBs through circuit tracing, voltage rail measurement, and schematic reconstruction. Documented incompatibility to prevent wasted development effort.",
    projectCategory: "Internship",
    techStack: ["Hardware", "Electronics"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/mini/motion-controller.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Performed detailed compatibility study between Motion Controller and target device. Traced PCB connections, measured voltage rails, and built partial schematics. Identified fundamental incompatibility and documented findings to halt project early.",
      ],
      bullets: [
        "PCB circuit tracing and reverse engineering",
        "Voltage rail measurements",
        "Schematic reconstruction",
        "Compatibility analysis",
        "Early project termination recommendation with evidence",
      ],
    },
  },
  {
    id: "fish-tank-monitoring",
    companyName: "Fish Tank Monitoring (UoM Civil Research Project)",
    type: "Professional",
    category: ["IoT"],
    shortDescription:
      "Deployed MagicBit-based water quality monitoring system for university civil engineering research. Measured pH and temperature with MQTT telemetry to ThingsBoard dashboard and alert system.",
    projectCategory: "Internship",
    techStack: ["IoT", "MQTT", "Sensors"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/mini/fish-tank.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built IoT water quality monitoring system for university research aquarium. Used MagicBit microcontroller with pH and temperature sensors, MQTT telemetry, and ThingsBoard dashboard with threshold alerts.",
      ],
      bullets: [
        "MagicBit microcontroller with pH and temperature sensors",
        "MQTT data transmission",
        "ThingsBoard dashboard with live readings",
        "Alert system for parameter thresholds",
        "On-site installation and calibration",
      ],
    },
  },
  // ==================== ACADEMIC PROJECTS ====================
  {
    id: "transx",
    companyName: "TransX - Transformer Maintenance Platform",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "AI/ML"],
    shortDescription:
      "Full-stack AI-powered platform for transformer inspection with React/TypeScript frontend, Spring Boot backend, and YOLOv8-based Python ML microservice for real-time thermal anomaly detection.",
    githubLink: "https://github.com/DinethraDivanjana2001/TransX-Transformer-Maintenance-Platform",
    youtubeLink: "https://youtu.be/nJkypNFHEBI",
    projectCategory: "Academic",
    techStack: ["React", "Typescript", "Python", "MySQL"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-11-30"),
    companyLogoImg: "/projects/transx/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack AI-powered platform for transformer inspection, integrating React/TypeScript frontend, Spring Boot backend, and a YOLOv8-based Python ML microservice for real-time thermal anomaly detection and interactive annotation workflows.",
      ],
      bullets: [
        "Full-stack AI-powered platform for transformer inspection",
        "React/TypeScript frontend with Spring Boot backend",
        "YOLOv8-based Python ML microservice for thermal anomaly detection",
        "Complete database schema (MySQL, relational database)",
        "REST API endpoints and frontend modules for inspection management",
        "Interactive annotation canvas and maintenance record generation",
      ],
    },
  },
  {
    id: "yolo-kalman",
    companyName: "YOLO & Kalman Filter Target Tracking",
    type: "Personal",
    category: ["AI/ML", "Computer Vision"],
    shortDescription:
      "End-to-end video object tracking system combining YOLO-based detection with Kalman filter multi-object tracking for robust, real-time tracking with occlusion handling and jitter reduction.",
    githubLink: "https://github.com/DinethraDivanjana2001/YOLOv11-Based-Industrial-Object-Detection-with-Kalman-Filter-Tracking",
    youtubeLink: "https://youtu.be/-XSXYPTiASQ?si=uiplGu4WoAjNf4NO",
    projectCategory: "Academic",
    techStack: ["Python", "YOLO", "Computer Vision"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/yolo-kalman/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Designed and implemented an end-to-end video object tracking system combining YOLO-based detection with Kalman filter multi-object tracking for robust, real-time tracking by detection, including occlusion handling and jitter reduction.",
      ],
      bullets: [
        "YOLO-based detection with Kalman filter multi-object tracking",
        "Robust real-time tracking with occlusion handling",
        "Dataset preparation and model training",
        "Inference pipelines and Kalman tracking logic",
        "Visualization utilities and automated result analysis",
        "Annotated videos and performance plots",
      ],
    },
  },
  {
    id: "fastervit-oci",
    companyName: "FasterViT-OCI: Vision Transformer Extension",
    type: "Personal",
    category: ["AI/ML", "Research"],
    shortDescription:
      "Extended FasterViT architecture with OCI improvements to enhance hierarchical attention mechanisms. Conducted comprehensive experiments on ImageNet-1K, CIFAR-10, and Pascal VOC with Detectron2.",
    githubLink: "https://github.com/DinethraDivanjana2001/FasterViT-OCI--Boundary-Aware-Hierarchical-Vision-Transformer",
    techStack: ["Python", "PyTorch", "Deep Learning"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/fastervit-oci/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Implemented and evaluated the FasterViT architecture, extending the original paper with OCI improvements to enhance hierarchical attention mechanisms. Conducted three comprehensive experiments: inference throughput replication on ImageNet-1K, transfer learning on CIFAR-10, and object detection benchmarks with Detectron2 backbones on Pascal VOC.",
      ],
      bullets: [
        "Extended FasterViT architecture with OCI improvements",
        "Enhanced hierarchical attention mechanisms",
        "Inference throughput replication on ImageNet-1K",
        "Transfer learning on CIFAR-10",
        "Object detection benchmarks with Detectron2 on Pascal VOC",
        "Full training and evaluation pipeline implementation",
        "Quantitative and qualitative comparisons",
      ],
    },
  },
  {
    id: "smart-door",
    companyName: "Smart Rolling Door Device",
    type: "Personal",
    category: ["IoT", "Hardware"],
    shortDescription:
      "IoT-enabled smart rolling door solution with remote access, real-time status monitoring, and automated safety mechanisms for enhanced security and convenience.",
    githubLink: "https://github.com/DinethraDivanjana2001/Smart-Rolling-door-device",
    techStack: ["IoT", "MQTT", "Embedded Systems"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-08-31"),
    companyLogoImg: "/projects/smart-door/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed an IoT-enabled smart rolling door solution featuring remote access, real-time status monitoring, and automated safety mechanisms, targeting enhanced security and convenience for residential and commercial applications.",
      ],
      bullets: [
        "IoT-enabled smart rolling door with remote access",
        "Real-time status monitoring",
        "Automated safety mechanisms",
        "PCB and enclosure design",
        "Circuit integration and MQTT-based communication",
        "Embedded firmware for seamless operation and cloud connectivity",
      ],
    },
  },
  {
    id: "vision-robot-arm",
    companyName: "Vision-Based Robot Arm Control",
    type: "Personal",
    category: ["Robotics", "Computer Vision"],
    shortDescription:
      "Real-time vision-based system that detects and tracks a selected target object and generates continuous control commands to align and follow the target using a robotic arm.",
    githubLink: "https://github.com/DinethraDivanjana2001/Vision-Based-Robot-Arm",
    techStack: ["Python", "Computer Vision", "Robotics"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-07-31"),
    companyLogoImg: "/projects/vision-robot-arm/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Developed a real-time vision-based system that detects and tracks a selected target object and generates continuous control commands to align and follow the target using a robotic arm.",
      ],
      bullets: [
        "Real-time vision-based object detection and tracking",
        "Continuous control command generation",
        "Complete perception-to-control pipeline",
        "Camera-based object detection and tracking",
        "Coordinate mapping from image space to actuator commands",
        "Embedded control logic for smooth object-following behavior",
      ],
    },
  },
  {
    id: "clrernet",
    companyName: "CLRerNet Lane Detection",
    type: "Personal",
    category: ["AI/ML", "Computer Vision"],
    shortDescription:
      "Enhanced lane detection confidence using the LaneIoU architecture, improving accuracy in complex driving scenarios with advanced neural network techniques for real-time lane recognition.",
    githubLink: "https://github.com/Team-Visionary-Innovators/CLRerNet-Improving-Confidence-of-Lane-Detection-with-LaneloU-",
    youtubeLink: "https://youtu.be/77t6vMTwaGA?si=2LFVhHxs0CDw4FQr",
    projectCategory: "Academic",
    techStack: ["Python", "Deep Learning", "Computer Vision"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/clrernet/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "CLRerNet enhances lane detection confidence using the LaneIoU architecture, improving accuracy in complex driving scenarios. The project focuses on advanced neural network techniques to refine lane recognition in real-time.",
      ],
      bullets: [
        "Enhanced lane detection using LaneIoU architecture",
        "Improved accuracy in complex driving scenarios",
        "Advanced neural network techniques",
        "Real-time lane recognition",
        "Training and fine-tuning neural networks",
        "Diverse driving condition handling",
      ],
    },
  },
  {
    id: "hand-gesture",
    companyName: "Hand Gesture Detection System",
    type: "Personal",
    category: ["AI/ML", "Computer Vision"],
    shortDescription:
      "Image recognition system using CNNs for hand gesture detection, achieving high accuracy in gesture recognition with real-time tracking and classification capabilities.",
    githubLink: "https://github.com/DinethraDivanjana2001/Hand-Gesture-Detection",
    youtubeLink: "https://youtu.be/0rndyq0avwY?si=V6R9jxfoSAvHXcHs",
    projectCategory: "Academic",
    techStack: ["Python", "Deep Learning", "Computer Vision"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/hand-gesture/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This project harnesses the power of machine vision and deep learning to create an image recognition system for hand gesture detection.",
      ],
      bullets: [
        "Hand gesture detection using CNNs",
        "High accuracy in gesture recognition",
        "Real-time tracking and classification",
        "Optimized model for real-time performance",
        "Machine vision and deep learning integration",
      ],
    },
  },
  {
    id: "ratatouille",
    companyName: "Ratatouille Micro Mouse",
    type: "Personal",
    category: ["Robotics", "Embedded Systems"],
    shortDescription:
      "Fast maze-traversing micro mouse that navigates complex mazes autonomously using advanced sensors and algorithms, with PCB design and Webots simulation.",
    githubLink: "https://github.com/DinethraDivanjana2001/Ratatouille-bot-Working",
    youtubeLink: "https://youtu.be/vFETLNWlH-o?si=ioLXfbr3b69GQ4si",
    projectCategory: "Academic",
    techStack: ["C++", "Embedded Systems", "Robotics"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/ratatouille/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Fast Maze-Traversing Micro mouse navigates complex mazes autonomously using advanced sensors and algorithms.",
      ],
      bullets: [
        "Autonomous maze navigation",
        "Advanced sensors and algorithms",
        "PCB and schematic design",
        "Webots simulation and optimization",
        "Fast maze-traversing capabilities",
      ],
    },
  },
  {
    id: "soldering-station",
    companyName: "Industrial Smart Soldering Station",
    type: "Personal",
    category: ["Hardware", "Embedded Systems"],
    shortDescription:
      "High-performance soldering solution with soldering iron and hot air gun, featuring advanced PID temperature control and multiple modes for precise, efficient soldering.",
    githubLink: "https://github.com/DinethraDivanjana2001/Smart-Soldering-Staion",
    techStack: ["Embedded Systems", "PID Control", "Hardware Design"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-31"),
    companyLogoImg: "/projects/soldering-station/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Smart Soldering Station is a high-performance soldering solution with a soldering iron and hot air gun, featuring advanced PID temperature control and multiple modes for precise, efficient, and reliable soldering.",
      ],
      bullets: [
        "High-performance soldering with iron and hot air gun",
        "Advanced PID temperature control",
        "Multiple modes for precise soldering",
        "AC and DC circuit schematics and PCB design",
        "PID control algorithm development",
        "Component selection and enclosure design",
      ],
    },
  },
  {
    id: "techbot",
    companyName: "TechBot STM32 Vision Robot",
    type: "Personal",
    category: ["Robotics", "Embedded Systems"],
    shortDescription:
      "Innovative robot with custom 4-layer PCB featuring STM32F405VGT6 ARM-M4 microcontroller and Raspberry Pi 4b for advanced machine vision tasks.",
    githubLink: "https://github.com/DinethraDivanjana2001/TechBots-STM-based-Bot-Working",
    youtubeLink: "https://youtube.com/shorts/tBnuomBQu8Q?si=MGKkUgElTNfp7K3O",
    projectCategory: "Academic",
    techStack: ["C++", "STM32", "Raspberry Pi", "Computer Vision"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-03-31"),
    companyLogoImg: "/projects/techbot/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "An innovative robot featuring a custom-designed 4-layer PCB with an STM32F405VGT6 ARM-M4 microcontroller and a Raspberry Pi 4b for advanced machine vision tasks.",
      ],
      bullets: [
        "Custom 4-layer PCB design",
        "STM32F405VGT6 ARM-M4 microcontroller",
        "Raspberry Pi 4b for machine vision",
        "Shooter mechanism design",
        "Cube IDE development and sensor testing",
        "Algorithm design using C++",
      ],
    },
  },
  {
    id: "medibox",
    companyName: "IoT Based Medicine Storage",
    type: "Personal",
    category: ["IoT", "Web Dev"],
    shortDescription:
      "Smart MediBox assists users in managing medication schedules with timely audio and visual reminders, environmental tracking, and remote management via web dashboard.",
    githubLink: "https://github.com/DinethraDivanjana2001/Medi-Box",
    youtubeLink: "https://youtu.be/ggxn_mdEnH0?si=5owJUsSnz3Cac3bj",
    projectCategory: "Academic",
    techStack: ["IoT", "Node-RED", "ESP32"],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-05-31"),
    companyLogoImg: "/projects/medibox/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Smart MediBox assists users in managing their medication schedules with timely audio and visual reminders, environmental tracking, and remote management via a web-based dashboard.",
      ],
      bullets: [
        "Medication schedule management",
        "Audio and visual reminders",
        "Environmental tracking",
        "Web-based dashboard with Node-RED",
        "Circuit and PCB design",
        "ESP32 microcontroller programming with Wokwi simulator",
      ],
    },
  },
  {
    id: "guitar-amp",
    companyName: "Analog Guitar Headphone Amplifier",
    type: "Personal",
    category: ["Hardware", "Audio"],
    shortDescription:
      "High-quality portable amplifier for electric guitar players with reliable, high-fidelity amplification using analog components for optimal audio experience.",
    githubLink: "https://github.com/DinethraDivanjana2001/Analog-Guitar-Headphone-Amplifier",
    techStack: ["Analog Electronics", "Audio Engineering"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2023-11-30"),
    companyLogoImg: "/projects/guitar-amp/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Analog Guitar Headphone Amplifier is a high-quality, portable device designed for electric guitar players seeking reliable, high-fidelity amplification. It offers superior sound quality for headphone practice sessions, utilizing analog components for an optimal audio experience.",
      ],
      bullets: [
        "High-quality portable guitar amplifier",
        "High-fidelity amplification",
        "Analog components for optimal audio",
        "Circuit design and simulation",
        "3D design for ergonomic excellence",
      ],
    },
  },
  {
    id: "turbi-detector",
    companyName: "Turbi-Detector IoT Water Monitor",
    type: "Personal",
    category: ["IoT", "Hardware"],
    shortDescription:
      "Smart device using infrared sensor and control system to detect mud in water pipelines, ensuring clean water supply by diverting contaminated water with mobile app notifications.",
    githubLink: "https://github.com/DinethraDivanjana2001/Turbi-Detector",
    techStack: ["IoT", "Embedded Systems", "Mobile App"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-07-31"),
    companyLogoImg: "/projects/turbi-detector/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The project aims to develop a smart device using an infrared sensor and control system to detect mud in water pipelines. It ensures clean water supply by diverting contaminated water and notifying users via a mobile app.",
      ],
      bullets: [
        "Infrared sensor for mud detection",
        "Automated water diversion system",
        "Mobile app notifications",
        "Circuit, schematics, and PCB design",
        "Graphic design for marketing",
        "Algorithm design and system integration",
      ],
    },
  },
  {
    id: "ros2-path-planning",
    companyName: "ROS2 Path Planning System",
    type: "Personal",
    category: ["Robotics", "AI/ML"],
    shortDescription:
      "Path planning implementation in Robot Operating System ROS2, focusing on navigation algorithms and autonomous robot movement in complex environments.",
    githubLink: "https://github.com/DinethraDivanjana2001/-Path-Planning-in-Robot-Operating-System-ROS2-",
    youtubeLink: "https://youtu.be/QkE4kfG8MWM?si=6ps088ktZHl6goVV",
    projectCategory: "Academic",
    techStack: ["Python", "ROS2", "Robotics"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/projects/ros2-path-planning/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Path planning implementation in Robot Operating System ROS2, enhancing navigation capabilities and autonomous movement in complex driving scenarios.",
      ],
      bullets: [
        "Path planning in ROS2",
        "Navigation algorithm implementation",
        "Autonomous robot movement",
        "Complex environment handling",
        "Python-based development",
      ],
    },
  },
  {
    id: "nanonaut",
    companyName: "Nanonaut Line Following Robot",
    type: "Personal",
    category: ["Robotics", "Embedded Systems"],
    shortDescription:
      "Advanced robot capable of line following, wall avoidance, ramp navigation, mechanical arm operation, sound responsiveness, color detection, maze traversal, and obstacle avoidance.",
    githubLink: "https://github.com/DinethraDivanjana2001/EN2533-Robot-Design-and-Competition",
    youtubeLink: "https://youtube.com/shorts/1-24to8RFuw?si=kQJ8tt-CQMsxh6RN",
    projectCategory: "Academic",
    techStack: ["C++", "Embedded Systems", "Robotics"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/nanonaut/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Nanonaut Robotics Project features a robot capable of accurate line following, intelligent wall avoidance, ramp navigation, mechanical arm operation, sound responsiveness, color detection, maze traversal, and obstacle avoidance.",
      ],
      bullets: [
        "Accurate line following",
        "Intelligent wall avoidance",
        "Ramp navigation and mechanical arm operation",
        "Sound responsiveness and color detection",
        "Maze traversal and obstacle avoidance",
        "Electronics and mechanical assembly design",
        "Sensor algorithm implementation",
      ],
    },
  },
  {
    id: "fpga-uart",
    companyName: "FPGA UART Transceiver",
    type: "Personal",
    category: ["Hardware", "FPGA"],
    shortDescription:
      "UART transceiver implementation using FPGA, enabling reliable serial communication for data transmission and reception with comprehensive testing and simulation.",
    githubLink: "https://github.com/DinethraDivanjana2001/FPGA_UART",
    techStack: ["FPGA", "Verilog", "Digital Design"],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-05-31"),
    companyLogoImg: "/projects/fpga-uart/preview.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Implemented a UART transceiver using FPGA, enabling reliable serial communication for data transmission and reception.",
      ],
      bullets: [
        "UART transceiver implementation in FPGA",
        "Reliable serial communication",
        "Data transmission and reception",
        "Comprehensive testing for accurate data handling",
        "Simulation and verification",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 6);
