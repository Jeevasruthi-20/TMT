# Measurement Images Guide

This document lists all the individual measurement images available for the tailoring website.

## Available Measurement Images

Each measurement has its own dedicated SVG image showing only that specific measurement point:

### Upper Body Measurements

1. **Bust** (`/measurement-bust.svg`)
   - Shows measurement around the fullest part of the bust
   - Used in: Chudi, Blouse

2. **Waist** (`/measurement-waist.svg`)
   - Shows measurement at the natural waistline (narrowest part)
   - Used in: Chudi, Blouse, Pants, Skirts

3. **Hip** (`/measurement-hip.svg`)
   - Shows measurement around the fullest part of hips and buttocks
   - Used in: Chudi, Pants, Skirts

4. **Shoulder Width** (`/measurement-shoulder.svg`)
   - Shows measurement from shoulder edge to shoulder edge across back
   - Used in: Chudi, Blouse

5. **Sleeve Length** (`/measurement-sleeve.svg`)
   - Shows measurement from shoulder point to wrist
   - Used in: Chudi, Blouse

6. **Armhole** (`/measurement-armhole.svg`)
   - Shows measurement around the armhole
   - Used in: Blouse

7. **Length** (`/measurement-length.svg`)
   - Shows measurement from shoulder to desired end point
   - Used in: Chudi (Chudi Length), Blouse (Blouse Length), Skirts (Skirt Length)

8. **Neck** (`/measurement-neck.svg`)
   - Shows front/back neck depth measurement
   - Available for: Blouse, Chudi (optional fields)

### Lower Body Measurements

9. **Inseam** (`/measurement-inseam.svg`)
   - Shows measurement from crotch to ankle (inside leg)
   - Used in: Pants

10. **Outseam** (`/measurement-outseam.svg`)
    - Shows measurement from waist to ankle (outside leg)
    - Used in: Pants

11. **Thigh** (`/measurement-thigh.svg`)
    - Shows measurement around the fullest part of the thigh
    - Used in: Pants, Skirts

12. **Knee** (`/measurement-knee.svg`)
    - Shows measurement around the knee joint
    - Available for: Pants, Skirts (optional)

13. **Calf** (`/measurement-calf.svg`)
    - Shows measurement around the fullest part of the calf
    - Available for: Pants (optional)

14. **Ankle** (`/measurement-ankle.svg`)
    - Shows measurement around the ankle bone
    - Available for: Pants (optional)

15. **Bottom Opening** (`/measurement-bottom-opening.svg`)
    - Shows measurement of leg opening circumference
    - Used in: Pants, Skirts

## Image Design

Each SVG image:
- Shows a stylized body figure
- Highlights only the specific measurement point
- Includes a visual representation of the measuring tape
- Displays clear labels and instructions
- Uses color-coded measurement lines for clarity

## Usage

All images are stored in the `public/` directory and can be referenced directly:

```tsx
{
  name: 'Hip',
  instruction: 'Measure around the fullest part...',
  imageUrl: '/measurement-hip.svg',
}
```

## Benefits

- **Focused**: Each image shows only one measurement point
- **Clear**: Users can see exactly where to measure
- **Consistent**: All images follow the same design pattern
- **Scalable**: SVG format ensures crisp display at any size
- **Fast**: Lightweight SVG files load quickly

