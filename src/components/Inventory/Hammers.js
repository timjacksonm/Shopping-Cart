import prevKobaltClawHammer from '../../assets/products/Kobalt_Claw_Preview_Image.webp';
import kobaltClawHammer1 from '../../assets/products/Kobalt_Claw_Image_1.webp';
import kobaltClawHammer2 from '../../assets/products/Kobalt_Claw_Image_2.webp';
import kobaltClawHammer3 from '../../assets/products/Kobalt_Claw_Image_3.webp';
import prevCraftsmanClawHammer from '../../assets/products/Craftsman_Claw_Preview_Image.webp';
import craftsmanClawHammer1 from '../../assets/products/Craftsman_Claw_Image_1.webp';
import craftsmanClawHammer2 from '../../assets/products/Craftsman_Claw_Image_2.webp';
import craftsmanClawHammer3 from '../../assets/products/Craftsman_Claw_Image_3.webp';
import prevTektonClawHammer from '../../assets/products/Tekton_Claw_Preview_Image.webp';
import tektonClawHammer1 from '../../assets/products/Tekton_Claw_Image_1.webp';
import tektonClawHammer2 from '../../assets/products/Tekton_Claw_Image_2.webp';
import tektonClawHammer3 from '../../assets/products/Tekton_Claw_Image_3.webp';
import prevThorsMjolnirHammer from '../../assets/products/Thors_Mjolnir_Preview_Image.webp';
import ThorsMjolnirHammer1 from '../../assets/products/Thors_Mjolnir_Image_1.webp';
import ThorsMjolnirHammer2 from '../../assets/products/Thors_Mjolnir_Image_2.webp';

const hammers = [
  {
    category: 'Hammers',
    id: 'kobalt-claw-hammer',
    brand: 'Kobalt',
    name: '16-oz Smooth Face Steel Head Fiberglass Claw Hammer',
    price: '9.98',
    description: [
      'Forged and heat-treated head for durability',
      'Fiberglass core and bi-material slip-resistant handle',
      'Rim temper reduces incidence of chipping or spalling',
    ],
    previewImage: prevKobaltClawHammer,
    gallery: [kobaltClawHammer1, kobaltClawHammer2, kobaltClawHammer3],
  },
  {
    category: 'Hammers',
    id: 'craftsman-claw-hammer',
    brand: 'Craftsman',
    name: '16-oz Smooth Face Steel Head Fiberglass Claw Hammer',
    price: '11.98',
    description: [
      'DURABILITY: Overstrike protection where fiberglass handles are most prone to break',
      'IMPROVED GRIP DURING USE: Overmold grip',
      'Includes (1) 16-oz fiberglass hammer',
    ],
    previewImage: prevCraftsmanClawHammer,
    gallery: [craftsmanClawHammer1, craftsmanClawHammer2, craftsmanClawHammer3],
  },
  {
    category: 'Hammers',
    id: 'tekton-claw-hammer',
    brand: 'Tekton',
    name: '16-oz Smooth Face Steel Head Wood Claw Hammer',
    price: '13.58',
    description: [
      'Classic hickory handle naturally damps stinging vibrations',
      'Magnetic slot holds nail so you can start it and drive it with one hand',
      'Sharpened curved claw generates maximum nail-pulling leverage',
    ],
    previewImage: prevTektonClawHammer,
    gallery: [tektonClawHammer1, tektonClawHammer2, tektonClawHammer3],
  },
  {
    category: 'Hammers',
    id: 'thors-mjolnir-hammer',
    brand: 'Thor',
    name: '42.3-lb Lightning Hammer known as Mjölnir',
    price: '13.58',
    description: [
      'Long metal hilt made of Uru and is wrapped in a strip of leather',
      'Useless to non worthy wielder',
      'Can use forces of nature. Interdimensional travel - flight',
    ],
    previewImage: prevThorsMjolnirHammer,
    gallery: [ThorsMjolnirHammer1, ThorsMjolnirHammer2],
  },
];
export default hammers;
