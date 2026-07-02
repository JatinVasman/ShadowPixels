import { BlogPost } from "../blogs";

export const compositingVfx: BlogPost = {
  slug: "cinematic-compositing-cgi-real-footage",
  title: "Cinematic Compositing: CGI in Real Footage",
  excerpt: "Matching black levels, light sources, and camera noise to perfectly blend 3D assets.",
  date: "June 1, 2026",
  readTime: "12 min read",
  category: "VFX",
  coverImage: "/work-6.png",
  content: `
### Introduction: The Art of Seamless Integration

[Compositing](https://shadowpixels.studio) is the craft of combining visual elements from separate sources—such as live-action video plates and computer-generated imagery (CGI) assets—into a single, unified image. In modern visual effects (VFX), creating a highly detailed 3D model is only the beginning. If the model is not properly integrated into the real footage, the illusion breaks instantly.

To achieve photorealistic [compositing](https://shadowpixels.studio), you must look past the 3D model's textures and match the physical properties of the camera that shot the real scene. This guide covers matching black levels, aligning lighting directions, simulating lens aberrations, and adding matching sensor noise.

---

### Section 1: Matching Contrast and Black Points

The most common mistake in [CGI](https://shadowpixels.studio) integration is mismatching black levels. 3D render engines compile mathematically perfect images. In a digital render, shadows can reach absolute black (0% luminance). Real camera footage, however, is captured through glass lenses and sensors that introduce lens glare, ambient bounce, and sensor noise. As a result, the shadows in real footage are rarely absolute black; they are slightly lifted.

\`\`\`
Mathematical Render: Shadow = 0% Black
Camera Captured Plate: Shadow = 3.5% Grey-Black
Result of Direct Import: [CGI](https://shadowpixels.studio) shadows look too deep, making the model look overlayed.

\`\`\`

#### How to Match Black Levels

1. Open your compositing software (like Nuke, Fusion, or After Effects) and view the histogram of your live-action background plate.
2. Identify the darkest shadow region in the shot (e.g. under a car or in a dark doorway).
3. Use a color curves node on your CGI asset layer. Drag the bottom-left point (blacks) upward until the shadow values of your CGI model match the shadow values of the background plate.
4. Inspect the shadow color channels. If the background shadows are slightly cool-toned, shift your CGI shadow curves to add a matching tint.

---

### Section 2: Aligning Light Direction and Color Temperature

Your 3D model must be illuminated by the same light sources present on set. Mismatched lighting directions immediately break visual integration.

* **Replicate Key Lights:** Match the position, angle, and softness of your primary lights with the physical light sources.
* **Match Color Temperature:** If the scene has a warm sunset on one side and a blue sky on the other, your model must receive the same split lighting. Use HDRIs (High Dynamic Range Images) captured on location to map lighting colors and directions.
* **Ambient Occlusion (AO):** AO renders contact shadows where surfaces meet. This is critical for anchoring objects to the floor, preventing them from looking like they are floating.

---

### Section 3: Simulating Camera Lens Properties

Real lenses distort light wavelengths and add sensor noise. You must replicate these physical aberrations on your clean CGI renders:

#### 1. Light Wrapping

Bright light sources behind a subject naturally bleed over its edges. A light wrap effect keys the background color and blends it over the outer boundaries of your CGI asset, integrating it into the environment.

#### 2. Chromatic Aberration

Lenses bend light wavelengths at the outer edges of the frame, causing red, green, and blue light to separate slightly. Apply a chromatic aberration filter to shift the color channels on the outer borders of your comp to match the camera lens.

#### 3. Sensor Grain Matching

Digital renders are noise-free, but real video contains sensor noise (grain). Extract the noise profile from your original video and overlay a matched grain layer on your CGI elements.

#### 4. Lens Distortion

Match any lens barrel distortion present in your footage so that your CGI assets warp appropriately as they move toward the edges of the screen.

---

### Section 4: The Final VFX Integration Checklist

Before exporting your final shot, audit your composition against this checklist:

* **Black Levels:** Do the shadows on your CGI asset match the surrounding shadows?
* **Grain:** Does the noise pattern on your digital assets match the noise pattern of the live-action plate?
* **Edge Softness:** Is the focus blur on your CGI asset matched with the camera's depth of field?
* **Interactive Lighting:** Does the CGI asset cast realistic shadows onto the real floor and walls?

Paying close attention to sensor grain, black levels, and lens characteristics will make your visual effects look like they were captured in-camera.
`
};