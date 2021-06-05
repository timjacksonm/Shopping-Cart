import prevDewaltDrill from '../../assets/products/Dewalt_Drill_Preview_Image.webp';
import dewaltDrill1 from '../../assets/products/Dewalt_Drill_Image_1.webp';
import dewaltDrill2 from '../../assets/products/Dewalt_Drill_Image_2.webp';
import dewaltDrill3 from '../../assets/products/Dewalt_Drill_Image_3.webp';
import prevBoschDrill from '../../assets/products/Bosch_Drill_Preview_Image.webp';
import boschDrill1 from '../../assets/products/Bosch_Drill_Image_1.webp';
import boschDrill2 from '../../assets/products/Bosch_Drill_Image_2.webp';
import boschDrill3 from '../../assets/products/Bosch_Drill_Image_3.webp';
import prevCraftsmanDrill from '../../assets/products/Craftsman_Drill_Preview_Image.webp';
import craftsmanDrill1 from '../../assets/products/Craftsman_Drill_Image_1.webp';
import craftsmanDrill2 from '../../assets/products/Craftsman_Drill_Image_2.webp';
import craftsmanDrill3 from '../../assets/products/Craftsman_Drill_Image_3.webp';
import prevKobaltDrill from '../../assets/products/Kobalt_Drill_Preview_Image.webp';
import kobaltDrill1 from '../../assets/products/Kobalt_Drill_Image_1.webp';
import kobaltDrill2 from '../../assets/products/Kobalt_Drill_Image_2.webp';
import kobaltDrill3 from '../../assets/products/Kobalt_Drill_Image_3.webp';

const drills = [
  {
    category: 'Drills',
    id: 'dewalt-drill',
    brand: 'Dewalt',
    name: '20-Volt Max 1/2-in Brushless Cordless Drill',
    price: '$119.00',
    description: [
      'DEWALT brushless motor delivers more run time over brushed',
      'Compact (7.52-front to back), lightweight design fits into tight areas',
      'Ergonomic comfort grip handle provides ideal balance and tool control',
    ],
    previewImage: prevDewaltDrill,
    gallery: [dewaltDrill1, dewaltDrill2, dewaltDrill3],
  },
  {
    category: 'Drills',
    id: 'bosch-drill',
    brand: 'Bosch',
    name: '36-Volt 1/2-in Cordless Drill',
    price: '$499.00',
    description: [
      'KickBack Control – reduces the risk from sudden rotational torque reaction in a bind-up scenario',
      'Precision clutch with 25+1 settings – provides driving accuracy for reduced fastener damage',
      'Upgraded all-metal chuck – for more durability, along with first-rate bit retention',
    ],
    previewImage: prevBoschDrill,
    gallery: [boschDrill1, boschDrill2, boschDrill3],
  },
  {
    category: 'Drills',
    id: 'craftsman-drill',
    brand: 'Craftsman',
    name: 'V20 20-Volt Max 1/2-in Cordless Drill',
    price: '$59.00',
    description: [
      'HIGH PERFORMANCE: Produces 280 unit watts out for completing a variety of applications',
      'INCREASED SPEED: 2-Speed gearbox with speeds of 0-350/0-1,500',
      'EASY BIT CHANGES: 1/2-in keyless chuck',
    ],
    previewImage: prevCraftsmanDrill,
    gallery: [craftsmanDrill1, craftsmanDrill2, craftsmanDrill3],
  },
  {
    category: 'Drills',
    id: 'kobalt-drill',
    brand: 'Kobalt',
    name: 'XTR 24-Volt Max 1/2-in Brushless Cordless Drill',
    price: '$139.00',
    description: [
      'Brushless motor delivers up to 1,200 in-lbs of torque',
      'Anti-kickback technology for improved control',
      'Compatible with current KOBALT 24V Max tools, batteries and chargers',
    ],
    previewImage: prevKobaltDrill,
    gallery: [kobaltDrill1, kobaltDrill2, kobaltDrill3],
  },
];
export default drills;
