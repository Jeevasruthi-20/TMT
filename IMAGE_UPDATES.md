# Image Updates Required

This document lists the image URLs that need to be updated with the actual images you provided.

## Measurement Images

### Comprehensive Measurement Guide
- **File**: `public/measurement-comprehensive.svg`
- **Description**: Cartoon-style illustration with woman in profile showing multiple measurement points (waist, hip, knee, calf, ankle, instep)
- **Status**: SVG created, but you may want to replace with the actual image file
- **Usage**: Used in all measurement pages

## Stitching Page Images

### Chudi
- **Current**: Placeholder URL
- **Should be**: Image 5 - Woman in kurti and pants (floral pattern, beige/off-white base)
- **Location**: `src/pages/StitchingPage.jsx` - services array, Chudi image property

### Pants
- **Current**: Placeholder URL
- **Should be**: Image 4 - Triptych of cropped trousers (three panels showing different trouser styles)
- **Location**: `src/pages/StitchingPage.jsx` - services array, Pants image property

### Skirts
- **Current**: Placeholder URL
- **Should be**: Image 6 - Woman with black crop top and floral skirt (cream/off-white with green leaves and orange/peach flowers)
- **Location**: `src/pages/StitchingPage.jsx` - services array, Skirts image property

### Saree (New)
- **Current**: Placeholder URL
- **Should be**: Image 3 - Woman in traditional Indian attire (red blouse/choli with lehenga, front and back views)
- **Location**: `src/pages/StitchingPage.jsx` - services array, Saree image property

## Classes Page Images

### Tailoring Classes
- **Current**: Placeholder URL
- **Should be**: Image 9 - Women working at sewing machines in workshop
- **Location**: `src/pages/ClassesPage.jsx` - classes array, tailoring image property

### Aari Work Classes
- **Current**: Placeholder URL
- **Should be**: Image 8 - Red fabric with gold embroidery and bird motif (close-up of intricate embroidery work)
- **Location**: `src/pages/ClassesPage.jsx` - classes array, aari image property

### Embroidery Classes
- **Current**: Placeholder URL
- **Should be**: Image 7 - Fuchsia pink aari blouse (laid flat, showing intricate gold beadwork and embroidery)
- **Location**: `src/pages/ClassesPage.jsx` - classes array, embroidery image property

## How to Update

1. Save the actual image files to the `public/` directory or your image hosting service
2. Update the image URLs in the respective files:
   - `src/pages/StitchingPage.jsx` - Update image URLs in the services array
   - `src/pages/ClassesPage.jsx` - Update image URLs in the classes array
3. For the comprehensive measurement image, either:
   - Replace `public/measurement-comprehensive.svg` with your actual image file
   - Or update the path in `src/components/features/MeasurementGuide.jsx`

## Notes

- All images should be optimized for web (recommended: WebP or optimized JPG/PNG)
- Recommended dimensions:
  - Stitching page service images: 600x400px or 600x800px
  - Classes page images: 600x400px
  - Measurement guide: 600x800px or larger for detail
- Ensure images are accessible and load quickly

