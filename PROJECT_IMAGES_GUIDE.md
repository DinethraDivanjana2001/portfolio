# 📸 Project Images Setup Guide

## Overview
Your portfolio has been updated with all 17 projects from your CV. Now you need to add preview images for each project.

## 📁 Folder Structure

Create the following folders in `public/projects/` and add one preview image named `preview.png` (or `preview.jpg`) in each:

```
public/projects/
├── unitree-go2/
│   └── preview.png          ← Add your Unitree Go2 project image here
├── transx/
│   └── preview.png          ← Add your TransX platform screenshot here
├── yolo-kalman/
│   └── preview.png          ← Add your YOLO tracking demo here
├── fastervit-oci/
│   └── preview.png          ← Add your FasterViT results/architecture here
├── smart-door/
│   └── preview.png          ← Add your smart door device photo here
├── vision-robot-arm/
│   └── preview.png          ← Add your robot arm in action here
├── clrernet/
│   └── preview.png          ← Add your lane detection results here
├── hand-gesture/
│   └── preview.png          ← Add your gesture detection demo here
├── ratatouille/
│   └── preview.png          ← Add your micro mouse photo here
├── soldering-station/
│   └── preview.png          ← Add your soldering station photo here
├── techbot/
│   └── preview.png          ← Add your TechBot robot photo here
├── medibox/
│   └── preview.png          ← Add your MediBox device photo here
├── guitar-amp/
│   └── preview.png          ← Add your guitar amplifier photo here
├── turbi-detector/
│   └── preview.png          ← Add your water detector device here
├── ros2-path-planning/
│   └── preview.png          ← Add your ROS2 path planning visualization here
├── ros2-path-planning/
│   └── preview.png          ← Add your Nanonaut robot photo here
└── fpga-uart/
    └── preview.png          ← Add your FPGA implementation diagram here
```

## 🎯 Image Requirements

### Recommended Specifications:
- **Format**: PNG or JPG
- **Dimensions**: 800x600px or 1200x900px (4:3 ratio recommended)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High quality, clear, and professional-looking

### What Makes a Good Preview Image:
1. **For Hardware Projects**: Clear photo of the assembled device/PCB
2. **For Software/AI Projects**: Screenshot showing results, UI, or architecture diagram
3. **For Robotics Projects**: Photo of the robot in action or assembled
4. **For ML Projects**: Results visualization, accuracy graphs, or detection examples

## 📋 Quick Setup Steps

### Step 1: Create All Folders
Run this command in your terminal (from project root):

```bash
# PowerShell
New-Item -ItemType Directory -Force -Path "public/projects/unitree-go2", "public/projects/transx", "public/projects/yolo-kalman", "public/projects/fastervit-oci", "public/projects/smart-door", "public/projects/vision-robot-arm", "public/projects/clrernet", "public/projects/hand-gesture", "public/projects/ratatouille", "public/projects/soldering-station", "public/projects/techbot", "public/projects/medibox", "public/projects/guitar-amp", "public/projects/turbi-detector", "public/projects/ros2-path-planning", "public/projects/nanonaut", "public/projects/fpga-uart"
```

### Step 2: Add Your Images
Copy your project images into the respective folders with the name `preview.png` or `preview.jpg`

### Step 3: Verify
Check that each folder has a preview image:
```bash
Get-ChildItem -Path "public/projects" -Recurse -Include "preview.*"
```

## 🔄 Temporary Placeholder (Optional)

If you don't have all images ready, you can use a placeholder temporarily. Create a simple placeholder image or use the uploaded image you provided.

## ✅ What's Already Updated

### ✓ Projects Configuration (`config/projects.ts`)
- All 17 projects from your CV added
- GitHub links included
- Proper descriptions and tech stacks
- Categories assigned (AI/ML, Robotics, IoT, Hardware, etc.)

### ✓ Skills Configuration (`config/skills.ts`)
- Updated with your actual skills: Python, C/C++, MATLAB, SQL, React.js
- ML frameworks: TensorFlow, PyTorch, Scikit-learn
- Hardware tools: Altium Designer, SolidWorks, LTspice, Arduino
- Specialized: IoT, Computer Vision, Embedded Systems, ROS/ROS2

### ✓ Experience Configuration (`config/experience.ts`)
- Magicbits (PVT) Ltd internship added
- Software/IoT Engineering Intern position
- Dec 2024 - June 2025

### ✓ Type Definitions (`config/constants.ts`)
- Added new skill types: C++, CUDA, ROS, IoT, FPGA, etc.
- Added new categories: AI/ML, Robotics, IoT, Hardware, Computer Vision, etc.

## 🚀 Next Steps

1. **Gather your project images** from your repositories or take new photos
2. **Create the folder structure** using the command above
3. **Add images** to each folder as `preview.png` or `preview.jpg`
4. **Test locally** by running `npm run dev` and navigating to `/projects`
5. **Adjust if needed** - you can always replace images later

## 💡 Tips

- Use screenshots from your GitHub repositories' README files
- For hardware projects, take well-lit photos with clean backgrounds
- For ML projects, use result visualizations or architecture diagrams
- Compress images if they're too large (use tools like TinyPNG)
- Maintain consistent aspect ratios across all images for a professional look

## 📝 Notes

- The portfolio is configured to show projects as cards with preview images
- Clicking on a project card will show the GitHub link (no separate detail pages)
- Projects are categorized and can be filtered by type (Personal/Professional)
- All projects link directly to your GitHub repositories

---

**Need Help?** If you encounter any issues or need to modify project details, let me know!
