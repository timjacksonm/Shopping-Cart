import prevKobaltToolbag from '../../assets/products/Kobalt_Toolbag_Preview_Image.webp';
import kobaltToolbag1 from '../../assets/products/Kobalt_Toolbag_Image_1.webp';
import kobaltToolbag2 from '../../assets/products/Kobalt_Toolbag_Image_2.webp';
import kobaltToolbag3 from '../../assets/products/Kobalt_Toolbag_Image_3.webp';
import prevCraftsmanToolbag from '../../assets/products/Craftsman_Toolbag_Preview_Image.webp';
import craftsmanToolbag1 from '../../assets/products/Craftsman_Toolbag_Image_1.webp';
import craftsmanToolbag2 from '../../assets/products/Craftsman_Toolbag_Image_2.webp';
import craftsmanToolbag3 from '../../assets/products/Craftsman_Toolbag_Image_3.webp';
import prevDewaltToolbag from '../../assets/products/Dewalt_Toolbag_Preview_Image.webp';
import dewaltToolbag1 from '../../assets/products/Dewalt_Toolbag_Image_1.webp';
import dewaltToolbag2 from '../../assets/products/Dewalt_Toolbag_Image_2.webp';
import dewaltToolbag3 from '../../assets/products/Dewalt_Toolbag_Image_3.webp';

const toolBags = [
  {
    category: 'Tool Bags',
    id: 'kobalt-toolbag',
    brand: 'Kobalt',
    name: '15-in Zippered Tool Bag',
    price: '14.98',
    description: [
      'Made of 600D material for durability and resistance to water',
      'Large main compartment for easy access to interior and large pockets for more storage',
      'Multiple pockets for 6 external pockets',
    ],
    previewImage: prevKobaltToolbag,
    gallery: [kobaltToolbag1, kobaltToolbag2, kobaltToolbag3],
  },
  {
    category: 'Tool Bags',
    id: 'craftsman-toolbag',
    brand: 'Craftsman',
    name: 'VERSASTACK 17-in Zippered Tool Bag',
    price: '59.98',
    description: [
      'Premium-grade 1680 denier material in a heavy-duty construction resists wear and tear and moisture for lasting durability',
      'Hi-Vis Dual Zippers and Pocket Accents help quickly store or access tools',
      '29 Pockets and Slots for tool organization',
    ],
    previewImage: prevCraftsmanToolbag,
    gallery: [craftsmanToolbag1, craftsmanToolbag2, craftsmanToolbag3],
  },
  {
    category: 'Tool Bags',
    id: 'dewalt-toolbag',
    brand: 'Dewalt',
    name: '12-in Zippered Tool Bag',
    price: '67.95',
    description: [
      'Pop open design with large interior compartment allows for easy access to tools and parts',
      '26 Exterior pockets allow for thousands of organization options, including 2 flap covered pockets with hook and loop closures to...',
      '14 Interior pockets including one zippered pocket to secure valuables',
    ],
    previewImage: prevDewaltToolbag,
    gallery: [dewaltToolbag1, dewaltToolbag2, dewaltToolbag3],
  },
];
export default toolBags;
