```javascript
// Ensure that purge is configured correctly in your tailwind.config.js file
// ... (tailwind.config.js) ...
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '//your jsx or tsx files...'],
  // ... rest of your tailwind config
}

// some tailwind classes are applied
<div className="bg-red-500 hover:bg-blue-700 transition duration-300 ease-in-out">
  <p>This is a paragraph</p>
</div>
```