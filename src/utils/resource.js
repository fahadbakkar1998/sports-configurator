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
        },
        // components: {
        //   // All points start at the back left.
        //   out_container: {
        //     width: 40,
        //     height: 10,
        //     length: 60,
        //   },
        //   out_edge: {
        //     thickness: 0.4,
        //   },
        //   in_container: {
        //     gap: 0.4,
        //     deltaZ: [0, 50],
        //   },
        //   dividers: [
        //     {
        //       deltaX: 10,
        //       deltaZ: [0, 50],
        //     },
        //     {
        //       deltaX: 10,
        //       deltaZ: [0, 40],
        //     },
        //     {
        //       deltaX: 10,
        //       deltaZ: [10, 20],
        //     },
        //   ],
        //   rib_line: {
        //     diameter: 0.2,
        //     allowableLaneWidth: 8,
        //   },
        // },
        components: {
          // All points start at the back left.
          out_container: {
            name: 'OutContainer',
            value: {
              width: { name: 'Width', value: 40 },
              height: { name: 'Height', value: 10 },
              length: { name: 'Length', value: 60 },
            },
          },
          out_edge: {
            name: 'OutEdge',
            value: {
              thickness: { name: 'Thickness', value: 0.4 },
            },
          },
          in_container: {
            name: 'InContainer',
            value: {
              gap: { name: 'Gap', value: 0.4 },
              deltaZ: { name: 'DeltaZ', value: [0, 50] },
            },
          },
          dividers: {
            name: 'Dividers',
            value: [
              {
                name: 'Divider1',
                value: {
                  deltaX: { name: 'DeltaX', value: 10 },
                  deltaZ: { name: 'DeltaZ', value: [0, 50] },
                },
              },
              {
                name: 'Divider2',
                value: {
                  deltaX: { name: 'DeltaX', value: 10 },
                  deltaZ: { name: 'DeltaZ', value: [0, 40] },
                },
              },
              {
                name: 'Divider3',
                value: {
                  deltaX: { name: 'DeltaX', value: 10 },
                  deltaZ: { name: 'DeltaZ', value: [10, 30] },
                },
              },
            ],
          },
          rib_line: {
            name: 'RibLine',
            value: {
              diameter: { name: 'Diameter', value: 0.2 },
              allowableLaneWidth: { name: 'AllowableLaneWidth', value: 8 },
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
                // staticSizes: [
                //   {
                //     name: '70L',
                //     unit: 'ft',
                //     width: 70,
                //     height: 12,
                //     length: 12,
                //     extraPrice: 200,
                //   },
                // ],
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
        modelPath: 'assets/models/gltf/Outdoor_Varsity_35_New.glb',
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
  {
    name: 'Test',
    children: [
      {
        name: '1',
        imagePath: 'assets/models/thumbnails/thumbnail_duck.png',
        modelPath: 'assets/models/js/Duck.gltf',
        type: '1',
        format: 'gltf',
        defaultSize: {
          name: 'defaultSize',
          unit: 'cm',
          width: 100,
          height: 100,
          length: 50,
          price: 60,
          pricePerUnit: 1,
        },
        staticSizes: [
          {
            name: 'staticSize1',
            unit: 'cm',
            width: 150,
            height: 150,
            length: 100,
            extraPrice: 40,
          },
          {
            name: 'staticSize2',
            unit: 'cm',
            width: 200,
            height: 200,
            length: 150,
            extraPrice: 80,
          },
        ],
        accessories: [
          {
            name: 'accessory1',
            types: [
              {
                name: 'noType',
                extraPrice: 0,
              },
              {
                name: 'type11',
                extraPrice: 10,
              },
              {
                name: 'type12',
                extraPrice: 20,
              },
              {
                name: 'type13',
                extraPrice: 30,
              },
            ],
          },
          {
            name: 'accessory2',
            types: [
              {
                name: 'noType',
                extraPrice: 0,
              },
              {
                name: 'type21',
                extraPrice: 10,
              },
              {
                name: 'type22',
                extraPrice: 20,
              },
              {
                name: 'type23',
                extraPrice: 30,
              },
            ],
          },
        ],
      },
      {
        name: '2',
        imagePath: 'assets/models/thumbnails_new/bathroomCabinet.png',
        modelPath: 'assets/models/gltf/bathroomCabinet.glb',
        type: '2',
        format: 'gltf',
        defaultSize: {
          unit: 'cm',
          width: 100,
          height: 80,
          length: 20,
          price: 60,
          pricePerUnit: 1,
        },
      },
      {
        name: '3',
        imagePath: 'assets/models/thumbnails/thumbnail_window.png',
        modelPath: 'assets/models/js/whitewindow.js',
        type: '3',
        defaultSize: {
          unit: 'ft',
          width: 2,
          height: 2,
          length: 0.2,
          price: 60,
          pricePerUnit: 1,
        },
      },
      {
        name: '4',
        imagePath: 'assets/models/thumbnails_new/ceilingFan.png',
        modelPath: 'assets/models/gltf/ceilingFan.gltf',
        type: '4',
        format: 'gltf',
      },
      {
        name: '5',
        imagePath: 'assets/models/thumbnails_new/stairs.png',
        modelPath: 'assets/models/gltf/stairs.glb',
        type: '5',
        format: 'gltf',
        defaultSize: {
          unit: 'cm',
          width: 55,
          height: 12,
          length: 24,
          price: 6449,
        },
        staticSizes: [
          {
            name: '55W*12H*14L',
            unit: 'cm',
            width: 55,
            height: 12,
            length: 28,
            extraPrice: 44,
          },
          {
            name: '70W*12H*14L',
            unit: 'cm',
            width: 70,
            height: 12,
            length: 28,
            extraPrice: 123,
          },
          {
            name: '80W*12H*14L',
            unit: 'cm',
            width: 80,
            height: 12,
            length: 28,
            extraPrice: 158,
          },
          {
            name: '70W*12H*12L',
            unit: 'cm',
            width: 70,
            height: 12,
            length: 24,
            extraPrice: 213,
          },
          {
            name: '55W*14H*14L',
            unit: 'cm',
            width: 55,
            height: 14,
            length: 28,
            extraPrice: 1169,
          },
          {
            name: '70W*14H*14L',
            unit: 'cm',
            width: 70,
            height: 14,
            length: 28,
            extraPrice: 1310,
          },
          {
            name: '80W*14H*14L',
            unit: 'cm',
            width: 80,
            height: 14,
            length: 28,
            extraPrice: 1424,
          },
        ],
      },
      {
        name: '7',
        imagePath:
          'assets/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
        modelPath: 'assets/models/js/closed-door28x80_baked.js',
        type: '7',
      },
      {
        name: '8',
        imagePath: 'assets/models/thumbnails/thumbnail_cb-blue-block60x96.png',
        modelPath: 'assets/models/js/cb-blue-block-60x96.js',
        type: '8',
      },
      {
        name: 'Simplecabinet',
        imagePath: 'assets/models/thumbnails_new/SimpleCabinet.png',
        modelPath: 'assets/models/gltf/SimpleCabinet.glb',
        type: '9',
        format: 'gltf',
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

// export const items = [
//   {
//     name: 'Building',
//     children: [
//       {
//         name: 'Duck',
//         imagePath: 'assets/models/thumbnails/thumbnail_duck.png',
//         modelPath: 'assets/models/js/Duck.gltf',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'BathroomCabinet',
//         imagePath: 'assets/models/thumbnails_new/bathroomCabinet.png',
//         modelPath: 'assets/models/gltf/bathroomCabinet.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'whitewindow',
//         imagePath: 'assets/models/thumbnails/thumbnail_window.png',
//         modelPath: 'assets/models/js/whitewindow.js',
//         type: '3',
//       },
//       {
//         name: 'ceilingFan',
//         imagePath: 'assets/models/thumbnails_new/ceilingFan.png',
//         modelPath: 'assets/models/gltf/ceilingFan.gltf',
//         type: '4',
//         format: 'gltf',
//       },
//       {
//         name: 'Stairs',
//         imagePath: 'assets/models/thumbnails_new/stairs.png',
//         modelPath: 'assets/models/gltf/stairs.glb',
//         type: '5',
//         format: 'gltf',
//       },
//       {
//         name: 'closed-door',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
//         modelPath: 'assets/models/js/closed-door28x80_baked.js',
//         type: '7',
//       },
//       {
//         name: 'blue-block',
//         imagePath: 'assets/models/thumbnails/thumbnail_cb-blue-block60x96.png',
//         modelPath: 'assets/models/js/cb-blue-block-60x96.js',
//         type: '8',
//       },
//       {
//         name: 'SimpleCabinet',
//         imagePath: 'assets/models/thumbnails_new/SimpleCabinet.png',
//         modelPath: 'assets/models/gltf/SimpleCabinet.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'BathroomCabinetDrawer',
//         imagePath: 'assets/models/thumbnails_new/bathroomCabinetDrawer.png',
//         modelPath: 'assets/models/gltf/bathroomCabinetDrawer.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'books',
//         imagePath: 'assets/models/thumbnails_new/books.png',
//         modelPath: 'assets/models/gltf/books.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'BathroomMirror',
//         imagePath: 'assets/models/thumbnails_new/bathroomMirror.png',
//         modelPath: 'assets/models/gltf/bathroomMirror.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'BathroomSink',
//         imagePath: 'assets/models/thumbnails_new/bathroomSink.png',
//         modelPath: 'assets/models/gltf/bathroomSink.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'BathroomSinkSquare',
//         imagePath: 'assets/models/thumbnails_new/bathroomSinkSquare.png',
//         modelPath: 'assets/models/gltf/bathroomSinkSquare.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Bathtub',
//         imagePath: 'assets/models/thumbnails_new/bathtub.png',
//         modelPath: 'assets/models/gltf/bathtub.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Bear',
//         imagePath: 'assets/models/thumbnails_new/bear.png',
//         modelPath: 'assets/models/gltf/bear.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'BedBunk',
//         imagePath: 'assets/models/thumbnails_new/bedBunk.png',
//         modelPath: 'assets/models/gltf/bedBunk.glb',
//         type: '1',
//         format: 'gltf',
//       },
//     ],
//   },
//   {
//     name: 'Sports Court',
//     children: [
//       {
//         name: '1',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg',
//         modelPath: 'assets/models/js/gus-churchchair-whiteoak.js',
//         type: '1',
//       },
//       {
//         name: '2',
//         imagePath: 'assets/models/thumbnails/thumbnail_nyc2.jpg',
//         modelPath: 'assets/models/js/nyc-poster2.js',
//         type: '2',
//       },
//       {
//         name: '9',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg',
//         modelPath: 'assets/models/js/cb-clapboard_baked.js',
//         type: '9',
//       },
//     ],
//   },
//   {
//     name: 'Turf',
//     children: [
//       {
//         name: 'Open Door',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png',
//         modelPath: 'assets/models/js/open_door.js',
//         type: '7',
//       },
//       {
//         name: 'Red Chair',
//         imagePath: 'assets/models/thumbnails/thumbnail_tn-orange.png',
//         modelPath: 'assets/models/js/ik-ekero-orange_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Blue Chair',
//         imagePath: 'assets/models/thumbnails/thumbnail_ekero-blue3.png',
//         modelPath: 'assets/models/js/ik-ekero-blue_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Dresser - Dark Wood',
//         imagePath: 'assets/models/thumbnails/thumbnail_matera_dresser_5.png',
//         modelPath: 'assets/models/js/DWR_MATERA_DRESSER2.js',
//         type: '1',
//       },
//       {
//         name: 'Dresser - White',
//         imagePath: 'assets/models/thumbnails/thumbnail_img25o.jpg',
//         modelPath: 'assets/models/js/we-narrow6white_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Bedside table - Shale',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg',
//         modelPath: 'assets/models/js/bd-shalebedside-smoke_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Bedside table - White',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg',
//         modelPath: 'assets/models/js/cb-archnight-white_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Wardrobe - White',
//         imagePath: 'assets/models/thumbnails/thumbnail_TN-ikea-kvikine.png',
//         modelPath: 'assets/models/js/ik-kivine_baked.js',
//         type: '1',
//       },
//       {
//         name: 'Full Bed',
//         imagePath:
//           'assets/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG',
//         modelPath: 'assets/models/js/ik_nordli_full.js',
//         type: '1',
//       },
//       {
//         name: 'Bookshelf',
//         imagePath: 'assets/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg',
//         modelPath: 'assets/models/js/cb-kendallbookcasewalnut_baked.js',
//         type: '1',
//       },
//     ],
//   },
//   {
//     name: 'Rubber Flooring',
//     children: [
//       {
//         name: 'Tiles',
//         children: [
//           {
//             name: 'Media Console - Black',
//             imagePath:
//               'assets/models/thumbnails/thumbnail_moore-60-media-console-1.jpg',
//             modelPath: 'assets/models/js/cb-moore_baked.js',
//             type: '9',
//           },
//           {
//             name: 'Sectional - Olive',
//             imagePath: 'assets/models/thumbnails/thumbnail_img21o.jpg',
//             modelPath: 'assets/models/js/we-crosby2piece-greenbaked.js',
//             type: '1',
//           },
//           {
//             name: 'Sofa - Grey',
//             imagePath: 'assets/models/thumbnails/thumbnail_rochelle-sofa-3.jpg',
//             modelPath: 'assets/models/js/cb-rochelle-gray_baked.js',
//             type: '1',
//           },
//           {
//             name: 'Wooden Trunk',
//             imagePath: 'assets/models/thumbnails/thumbnail_teca-storage-trunk.jpg',
//             modelPath: 'assets/models/js/cb-tecs_baked.js',
//             type: '1',
//           },
//           {
//             name: 'Floor Lamp',
//             imagePath: 'assets/models/thumbnails/thumbnail_ore-white.png',
//             modelPath: 'assets/models/js/ore-3legged-white_baked.js',
//             type: '1',
//           },
//           {
//             name: 'Coffee Table - Wood',
//             imagePath:
//               'assets/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG',
//             modelPath: 'assets/models/js/ik-stockholmcoffee-brown.js',
//             type: '1',
//           },
//           {
//             name: 'Side Table',
//             imagePath:
//               'assets/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png',
//             modelPath: 'assets/models/js/GUSossingtonendtable.js',
//             type: '1',
//           },
//           {
//             name: 'Dining Table',
//             imagePath:
//               'assets/models/thumbnails/thumbnail_scholar-dining-table.jpg',
//             modelPath: 'assets/models/js/cb-scholartable_baked.js',
//             type: '1',
//           },
//           {
//             name: 'Dining table',
//             imagePath:
//               'assets/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png',
//             modelPath: 'assets/models/js/BlakeAvenuejoshuatreecheftable.js',
//             type: '1',
//           },

//           {
//             name: 'Simple Cabinet',
//             imagePath: 'assets/models/thumbnails/thumbnail_cabinet.png',
//             modelPath: 'assets/models/js/cabinet.json',
//             type: '1',
//           },
//         ],
//       },
//       { name: 'Rolls', children: [] },
//     ],
//   },
//   {
//     name: 'Playground Surfaces',
//     children: [
//       {
//         name: 'Beddouble',
//         imagePath: 'assets/models/thumbnails_new/bedDouble.png',
//         modelPath: 'assets/models/gltf/bedDouble.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Bedsingle',
//         imagePath: 'assets/models/thumbnails_new/bedSingle.png',
//         modelPath: 'assets/models/gltf/bedSingle.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Bench',
//         imagePath: 'assets/models/thumbnails_new/bench.png',
//         modelPath: 'assets/models/gltf/bench.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Benchcushion',
//         imagePath: 'assets/models/thumbnails_new/benchCushion.png',
//         modelPath: 'assets/models/gltf/benchCushion.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Benchcushionlow',
//         imagePath: 'assets/models/thumbnails_new/benchCushionLow.png',
//         modelPath: 'assets/models/gltf/benchCushionLow.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Bookcaseclosed',
//         imagePath: 'assets/models/thumbnails_new/bookcaseClosed.png',
//         modelPath: 'assets/models/gltf/bookcaseClosed.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Bookcasecloseddoors',
//         imagePath: 'assets/models/thumbnails_new/bookcaseClosedDoors.png',
//         modelPath: 'assets/models/gltf/bookcaseClosedDoors.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Bookcaseclosedwide',
//         imagePath: 'assets/models/thumbnails_new/bookcaseClosedWide.png',
//         modelPath: 'assets/models/gltf/bookcaseClosedWide.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Bookcaseopen',
//         imagePath: 'assets/models/thumbnails_new/bookcaseOpen.png',
//         modelPath: 'assets/models/gltf/bookcaseOpen.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Bookcaseopenlow',
//         imagePath: 'assets/models/thumbnails_new/bookcaseOpenLow.png',
//         modelPath: 'assets/models/gltf/bookcaseOpenLow.glb',
//         type: '1',
//         format: 'gltf',
//       },

//       {
//         name: 'Cabinetbed',
//         imagePath: 'assets/models/thumbnails_new/cabinetBed.png',
//         modelPath: 'assets/models/gltf/cabinetBed.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Cabinetbeddrawer',
//         imagePath: 'assets/models/thumbnails_new/cabinetBedDrawer.png',
//         modelPath: 'assets/models/gltf/cabinetBedDrawer.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Cabinetbeddrawertable',
//         imagePath: 'assets/models/thumbnails_new/cabinetBedDrawerTable.png',
//         modelPath: 'assets/models/gltf/cabinetBedDrawerTable.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Cabinettelevision',
//         imagePath: 'assets/models/thumbnails_new/cabinetTelevision.png',
//         modelPath: 'assets/models/gltf/cabinetTelevision.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Cabinettelevisiondoors',
//         imagePath: 'assets/models/thumbnails_new/cabinetTelevisionDoors.png',
//         modelPath: 'assets/models/gltf/cabinetTelevisionDoors.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Cardboardboxclosed',
//         imagePath: 'assets/models/thumbnails_new/cardboardBoxClosed.png',
//         modelPath: 'assets/models/gltf/cardboardBoxClosed.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Cardboardboxopen',
//         imagePath: 'assets/models/thumbnails_new/cardboardBoxOpen.png',
//         modelPath: 'assets/models/gltf/cardboardBoxOpen.glb',
//         type: '0',
//         format: 'gltf',
//       },

//       {
//         name: 'Chair',
//         imagePath: 'assets/models/thumbnails_new/chair.png',
//         modelPath: 'assets/models/gltf/chair.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chaircushion',
//         imagePath: 'assets/models/thumbnails_new/chairCushion.png',
//         modelPath: 'assets/models/gltf/chairCushion.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chairdesk',
//         imagePath: 'assets/models/thumbnails_new/chairDesk.png',
//         modelPath: 'assets/models/gltf/chairDesk.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chairmoderncushion',
//         imagePath: 'assets/models/thumbnails_new/chairModernCushion.png',
//         modelPath: 'assets/models/gltf/chairModernCushion.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chairmodernframecushion',
//         imagePath: 'assets/models/thumbnails_new/chairModernFrameCushion.png',
//         modelPath: 'assets/models/gltf/chairModernFrameCushion.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chairrounded',
//         imagePath: 'assets/models/thumbnails_new/chairRounded.png',
//         modelPath: 'assets/models/gltf/chairRounded.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Chandelier',
//         imagePath: 'assets/models/thumbnails_new/nopreview.png',
//         modelPath: 'assets/models/gltf/chandelier.gltf',
//         type: '4',
//         format: 'gltf',
//       },
//       {
//         name: 'Coatrack',
//         imagePath: 'assets/models/thumbnails_new/coatRack.png',
//         modelPath: 'assets/models/gltf/coatRack.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Coatrackstanding',
//         imagePath: 'assets/models/thumbnails_new/coatRackStanding.png',
//         modelPath: 'assets/models/gltf/coatRackStanding.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Computerkeyboard',
//         imagePath: 'assets/models/thumbnails_new/computerKeyboard.png',
//         modelPath: 'assets/models/gltf/computerKeyboard.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Computermouse',
//         imagePath: 'assets/models/thumbnails_new/computerMouse.png',
//         modelPath: 'assets/models/gltf/computerMouse.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Computerscreen',
//         imagePath: 'assets/models/thumbnails_new/computerScreen.png',
//         modelPath: 'assets/models/gltf/computerScreen.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Desk',
//         imagePath: 'assets/models/thumbnails_new/desk.png',
//         modelPath: 'assets/models/gltf/desk.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Deskcorner',
//         imagePath: 'assets/models/thumbnails_new/deskCorner.png',
//         modelPath: 'assets/models/gltf/deskCorner.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Doorway',
//         imagePath: 'assets/models/thumbnails_new/doorway.png',
//         modelPath: 'assets/models/gltf/doorway.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Doorwayfront',
//         imagePath: 'assets/models/thumbnails_new/doorwayFront.png',
//         modelPath: 'assets/models/gltf/doorwayFront.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Doorwayopen',
//         imagePath: 'assets/models/thumbnails_new/doorwayOpen.png',
//         modelPath: 'assets/models/gltf/doorwayOpen.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Dryer',
//         imagePath: 'assets/models/thumbnails_new/dryer.png',
//         modelPath: 'assets/models/gltf/dryer.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Floorcorner',
//         imagePath: 'assets/models/thumbnails_new/floorCorner.png',
//         modelPath: 'assets/models/gltf/floorCorner.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Floorcornerround',
//         imagePath: 'assets/models/thumbnails_new/floorCornerRound.png',
//         modelPath: 'assets/models/gltf/floorCornerRound.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Floorfull',
//         imagePath: 'assets/models/thumbnails_new/floorFull.png',
//         modelPath: 'assets/models/gltf/floorFull.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Floorhalf',
//         imagePath: 'assets/models/thumbnails_new/floorHalf.png',
//         modelPath: 'assets/models/gltf/floorHalf.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Hoodlarge',
//         imagePath: 'assets/models/thumbnails_new/hoodLarge.png',
//         modelPath: 'assets/models/gltf/hoodLarge.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Hoodmodern',
//         imagePath: 'assets/models/thumbnails_new/hoodModern.png',
//         modelPath: 'assets/models/gltf/hoodModern.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenbar',
//         imagePath: 'assets/models/thumbnails_new/kitchenBar.png',
//         modelPath: 'assets/models/gltf/kitchenBar.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenbarend',
//         imagePath: 'assets/models/thumbnails_new/kitchenBarEnd.png',
//         modelPath: 'assets/models/gltf/kitchenBarEnd.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenblender',
//         imagePath: 'assets/models/thumbnails_new/kitchenBlender.png',
//         modelPath: 'assets/models/gltf/kitchenBlender.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinet',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinet.png',
//         modelPath: 'assets/models/gltf/kitchenCabinet.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetcornerinner',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetCornerInner.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetCornerInner.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetcornerround',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetCornerRound.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetCornerRound.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetdrawer',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetDrawer.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetDrawer.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetupper',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetUpper.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetUpper.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetuppercorner',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetUpperCorner.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetUpperCorner.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetupperdouble',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetUpperDouble.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetUpperDouble.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencabinetupperlow',
//         imagePath: 'assets/models/thumbnails_new/kitchenCabinetUpperLow.png',
//         modelPath: 'assets/models/gltf/kitchenCabinetUpperLow.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchencoffeemachine',
//         imagePath: 'assets/models/thumbnails_new/kitchenCoffeeMachine.png',
//         modelPath: 'assets/models/gltf/kitchenCoffeeMachine.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenfridge',
//         imagePath: 'assets/models/thumbnails_new/kitchenFridge.png',
//         modelPath: 'assets/models/gltf/kitchenFridge.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenfridgebuiltin',
//         imagePath: 'assets/models/thumbnails_new/kitchenFridgeBuiltIn.png',
//         modelPath: 'assets/models/gltf/kitchenFridgeBuiltIn.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenfridgelarge',
//         imagePath: 'assets/models/thumbnails_new/kitchenFridgeLarge.png',
//         modelPath: 'assets/models/gltf/kitchenFridgeLarge.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenfridgesmall',
//         imagePath: 'assets/models/thumbnails_new/kitchenFridgeSmall.png',
//         modelPath: 'assets/models/gltf/kitchenFridgeSmall.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenmicrowave',
//         imagePath: 'assets/models/thumbnails_new/kitchenMicrowave.png',
//         modelPath: 'assets/models/gltf/kitchenMicrowave.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchensink',
//         imagePath: 'assets/models/thumbnails_new/kitchenSink.png',
//         modelPath: 'assets/models/gltf/kitchenSink.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenstove',
//         imagePath: 'assets/models/thumbnails_new/kitchenStove.png',
//         modelPath: 'assets/models/gltf/kitchenStove.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Kitchenstoveelectric',
//         imagePath: 'assets/models/thumbnails_new/kitchenStoveElectric.png',
//         modelPath: 'assets/models/gltf/kitchenStoveElectric.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Lamproundfloor',
//         imagePath: 'assets/models/thumbnails_new/lampRoundFloor.png',
//         modelPath: 'assets/models/gltf/lampRoundFloor.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Lamproundtable',
//         imagePath: 'assets/models/thumbnails_new/lampRoundTable.png',
//         modelPath: 'assets/models/gltf/lampRoundTable.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Lampsquareceiling',
//         imagePath: 'assets/models/thumbnails_new/lampSquareCeiling.png',
//         modelPath: 'assets/models/gltf/lampSquareCeiling.glb',
//         type: '4',
//         format: 'gltf',
//       },
//       {
//         name: 'Lampsquarefloor',
//         imagePath: 'assets/models/thumbnails_new/lampSquareFloor.png',
//         modelPath: 'assets/models/gltf/lampSquareFloor.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Lampsquaretable',
//         imagePath: 'assets/models/thumbnails_new/lampSquareTable.png',
//         modelPath: 'assets/models/gltf/lampSquareTable.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Lampwall',
//         imagePath: 'assets/models/thumbnails_new/lampWall.png',
//         modelPath: 'assets/models/gltf/lampWall.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Laptop',
//         imagePath: 'assets/models/thumbnails_new/laptop.png',
//         modelPath: 'assets/models/gltf/laptop.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungechair',
//         imagePath: 'assets/models/thumbnails_new/loungeChair.png',
//         modelPath: 'assets/models/gltf/loungeChair.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungechairrelax',
//         imagePath: 'assets/models/thumbnails_new/loungeChairRelax.png',
//         modelPath: 'assets/models/gltf/loungeChairRelax.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungedesignchair',
//         imagePath: 'assets/models/thumbnails_new/loungeDesignChair.png',
//         modelPath: 'assets/models/gltf/loungeDesignChair.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungedesignsofa',
//         imagePath: 'assets/models/thumbnails_new/loungeDesignSofa.png',
//         modelPath: 'assets/models/gltf/loungeDesignSofa.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungedesignsofacorner',
//         imagePath: 'assets/models/thumbnails_new/loungeDesignSofaCorner.png',
//         modelPath: 'assets/models/gltf/loungeDesignSofaCorner.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungesofa',
//         imagePath: 'assets/models/thumbnails_new/loungeSofa.png',
//         modelPath: 'assets/models/gltf/loungeSofa.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungesofacorner',
//         imagePath: 'assets/models/thumbnails_new/loungeSofaCorner.png',
//         modelPath: 'assets/models/gltf/loungeSofaCorner.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungesofalong',
//         imagePath: 'assets/models/thumbnails_new/loungeSofaLong.png',
//         modelPath: 'assets/models/gltf/loungeSofaLong.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Loungesofaottoman',
//         imagePath: 'assets/models/thumbnails_new/loungeSofaOttoman.png',
//         modelPath: 'assets/models/gltf/loungeSofaOttoman.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Paneling',
//         imagePath: 'assets/models/thumbnails_new/paneling.png',
//         modelPath: 'assets/models/gltf/paneling.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Pillow',
//         imagePath: 'assets/models/thumbnails_new/pillow.png',
//         modelPath: 'assets/models/gltf/pillow.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Pillowblue',
//         imagePath: 'assets/models/thumbnails_new/pillowBlue.png',
//         modelPath: 'assets/models/gltf/pillowBlue.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Pillowbluelong',
//         imagePath: 'assets/models/thumbnails_new/pillowBlueLong.png',
//         modelPath: 'assets/models/gltf/pillowBlueLong.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Pillowlong',
//         imagePath: 'assets/models/thumbnails_new/pillowLong.png',
//         modelPath: 'assets/models/gltf/pillowLong.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Plantsmall1',
//         imagePath: 'assets/models/thumbnails_new/plantSmall1.png',
//         modelPath: 'assets/models/gltf/plantSmall1.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Plantsmall2',
//         imagePath: 'assets/models/thumbnails_new/plantSmall2.png',
//         modelPath: 'assets/models/gltf/plantSmall2.glb',
//         type: '1',
//         format: 'gltf',
//       },
//     ],
//   },
//   {
//     name: 'Outdoor Batting Cage Frame',
//     children: [
//       {
//         name: 'Plantsmall3',
//         imagePath: 'assets/models/thumbnails_new/plantSmall3.png',
//         modelPath: 'assets/models/gltf/plantSmall3.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Pottedplant',
//         imagePath: 'assets/models/thumbnails_new/pottedPlant.png',
//         modelPath: 'assets/models/gltf/pottedPlant.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Radio',
//         imagePath: 'assets/models/thumbnails_new/radio.png',
//         modelPath: 'assets/models/gltf/radio.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Rugdoormat',
//         imagePath: 'assets/models/thumbnails_new/rugDoormat.png',
//         modelPath: 'assets/models/gltf/rugDoormat.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Rugrectangle',
//         imagePath: 'assets/models/thumbnails_new/rugRectangle.png',
//         modelPath: 'assets/models/gltf/rugRectangle.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Ruground',
//         imagePath: 'assets/models/thumbnails_new/rugRound.png',
//         modelPath: 'assets/models/gltf/rugRound.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Rugrounded',
//         imagePath: 'assets/models/thumbnails_new/rugRounded.png',
//         modelPath: 'assets/models/gltf/rugRounded.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Rugsquare',
//         imagePath: 'assets/models/thumbnails_new/rugSquare.png',
//         modelPath: 'assets/models/gltf/rugSquare.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Shower',
//         imagePath: 'assets/models/thumbnails_new/shower.png',
//         modelPath: 'assets/models/gltf/shower.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Showerround',
//         imagePath: 'assets/models/thumbnails_new/showerRound.png',
//         modelPath: 'assets/models/gltf/showerRound.glb',
//         type: '9',
//         format: 'gltf',
//       },
//       {
//         name: 'Sidetable',
//         imagePath: 'assets/models/thumbnails_new/sideTable.png',
//         modelPath: 'assets/models/gltf/sideTable.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Sidetabledrawers',
//         imagePath: 'assets/models/thumbnails_new/sideTableDrawers.png',
//         modelPath: 'assets/models/gltf/sideTableDrawers.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Speaker',
//         imagePath: 'assets/models/thumbnails_new/speaker.png',
//         modelPath: 'assets/models/gltf/speaker.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Speakersmall',
//         imagePath: 'assets/models/thumbnails_new/speakerSmall.png',
//         modelPath: 'assets/models/gltf/speakerSmall.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Stairscorner',
//         imagePath: 'assets/models/thumbnails_new/stairsCorner.png',
//         modelPath: 'assets/models/gltf/stairsCorner.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Stairsopen',
//         imagePath: 'assets/models/thumbnails_new/stairsOpen.png',
//         modelPath: 'assets/models/gltf/stairsOpen.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Stairsopensingle',
//         imagePath: 'assets/models/thumbnails_new/stairsOpenSingle.png',
//         modelPath: 'assets/models/gltf/stairsOpenSingle.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Stoolbar',
//         imagePath: 'assets/models/thumbnails_new/stoolBar.png',
//         modelPath: 'assets/models/gltf/stoolBar.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Stoolbarsquare',
//         imagePath: 'assets/models/thumbnails_new/stoolBarSquare.png',
//         modelPath: 'assets/models/gltf/stoolBarSquare.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Table',
//         imagePath: 'assets/models/thumbnails_new/table.png',
//         modelPath: 'assets/models/gltf/table.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecloth',
//         imagePath: 'assets/models/thumbnails_new/tableCloth.png',
//         modelPath: 'assets/models/gltf/tableCloth.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecoffee',
//         imagePath: 'assets/models/thumbnails_new/tableCoffee.png',
//         modelPath: 'assets/models/gltf/tableCoffee.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecoffeeglass',
//         imagePath: 'assets/models/thumbnails_new/tableCoffeeGlass.png',
//         modelPath: 'assets/models/gltf/tableCoffeeGlass.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecoffeeglasssquare',
//         imagePath: 'assets/models/thumbnails_new/tableCoffeeGlassSquare.png',
//         modelPath: 'assets/models/gltf/tableCoffeeGlassSquare.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecoffeesquare',
//         imagePath: 'assets/models/thumbnails_new/tableCoffeeSquare.png',
//         modelPath: 'assets/models/gltf/tableCoffeeSquare.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecross',
//         imagePath: 'assets/models/thumbnails_new/tableCross.png',
//         modelPath: 'assets/models/gltf/tableCross.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tablecrosscloth',
//         imagePath: 'assets/models/thumbnails_new/tableCrossCloth.png',
//         modelPath: 'assets/models/gltf/tableCrossCloth.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tableglass',
//         imagePath: 'assets/models/thumbnails_new/tableGlass.png',
//         modelPath: 'assets/models/gltf/tableGlass.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Tableround',
//         imagePath: 'assets/models/thumbnails_new/tableRound.png',
//         modelPath: 'assets/models/gltf/tableRound.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Televisionantenna',
//         imagePath: 'assets/models/thumbnails_new/televisionAntenna.png',
//         modelPath: 'assets/models/gltf/televisionAntenna.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Televisionmodern',
//         imagePath: 'assets/models/thumbnails_new/televisionModern.png',
//         modelPath: 'assets/models/gltf/televisionModern.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Televisionvintage',
//         imagePath: 'assets/models/thumbnails_new/televisionVintage.png',
//         modelPath: 'assets/models/gltf/televisionVintage.glb',
//         type: '2',
//         format: 'gltf',
//       },
//       {
//         name: 'Toaster',
//         imagePath: 'assets/models/thumbnails_new/toaster.png',
//         modelPath: 'assets/models/gltf/toaster.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Toilet',
//         imagePath: 'assets/models/thumbnails_new/toilet.png',
//         modelPath: 'assets/models/gltf/toilet.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Toiletsquare',
//         imagePath: 'assets/models/thumbnails_new/toiletSquare.png',
//         modelPath: 'assets/models/gltf/toiletSquare.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Trashcan',
//         imagePath: 'assets/models/thumbnails_new/trashcan.png',
//         modelPath: 'assets/models/gltf/trashcan.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Wall',
//         imagePath: 'assets/models/thumbnails_new/wall.png',
//         modelPath: 'assets/models/gltf/wall.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Wallcorner',
//         imagePath: 'assets/models/thumbnails_new/wallCorner.png',
//         modelPath: 'assets/models/gltf/wallCorner.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Wallcornerrond',
//         imagePath: 'assets/models/thumbnails_new/wallCornerRond.png',
//         modelPath: 'assets/models/gltf/wallCornerRond.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Walldoorway',
//         imagePath: 'assets/models/thumbnails_new/wallDoorway.png',
//         modelPath: 'assets/models/gltf/wallDoorway.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Walldoorwaywide',
//         imagePath: 'assets/models/thumbnails_new/wallDoorwayWide.png',
//         modelPath: 'assets/models/gltf/wallDoorwayWide.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Wallhalf',
//         imagePath: 'assets/models/thumbnails_new/wallHalf.png',
//         modelPath: 'assets/models/gltf/wallHalf.glb',
//         type: '0',
//         format: 'gltf',
//       },
//       {
//         name: 'Wallwindow',
//         imagePath: 'assets/models/thumbnails_new/wallWindow.png',
//         modelPath: 'assets/models/gltf/wallWindow.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Wallwindowslide',
//         imagePath: 'assets/models/thumbnails_new/wallWindowSlide.png',
//         modelPath: 'assets/models/gltf/wallWindowSlide.glb',
//         type: '3',
//         format: 'gltf',
//       },
//       {
//         name: 'Washer',
//         imagePath: 'assets/models/thumbnails_new/washer.png',
//         modelPath: 'assets/models/gltf/washer.glb',
//         type: '1',
//         format: 'gltf',
//       },
//       {
//         name: 'Washerdryerstacked',
//         imagePath: 'assets/models/thumbnails_new/washerDryerStacked.png',
//         modelPath: 'assets/models/gltf/washerDryerStacked.glb',
//         type: '1',
//         format: 'gltf',
//       },
//     ],
//   },
//   { name: 'Outdoor Lighting', children: [] },
//   { name: 'Hoops', children: [] },
//   { name: 'Backstop/Barrier Nets', children: [] },
//   { name: 'Accessories', children: [] },
//   { name: 'Wall Padding', children: [] },
// ];
