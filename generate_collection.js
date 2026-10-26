const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFile = path.join(__dirname, 'src', 'data', 'extendedProducts.js');

// Elegant words for generation
const themes = ["Kashmiri Spring", "Autumn Chinar", "Misty Valleys", "Lotus Pond", "Forest Flora", "Royal Heritage"];
const materials = ["Ochre Gold", "Yellow Gold", "White Gold", "Rose Gold", "Platinum"];
const adjectives = ["Blossoming", "Radiant", "Whispering", "Majestic", "Eternal", "Imperial", "Velvet", "Celestial"];
const nouns = ["Band", "Halo Ring", "Cocktail Ring", "Solitaire", "Signet", "Crown Ring", "Vine Ring"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateProductName() {
  return `${getRandom(adjectives)} ${getRandom(themes).split(' ')[0]} ${getRandom(nouns)}`;
}

function generatePrice() {
  return (Math.floor(Math.random() * 50) + 15) * 1000; // $15k to $65k
}

try {
  const files = fs.readdirSync(imagesDir);
  
  // Filter for JPGs only, ignore CR2 and other large raw files
  const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg'));
  
  // Let's cap it at 40 images so the gallery is rich but doesn't crash the browser
  const selectedFiles = jpgFiles.slice(0, 42); 
  
  const generatedProducts = selectedFiles.map((file, index) => {
    return {
      id: `RD-RNG-${(1000 + index).toString()}`,
      name: generateProductName(),
      category: "Rings",
      theme: getRandom(themes),
      designer: "Pooja Soni",
      description: "A masterfully crafted piece from our extended collection. Each curve and setting is designed to capture the breathtaking beauty of Kashmir, reflecting unparalleled craftsmanship.",
      image: `/images/${file}`,
      details: {
        metal: `18K ${getRandom(materials)}`,
        metalWeight: `${(Math.random() * 15 + 5).toFixed(2)} gms`,
        diamondWeight: `${(Math.random() * 3 + 0.5).toFixed(2)} carats`,
        diamondClarity: "VVS-VS, EF Color",
        gemstone: Math.random() > 0.5 ? "Natural Emerald" : "None",
        gemstoneWeight: Math.random() > 0.5 ? `${(Math.random() * 4 + 1).toFixed(2)} carats` : "0.00 carats"
      }
    };
  });

  const fileContent = `// AUTO-GENERATED MASSIVE LOOKBOOK
export const extendedProducts = ${JSON.stringify(generatedProducts, null, 2)};
`;

  fs.writeFileSync(outputFile, fileContent);
  console.log(`Successfully generated ${generatedProducts.length} premium ring listings into extendedProducts.js!`);
  
} catch (error) {
  console.error("Error generating collection:", error);
}
