# TypeScript to JavaScript Conversion Guide

This project has been converted from TypeScript to plain JavaScript (React.js).

## What Has Been Converted

### Core Files ✅
- `src/main.tsx` → `src/main.jsx`
- `src/App.tsx` → `src/App.jsx`
- `vite.config.ts` → `vite.config.js`
- `src/lib/api.ts` → `src/lib/api.js`
- `src/lib/utils.ts` → `src/lib/utils.js`

### Components ✅
- `src/components/forms/MeasurementForm.tsx` → `src/components/forms/MeasurementForm.jsx`
- `src/components/forms/OnlineClassForm.tsx` → `src/components/forms/OnlineClassForm.jsx`
- `src/components/forms/OfflineClassForm.tsx` → `src/components/forms/OfflineClassForm.jsx`
- `src/components/features/MeasurementGuide.tsx` → `src/components/features/MeasurementGuide.jsx`
- `src/components/layout/Header.tsx` → `src/components/layout/Header.jsx`
- `src/components/layout/Footer.tsx` → `src/components/layout/Footer.jsx`

### Pages (Need Conversion)
The following page files still need to be converted from `.tsx` to `.jsx`:
- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ClassesPage.tsx`
- `src/pages/StitchingPage.tsx`
- `src/pages/NotFound.tsx`
- `src/pages/Index.tsx`
- `src/pages/measurements/ChudiMeasurementPage.tsx`
- `src/pages/measurements/BlouseMeasurementPage.tsx`
- `src/pages/measurements/PantsMeasurementPage.tsx`
- `src/pages/measurements/SkirtsMeasurementPage.tsx`

### UI Components (Optional)
The UI components in `src/components/ui/` can remain as TypeScript since they are library components from shadcn/ui. However, if you want to convert them:

1. Remove all TypeScript type annotations (`interface`, `type`, `: Type`, etc.)
2. Remove generic type parameters (`<T>`, `<Props>`, etc.)
3. Change file extensions from `.tsx` to `.jsx` and `.ts` to `.js`
4. Remove `as` type assertions

### Hooks (Need Conversion)
- `src/hooks/use-toast.ts` → `src/hooks/use-toast.js`
- `src/hooks/use-mobile.tsx` → `src/hooks/use-mobile.jsx`

## Conversion Steps for Remaining Files

1. **Remove TypeScript syntax:**
   - Remove `interface` and `type` declarations
   - Remove type annotations (`: Type`)
   - Remove generic parameters (`<T>`)
   - Remove `as` type assertions
   - Remove `!` non-null assertions

2. **Change file extensions:**
   - `.tsx` → `.jsx`
   - `.ts` → `.js`

3. **Update imports:**
   - Change imports from `.tsx` to `.jsx`
   - Change imports from `.ts` to `.js`

4. **Update React types:**
   - `React.FormEvent` → `e` (just use the event parameter)
   - `React.FC` → Remove (just use function declarations)
   - `React.ReactNode` → Remove type annotation

## Example Conversion

### Before (TypeScript):
```tsx
interface Props {
  name: string;
  age: number;
}

export default function Component({ name, age }: Props) {
  const [count, setCount] = useState<number>(0);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  
  return <div>{name}</div>;
}
```

### After (JavaScript):
```jsx
export default function Component({ name, age }) {
  const [count, setCount] = useState(0);
  
  const handleClick = (e) => {
    e.preventDefault();
  };
  
  return <div>{name}</div>;
}
```

## Next Steps

1. Convert all page components from `.tsx` to `.jsx`
2. Convert hooks from `.ts`/`.tsx` to `.js`/`.jsx`
3. Update all imports in converted files
4. Test the application to ensure everything works
5. Optionally remove TypeScript dependencies from `package.json`

## Note

The UI components from `shadcn/ui` can remain as TypeScript since they're well-typed library components. Converting them is optional but not necessary for the project to work.

