export const items = [
  {
    name: 'INDOOR',
    children: [
      {
        name: 'Building',
        children: [
          {
            name: 'Standard Sizes',
            children: [
              {
                name: '100ft X 100ft',
                image_path: 'assets/models/thumbnails/Building/1.png',
                format: 'building',
                size_key: 'size1',
              },
              {
                name: '200ft X 200ft',
                image_path: 'assets/models/thumbnails/Building/2.png',
                format: 'building',
                size_key: 'size2',
              },
              {
                name: '300ft X 300ft',
                image_path: 'assets/models/thumbnails/Building/3.png',
                format: 'building',
                size_key: 'size3',
              },
            ],
          },
          {
            name: 'Custom Size',
            image_path: 'assets/models/thumbnails/Building/Custom.png',
            format: 'building',
            size_key: 'custom',
          },
        ],
      },
      {
        name: 'Batting Cages',
        children: [
          {
            name: 'Sliding Cages',
            children: [
              {
                name: 'CurtainCage Standard',
                image_path:
                  'assets/models/thumbnails/CurtainCage Easy Slide.png',
                model_path: 'assets/models/gltf/CurtainCage Easy Slide.glb',
                type: '1',
                format: 'gltf',
                default_size: {
                  name: '55L',
                  unit: 'ft',
                  width: 55,
                  // height: 12,
                  // length: 12,
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
              {
                name: 'CurtainCage with Drop Lines',
                image_path:
                  'assets/models/thumbnails/CurtainCage Line Lift.png',
                model_path: 'assets/models/gltf/CurtainCage Line Lift.glb',
                type: '1',
                format: 'gltf',
                default_size: {
                  unit: 'ft',
                  width: 55,
                  // height: 22,
                  // length: 12,
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
            name: 'ShellCage Multi-Lane',
            image_path: 'assets/models/thumbnails/Shell Cage.png',
            format: 'configurator',
            configurator_name: 'shellcage',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 40,
              height: 10,
              length: 60,
              unit: 'ft',
            },
            max_size: 100,
            components: {
              lanes: {
                type: 'select',
                name: 'Lanes',
                value: '4',
                options: [
                  { name: '1 lane', value: '1' },
                  { name: '2 lane', value: '2' },
                  { name: '3 lane', value: '3' },
                  { name: '4 lane', value: '4' },
                ],
              },
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
                  length: { type: 'single', name: 'Length', value: 60 },
                  width: {
                    type: 'single',
                    name: 'Width',
                    value: 40,
                    immutability: true,
                  },
                  height: { type: 'single', name: 'Height', value: 10 },
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
                immutability: true,
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
                    value: [0, 60],
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
                        value: [0, 60],
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
                        value: [0, 60],
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
                    value: 10,
                    immutability: true,
                  },
                },
                price_per_unit: 0.9,
                immutability: true,
              },
            },
          },
          {
            name: 'Electric Retractable Cage',
            children: [
              {
                name: 'Single Lane',
                image_path: 'assets/models/thumbnails/Air Cage.png',
                model_path: 'assets/models/gltf/Air Cage.glb',
                type: '1',
                format: 'gltf',
                default_size: {
                  name: '70L',
                  unit: 'ft',
                  width: 70,
                  height: 22,
                  length: 12,
                  disableDimensioning: true,
                },
              },
              {
                name: 'Double Lane',
                image_path: 'assets/models/thumbnails/Air Cage.png',
                model_path: 'assets/models/gltf/Air Cage.glb',
                type: '1',
                format: 'gltf',
                default_size: {
                  name: '55L',
                  unit: 'ft',
                  width: 55,
                  height: 22,
                  length: 12,
                  disableDimensioning: true,
                },
              },
              {
                name: 'Triple Lane',
                image_path: 'assets/models/thumbnails/Air Cage.png',
                model_path: 'assets/models/gltf/Air Cage.glb',
                type: '1',
                format: 'gltf',
                default_size: {
                  name: '35L',
                  unit: 'ft',
                  width: 35,
                  height: 22,
                  length: 12,
                  disableDimensioning: true,
                },
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
            configurator_name: 'net',
            type: '1',
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
          {
            name: 'Tunnel (Single / Double / Triple / Quad)',
            image_path: 'assets/models/thumbnails/Phantom.png',
            model_path: 'assets/models/gltf/Phantom.glb',
            type: '1',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              width: 70,
              // height: 12,
              // length: 36,
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
          {
            name: 'Open Sided Hitting Cage',
            image_path: 'assets/models/thumbnails/Single Hitting Cage.png',
            model_path: 'assets/models/gltf/Single Hitting Cage.glb',
            type: '1',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              width: 55,
              // height: 12,
              // length: 12,
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
            name: 'Open Sided Hitting Cage',
            image_path: 'assets/models/thumbnails/Single Hitting Cage.png',
            format: 'configurator',
            configurator_name: 'openSided',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 55,
              height: 10,
              length: 10,
              unit: 'ft',
            },
            components: {
              dimension: {
                name: 'Dimension',
                value: {
                  length: {
                    type: 'single',
                    name: 'Length',
                    value: 10,
                  },
                  width: {
                    type: 'single',
                    name: 'Width',
                    value: 50,
                  },
                  height: {
                    type: 'single',
                    name: 'Height',
                    value: 10,
                  },
                },
              },
              net: {
                name: 'Net',
                value: {
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
            },
          },
        ],
      },
      // {
      //   name: "Pitcher's Screens",
      //   image_path: 'logo512.png',
      // },
      {
        name: 'Soccer Goals',
        image_path: 'assets/models/thumbnails/Goals.png',
        model_path: 'assets/models/gltf/Goals.glb',
        type: '1',
        format: 'gltf',
        default_size: {
          name: '24W*8H',
          unit: 'ft',
          width: 24,
          // height: 8,
          // length: 5,
        },
      },
      {
        name: 'Surfaces',
        children: [
          {
            name: 'Turf Rolls',
            image_path: 'assets/models/thumbnails/Turf Rolls/1.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 12,
              length: 15,
              unit: 'ft',
            },
            max_size: 1000,
            components: {
              width: { type: 'single', name: 'Width', value: 12 },
              length: { type: 'single', name: 'Length', value: 15 },
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
            image_path: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '1',
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
                value: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
                piece_size: { width: 100, height: 100 },
                options: [
                  {
                    name: 'WinterGreen',
                    value: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
                  },
                  {
                    name: 'Verde',
                    value: 'assets/models/thumbnails/Turf Mats/Verde.jpg',
                  },
                  {
                    name: 'Red',
                    value: 'assets/models/thumbnails/Turf Mats/Red.jpg',
                  },
                  {
                    name: 'Green',
                    value: 'assets/models/thumbnails/Turf Mats/Green.jpg',
                  },
                  {
                    name: 'Verde1',
                    value: 'assets/models/thumbnails/Turf Mats/Verde1.jpg',
                  },
                ],
              },
            },
          },
          {
            name: 'Rubber',
            image_path: 'assets/models/thumbnails/Rubber/1.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 4,
              length: 4,
              unit: 'ft',
            },
            max_size: 1000,
            components: {
              width: { type: 'single', name: 'Width', value: 4 },
              length: { type: 'single', name: 'Length', value: 4 },
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
            name: 'Multi-Sport Courts',
            image_path: 'assets/models/thumbnails/Basketball.png',
            format: 'configurator',
            configurator_name: 'basketball',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 100,
              length: 60,
              unit: 'ft',
            },
            max_size: 200,
            components: {
              dimension: {
                name: 'Dimension',
                value: {
                  outer_width: {
                    type: 'single',
                    name: 'Outer Length',
                    value: 100,
                  },
                  outer_length: {
                    type: 'single',
                    name: 'Outer Width',
                    value: 60,
                  },
                  court_width: {
                    type: 'single',
                    name: 'Court Length',
                    value: 94,
                  },
                  court_length: {
                    type: 'single',
                    name: 'Court Width',
                    value: 50,
                  },
                  rim_height: { type: 'single', name: 'Rim Height', value: 10 },
                  no_charge_zone_arc: {
                    type: 'single',
                    name: 'No Charge Zone Arc',
                    value: 4,
                  },
                  center_circle_diameter: {
                    name: 'Center Circle Diameter',
                    value: {
                      in: { name: 'In', type: 'single', value: 4 },
                      out: { name: 'Out', type: 'single', value: 12 },
                    },
                  },
                  three_point_line_distance: {
                    // from the basket
                    name: '3-point line distance from the basket',
                    value: {
                      min: { type: 'single', name: 'Min', value: 22 },
                      max: { type: 'single', name: 'Max', value: 23.75 },
                    },
                  },
                  key: {
                    type: 'single',
                    name: 'Key (shaded lane or restricted area) width',
                    value: 16,
                  },
                  free_throw_line_distance: {
                    // from the hoops (backboard)
                    type: 'single',
                    name: 'Free-throw line distance from point on the floor directly below the backboard',
                    value: 15,
                  },
                  service_line_distance: {
                    // from the center
                    type: 'single',
                    name: 'Service Line Distance',
                    value: 14,
                  },
                  line_width: {
                    type: 'single',
                    name: 'Line Width',
                    value: 0.3,
                    immutability: true,
                  },
                  hoops_distance: {
                    // from the baseline
                    type: 'single',
                    name: 'Hoops Distance',
                    value: 1,
                    immutability: true,
                  },
                  basket_distance: {
                    // from the hoops (backboard)
                    type: 'single',
                    name: 'Basket Distance',
                    value: 1,
                    immutability: true,
                  },
                  backboard_distance: {
                    // from the center
                    type: 'single',
                    name: 'Backboard Distance',
                    value: 1,
                    immutability: true,
                  },
                },
              },
              material: {
                name: 'Material',
                value: {
                  outer_ground: {
                    type: 'material',
                    name: 'Outer Ground',
                    value: 'assets/models/thumbnails/Basketball/23.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  court_ground: {
                    type: 'material',
                    name: 'Inner Ground',
                    value: 'assets/models/thumbnails/Basketball/23.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  key_ground: {
                    type: 'material',
                    name: 'Key Ground',
                    value: 'assets/models/thumbnails/Basketball/31.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  line_color: {
                    type: 'color',
                    name: 'Color',
                    value: '#FF0000',
                  },
                },
              },
              hoops: {
                type: 'select',
                name: 'Hoops',
                value:
                  'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb',
                options: [
                  {
                    name: 'Jam In Ground Adjustable Basketball Goal',
                    value:
                      'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb',
                  },
                  {
                    name: 'OmniJam Portable Basketball Goal',
                    value:
                      'assets/models/gltf/OmniJam Portable Basketball Goal.glb',
                  },
                  {
                    name: 'RollaSport Portable Basketball Goal',
                    value:
                      'assets/models/gltf/RollaSport Portable Basketball Goal.glb',
                  },
                ],
                types: {
                  'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb':
                    'gltf',
                  'assets/models/gltf/OmniJam Portable Basketball Goal.glb':
                    'gltf',
                  'assets/models/gltf/RollaSport Portable Basketball Goal.glb':
                    'gltf',
                },
              },
              show_basketball_line: {
                type: 'checkbox',
                name: 'Basketball Line',
                value: 1,
              },
              show_pickleball_line: {
                type: 'checkbox',
                name: 'Pickleball Line',
                value: 0,
              },
              show_tennis_line: {
                type: 'checkbox',
                name: 'Tennis Line',
                value: 0,
              },
              show_volleyball_line: {
                type: 'checkbox',
                name: 'Volleyball Line',
                value: 0,
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
            configurator_name: 'aplomb',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 2,
              height: 7,
              unit: 'ft',
            },
            max_size: 1000,
            components: {
              width: { type: 'single', name: 'Width', value: 2 },
              height: { type: 'single', name: 'Height', value: 7 },
              color: { type: 'color', name: 'Color', value: '#0000CD' },
            },
          },
          {
            name: 'Divider Curtain',
            image_path: 'assets/models/thumbnails/Divider Curtain/1.png',
            format: 'configurator',
            configurator_name: 'dividerCurtain',
            type: '1',
            unit: 'ft',
            default_size: {
              width: 50,
              height: 20,
              unit: 'ft',
            },
            max_size: 200,
            components: {
              width: { type: 'single', name: 'Width', value: 50 },
              mesh: {
                name: 'Mesh',
                value: {
                  height: { type: 'single', name: 'Height', value: 10 },
                  color: { type: 'color', name: 'Color', value: '#AAAAAA' },
                  opacity: {
                    type: 'single',
                    name: 'Opacity',
                    value: 0.5,
                    offset: 0.01,
                  },
                },
              },
              vinyl: {
                name: 'Vinyl',
                value: {
                  height: { type: 'single', name: 'Height', value: 10 },
                  color: { type: 'color', name: 'Color', value: '#0074D9' },
                  opacity: {
                    type: 'single',
                    name: 'Opacity',
                    value: 0.5,
                    offset: 0.01,
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  {
    name: 'OUTDOOR',
    children: [
      {
        name: 'Batting Cages',
        children: [
          {
            name: 'Varsity',
            image_path: 'assets/models/thumbnails/Outdoor Varsity 70.png',
            model_path: 'assets/models/gltf/Outdoor Varsity 70.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              name: '55L',
              width: 55,
              height: 12,
              length: 12,
            },
            staticSizes: [
              {
                name: '70L',
                unit: 'ft',
                width: 70,
                height: 12,
                length: 12,
              },
            ],
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
            name: 'Collegiate',
            image_path: 'assets/models/thumbnails/Outdoor Collegiate 70.png',
            model_path: 'assets/models/gltf/Outdoor Collegiate 70.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              name: '55L',
              width: 55,
              height: 12,
              length: 12,
            },
            staticSizes: [
              {
                name: '70L',
                unit: 'ft',
                width: 70,
                height: 12,
                length: 12,
              },
            ],
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
            name: 'Pro Single',
            image_path: 'assets/models/thumbnails/Outdoor Pro 70.png',
            model_path: 'assets/models/gltf/Outdoor Pro 70.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              name: '55L',
              width: 55,
              height: 12,
              length: 14,
            },
            staticSizes: [
              {
                name: '70L',
                unit: 'ft',
                width: 70,
                height: 12,
                length: 14,
              },
            ],
            // staticSizes: [
            //   {
            //     name: '55W*12H*14L',
            //     unit: 'ft',
            //     width: 55,
            //     height: 12,
            //     length: 14,
            //     extraPrice: 44,
            //   },
            //   {
            //     name: '70W*12H*14L',
            //     unit: 'ft',
            //     width: 70,
            //     height: 12,
            //     length: 14,
            //     extraPrice: 123,
            //   },
            //   {
            //     name: '80W*12H*14L',
            //     unit: 'ft',
            //     width: 80,
            //     height: 12,
            //     length: 14,
            //     extraPrice: 158,
            //   },
            //   {
            //     name: '70W*12H*12L',
            //     unit: 'ft',
            //     width: 70,
            //     height: 12,
            //     length: 12,
            //     extraPrice: 213,
            //   },
            //   {
            //     name: '55W*14H*14L',
            //     unit: 'ft',
            //     width: 55,
            //     height: 14,
            //     length: 14,
            //     extraPrice: 1169,
            //   },
            //   {
            //     name: '70W*14H*14L',
            //     unit: 'ft',
            //     width: 70,
            //     height: 14,
            //     length: 14,
            //     extraPrice: 1310,
            //   },
            //   {
            //     name: '80W*14H*14L',
            //     unit: 'ft',
            //     width: 80,
            //     height: 14,
            //     length: 14,
            //     extraPrice: 1424,
            //   },
            // ],
          },
          {
            name: 'Pro Double',
            image_path: 'assets/models/thumbnails/Outdoor Pro 2x55.png',
            model_path: 'assets/models/gltf/Outdoor Pro 2x55.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              width: 55,
              // height: 12,
              // length: 24,
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
        ],
      },
      {
        name: 'Netting',
        children: [
          {
            name: 'Barrier Net',
            image_path: 'assets/models/thumbnails/Barrier Net.png',
            format: 'configurator',
            configurator_name: 'net',
            type: '5',
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
          {
            name: 'Tunnel (Single / Double / Triple / Quad)',
            image_path: 'assets/models/thumbnails/Phantom.png',
            model_path: 'assets/models/gltf/Phantom.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              width: 70,
              // height: 12,
              // length: 36,
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
          {
            name: 'Open Sided Hitting Cage',
            image_path: 'assets/models/thumbnails/Single Hitting Cage.png',
            model_path: 'assets/models/gltf/Single Hitting Cage.glb',
            type: '5',
            format: 'gltf',
            default_size: {
              unit: 'ft',
              width: 55,
              // height: 12,
              // length: 12,
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
        name: 'Surfaces',
        children: [
          {
            name: 'Turf Rolls',
            image_path: 'assets/models/thumbnails/Turf Rolls/1.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '5',
            unit: 'ft',
            default_size: {
              width: 12,
              length: 15,
              unit: 'ft',
            },
            max_size: 1000,
            components: {
              width: { type: 'single', name: 'Width', value: 12 },
              length: { type: 'single', name: 'Length', value: 15 },
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
            image_path: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '5',
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
                value: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
                piece_size: { width: 100, height: 100 },
                options: [
                  {
                    name: 'WinterGreen',
                    value: 'assets/models/thumbnails/Turf Mats/WinterGreen.jpg',
                  },
                  {
                    name: 'Verde',
                    value: 'assets/models/thumbnails/Turf Mats/Verde.jpg',
                  },
                  {
                    name: 'Red',
                    value: 'assets/models/thumbnails/Turf Mats/Red.jpg',
                  },
                  {
                    name: 'Green',
                    value: 'assets/models/thumbnails/Turf Mats/Green.jpg',
                  },
                  {
                    name: 'Verde1',
                    value: 'assets/models/thumbnails/Turf Mats/Verde1.jpg',
                  },
                ],
              },
            },
          },
          {
            name: 'Rubber',
            image_path: 'assets/models/thumbnails/Rubber/1.jpg',
            format: 'configurator',
            configurator_name: 'horizontality',
            type: '5',
            unit: 'ft',
            default_size: {
              width: 4,
              length: 4,
              unit: 'ft',
            },
            max_size: 1000,
            components: {
              width: { type: 'single', name: 'Width', value: 4 },
              length: { type: 'single', name: 'Length', value: 4 },
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
            name: 'Multi-Sport Courts',
            image_path: 'assets/models/thumbnails/Basketball.png',
            format: 'configurator',
            configurator_name: 'basketball',
            type: '5',
            unit: 'ft',
            default_size: {
              width: 100,
              length: 60,
              unit: 'ft',
            },
            max_size: 200,
            components: {
              dimension: {
                name: 'Dimension',
                value: {
                  outer_width: {
                    type: 'single',
                    name: 'Outer Length',
                    value: 100,
                  },
                  outer_length: {
                    type: 'single',
                    name: 'Outer Width',
                    value: 60,
                  },
                  court_width: {
                    type: 'single',
                    name: 'Court Length',
                    value: 94,
                  },
                  court_length: {
                    type: 'single',
                    name: 'Court Width',
                    value: 50,
                  },
                  rim_height: { type: 'single', name: 'Rim Height', value: 10 },
                  no_charge_zone_arc: {
                    type: 'single',
                    name: 'No Charge Zone Arc',
                    value: 4,
                  },
                  center_circle_diameter: {
                    name: 'Center Circle Diameter',
                    value: {
                      in: { name: 'In', type: 'single', value: 4 },
                      out: { name: 'Out', type: 'single', value: 12 },
                    },
                  },
                  three_point_line_distance: {
                    // from the basket
                    name: '3-point line distance from the basket',
                    value: {
                      min: { type: 'single', name: 'Min', value: 22 },
                      max: { type: 'single', name: 'Max', value: 23.75 },
                    },
                  },
                  key: {
                    type: 'single',
                    name: 'Key (shaded lane or restricted area) width',
                    value: 16,
                  },
                  free_throw_line_distance: {
                    // from the hoops (backboard)
                    type: 'single',
                    name: 'Free-throw line distance from point on the floor directly below the backboard',
                    value: 15,
                  },
                  service_line_distance: {
                    // from the center
                    type: 'single',
                    name: 'Service Line Distance',
                    value: 14,
                  },
                  line_width: {
                    type: 'single',
                    name: 'Line Width',
                    value: 0.3,
                    immutability: true,
                  },
                  hoops_distance: {
                    // from the baseline
                    type: 'single',
                    name: 'Hoops Distance',
                    value: 1,
                    immutability: true,
                  },
                  basket_distance: {
                    // from the hoops (backboard)
                    type: 'single',
                    name: 'Basket Distance',
                    value: 1,
                    immutability: true,
                  },
                  backboard_distance: {
                    // from the center
                    type: 'single',
                    name: 'Backboard Distance',
                    value: 1,
                    immutability: true,
                  },
                },
              },
              material: {
                name: 'Material',
                value: {
                  outer_ground: {
                    type: 'material',
                    name: 'Outer Ground',
                    value: 'assets/models/thumbnails/Basketball/23.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  court_ground: {
                    type: 'material',
                    name: 'Inner Ground',
                    value: 'assets/models/thumbnails/Basketball/23.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  key_ground: {
                    type: 'material',
                    name: 'Key Ground',
                    value: 'assets/models/thumbnails/Basketball/31.png',
                    piece_size: { width: 1000, height: 1000 },
                    options: [
                      {
                        name: '1',
                        value: 'assets/models/thumbnails/Basketball/1.png',
                      },
                      {
                        name: '2',
                        value: 'assets/models/thumbnails/Basketball/2.png',
                      },
                      {
                        name: '3',
                        value: 'assets/models/thumbnails/Basketball/3.png',
                      },
                      {
                        name: '4',
                        value: 'assets/models/thumbnails/Basketball/4.png',
                      },
                      {
                        name: '5',
                        value: 'assets/models/thumbnails/Basketball/5.png',
                      },
                      {
                        name: '6',
                        value: 'assets/models/thumbnails/Basketball/6.png',
                      },
                      {
                        name: '7',
                        value: 'assets/models/thumbnails/Basketball/7.png',
                      },
                      {
                        name: '8',
                        value: 'assets/models/thumbnails/Basketball/8.png',
                      },
                      {
                        name: '9',
                        value: 'assets/models/thumbnails/Basketball/9.png',
                      },
                      {
                        name: '10',
                        value: 'assets/models/thumbnails/Basketball/10.png',
                      },
                      {
                        name: '11',
                        value: 'assets/models/thumbnails/Basketball/11.png',
                      },
                      {
                        name: '12',
                        value: 'assets/models/thumbnails/Basketball/12.png',
                      },
                      {
                        name: '13',
                        value: 'assets/models/thumbnails/Basketball/13.png',
                      },
                      {
                        name: '14',
                        value: 'assets/models/thumbnails/Basketball/14.png',
                      },
                      {
                        name: '15',
                        value: 'assets/models/thumbnails/Basketball/15.png',
                      },
                      {
                        name: '16',
                        value: 'assets/models/thumbnails/Basketball/16.png',
                      },
                      {
                        name: '17',
                        value: 'assets/models/thumbnails/Basketball/17.png',
                      },
                      {
                        name: '18',
                        value: 'assets/models/thumbnails/Basketball/18.png',
                      },
                      {
                        name: '19',
                        value: 'assets/models/thumbnails/Basketball/19.png',
                      },
                      {
                        name: '20',
                        value: 'assets/models/thumbnails/Basketball/20.png',
                      },
                      {
                        name: '21',
                        value: 'assets/models/thumbnails/Basketball/21.png',
                      },
                      {
                        name: '22',
                        value: 'assets/models/thumbnails/Basketball/22.png',
                      },
                      {
                        name: '23',
                        value: 'assets/models/thumbnails/Basketball/23.png',
                      },
                      {
                        name: '24',
                        value: 'assets/models/thumbnails/Basketball/24.png',
                      },
                      {
                        name: '25',
                        value: 'assets/models/thumbnails/Basketball/25.png',
                      },
                      {
                        name: '26',
                        value: 'assets/models/thumbnails/Basketball/26.png',
                      },
                      {
                        name: '27',
                        value: 'assets/models/thumbnails/Basketball/27.png',
                      },
                      {
                        name: '28',
                        value: 'assets/models/thumbnails/Basketball/28.png',
                      },
                      {
                        name: '29',
                        value: 'assets/models/thumbnails/Basketball/29.png',
                      },
                      {
                        name: '30',
                        value: 'assets/models/thumbnails/Basketball/30.png',
                      },
                      {
                        name: '31',
                        value: 'assets/models/thumbnails/Basketball/31.png',
                      },
                      {
                        name: '32',
                        value: 'assets/models/thumbnails/Basketball/32.png',
                      },
                      {
                        name: '33',
                        value: 'assets/models/thumbnails/Basketball/33.png',
                      },
                      {
                        name: '34',
                        value: 'assets/models/thumbnails/Basketball/34.png',
                      },
                      {
                        name: '35',
                        value: 'assets/models/thumbnails/Basketball/35.png',
                      },
                    ],
                  },
                  line_color: {
                    type: 'color',
                    name: 'Color',
                    value: '#FF0000',
                  },
                },
              },
              hoops: {
                type: 'select',
                name: 'Hoops',
                value:
                  'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb',
                options: [
                  {
                    name: 'Jam In Ground Adjustable Basketball Goal',
                    value:
                      'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb',
                  },
                  {
                    name: 'OmniJam Portable Basketball Goal',
                    value:
                      'assets/models/gltf/OmniJam Portable Basketball Goal.glb',
                  },
                  {
                    name: 'RollaSport Portable Basketball Goal',
                    value:
                      'assets/models/gltf/RollaSport Portable Basketball Goal.glb',
                  },
                ],
                types: {
                  'assets/models/gltf/Jam In Ground Adjustable Basketball Goal.glb':
                    'gltf',
                  'assets/models/gltf/OmniJam Portable Basketball Goal.glb':
                    'gltf',
                  'assets/models/gltf/RollaSport Portable Basketball Goal.glb':
                    'gltf',
                },
              },
              show_basketball_line: {
                type: 'checkbox',
                name: 'Basketball Line',
                value: 1,
              },
              show_pickleball_line: {
                type: 'checkbox',
                name: 'Pickleball Line',
                value: 0,
              },
              show_tennis_line: {
                type: 'checkbox',
                name: 'Tennis Line',
                value: 0,
              },
              show_volleyball_line: {
                type: 'checkbox',
                name: 'Volleyball Line',
                value: 0,
              },
            },
          },
        ],
      },
      {
        name: 'Windscreens',
        image_path: 'assets/models/thumbnails/Windscreens/1.png',
        format: 'configurator',
        configurator_name: 'aplomb',
        type: '5',
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
          opacity: {
            type: 'single',
            name: 'Opacity',
            value: 0.3,
            offset: 0.01,
          },
          material: {
            type: 'material',
            name: 'Material',
            value: 'assets/models/thumbnails/Windscreens/1.png',
            piece_size: { width: 30, height: 30 },
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
              {
                name: '5',
                value: 'assets/models/thumbnails/Windscreens/5.png',
              },
              {
                name: '6',
                value: 'assets/models/thumbnails/Windscreens/6.png',
              },
              {
                name: '7',
                value: 'assets/models/thumbnails/Windscreens/7.png',
              },
              {
                name: '8',
                value: 'assets/models/thumbnails/Windscreens/8.png',
              },
              {
                name: '9',
                value: 'assets/models/thumbnails/Windscreens/9.png',
              },
              {
                name: '10',
                value: 'assets/models/thumbnails/Windscreens/10.png',
              },
            ],
            immutability: true,
          },
        },
      },
      // {
      //   name: "Pitcher's Screens",
      //   image_path: 'logo512.png',
      // },
      {
        name: 'Soccer Goals',
        image_path: 'assets/models/thumbnails/Goals.png',
        model_path: 'assets/models/gltf/Goals.glb',
        type: '5',
        format: 'gltf',
        default_size: {
          name: '24W*8H',
          unit: 'ft',
          width: 24,
          // height: 8,
          // length: 5,
        },
      },
      {
        name: 'Training Equipment',
        children: [
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
              // height: 9,
              // length: 1,
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
              // height: 7,
              // length: 1,
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
// basketball: Basketball,
// dividerCurtain: DividerCurtain,

export const buildingSizes = {
  size1: JSON.stringify({
    floorplan: {
      version: '0.0.2a',
      corners: {
        '4bb4443f-7fab-f22d-5497-212403689ff9': {
          x: 0,
          y: 0,
          elevation: 15,
        },
        'ab04e8c7-2de5-2980-3ac6-358f020f0aac': {
          x: 100,
          y: 0,
          elevation: 15,
        },
        'c038166d-c9fc-d71a-f009-1a3010ea9749': {
          x: 100,
          y: 100,
          elevation: 15,
        },
        '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532': {
          x: 0,
          y: 100,
          elevation: 15,
        },
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
          a: {
            x: 364.1221682976095,
            y: 302.09874020427594,
          },
          b: {
            x: 551.5972597957242,
            y: 333.6421682976096,
          },
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
          a: {
            x: 603.3235350530827,
            y: 309.21587164830146,
          },
          b: {
            x: 583.0881283516987,
            y: 465.14753505308255,
          },
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
          a: {
            x: 534.2355350530825,
            y: 465.1475350530825,
          },
          b: {
            x: 358.06846494691763,
            y: 465.14753505308244,
          },
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
          a: {
            x: 372.43687474062824,
            y: 450.7791252593718,
          },
          b: {
            x: 372.43687474062824,
            y: 262.7088747406283,
          },
        },
      ],
      rooms: {
        '4bb4443f-7fab-f22d-5497-212403689ff9,ab04e8c7-2de5-2980-3ac6-358f020f0aac,c038166d-c9fc-d71a-f009-1a3010ea9749,453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532':
          {
            name: 'Size 1',
          },
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
        width: 0.03,
        height: 0.03,
      },
    },
    items: [],
  }),
  size2: JSON.stringify({
    floorplan: {
      version: '0.0.2a',
      corners: {
        '4bb4443f-7fab-f22d-5497-212403689ff9': { x: 0, y: 0, elevation: 15 },
        'ab04e8c7-2de5-2980-3ac6-358f020f0aac': { x: 200, y: 0, elevation: 15 },
        'c038166d-c9fc-d71a-f009-1a3010ea9749': {
          x: 200,
          y: 200,
          elevation: 15,
        },
        '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532': { x: 0, y: 200, elevation: 15 },
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
          { name: 'Size 2' },
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
        width: 0.03,
        height: 0.03,
      },
    },
    items: [],
  }),
  size3: JSON.stringify({
    floorplan: {
      version: '0.0.2a',
      corners: {
        '4bb4443f-7fab-f22d-5497-212403689ff9': { x: 0, y: 0, elevation: 15 },
        'ab04e8c7-2de5-2980-3ac6-358f020f0aac': { x: 300, y: 0, elevation: 15 },
        'c038166d-c9fc-d71a-f009-1a3010ea9749': {
          x: 300,
          y: 300,
          elevation: 15,
        },
        '453f6fc6-0f51-a4bd-bcb8-9f7ff08d6532': { x: 0, y: 300, elevation: 15 },
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
          { name: 'Size 3' },
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
        width: 0.03,
        height: 0.03,
      },
    },
    items: [],
  }),
};

export const wallTextures = [
  {
    name: 'Turf',
    url: 'assets/rooms/textures/WinterGreen.jpg',
    stretch: false,
    scale: 300,
  },
  {
    name: 'Luxury Vinyl',
    url: 'assets/rooms/textures/hardwood.png',
    stretch: false,
    scale: 300,
  },
];
