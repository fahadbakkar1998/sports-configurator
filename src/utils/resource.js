export const items = [
  {
    name: 'Indoor Netting',
    children: [
      // {
      //   name: 'OmniJam Portable Basketball Goal',
      //   image_path: 'assets/models/thumbnails/CurtainCage Easy Slide.png',
      //   model_path: 'assets/models/gltf/OmniJam Portable Basketball Goal.glb',
      //   type: '5',
      //   format: 'gltf',
      //   default_size: {
      //     name: 'Dimension',
      //     unit: 'ft',
      //     height: 20,
      //   },
      // },
      // {
      //   name: 'Jam In Ground Adjustable Basketball Goal',
      //   image_path: 'assets/models/thumbnails/CurtainCage Easy Slide.png',
      //   model_path:
      //     'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb',
      //   type: '5',
      //   format: 'gltf',
      //   default_size: {
      //     name: 'Dimension',
      //     unit: 'ft',
      //     height: 20,
      //   },
      // },
      // {
      //   name: 'RollaSport Portable Basketball Goal',
      //   image_path: 'assets/models/thumbnails/CurtainCage Easy Slide.png',
      //   model_path:
      //     'assets/models/gltf/RollaSport Portable Basketball Goal.glb',
      //   type: '5',
      //   format: 'gltf',
      //   default_size: {
      //     name: 'Dimension',
      //     unit: 'ft',
      //     height: 20,
      //   },
      // },
      {
        name: 'Indoor Batting Cage',
        children: [
          {
            name: 'Single Tunnel',
            children: [
              {
                name: 'CurtainCage Easy Slide',
                image_path:
                  'assets/models/thumbnails/CurtainCage Easy Slide.png',
                model_path: 'assets/models/gltf/CurtainCage Easy Slide.glb',
                type: '5',
                format: 'gltf',
                default_size: {
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
                image_path:
                  'assets/models/thumbnails/CurtainCage Line Lift.png',
                model_path: 'assets/models/gltf/CurtainCage Line Lift.glb',
                type: '5',
                format: 'gltf',
                default_size: {
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
                image_path: 'assets/models/thumbnails/Shell Cage.png',
                format: 'configurator',
                type: 'shellcage',
                unit: 'ft',
                default_size: {
                  width: 40,
                  height: 10,
                  length: 60,
                  unit: 'ft',
                },
                max_size: 100,
                components: {
                  // All points start at the back left.
                  net: {
                    name: 'Net',
                    value: {
                      use: {
                        type: 'select',
                        name: 'Use',
                        value: 'baseball',
                        options: [
                          { name: 'Baseball', value: 'baseball' },
                          { name: 'Golf', value: 'golf' },
                        ],
                      },
                      net_type: {
                        type: 'select',
                        name: 'Net Type',
                        value: 'nylon21',
                        options: [
                          {
                            name: '#21 Nylon 1-7/8" STANDARD',
                            value: 'nylon21',
                          },
                          {
                            name: '#21 Nylon 1-7/8" LATEX DIP',
                            value: 'nylon21latex',
                          },
                          {
                            name: '#21 Nylon 1-7/8" DuPont 66-728',
                            value: 'nylon21dupont',
                          },
                          {
                            name: '#21 Nylon 1-7/8" Varnish Dip',
                            value: 'nylon21varnish',
                          },

                          {
                            name: '#36 Nylon 1-7/8" STANDARD',
                            value: 'nylon36',
                          },
                          {
                            name: '#36 Nylon 1-7/8" LATEX DIP',
                            value: 'nylon36latex',
                          },
                          {
                            name: '#36 Nylon 1-7/8" DuPont 66-728',
                            value: 'nylon36dupont',
                          },
                          {
                            name: '#36 Nylon 1-7/8" Varnish Dip',
                            value: 'nylon36varnish',
                          },

                          {
                            name: '#42 Nylon 1-7/8" STANDARD',
                            value: 'nylon42',
                          },
                          {
                            name: '#42 Nylon 1-7/8" LATEX DIP',
                            value: 'nylon42latex',
                          },
                          {
                            name: '#42 Nylon 1-7/8" DuPont 66-728',
                            value: 'nylon42dupont',
                          },
                          {
                            name: '#42 Nylon 1-7/8" Varnish Dip',
                            value: 'nylon42varnish',
                          },

                          {
                            name: '#48 Nylon 1-7/8" STANDARD',
                            value: 'nylon48',
                          },
                          {
                            name: '#48 Nylon 1-7/8" LATEX DIP',
                            value: 'nylon48latex',
                          },

                          {
                            name: '#60 Nylon 1-7/8" STANDARD',
                            value: 'nylon60',
                          },
                          {
                            name: '#60 Nylon 1-7/8" LATEX DIP',
                            value: 'nylon60latex',
                          },
                          {
                            name: '#60 Nylon 1-7/8" DuPont 66-728',
                            value: 'nylon60dupont',
                          },
                          {
                            name: '#60 Nylon 1-7/8" Varnish Dip',
                            value: 'nylon60varnish',
                          },

                          {
                            name: '#96 Nylon 1-7/8" DuPont 66-728',
                            value: 'nylon96dupont',
                          },
                          {
                            name: '#96 Nylon 1-7/8" Varnish Dip',
                            value: 'nylon96varnish',
                          },

                          { name: '#21 Poly 1-7/8" STANDARD', value: 'poly21' },

                          { name: '#36 Poly 1-7/8" STANDARD', value: 'poly36' },
                        ],
                      },
                      hole_size: {
                        type: 'single',
                        name: 'HoleSize',
                        // value: 0.15625,
                        value: 0.3,
                        immutability: true,
                      },
                      diameter: {
                        type: 'single',
                        name: 'Diameter',
                        value: 0.03,
                        immutability: true,
                      },
                    },
                  },
                  out_container: {
                    name: 'Exterior',
                    value: {
                      width: { type: 'single', name: 'Width', value: 40 },
                      height: { type: 'single', name: 'Height', value: 10 },
                      length: { type: 'single', name: 'Length', value: 60 },
                    },
                  },
                  out_edge: {
                    name: 'Rungs',
                    value: {
                      thickness: {
                        type: 'single',
                        name: 'Thickness',
                        value: 0.4,
                        immutability: true,
                      },
                    },
                  },
                  in_container: {
                    name: 'Interior',
                    value: {
                      gap: {
                        type: 'single',
                        name: 'Gap',
                        value: 0.2,
                        immutability: true,
                      },
                      deltaZ: {
                        type: 'interval',
                        name: 'Length',
                        value: [0, 60],
                      },
                    },
                  },
                  dividers: {
                    name: 'Dividers',
                    addition: {
                      deltaX: {
                        type: 'single',
                        type: 'single',
                        name: 'Lane Width',
                        value: 10,
                      },
                      deltaZ: {
                        type: 'single',
                        type: 'interval',
                        name: 'Length',
                        value: [0, 50],
                      },
                    },
                    value: [
                      {
                        name: 'Divider 1',
                        value: {
                          deltaX: {
                            type: 'single',
                            name: 'Lane Width',
                            value: 10,
                          },
                          deltaZ: {
                            type: 'interval',
                            name: 'Length',
                            value: [0, 60],
                          },
                        },
                      },
                      {
                        name: 'Divider 2',
                        value: {
                          deltaX: {
                            type: 'single',
                            name: 'Lane Width',
                            value: 10,
                          },
                          deltaZ: {
                            type: 'interval',
                            name: 'Length',
                            value: [0, 40],
                          },
                        },
                      },
                      {
                        name: 'Divider 3',
                        value: {
                          deltaX: {
                            type: 'single',
                            name: 'Lane Width',
                            value: 10,
                          },
                          deltaZ: {
                            type: 'interval',
                            name: 'Length',
                            value: [10, 30],
                          },
                        },
                      },
                    ],
                  },
                  rib_line: {
                    name: 'RibLine',
                    value: {
                      diameter: {
                        type: 'single',
                        name: 'Diameter',
                        value: 0.2,
                        immutability: true,
                      },
                      allowableLaneWidth: {
                        type: 'single',
                        name: 'Limit Lane Width',
                        value: 8,
                        immutability: true,
                      },
                    },
                    price_per_unit: 0.9,
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
                image_path: 'assets/models/thumbnails/Air Cage.png',
                model_path: 'assets/models/gltf/Air Cage.glb',
                type: '5',
                format: 'gltf',
                default_size: {
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
                image_path: 'assets/models/thumbnails/Phantom.png',
                model_path: 'assets/models/gltf/Phantom.glb',
                type: '5',
                format: 'gltf',
                default_size: {
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
            image_path: 'assets/models/thumbnails/Outdoor Varsity 55.png',
            model_path: 'assets/models/gltf/Outdoor Varsity 55.glb',
            type: '5',
            format: 'gltf',
            default_size: {
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
        ],
      },
      {
        name: 'Netting',
        children: [
          {
            name: 'Barrier Net',
            image_path: 'assets/models/thumbnails/Barrier Net.png',
            format: 'configurator',
            type: 'net',
            unit: 'ft',
            default_size: {
              width: 40,
              height: 10,
              unit: 'ft',
            },
            max_size: 100,
            components: {
              use: {
                type: 'select',
                name: 'Use',
                value: 'baseball',
                options: [
                  { name: 'Baseball', value: 'baseball' },
                  { name: 'Golf', value: 'golf' },
                ],
              },
              net_type: {
                type: 'select',
                name: 'Net Type',
                value: 'nylon21',
                options: [
                  {
                    name: '#21 Nylon 1-7/8" STANDARD',
                    value: 'nylon21',
                  },
                  {
                    name: '#21 Nylon 1-7/8" LATEX DIP',
                    value: 'nylon21latex',
                  },
                  {
                    name: '#21 Nylon 1-7/8" DuPont 66-728',
                    value: 'nylon21dupont',
                  },
                  {
                    name: '#21 Nylon 1-7/8" Varnish Dip',
                    value: 'nylon21varnish',
                  },
                  {
                    name: '#36 Nylon 1-7/8" STANDARD',
                    value: 'nylon36',
                  },
                  {
                    name: '#36 Nylon 1-7/8" LATEX DIP',
                    value: 'nylon36latex',
                  },
                  {
                    name: '#36 Nylon 1-7/8" DuPont 66-728',
                    value: 'nylon36dupont',
                  },
                  {
                    name: '#36 Nylon 1-7/8" Varnish Dip',
                    value: 'nylon36varnish',
                  },
                  {
                    name: '#42 Nylon 1-7/8" STANDARD',
                    value: 'nylon42',
                  },
                  {
                    name: '#42 Nylon 1-7/8" LATEX DIP',
                    value: 'nylon42latex',
                  },
                  {
                    name: '#42 Nylon 1-7/8" DuPont 66-728',
                    value: 'nylon42dupont',
                  },
                  {
                    name: '#42 Nylon 1-7/8" Varnish Dip',
                    value: 'nylon42varnish',
                  },
                  {
                    name: '#48 Nylon 1-7/8" STANDARD',
                    value: 'nylon48',
                  },
                  {
                    name: '#48 Nylon 1-7/8" LATEX DIP',
                    value: 'nylon48latex',
                  },
                  {
                    name: '#60 Nylon 1-7/8" STANDARD',
                    value: 'nylon60',
                  },
                  {
                    name: '#60 Nylon 1-7/8" LATEX DIP',
                    value: 'nylon60latex',
                  },
                  {
                    name: '#60 Nylon 1-7/8" DuPont 66-728',
                    value: 'nylon60dupont',
                  },
                  {
                    name: '#60 Nylon 1-7/8" Varnish Dip',
                    value: 'nylon60varnish',
                  },
                  {
                    name: '#96 Nylon 1-7/8" DuPont 66-728',
                    value: 'nylon96dupont',
                  },
                  {
                    name: '#96 Nylon 1-7/8" Varnish Dip',
                    value: 'nylon96varnish',
                  },
                  { name: '#21 Poly 1-7/8" STANDARD', value: 'poly21' },
                  { name: '#36 Poly 1-7/8" STANDARD', value: 'poly36' },
                ],
              },
              width: { type: 'single', name: 'Width', value: 40 },
              height: { type: 'single', name: 'Height', value: 10 },
              hole_size: {
                type: 'single',
                name: 'HoleSize',
                value: 0.3,
                immutability: true,
              },
              diameter: {
                type: 'single',
                name: 'Diameter',
                value: 0.03,
                immutability: true,
              },
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Outdoor Batting Cage',
    children: [
      {
        name: 'Varsity (35ft)',
        image_path: 'assets/models/thumbnails/Outdoor Varsity 35.png',
        model_path: 'assets/models/gltf/Outdoor Varsity 35.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Varsity 55.png',
        model_path: 'assets/models/gltf/Outdoor Varsity 55.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Varsity 70.png',
        model_path: 'assets/models/gltf/Outdoor Varsity 70.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Collegiate 35.png',
        model_path: 'assets/models/gltf/Outdoor Collegiate 35.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Collegiate 55.png',
        model_path: 'assets/models/gltf/Outdoor Collegiate 55.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Collegiate 70.png',
        model_path: 'assets/models/gltf/Outdoor Collegiate 70.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Pro 2x55.png',
        model_path: 'assets/models/gltf/Outdoor Pro 2x55.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Pro 55.png',
        model_path: 'assets/models/gltf/Outdoor Pro 55.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Outdoor Pro 70.png',
        model_path: 'assets/models/gltf/Outdoor Pro 70.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Turf Rolls/1.jpg',
        format: 'configurator',
        type: 'horizontality',
        unit: 'ft',
        default_size: {
          width: 10,
          length: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 10 },
          length: { type: 'single', name: 'Length', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Turf Rolls/1.jpg',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Turf Rolls/1.jpg',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Turf Rolls/2.jpg',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Turf Rolls/3.jpg',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Turf Rolls/4.jpg',
              },
              {
                name: '5',
                value: 'assets/models/thumbnails/Turf Rolls/5.jpg',
              },
              {
                name: '6',
                value: 'assets/models/thumbnails/Turf Rolls/6.jpg',
              },
            ],
          },
        },
      },
      {
        name: 'Turf Mats',
        image_path: 'assets/models/thumbnails/Turf Mats/1.jpg',
        format: 'configurator',
        type: 'horizontality',
        unit: 'ft',
        default_size: {
          width: 10,
          length: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 10 },
          length: { type: 'single', name: 'Length', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Turf Mats/1.jpg',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Turf Mats/1.jpg',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Turf Mats/2.jpg',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Turf Mats/3.jpg',
              },
            ],
          },
        },
      },
      {
        name: 'Rubber',
        image_path: 'assets/models/thumbnails/Rubber/1.jpg',
        format: 'configurator',
        type: 'horizontality',
        unit: 'ft',
        default_size: {
          width: 10,
          length: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 10 },
          length: { type: 'single', name: 'Length', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Rubber/1.jpg',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Rubber/1.jpg',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Rubber/2.jpg',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Rubber/3.jpg',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Rubber/4.jpg',
              },
              {
                name: '5',
                value: 'assets/models/thumbnails/Rubber/5.jpg',
              },
              {
                name: '6',
                value: 'assets/models/thumbnails/Rubber/6.jpg',
              },
            ],
          },
        },
      },
      {
        name: 'Court Tiles',
      },
    ],
  },
  {
    name: 'Windscreens',
    children: [
      {
        name: 'Windscreens',
        image_path: 'assets/models/thumbnails/Windscreens/1.png',
        format: 'configurator',
        type: 'aplomb',
        unit: 'ft',
        default_size: {
          width: 16,
          height: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 16 },
          height: { type: 'single', name: 'Height', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Windscreens/1.png',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Windscreens/1.png',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Windscreens/2.png',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Windscreens/3.png',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Windscreens/4.png',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'Gym Equipment',
    children: [
      {
        name: 'Wall Padding',
        image_path: 'assets/models/thumbnails/Wall Padding/1.png',
        format: 'configurator',
        type: 'aplomb',
        unit: 'ft',
        default_size: {
          width: 16,
          height: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 16 },
          height: { type: 'single', name: 'Height', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Wall Padding/1.png',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Wall Padding/1.png',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Wall Padding/2.png',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Wall Padding/3.png',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Wall Padding/4.png',
              },
            ],
          },
        },
      },
      {
        name: 'Divider Curtain',
        image_path: 'assets/models/thumbnails/Divider Curtain/1.png',
        format: 'configurator',
        type: 'aplomb',
        unit: 'ft',
        default_size: {
          width: 16,
          height: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 16 },
          height: { type: 'single', name: 'Height', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Divider Curtain/1.png',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Divider Curtain/1.png',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Divider Curtain/2.png',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Divider Curtain/3.png',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Divider Curtain/4.png',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'Training Equipment',
    children: [
      // {
      //   name: 'Pitching Machine',
      // },
      {
        name: 'L-Screen',
        image_path: 'assets/models/thumbnails/L-Screen.png',
        model_path: 'assets/models/gltf/L Screen.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Softball Screen.png',
        model_path: 'assets/models/gltf/Softball Screen.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Goals.png',
        model_path: 'assets/models/gltf/Goals.glb',
        type: '5',
        format: 'gltf',
        default_size: {
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
        image_path: 'assets/models/thumbnails/Concrete/1.png',
        format: 'configurator',
        type: 'horizontality',
        unit: 'ft',
        default_size: {
          width: 10,
          length: 10,
          unit: 'ft',
        },
        max_size: 1000,
        components: {
          width: { type: 'single', name: 'Width', value: 10 },
          length: { type: 'single', name: 'Length', value: 10 },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Concrete/1.png',
            piece_size: { width: 100, height: 100 },
            options: [
              {
                name: '1',
                value: 'assets/models/thumbnails/Concrete/1.png',
              },
              {
                name: '2',
                value: 'assets/models/thumbnails/Concrete/2.png',
              },
              {
                name: '3',
                value: 'assets/models/thumbnails/Concrete/3.png',
              },
              {
                name: '4',
                value: 'assets/models/thumbnails/Concrete/4.png',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'Furniture',
    children: [
      {
        name: '1',
        image_path: 'assets/models/thumbnails/1.jpg',
        model_path: 'assets/models/js/1.js',
        type: '1',
      },
      {
        name: '2',
        image_path: 'assets/models/thumbnails/2.jpg',
        model_path: 'assets/models/js/2.js',
        type: '9',
      },
      {
        name: '3',
        image_path: 'assets/models/thumbnails/3.jpg',
        model_path: 'assets/models/js/3.js',
        type: '1',
      },
      {
        name: '4',
        image_path: 'assets/models/thumbnails/4.jpg',
        model_path: 'assets/models/js/4.js',
        type: '9',
      },
      {
        name: '5',
        image_path: 'assets/models/thumbnails/5.jpg',
        model_path: 'assets/models/js/5.js',
        type: '1',
      },
      {
        name: '6',
        image_path: 'assets/models/thumbnails/6.jpg',
        model_path: 'assets/models/js/6.js',
        type: '9',
      },
      {
        name: '7',
        image_path: 'assets/models/thumbnails/7.jpg',
        model_path: 'assets/models/js/7.js',
        type: '9',
      },
      {
        name: '8',
        image_path: 'assets/models/thumbnails/8.jpg',
        model_path: 'assets/models/js/8.js',
        type: '8',
      },
      {
        name: '9',
        image_path: 'assets/models/thumbnails/9.jpg',
        model_path: 'assets/models/js/9.js',
        type: '1',
      },
      {
        name: '10',
        image_path: 'assets/models/thumbnails/10.jpg',
        model_path: 'assets/models/js/10.js',
        type: '9',
      },
      {
        name: '11',
        image_path: 'assets/models/thumbnails/11.jpg',
        model_path: 'assets/models/js/11.js',
        type: '1',
      },
      {
        name: '12',
        image_path: 'assets/models/thumbnails/12.jpg',
        model_path: 'assets/models/js/12.js',
        type: '1',
      },
      {
        name: '13',
        image_path: 'assets/models/thumbnails/13.jpg',
        model_path: 'assets/models/js/13.js',
        type: '1',
      },
      {
        name: '14',
        image_path: 'assets/models/thumbnails/14.jpg',
        model_path: 'assets/models/js/14.js',
        type: '1',
      },
      {
        name: '15',
        image_path: 'assets/models/thumbnails/15.jpg',
        model_path: 'assets/models/js/15.js',
        type: '1',
      },
      {
        name: '16',
        image_path: 'assets/models/thumbnails/16.jpg',
        model_path: 'assets/models/js/16.js',
        type: '3',
      },
      {
        name: '17',
        image_path: 'assets/models/thumbnails/17.jpg',
        model_path: 'assets/models/js/17.js',
        type: '1',
      },
    ],
  },
];

// 0: Item,
// 1: FloorItem,
// 2: WallItem,
// 3: InWallItem,
// 4: RoofItem,
// 5: OutItem,
// 7: InWallFloorItem,
// 8: OnFloorItem,
// 9: WallFloorItem,
// shellcage: ShellCage,
// net: Net,
// horizontality: Horizontality,
// aplomb: Aplomb,

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
