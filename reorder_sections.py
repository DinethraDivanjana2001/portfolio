# Script to reorder sections in page.tsx
# Run this with: python reorder_sections.py

import re

# Read the file
with open('e:/sem7/minimal-next-portfolio/app/(root)/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Split content into lines for easier manipulation
lines = content.split('\n')

# Find section boundaries
about_end = 285  # Line before Education starts
education_start = 287
education_end = 349
skills_start = 352
skills_end = 372
projects_start = 373
projects_end = 509
experience_start = 510
experience_end = 548

# Extract sections (convert to 0-indexed)
education_section = '\n'.join(lines[education_start-1:education_end])
skills_section = '\n'.join(lines[skills_start-1:skills_end])
projects_section = '\n'.join(lines[projects_start-1:projects_end])
experience_section = '\n'.join(lines[experience_start-1:experience_end])

# Build new content
new_lines = lines[:about_end]  # Keep everything up to About end
new_lines.append('')
new_lines.append('')
new_lines.extend(skills_section.split('\n'))  # Add Skills
new_lines.append('')
new_lines.extend(experience_section.split('\n'))  # Add Experience
new_lines.append('')
new_lines.extend(projects_section.split('\n'))  # Add Projects
new_lines.append('')
new_lines.extend(education_section.split('\n'))  # Add Education
new_lines.extend(lines[experience_end:])  # Add rest (Volunteering, Contact)

# Write back
with open('e:/sem7/minimal-next-portfolio/app/(root)/page.tsx', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("✅ Sections reordered successfully!")
print("New order: About → Skills → Experience → Projects → Education → Volunteering → Contact")
