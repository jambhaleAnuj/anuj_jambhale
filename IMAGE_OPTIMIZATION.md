# Image Optimization Instructions

## Current Issue

The `my_photo.webp` image (497x866px, 28.1KB) is oversized for its display dimensions, causing 14KB of unnecessary downloads.

## Display Sizes

- **Mobile/Tablet** (max-width: 1023px): 160x160px (h-40 w-40)
- **Desktop** (min-width: 1024px): 384x384px (lg:h-96 lg:w-96)

## Recommended Optimization

Create these optimized image files:

### 1. Mobile Version

```bash
# Create 160x160 version for mobile
my_photo-160.webp (target: ~4-6KB)
```

### 2. Desktop Version

```bash
# Create 384x384 version for desktop
my_photo-384.webp (target: ~8-12KB)
```

## Implementation Steps

### Option 1: Using Online Tools

1. Upload `my_photo.webp` to:

   - **Squoosh.app** (Google's image optimizer)
   - **TinyPNG**
   - **ImageOptim**

2. Create two versions:
   - Resize to 160x160px, save as `my_photo-160.webp`
   - Resize to 384x384px, save as `my_photo-384.webp`

### Option 2: Using Command Line (if you have ImageMagick)

```bash
# Install ImageMagick first, then:
magick my_photo.webp -resize 160x160^ -gravity center -extent 160x160 my_photo-160.webp
magick my_photo.webp -resize 384x384^ -gravity center -extent 384x384 my_photo-384.webp
```

### Option 3: Using Node.js (Sharp library)

```bash
npm install sharp
```

Create `optimize-images.js`:

```javascript
const sharp = require("sharp");

// Create mobile version
sharp("public/my_photo.webp")
  .resize(160, 160, { fit: "cover" })
  .webp({ quality: 85 })
  .toFile("public/my_photo-160.webp");

// Create desktop version
sharp("public/my_photo.webp")
  .resize(384, 384, { fit: "cover" })
  .webp({ quality: 85 })
  .toFile("public/my_photo-384.webp");
```

Run: `node optimize-images.js`

## Update Code After Creating Images

Replace the picture element in `src/pages/index.astro`:

```astro
<picture>
  <!-- Desktop: optimized 384x384 -->
  <source media="(min-width: 1024px)"
          srcset="/my_photo-384.webp"
          width="384"
          height="384" />
  <!-- Mobile: optimized 160x160 -->
  <source media="(max-width: 1023px)"
          srcset="/my_photo-160.webp"
          width="160"
          height="160" />
  <!-- Fallback -->
  <img src="/my_photo-384.webp"
       alt={info.picture_alt}
       width="384"
       height="384"
       loading="eager"
       class="lg:h-96 lg:w-96 h-40 w-40 rounded-full object-cover object-center"
       fetchpriority="high" />
</picture>
```

## Expected Results

- **Mobile**: 28.1KB → ~6KB (78% reduction)
- **Desktop**: 28.1KB → ~12KB (57% reduction)
- **Total Savings**: ~14KB as reported by Lighthouse

## Current Status

✅ Responsive `<picture>` element implemented
✅ Media queries and sizing optimized
✅ CSS layout shift prevention added
⏳ **Next Step**: Create optimized image files using one of the methods above
