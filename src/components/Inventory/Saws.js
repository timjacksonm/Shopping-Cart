import prevCraftsmanCircularSaw from '../../assets/products/Craftsman_Saw_Preview_Image.webp';
import craftsmanCircularSaw1 from '../../assets/products/Craftsman_Saw_Image_1.webp';
import craftsmanCircularSaw2 from '../../assets/products/Craftsman_Saw_Image_2.webp';
import craftsmanCircularSaw3 from '../../assets/products/Craftsman_Saw_Image_3.webp';
import prevDewaltCircularSaw from '../../assets/products/Dewalt_Saw_Preview_Image.webp';
import dewaltCircularSaw1 from '../../assets/products/Dewalt_Saw_Image_1.webp';
import dewaltCircularSaw2 from '../../assets/products/Dewalt_Saw_Image_2.webp';
import dewaltCircularSaw3 from '../../assets/products/Dewalt_Saw_Image_3.webp';
import prevBoschCircularSaw from '../../assets/products/Bosch_Saw_Preview_Image.webp';
import boschCircularSaw1 from '../../assets/products/Bosch_Saw_Image_1.webp';
import boschCircularSaw2 from '../../assets/products/Bosch_Saw_Image_2.webp';
import boschCircularSaw3 from '../../assets/products/Bosch_Saw_Image_3.webp';
import prevKobaltCircularSaw from '../../assets/products/Kobalt_Saw_Preview_Image.webp';
import kobaltCircularSaw1 from '../../assets/products/Kobalt_Saw_Image_1.webp';
import kobaltCircularSaw2 from '../../assets/products/Kobalt_Saw_Image_2.webp';
import kobaltCircularSaw3 from '../../assets/products/Kobalt_Saw_Image_3.webp';

const circularSaws = [
  {
    category: 'Saws',
    id: 'craftsman-circular-saw',
    brand: 'Craftsman',
    name: 'V20 20-Volt Max 6-1/2-in Cordless Circular Saw with Brake and Metal Shoe',
    price: '$79.00',
    description: [
      'HIGH PERFORMANCE: 4,200-RPM/s for aggressive fast cutting',
      'CROSS CUTTING CAPABILITIES: Cordless Circular saw accepts 6-1/2-in blades for cross cutting or ripping 2X material',
      'TOOL-FREE: Beveling shoe pivots up to 50° for angled cuts',
    ],
    previewImage: prevCraftsmanCircularSaw,
    gallery: [
      craftsmanCircularSaw1,
      craftsmanCircularSaw2,
      craftsmanCircularSaw3,
    ],
  },
  {
    category: 'Saws',
    id: 'dewalt-circular-saw',
    brand: 'Dewalt',
    name: '20-Volt Max 6-1/2-in Cordless Circular Saw with Brake and Magnesium Shoe',
    price: '$99.00',
    description: [
      '5150 RPM motor delivers power and speed to make the most demanding cuts with ease',
      'High strength and lightweight magnesium shoe provides jobsite durability for long-term cut accuracy',
      'Optimized rubber overmolded comfort grip delivers optimal balance and control',
    ],
    previewImage: prevDewaltCircularSaw,
    gallery: [dewaltCircularSaw1, dewaltCircularSaw2, dewaltCircularSaw3],
  },
  {
    category: 'Saws',
    id: 'bosch-circular-saw',
    brand: 'Bosch',
    name: '18-Volt 6-1/2-in Cordless Circular Saw with Brake and Aluminum Shoe',
    price: '$113.05',
    description: [
      'Ergonomic main handle – angled for ease in pushing the saw forward',
      '6-1/2 In. saw blade – cuts through 2 In. and cuts through 2 In. at 90Â° cuts through 2x material across entire bevel range',
      'Convenient 50Â° bevel range on saw – contributes enhanced versatility',
    ],
    previewImage: prevBoschCircularSaw,
    gallery: [boschCircularSaw1, boschCircularSaw2, boschCircularSaw3],
  },
  {
    category: 'Saws',
    id: 'kobalt-circular-saw',
    brand: 'Kobalt',
    name: 'XTR 24-Volt Max 7-1/4-in Brushless Cordless Circular Saw with Brake and Metal Shoe',
    price: '$149.00',
    description: [
      'Brushless motor delivers 5,500-RPM and provides longer motor life (for best performance utilize a 4.0Ah or larger Ah battery.)',
      '0-56Â° Bevel with bevel stops allows for a variety of cutting applications',
      '2-1/2-Inch cut depth at 90⁰',
    ],
    previewImage: prevKobaltCircularSaw,
    gallery: [kobaltCircularSaw1, kobaltCircularSaw2, kobaltCircularSaw3],
  },
];
export default circularSaws;
