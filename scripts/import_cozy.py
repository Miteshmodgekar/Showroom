import os
import shutil

src_dir = r"C:\Users\mites\OneDrive\Documents\Desktop\Cozy"
dest_public = r"c:\Users\mites\.gemini\antigravity-ide\scratch\sofa-showroom\public\images\client"
dest_artifacts = r"C:\Users\mites\.gemini\antigravity-ide\brain\d5c3b07a-3521-469e-a37b-d17ec6a867d0"

os.makedirs(dest_public, exist_ok=True)

files = os.listdir(src_dir)
print(f"Found {len(files)} files in {src_dir}:")

for f in sorted(files):
    src_path = os.path.join(src_dir, f)
    if os.path.isfile(src_path):
        # copy to public
        shutil.copy2(src_path, os.path.join(dest_public, f))
        # copy to artifacts for inspection
        shutil.copy2(src_path, os.path.join(dest_artifacts, f))
        size_kb = os.path.getsize(src_path) / 1024
        print(f"Copied: {f} ({size_kb:.1f} KB)")
