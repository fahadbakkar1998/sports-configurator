export const items = [
  {
    name: 'Indoor Netting',
    children: [
      {
        name: 'Shell Cage',
        imagePath: 'assets/models/thumbnails/Shell Cage.png',
        format: 'configurator',
        type: 'shellcage',
        unit: 'ft',
        defaultSize: {
          width: 40,
          height: 10,
          length: 60,
          unit: 'ft',
        },
        maxSize: 100,
        components: {
          // All points start at the back left.
          out_container: {
            name: 'Exterior',
            value: {
              width: { name: 'Width', value: 40 },
              height: { name: 'Height', value: 10 },
              length: { name: 'Length', value: 60 },
            },
          },
          out_edge: {
            name: 'Rungs',
            value: {
              thickness: {
                name: 'Thickness',
                value: 0.4,
                immutability: true,
              },
            },
          },
          in_container: {
            name: 'Interior',
            value: {
              gap: { name: 'Gap', value: 0.2, immutability: true },
              deltaZ: { name: 'Length', value: [0, 60] },
            },
          },
          dividers: {
            name: 'Dividers',
            addition: {
              deltaX: { type: 'single', name: 'Lane Width', value: 10 },
              deltaZ: { type: 'interval', name: 'Length', value: [0, 50] },
            },
            value: [
              {
                name: 'Divider 1',
                value: {
                  deltaX: { name: 'Lane Width', value: 10 },
                  deltaZ: { name: 'Length', value: [0, 60] },
                },
              },
              {
                name: 'Divider 2',
                value: {
                  deltaX: { name: 'Lane Width', value: 10 },
                  deltaZ: { name: 'Length', value: [0, 40] },
                },
              },
              {
                name: 'Divider 3',
                value: {
                  deltaX: { name: 'Lane Width', value: 10 },
                  deltaZ: { name: 'Length', value: [10, 30] },
                },
              },
            ],
          },
          rib_line: {
            name: 'RibLine',
            value: {
              diameter: {
                name: 'Diameter',
                value: 0.2,
                immutability: true,
              },
              allowableLaneWidth: {
                name: 'Limit Lane Width',
                value: 8,
                immutability: true,
              },
            },
          },
          net: {
            name: 'Net',
            value: {
              holeSize: {
                name: 'HoleSize',
                value: 0.6,
                immutability: true,
              },
              diameter: {
                name: 'Diameter',
                value: 0.1,
                immutability: true,
              },
            },
          },
        },
      },
      {
        name: 'Indoor Batting Cage',
        children: [
          {
            name: 'Single Tunnel',
            children: [
              {
                name: 'CurtainCage Easy Slide',
                imagePath:
                  'assets/models/thumbnails/CurtainCage Easy Slide.png',
                modelPath: 'assets/models/gltf/CurtainCage Easy Slide.glb',
                type: '5',
                format: 'gltf',
                defaultSize: {
                  name: '55L',
                  unit: 'ft',
                  width: 55,
                  height: 12,
                  length: 12,
                  // price: 2795,
                },
                accessories: [
                  {
                    name: 'Golf Compatible',
                    types: [
                      {
                        name: 'Not Golf Compatible',
                        extraPrice: 0,
                      },
                      {
                        name: 'Golf Compatible',
                        extraPrice: 299,
                      },
                    ],
                  },
                  {
                    name: 'Storage Cart',
                    types: [
                      {
                        name: 'No Storage Cart',
                        extraPrice: 0,
                      },
                      {
                        name: 'With Storage Cart',
                        extraPrice: 496,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Single Tunnel with Vertical Drop Lines',
            children: [
              {
                name: 'CurtainCage Line Lift',
                imagePath: 'assets/models/thumbnails/CurtainCage Line Lift.png',
                modelPath: 'assets/models/gltf/CurtainCage Line Lift.glb',
                type: '5',
                format: 'gltf',
                defaultSize: {
                  unit: 'ft',
                  width: 55,
                  height: 12,
                  length: 12,
                  // price: 1196,
                },
                accessories: [
                  {
                    name: 'Vertical Cable Finish',
                    types: [
                      {
                        name: 'Un-cut',
                        extraPrice: 0,
                      },
                      {
                        name: 'Factory Cut/Crimped to Spec',
                        extraPrice: 856,
                      },
                    ],
                  },
                  {
                    name: 'Anchors',
                    types: [
                      {
                        name: '5x5 Plates',
                        extraPrice: 0,
                      },
                      {
                        name: '8x8 Plates',
                        extraPrice: 180,
                      },
                      {
                        name: 'Ceiling Brackets Est',
                        extraPrice: 450,
                      },
                    ],
                  },
                  {
                    name: 'Structure Type',
                    types: [
                      {
                        name: 'Wood',
                        extraPrice: 0,
                      },
                      {
                        name: 'Concrete',
                        extraPrice: 0,
                      },
                      {
                        name: 'Block',
                        extraPrice: 0,
                      },
                      {
                        name: 'Brick',
                        extraPrice: 0,
                      },
                      {
                        name: 'Other',
                        extraPrice: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Multi Lane Tunnel',
            children: [
              {
                name: 'Shell Cage',
                imagePath: 'assets/models/thumbnails/Shell Cage.png',
                format: 'configurator',
                type: 'shellcage',
                unit: 'ft',
                defaultSize: {
                  width: 40,
                  height: 10,
                  length: 60,
                  unit: 'ft',
                },
                maxSize: 100,
                calcInfo: {
                  uses: ['baseball', 'golf'],
                  ribLinePrice: 0.9,
                },
                components: {
                  // All points start at the back left.
                  out_container: {
                    name: 'Exterior',
                    value: {
                      width: { name: 'Width', value: 40 },
                      height: { name: 'Height', value: 10 },
                      length: { name: 'Length', value: 60 },
                    },
                  },
                  out_edge: {
                    name: 'Rungs',
                    value: {
                      thickness: {
                        name: 'Thickness',
                        value: 0.4,
                        immutability: true,
                      },
                    },
                  },
                  in_container: {
                    name: 'Interior',
                    value: {
                      gap: { name: 'Gap', value: 0.2, immutability: true },
                      deltaZ: { name: 'Length', value: [0, 60] },
                    },
                  },
                  dividers: {
                    name: 'Dividers',
                    value: [
                      {
                        name: 'Divider 1',
                        value: {
                          deltaX: { name: 'Lane Width', value: 10 },
                          deltaZ: { name: 'Length', value: [0, 60] },
                        },
                      },
                      {
                        name: 'Divider 2',
                        value: {
                          deltaX: { name: 'Lane Width', value: 10 },
                          deltaZ: { name: 'Length', value: [0, 40] },
                        },
                      },
                      {
                        name: 'Divider 3',
                        value: {
                          deltaX: { name: 'Lane Width', value: 10 },
                          deltaZ: { name: 'Length', value: [10, 30] },
                        },
                      },
                    ],
                  },
                  rib_line: {
                    name: 'RibLine',
                    value: {
                      diameter: {
                        name: 'Diameter',
                        value: 0.2,
                        immutability: true,
                      },
                      allowableLaneWidth: {
                        name: 'Limit Lane Width',
                        value: 8,
                        immutability: true,
                      },
                    },
                  },
                  net: {
                    name: 'Net',
                    value: {
                      holeSize: {
                        name: 'HoleSize',
                        value: 0.6,
                        immutability: true,
                      },
                      diameter: {
                        name: 'Diameter',
                        value: 0.1,
                        immutability: true,
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Electric Retractable Tunnel',
            children: [
              {
                name: 'Air Cage',
                imagePath: 'assets/models/thumbnails/Air Cage.png',
                modelPath: 'assets/models/gltf/Air Cage.glb',
                type: '5',
                format: 'gltf',
                defaultSize: {
                  name: '55L',
                  unit: 'ft',
                  width: 55,
                  height: 12,
                  length: 12,
                  price: 2795,
                },
                staticSizes: [
                  {
                    name: '70L',
                    unit: 'ft',
                    width: 70,
                    height: 12,
                    length: 12,
                    extraPrice: 200,
                  },
                ],
                accessories: [
                  {
                    name: 'Golf Compatible',
                    types: [
                      {
                        name: 'Not Golf Compatible',
                        extraPrice: 0,
                      },
                      {
                        name: 'Golf Compatible',
                        extraPrice: 299,
                      },
                    ],
                  },
                  {
                    name: 'Storage Cart',
                    types: [
                      {
                        name: 'No Storage Cart',
                        extraPrice: 0,
                      },
                      {
                        name: 'With Storage Cart',
                        extraPrice: 496,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Cable Free Tunnel',
            children: [
              {
                name: 'Phantom',
                imagePath: 'assets/models/thumbnails/Shell Cage.png',
                modelPath: 'assets/models/gltf/Shell Cage.glb',
                type: '5',
                format: 'gltf',
                defaultSize: {
                  unit: 'ft',
                  width: 55,
                  height: 12,
                  length: 36,
                  price: 3427,
                },
                accessories: [
                  {
                    name: 'Number of Lanes',
                    types: [
                      {
                        name: '2 Lanes',
                        extraPrice: 0,
                      },
                      {
                        name: '3 Lanes',
                        extraPrice: 1538,
                      },
                      {
                        name: '4 Lanes',
                        extraPrice: 2967,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Indoor Hitting Cage',
        children: [
          {
            name: 'Single Hitting Cage',
          },
        ],
      },
      {
        name: 'Barrier Net',
      },
    ],
  },
  {
    name: 'Outdoor Batting Cage',
    children: [
      {
        name: 'Varsity (35ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Varsity 35.png',
        modelPath: 'assets/models/gltf/Outdoor Varsity 35.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 70,
          height: 12,
          length: 12,
          // price: 4385,
        },
        accessories: [
          {
            name: 'Netting',
            types: [
              {
                name: 'No Net',
                extraPrice: 0,
              },
              {
                name: '#36 Poly-12*12- BD3227',
                extraPrice: 776,
              },
              {
                name: '#36 Poly-12*14- BD3227',
                extraPrice: 830,
              },
              {
                name: '#36 Nylon-12*12 with NetSeal - BC2270',
                extraPrice: 1308,
              },
              {
                name: '#36 Nylon-12*14 with NetSeal - BC2470 ',
                extraPrice: 1385,
              },
            ],
          },
          {
            name: 'Pipe Gauge',
            types: [
              {
                name: '13 Gauge',
                extraPrice: 0,
              },
              {
                name: '10 Gauge',
                extraPrice: 146,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder Coated Black',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2375,
              },
            ],
          },
          {
            name: 'Delivery Address',
            types: [
              {
                name: 'Commercial',
                extraPrice: 0,
              },
              {
                name: 'Residential',
                extraPrice: 150,
              },
            ],
          },
        ],
      },
      {
        name: 'Varsity (55ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Varsity 55.png',
        modelPath: 'assets/models/gltf/Outdoor Varsity 55.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 70,
          height: 12,
          length: 12,
          // price: 4385,
        },
        accessories: [
          {
            name: 'Netting',
            types: [
              {
                name: 'No Net',
                extraPrice: 0,
              },
              {
                name: '#36 Poly-12*12- BD3227',
                extraPrice: 776,
              },
              {
                name: '#36 Poly-12*14- BD3227',
                extraPrice: 830,
              },
              {
                name: '#36 Nylon-12*12 with NetSeal - BC2270',
                extraPrice: 1308,
              },
              {
                name: '#36 Nylon-12*14 with NetSeal - BC2470 ',
                extraPrice: 1385,
              },
            ],
          },
          {
            name: 'Pipe Gauge',
            types: [
              {
                name: '13 Gauge',
                extraPrice: 0,
              },
              {
                name: '10 Gauge',
                extraPrice: 146,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder Coated Black',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2375,
              },
            ],
          },
          {
            name: 'Delivery Address',
            types: [
              {
                name: 'Commercial',
                extraPrice: 0,
              },
              {
                name: 'Residential',
                extraPrice: 150,
              },
            ],
          },
        ],
      },
      {
        name: 'Varsity (70ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Varsity 70.png',
        modelPath: 'assets/models/gltf/Outdoor Varsity 70.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 70,
          height: 12,
          length: 12,
          // price: 4385,
        },
        accessories: [
          {
            name: 'Netting',
            types: [
              {
                name: 'No Net',
                extraPrice: 0,
              },
              {
                name: '#36 Poly-12*12- BD3227',
                extraPrice: 776,
              },
              {
                name: '#36 Poly-12*14- BD3227',
                extraPrice: 830,
              },
              {
                name: '#36 Nylon-12*12 with NetSeal - BC2270',
                extraPrice: 1308,
              },
              {
                name: '#36 Nylon-12*14 with NetSeal - BC2470 ',
                extraPrice: 1385,
              },
            ],
          },
          {
            name: 'Pipe Gauge',
            types: [
              {
                name: '13 Gauge',
                extraPrice: 0,
              },
              {
                name: '10 Gauge',
                extraPrice: 146,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder Coated Black',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2375,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2375,
              },
            ],
          },
          {
            name: 'Delivery Address',
            types: [
              {
                name: 'Commercial',
                extraPrice: 0,
              },
              {
                name: 'Residential',
                extraPrice: 150,
              },
            ],
          },
        ],
      },
      {
        name: 'Collegiate (35ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Collegiate 35.png',
        modelPath: 'assets/models/gltf/Outdoor Collegiate 35.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 12,
          // price: 3783,
        },
        accessories: [
          {
            name: 'Pole Size',
            types: [
              {
                name: 'Standard Size',
                extraPrice: 0,
              },
              {
                name: 'Custom Size',
                extraPrice: 100,
              },
            ],
          },
          {
            name: 'Upgrades',
            types: [
              {
                name: 'No Upgrades',
                extraPrice: 0,
              },
              {
                name: 'With Base Anchor Kit',
                extraPrice: 242,
              },
              {
                name: 'With Kicker Stabilizers',
                extraPrice: 1347,
              },
              {
                name: 'With Base Anchor Kit and Kickers',
                extraPrice: 1589,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Hot Dipped Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder-Coated-Black',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2200,
              },
            ],
          },
        ],
      },
      {
        name: 'Collegiate (55ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Collegiate 55.png',
        modelPath: 'assets/models/gltf/Outdoor Collegiate 55.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 12,
          price: 4783,
        },
        accessories: [
          {
            name: 'Pole Size',
            types: [
              {
                name: 'Standard Size',
                extraPrice: 0,
              },
              {
                name: 'Custom Size',
                extraPrice: 100,
              },
            ],
          },
          {
            name: 'Upgrades',
            types: [
              {
                name: 'No Upgrades',
                extraPrice: 0,
              },
              {
                name: 'With Base Anchor Kit',
                extraPrice: 242,
              },
              {
                name: 'With Kicker Stabilizers',
                extraPrice: 1347,
              },
              {
                name: 'With Base Anchor Kit and Kickers',
                extraPrice: 1589,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Hot Dipped Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder-Coated-Black',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2200,
              },
            ],
          },
        ],
      },
      {
        name: 'Collegiate (70ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Collegiate 70.png',
        modelPath: 'assets/models/gltf/Outdoor Collegiate 70.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 12,
          // price: 5783,
        },
        accessories: [
          {
            name: 'Pole Size',
            types: [
              {
                name: 'Standard Size',
                extraPrice: 0,
              },
              {
                name: 'Custom Size',
                extraPrice: 100,
              },
            ],
          },
          {
            name: 'Upgrades',
            types: [
              {
                name: 'No Upgrades',
                extraPrice: 0,
              },
              {
                name: 'With Base Anchor Kit',
                extraPrice: 242,
              },
              {
                name: 'With Kicker Stabilizers',
                extraPrice: 1347,
              },
              {
                name: 'With Base Anchor Kit and Kickers',
                extraPrice: 1589,
              },
            ],
          },
          {
            name: 'Coating',
            types: [
              {
                name: 'Hot Dipped Galvanized',
                extraPrice: 0,
              },
              {
                name: 'Powder-Coated-Black',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Brown',
                extraPrice: 2200,
              },
              {
                name: 'Powder-Coated-Green',
                extraPrice: 2200,
              },
            ],
          },
        ],
      },
      {
        name: 'Double Lane Pro',
        imagePath: 'assets/models/thumbnails/Outdoor Pro 2x55.png',
        modelPath: 'assets/models/gltf/Outdoor Pro 2x55.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 24,
          price: 6449,
        },
        staticSizes: [
          {
            name: '55W*12H*14L',
            unit: 'ft',
            width: 55,
            height: 12,
            length: 28,
            extraPrice: 44,
          },
          {
            name: '70W*12H*14L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 28,
            extraPrice: 123,
          },
          {
            name: '80W*12H*14L',
            unit: 'ft',
            width: 80,
            height: 12,
            length: 28,
            extraPrice: 158,
          },
          {
            name: '70W*12H*12L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 24,
            extraPrice: 213,
          },
          {
            name: '55W*14H*14L',
            unit: 'ft',
            width: 55,
            height: 14,
            length: 28,
            extraPrice: 1169,
          },
          {
            name: '70W*14H*14L',
            unit: 'ft',
            width: 70,
            height: 14,
            length: 28,
            extraPrice: 1310,
          },
          {
            name: '80W*14H*14L',
            unit: 'ft',
            width: 80,
            height: 14,
            length: 28,
            extraPrice: 1424,
          },
        ],
      },
      {
        name: 'Pro (55ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Pro 55.png',
        modelPath: 'assets/models/gltf/Outdoor Pro 55.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 12,
          price: 6449,
        },
        staticSizes: [
          {
            name: '55W*12H*14L',
            unit: 'ft',
            width: 55,
            height: 12,
            length: 14,
            extraPrice: 44,
          },
          {
            name: '70W*12H*14L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 14,
            extraPrice: 123,
          },
          {
            name: '80W*12H*14L',
            unit: 'ft',
            width: 80,
            height: 12,
            length: 14,
            extraPrice: 158,
          },
          {
            name: '70W*12H*12L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 12,
            extraPrice: 213,
          },
          {
            name: '55W*14H*14L',
            unit: 'ft',
            width: 55,
            height: 14,
            length: 14,
            extraPrice: 1169,
          },
          {
            name: '70W*14H*14L',
            unit: 'ft',
            width: 70,
            height: 14,
            length: 14,
            extraPrice: 1310,
          },
          {
            name: '80W*14H*14L',
            unit: 'ft',
            width: 80,
            height: 14,
            length: 14,
            extraPrice: 1424,
          },
        ],
      },
      {
        name: 'Pro (70ft)',
        imagePath: 'assets/models/thumbnails/Outdoor Pro 70.png',
        modelPath: 'assets/models/gltf/Outdoor Pro 70.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'ft',
          width: 55,
          height: 12,
          length: 12,
          price: 6449,
        },
        staticSizes: [
          {
            name: '55W*12H*14L',
            unit: 'ft',
            width: 55,
            height: 12,
            length: 14,
            extraPrice: 44,
          },
          {
            name: '70W*12H*14L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 14,
            extraPrice: 123,
          },
          {
            name: '80W*12H*14L',
            unit: 'ft',
            width: 80,
            height: 12,
            length: 14,
            extraPrice: 158,
          },
          {
            name: '70W*12H*12L',
            unit: 'ft',
            width: 70,
            height: 12,
            length: 12,
            extraPrice: 213,
          },
          {
            name: '55W*14H*14L',
            unit: 'ft',
            width: 55,
            height: 14,
            length: 14,
            extraPrice: 1169,
          },
          {
            name: '70W*14H*14L',
            unit: 'ft',
            width: 70,
            height: 14,
            length: 14,
            extraPrice: 1310,
          },
          {
            name: '80W*14H*14L',
            unit: 'ft',
            width: 80,
            height: 14,
            length: 14,
            extraPrice: 1424,
          },
        ],
      },
    ],
  },
  {
    name: 'Surfacing',
    children: [
      {
        name: 'Turf Rolls',
      },
      {
        name: 'Turf Mats',
      },
      {
        name: 'Rubber',
      },
      {
        name: 'Court Tiles',
      },
    ],
  },
  {
    name: 'WindScreen',
    children: [
      {
        name: 'WindScreens',
      },
    ],
  },
  {
    name: 'Gym Equipment',
    children: [
      {
        name: 'Wall padding',
      },
      {
        name: 'Divider Curtain',
      },
    ],
  },
  {
    name: 'Training Equipment',
    children: [
      {
        name: 'Pitching Machine',
      },
      {
        name: 'L-Screen',
        imagePath: 'assets/models/thumbnails/L-Screen.png',
        modelPath: 'assets/models/gltf/L Screen.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          name: '7W*9H',
          unit: 'ft',
          width: 7,
          height: 9,
          length: 1,
          price: 599,
        },
        accessories: [
          {
            name: 'Style',
            types: [
              {
                name: 'No Wheel Kit or Padding',
                extraPrice: 0,
              },
              {
                name: 'With Padding',
                extraPrice: 100,
              },
              {
                name: 'With Wheel Kit',
                extraPrice: 100,
              },
              {
                name: 'With Padding and Wheel Kit',
                extraPrice: 150,
              },
            ],
          },
          {
            name: 'Padding Color',
            types: [
              {
                name: 'Standard/None',
                extraPrice: 0,
              },
              {
                name: 'Black',
                extraPrice: 0,
              },
              {
                name: 'Scarlet',
                extraPrice: 0,
              },
              {
                name: 'Navy',
                extraPrice: 0,
              },
              {
                name: 'Red',
                extraPrice: 0,
              },
              {
                name: 'Royal Blue',
                extraPrice: 0,
              },
              {
                name: 'Dark Green',
                extraPrice: 0,
              },
              {
                name: 'Green',
                extraPrice: 0,
              },
              {
                name: 'Grey',
                extraPrice: 0,
              },
            ],
          },
        ],
      },
      {
        name: 'Softball Screen',
        imagePath: 'assets/models/thumbnails/Softball Screen.png',
        modelPath: 'assets/models/gltf/Softball Screen.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          name: '5W*7H',
          unit: 'ft',
          width: 5,
          height: 7,
          length: 1,
          price: 399,
        },
        accessories: [
          {
            name: 'Style',
            types: [
              {
                name: 'No Wheel Kit or Padding',
                extraPrice: 0,
              },
              {
                name: 'With Padding',
                extraPrice: 100,
              },
              {
                name: 'With Wheel Kit',
                extraPrice: 100,
              },
              {
                name: 'With Padding and Wheel Kit',
                extraPrice: 150,
              },
            ],
          },
          {
            name: 'Padding Color',
            types: [
              {
                name: 'Standard/None',
                extraPrice: 0,
              },
              {
                name: 'Black',
                extraPrice: 0,
              },
              {
                name: 'Scarlet',
                extraPrice: 0,
              },
              {
                name: 'Navy',
                extraPrice: 0,
              },
              {
                name: 'Red',
                extraPrice: 0,
              },
              {
                name: 'Royal Blue',
                extraPrice: 0,
              },
              {
                name: 'Dark Green',
                extraPrice: 0,
              },
              {
                name: 'Green',
                extraPrice: 0,
              },
              {
                name: 'Grey',
                extraPrice: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Soccer',
    children: [
      {
        name: 'Goals',
        imagePath: 'assets/models/thumbnails/Goals.png',
        modelPath: 'assets/models/gltf/Goals.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          name: '24W*8H',
          unit: 'ft',
          width: 24,
          height: 8,
          length: 5,
          price: 2445,
        },
      },
    ],
  },
  {
    name: 'Slab',
    children: [
      {
        name: 'Concrete',
      },
    ],
  },
];

export const rectHome = JSON.stringify({
  floorplan: {
    version: '0.0.2a',
    corners: {
      '4bb4443f-7fab-f22d-5497-212403689ff9': { x: 0, y: 0, elevation: 2.5 },
      'ab04e8c7-2de5-2980-3ac6-358f020f0aac': { x: 10, y: 0, elevation: 2.5 },
      'c038166d-c9fc-d71a-f009-1a3010ea9749': { x: 10, y: 10, elevation: 2.5 },
      '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532': { x: 0, y: 10, elevation: 2.5 },
    },
    walls: [
      {
        corner1: '4bb4443f-7fab-f22d-5497-212403689ff9',
        corner2: 'ab04e8c7-2de5-2980-3ac6-358f020f0aac',
        frontTexture: {
          url: 'assets/rooms/textures/marbletiles.jpg',
          stretch: {
            url: 'assets/rooms/textures/wallmap.png',
            stretch: true,
            scale: 0,
          },
          scale: 300,
        },
        backTexture: {
          url: 'assets/rooms/textures/wallmap.png',
          stretch: true,
          scale: 0,
        },
        wallType: 'STRAIGHT',
        a: { x: 364.1221682976095, y: 302.09874020427594 },
        b: { x: 551.5972597957242, y: 333.6421682976096 },
      },
      {
        corner1: 'ab04e8c7-2de5-2980-3ac6-358f020f0aac',
        corner2: 'c038166d-c9fc-d71a-f009-1a3010ea9749',
        frontTexture: {
          url: 'assets/rooms/textures/marbletiles.jpg',
          stretch: {
            url: 'assets/rooms/textures/wallmap.png',
            stretch: true,
            scale: 0,
          },
          scale: 300,
        },
        backTexture: {
          url: 'assets/rooms/textures/wallmap.png',
          stretch: true,
          scale: 0,
        },
        wallType: 'STRAIGHT',
        a: { x: 603.3235350530827, y: 309.21587164830146 },
        b: { x: 583.0881283516987, y: 465.14753505308255 },
      },
      {
        corner1: 'c038166d-c9fc-d71a-f009-1a3010ea9749',
        corner2: '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532',
        frontTexture: {
          url: 'assets/rooms/textures/marbletiles.jpg',
          stretch: {
            url: 'assets/rooms/textures/wallmap.png',
            stretch: true,
            scale: 0,
          },
          scale: 300,
        },
        backTexture: {
          url: 'assets/rooms/textures/wallmap.png',
          stretch: true,
          scale: 0,
        },
        wallType: 'STRAIGHT',
        a: { x: 534.2355350530825, y: 465.1475350530825 },
        b: { x: 358.06846494691763, y: 465.14753505308244 },
      },
      {
        corner1: '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532',
        corner2: '4bb4443f-7fab-f22d-5497-212403689ff9',
        frontTexture: {
          url: 'assets/rooms/textures/marbletiles.jpg',
          stretch: {
            url: 'assets/rooms/textures/wallmap.png',
            stretch: true,
            scale: 0,
          },
          scale: 300,
        },
        backTexture: {
          url: 'assets/rooms/textures/wallmap.png',
          stretch: true,
          scale: 0,
        },
        wallType: 'STRAIGHT',
        a: { x: 372.43687474062824, y: 450.7791252593718 },
        b: { x: 372.43687474062824, y: 262.7088747406283 },
      },
    ],
    rooms: {
      '4bb4443f-7fab-f22d-5497-212403689ff9,ab04e8c7-2de5-2980-3ac6-358f020f0aac,c038166d-c9fc-d71a-f009-1a3010ea9749,453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532':
        { name: 'Simple' },
    },
    wallTextures: [],
    floorTextures: {},
    newFloorTextures: {},
    carbonSheet: {
      url: '',
      transparency: 1,
      x: 0,
      y: 0,
      anchorX: 0,
      anchorY: 0,
      width: 0.01,
      height: 0.01,
    },
  },
  items: [],
});

export const wallTextures = [
  {
    name: 'Grey',
    url: 'assets/rooms/textures/wallmap.png',
    stretch: true,
    scale: 1,
  },
  {
    name: 'Bricks',
    url: 'assets/rooms/textures/light_brick.jpg',
    stretch: false,
    scale: 50,
  },
  {
    name: 'Marble',
    url: 'assets/rooms/textures/marbletiles.jpg',
    stretch: false,
    scale: 300,
  },
  {
    name: 'LightWood',
    url: 'assets/rooms/textures/light_fine_wood.jpg',
    stretch: false,
    scale: 300,
  },
  {
    name: 'HardWood',
    url: 'assets/rooms/textures/hardwood.png',
    stretch: false,
    scale: 300,
  },
];
