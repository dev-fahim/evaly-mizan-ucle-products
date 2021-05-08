import { ScullyConfig } from '@scullyio/scully';

export interface Quantity {
  amount: string;
  price: string;
}

export interface Specification {
  type: string;
  value: string;
}

export interface Product {
  name: string;
  image_jpeg: string;
  image_png: string;
  quantity: Quantity[];
  description: string;
  specification: Specification[];
}

export const PRODUCTS: Product[] = [
  {
    name: 'Lichi Flower Honey',
    image_jpeg: 'assets/images/Lichu_fuler_modhu.jpg',
    image_png: 'assets/images/kalojirara_fuler_modhu_transparent.png',
    quantity: [
      {amount: '500 gram', price: 'TK 500'},
    ],
    description: '100% Organic Natural Honey is one of the healthiest substitutes of wholesome natural goodness. This Honey is collected from the purest of sources from the seasonal many kinds of flower, the forest of Sundorban and other specified region',
    specification: [
      {type: 'Brand: ', value: 'ADI KRISHI'},
      {type: 'Category: ', value: '100% Organic Honey'},
      {type: 'Product Type: ', value: 'Lichi Flower Honey'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Masterd Flower Honey',
    image_jpeg: 'assets/images/shorisha_fuler_modhu.jpg',
    image_png: 'assets/images/kalojirara_fuler_modhu_transparent.png',
    quantity: [
      {amount: '500 gram', price: 'TK 450'},
    ],
    description: '100% Organic Natural Honey is one of the healthiest substitutes of wholesome natural goodness. This Honey is collected from the purest of sources from the seasonal many kinds of flower, the forest of Sundorban and other specified region',
    specification: [
      {type: 'Brand: ', value: 'ADI KRISHI'},
      {type: 'Category: ', value: '100% Organic Honey'},
      {type: 'Product Type: ', value: 'Masterd Flower Honey'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Black Cumin Oil',
    image_jpeg: 'assets/images/kalojirar_tell.jpg',
    image_png: 'assets/images/kalojirara_fuler_modhu_transparent.png',
    quantity: [
      {amount: '100 gram', price: 'TK 220'},
    ],
    description: '100% Organic Natural Oil is one of the healthiest substitutes of wholesome natural goodness.',
    specification: [
      {type: 'Brand: ', value: 'ADI KRISHI'},
      {type: 'Category: ', value: '100% Organic Honey'},
      {type: 'Product Type: ', value: 'Black Cumin Oil'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Black Cumin Flower Honey',
    image_jpeg: 'assets/images/kalojirara_fuler_modhu.jpg',
    image_png: 'assets/images/kalojirara_fuler_modhu_transparent.png',
    quantity: [
      {amount: '500 gram', price: 'TK 650'},
    ],
    description: '100% Organic Natural Honey is one of the healthiest substitutes of wholesome natural goodness. This Honey is collected from the purest of sources from the seasonal many kinds of flower, the forest of Sundorban and other specified region',
    specification: [
      {type: 'Brand: ', value: 'ADI KRISHI'},
      {type: 'Category: ', value: '100% Organic Honey'},
      {type: 'Product Type: ', value: 'Black Cumin Flower Honey'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Sundorban Natural Honey',
    image_jpeg: 'assets/images/shundorban_natural_honey.jpg',
    image_png: 'assets/images/shundorban_natural_honey_transparent.png',
    quantity: [
      {amount: '500 gram', price: 'TK 600'},
    ],
    description: '100% Organic Natural Honey is one of the healthiest substitutes of wholesome natural goodness. This Honey is collected from the purest of sources from the seasonal many kinds of flower, the forest of Sundorban and other specified region',
    specification: [
      {type: 'Brand: ', value: 'ADI KRISHI'},
      {type: 'Category: ', value: '100% Organic Honey'},
      {type: 'Product Type: ', value: 'Sundorban Flower Honey'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Ailke Kojic Acid Brightening Cream',
    image_jpeg: 'assets/images/ailke.cea_.jpg',
    image_png: 'assets/images/ailke.cea_.jpg',
    quantity: [
      {amount: '25 gram', price: 'TK 790'},
    ],
    description: 'Brightens skin. Remove darkspots. Glowing healthy skin. Removes acne marks. Removes pimples. Minimize pores. ',
    specification: [
      {type: 'Brand: ', value: 'Ailke'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Cream'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Vitamin E Moisturizing Cream',
    image_jpeg: 'assets/images/51NyyedR8GL._SY450_.jpg',
    image_png: 'assets/images/51NyyedR8GL._SY450_.jpg',
    quantity: [
      {amount: '200 gram', price: 'TK 650'},
    ],
    description: 'Deep moisturizing Oily skin can be used Easy to absorb. Balance hormone secretion Summer can be used as a sun repair fluid Winter can be a replenishment moisturizing cream Thailand Vitamin E. The cream has a high content of vitamin E and sunflower oil from Thai producer Aron. Cream with vitamin E will moisturize the skin, eliminate dryness. Aron nourishing cream suitable for skin care of face, hands, feet and body, especially  suitable for rough skin on knees, elbows, soles of the feet. Cream with vitamin E Aron has a nice neutral smell and is easily absorbed into the skin without leaving a greasy residue on the skin and is very moisturizing, it is ideal for tight skin smoothens fine facial wrinkles due to the natural ingredients and oils that make the cream. Well suited for even the most dry and rough skin.\n' +
      '\n',
    specification: [
      {type: 'Brand: ', value: 'AR'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Cream'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'AR Vitamin E Sun Protect Q10 Plus Body Cream',
    image_jpeg: 'assets/images/63CC-134.png',
    image_png: 'assets/images/63CC-134.png',
    quantity: [
      {amount: '200 gram', price: 'TK 750'},
    ],
    description: 'Skincare cream, smooth texture With nourishing vitamins E That combines the natural value of Sunflower oil. To serve For moisture balance, reducing dryness, cracking, irritation, slowing fine lines, dark circles and dark spots While protecting UV rays in the sun, revealing smooth, soft, moist, natural glow.\n',
    specification: [
      {type: 'Brand: ', value: 'AR'},
      {type: 'Country of Origin: ', value: 'Thailand'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Cream'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Dr. Rashel Vitamin C Brightening and Anti Aging Face Serum',
    image_jpeg: 'assets/images/3b60bc539c46b32332b60395274d5f13.jpg',
    image_png: 'assets/images/3b60bc539c46b32332b60395274d5f13.jpg',
    quantity: [
      {amount: '50 gram', price: 'TK 750'},
    ],
    description: '- Anti-Aging\n' +
      '- Brightens skins\n' +
      '- Removes dirt and impurities\n' +
      '- Rejuvenates skin\n' +
      '- Makes skin soft and supple',
    specification: [
      {type: 'Brand: ', value: 'Ailke'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Serum'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'Episoft Hair Removal Inhibitor Serum',
    image_jpeg: 'assets/images/fb8ae4e17a34-29.jpg',
    image_png: 'assets/images/fb8ae4e17a34-29.jpg',
    quantity: [
      {amount: '20 gram', price: 'TK 700'},
    ],
    description: '',
    specification: [
      {type: 'Brand: ', value: 'Episoft'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Cream'},
      {type: '', value: 'Available at shops'},
    ]
  },
  {
    name: 'SCRU Cream Lips Scrub',
    image_jpeg: 'assets/images/1-4.jpg',
    image_png: 'assets/images/1-4.jpg',
    quantity: [
      {amount: '12 gram', price: 'TK 500'},
    ],
    description: 'Super moisturizing effect, this lip scrub cream is rich in sodium hyaluronate, which can deeply penetrate the skin and tightly lock the moisture of the skin. It has a good nourishing effect. Rich in collagen, the propolis lip exfoliating gel can provide enough collagen for the lips and deeply nourish the skin. Rich in propolis , can remove the aging skin tissue, make the skin of the lips more full and more elastic. ',
    specification: [
      {type: 'Brand: ', value: 'SCRU'},
      {type: 'Category: ', value: 'Cream'},
      {type: 'Product Type: ', value: 'Cream'},
      {type: '', value: 'Available at shops'},
    ]
  },
];

export function transform(input: string): string {
  return input.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function get_product_slug_index_list(products: Product[]): string[] {
  const data: string[] = [];
  let i = 1;
  for (const product of products) {
    data.push('/' + transform(product.name) + '/' + i.toString());
    i++;
  }
  return data;
}

console.log(get_product_slug_index_list(PRODUCTS));

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'evaly-mizan-ucle-products',
  outDir: './dist/static',
  routes: {
  },
  extraRoutes: get_product_slug_index_list(PRODUCTS)
};
