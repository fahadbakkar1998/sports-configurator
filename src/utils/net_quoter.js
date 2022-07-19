/* unit - ft */

// CALCULATE TUNNEL
export const calculateTunnel = ({ use, length, width, height }) => {
  let nylon18 = 0,
    nylon21 = 0,
    nylon36 = 0,
    nylon42 = 0,
    nylon48 = 0,
    nylon60 = 0,
    nylon420 = 0,
    poly21 = 0,
    poly36 = 0,
    nylon18latex = 0,
    nylon21latex = 0,
    nylon36latex = 0,
    nylon42latex = 0,
    nylon48latex = 0,
    nylon60latex = 0,
    nylon420latex = 0,
    nylon21dupont = 0,
    nylon36dupont = 0,
    nylon42dupont = 0,
    nylon60dupont = 0,
    nylon21varnish = 0,
    nylon36varnish = 0,
    nylon42varnish = 0,
    nylon60varnish = 0,
    nylon96 = 0,
    nylon96latex = 0,
    nylon96dupont = 0,
    nylon96varnish = 0;

  if (use === 'baseball') {
    nylon21 =
      ((length * 2 + width * 2) * height + width * length) * 0.0263 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon21 = (nylon21 / 0.75 / 0.95) * 1.06;

    nylon36 =
      ((length * 2 + width * 2) * height + width * length) * 0.03885 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon36 = (nylon36 / 0.75 / 0.95) * 1.06;

    nylon42 =
      ((length * 2 + width * 2) * height + width * length) * 0.0441 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon42 = (nylon42 / 0.75 / 0.95) * 1.08;

    nylon48 =
      ((length * 2 + width * 2) * height + width * length) * 0.0608 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon48 = (nylon48 / 0.75 / 0.95) * 1.08;

    nylon60 =
      ((length * 2 + width * 2) * height + width * length) * 0.0756 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon60 = (nylon60 / 0.75 / 0.95) * 1.1;

    poly21 = nylon21 * 0.9;
    poly36 = nylon36 * 0.9;

    nylon21latex = nylon21 * 1.15;
    nylon36latex = nylon36 * 1.15;
    nylon42latex = nylon42 * 1.15;
    nylon48latex =
      ((length * 2 + width * 2) * height + width * length) * 0.088 * 4.55 +
      (length * 5 + height * 4 + width * 4) * 0.05 +
      ((length * 5 + height * 4 + width * 4) / 100) * 4.4 +
      ((length * 5 + height * 4 + width * 4) / 65) * 12 +
      6;
    nylon48latex = (nylon48latex / 0.75 / 0.95) * 1.08 * 1.15;
    nylon60latex = nylon60 * 1.15;

    nylon21dupont = nylon21 * 1.09 * 1.15;
    nylon36dupont = nylon36 * 1.33 * 1.15;
    nylon42dupont = nylon42 * 1.33 * 1.15;
    nylon60dupont = nylon60 * 1.28 * 1.15;

    nylon21varnish = nylon21 * 1.09 * 1.15 * 1.12;
    nylon36varnish = nylon36 * 1.33 * 1.15 * 1.12;
    nylon42varnish = nylon42 * 1.33 * 1.15 * 1.12;
    nylon60varnish = nylon60 * 1.28 * 1.15 * 1.12;

    // ADJUSTING BASEBALL TUNNEL PRICES
    nylon21 = nylon21 * 1.05 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.05 * 1.09;
    nylon42 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon48 = nylon48 * 1.05 * 1.1 * 1.09;
    nylon60 = nylon60 * 1.05 * 1.1 * 1.09;
    poly21 = poly21 * 1.05 * 1.1 * 1.09;
    poly36 = poly36 * 1.05 * 1.1 * 1.09;
    nylon21latex = nylon21 * 1.2;
    nylon36latex = nylon36 * 1.2;
    nylon42latex = nylon42 * 1.2;
    nylon48latex = nylon48 * 1.2;
    nylon60latex = nylon60 * 1.2;
    nylon21dupont = nylon21dupont * 1.05 * 1.09 * 0.9;
    nylon36dupont = nylon36dupont * 1.05 * 1.09 * 0.9;
    nylon42dupont = nylon42dupont * 1.05 * 1.09 * 0.9;
    nylon60dupont = nylon60dupont * 1.05 * 1.09 * 0.9;
    nylon21varnish = nylon21varnish * 1.05 * 1.09 * 0.9;
    nylon36varnish = nylon36varnish * 1.05 * 1.09 * 0.9;
    nylon42varnish = nylon42varnish * 1.05 * 1.09 * 0.9;
    nylon60varnish = nylon60varnish * 1.05 * 1.09 * 0.9;
    nylon96 = nylon60 * 1.6 * 1.4 * 0.87;
    nylon96latex = nylon60latex * 1.6 * 1.4 * 0.87;
    nylon96dupont = nylon60dupont * 1.6 * 1.4 * 0.87;
    nylon96varnish = nylon60varnish * 1.6 * 1.4 * 0.87;
    nylon21dupont = nylon21dupont * 1.15;
    nylon36dupont = nylon36dupont * 1.15;
    nylon42dupont = nylon42dupont * 1.15;
    nylon60dupont = nylon60dupont * 1.15;
    nylon21varnish = nylon21varnish * 1.15;
    nylon36varnish = nylon36varnish * 1.15;
    nylon42varnish = nylon42varnish * 1.15;
    nylon60varnish = nylon60varnish * 1.15;

    // adding 5%
    nylon21 = nylon21 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon42 = nylon42 * 1.05;
    nylon48 = nylon48 * 1.05;
    nylon60 = nylon60 * 1.05;
    poly21 = poly21 * 1.05;
    poly36 = poly36 * 1.05;
    nylon21latex = nylon21latex * 1.05;
    nylon36latex = nylon36latex * 1.05;
    nylon42latex = nylon42latex * 1.05;
    nylon48latex = nylon48latex * 1.05;
    nylon60latex = nylon60latex * 1.05;
    nylon21dupont = nylon21dupont * 1.05;
    nylon36dupont = nylon36dupont * 1.05;
    nylon42dupont = nylon42dupont * 1.05;
    nylon60dupont = nylon60dupont * 1.05;
    nylon21varnish = nylon21varnish * 1.05;
    nylon36varnish = nylon36varnish * 1.05;
    nylon42varnish = nylon42varnish * 1.05;
    nylon60varnish = nylon60varnish * 1.05;
    nylon96 = nylon96 * 1.05;
    nylon96latex = nylon96latex * 1.05;
    nylon96dupont = nylon96dupont * 1.05;
    nylon96varnish = nylon96varnish * 1.05;

    // adding 7.5%
    nylon21 = nylon21 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon42 = nylon42 * 1.075;
    nylon48 = nylon48 * 1.075;
    nylon60 = nylon60 * 1.075;
    poly21 = poly21 * 1.075;
    poly36 = poly36 * 1.075;
    nylon21latex = nylon21latex * 1.075;
    nylon36latex = nylon36latex * 1.075;
    nylon42latex = nylon42latex * 1.075;
    nylon48latex = nylon48latex * 1.075;
    nylon60latex = nylon60latex * 1.075;
    nylon21dupont = nylon21dupont * 1.075;
    nylon36dupont = nylon36dupont * 1.075;
    nylon42dupont = nylon42dupont * 1.075;
    nylon60dupont = nylon60dupont * 1.075;
    nylon21varnish = nylon21varnish * 1.075;
    nylon36varnish = nylon36varnish * 1.075;
    nylon42varnish = nylon42varnish * 1.075;
    nylon60varnish = nylon60varnish * 1.075;
    nylon96 = nylon96 * 1.075;
    nylon96latex = nylon96latex * 1.075;
    nylon96dupont = nylon96dupont * 1.075;
    nylon96varnish = nylon96varnish * 1.075;

    // adding 2%
    nylon21 = nylon21 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon42 = nylon42 * 1.02;
    nylon48 = nylon48 * 1.02;
    nylon60 = nylon60 * 1.02;
    poly21 = poly21 * 1.02;
    poly36 = poly36 * 1.02;
    nylon21latex = nylon21latex * 1.02;
    nylon36latex = nylon36latex * 1.02;
    nylon42latex = nylon42latex * 1.02;
    nylon48latex = nylon48latex * 1.02;
    nylon60latex = nylon60latex * 1.02;
    nylon21dupont = nylon21dupont * 1.02;
    nylon36dupont = nylon36dupont * 1.02;
    nylon42dupont = nylon42dupont * 1.02;
    nylon60dupont = nylon60dupont * 1.02;
    nylon21varnish = nylon21varnish * 1.02;
    nylon36varnish = nylon36varnish * 1.02;
    nylon42varnish = nylon42varnish * 1.02;
    nylon60varnish = nylon60varnish * 1.02;
    nylon96 = nylon96 * 1.02;
    nylon96latex = nylon96latex * 1.02;
    nylon96dupont = nylon96dupont * 1.02;
    nylon96varnish = nylon96varnish * 1.02;

    // adding 1%
    nylon21 = nylon21 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon42 = nylon42 * 1.01;
    nylon48 = nylon48 * 1.01;
    nylon60 = nylon60 * 1.01;
    poly21 = poly21 * 1.01;
    poly36 = poly36 * 1.01;
    nylon21latex = nylon21latex * 1.01;
    nylon36latex = nylon36latex * 1.01;
    nylon42latex = nylon42latex * 1.01;
    nylon48latex = nylon48latex * 1.01;
    nylon60latex = nylon60latex * 1.01;
    nylon21dupont = nylon21dupont * 1.01;
    nylon36dupont = nylon36dupont * 1.01;
    nylon42dupont = nylon42dupont * 1.01;
    nylon60dupont = nylon60dupont * 1.01;
    nylon21varnish = nylon21varnish * 1.01;
    nylon36varnish = nylon36varnish * 1.01;
    nylon42varnish = nylon42varnish * 1.01;
    nylon60varnish = nylon60varnish * 1.01;
    nylon96 = nylon96 * 1.01;
    nylon96latex = nylon96latex * 1.01;
    nylon96dupont = nylon96dupont * 1.01;
    nylon96varnish = nylon96varnish * 1.01;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;
  } else if (use === 'golf') {
    let cage =
      ((width * 2 + length * 1) * height + width * length) * 0.057 * 4.65 +
      (width * 4 + length * 3 + height * 4) * 0.05 +
      ((width * 4 + length * 3 + height * 4) / 100) * 6 +
      ((width * 4 + length * 3 + height * 4) / 20) * 12;
    cage = cage / 0.75 / 0.95;
    let baffle =
      length * height * 0.05985 * 4.55 +
      (length * 2 + height * 2) * 0.05 +
      ((length * 2 + height * 2) / 100) * 4.4 +
      ((length * 2 + height * 2) / 20) * 12;
    baffle = baffle / 0.75 / 0.95;

    nylon18 = cage + baffle + 6;

    cage =
      ((width * 2 + length * 1) * height + width * length) * 0.057 * 4.65 +
      (width * 4 + length * 3 + height * 4) * 0.05 +
      ((width * 4 + length * 3 + height * 4) / 100) * 6 +
      ((width * 4 + length * 3 + height * 4) / 20) * 12;
    cage = cage / 0.73 / 0.95;
    baffle =
      length * height * 0.05985 * 4.55 +
      (length * 2 + height * 2) * 0.05 +
      ((length * 2 + height * 2) / 100) * 4.4 +
      ((length * 2 + height * 2) / 20) * 12;
    baffle = baffle / 0.73 / 0.95;

    nylon420 = cage + baffle + 6;
    nylon36 = nylon18 * 1.7;

    nylon18latex = nylon18 * 1.15;
    nylon420latex = nylon420 * 1.15;
    nylon36latex = nylon36 * 1.15;

    // ADJUSTING GOLF TUNNEL PRICES
    nylon18 = nylon18 * 1.05 * 1.09;
    nylon420 = nylon420 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.1 * 1.09;
    nylon18latex = nylon18 * 1.2;
    nylon420latex = nylon420 * 1.2;
    nylon36latex = nylon36 * 1.2;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 7.5%
    nylon18 = nylon18 * 1.075;
    nylon420 = nylon420 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon18latex = nylon18latex * 1.075;
    nylon420latex = nylon420latex * 1.075;
    nylon36latex = nylon36latex * 1.075;

    // adding 2%
    nylon18 = nylon18 * 1.02;
    nylon420 = nylon420 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon18latex = nylon18latex * 1.02;
    nylon420latex = nylon420latex * 1.02;
    nylon36latex = nylon36latex * 1.02;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 1%
    nylon18 = nylon18 * 1.01;
    nylon420 = nylon420 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon18latex = nylon18latex * 1.01;
    nylon420latex = nylon420latex * 1.01;
    nylon36latex = nylon36latex * 1.01;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
  }

  return {
    nylon18,
    nylon21,
    nylon36,
    nylon42,
    nylon48,
    nylon60,
    nylon420,
    poly21,
    poly36,
    nylon18latex,
    nylon21latex,
    nylon36latex,
    nylon42latex,
    nylon48latex,
    nylon60latex,
    nylon420latex,
    nylon21dupont,
    nylon36dupont,
    nylon42dupont,
    nylon60dupont,
    nylon21varnish,
    nylon36varnish,
    nylon42varnish,
    nylon60varnish,
    nylon96,
    nylon96latex,
    nylon96dupont,
    nylon96varnish,
  };
};

// CALCULATE BARRIER
export const calculateBarrier = ({ use, length, height }) => {
  let nylon18 = 0,
    nylon21 = 0,
    nylon36 = 0,
    nylon42 = 0,
    nylon48 = 0,
    nylon60 = 0,
    nylon420 = 0,
    poly21 = 0,
    poly36 = 0,
    nylon18latex = 0,
    nylon21latex = 0,
    nylon36latex = 0,
    nylon42latex = 0,
    nylon48latex = 0,
    nylon60latex = 0,
    nylon420latex = 0,
    nylon21dupont = 0,
    nylon36dupont = 0,
    nylon42dupont = 0,
    nylon60dupont = 0,
    nylon21varnish = 0,
    nylon36varnish = 0,
    nylon42varnish = 0,
    nylon60varnish = 0,
    nylon96 = 0,
    nylon96latex = 0,
    nylon96dupont = 0,
    nylon96varnish = 0;

  if (use === 'baseball') {
    nylon21 =
      height * length * 0.0284 * 4.55 +
      (height * 2 + length * 2) * 0.05 +
      ((height * 2 + length * 2) / 100) * 4.4 +
      ((height * 2 + length * 2) / 60) * 12 +
      4;
    nylon21 = (nylon21 / 0.75 / 0.95) * 1.06;

    nylon36 =
      height * length * 0.03885 * 4.55 +
      (height * 2 + length * 2) * 0.05 +
      ((height * 2 + length * 2) / 100) * 4.4 +
      ((height * 2 + length * 2) / 60) * 12 +
      4;
    nylon36 = (nylon36 / 0.75 / 0.95) * 1.06;

    nylon42 =
      height * length * 0.0441 * 4.55 +
      (height * 2 + length * 2) * 0.05 +
      ((height * 2 + length * 2) / 100) * 4.4 +
      ((height * 2 + length * 2) / 60) * 12 +
      4;
    nylon42 = (nylon42 / 0.75 / 0.95) * 1.08;

    nylon48 =
      height * length * 0.058 * 4.55 +
      (height * 2 + length * 2) * 0.05 +
      ((height * 2 + length * 2) / 100) * 4.4 +
      ((height * 2 + length * 2) / 60) * 12 +
      4;
    nylon48 = (nylon48 / 0.75 / 0.95) * 1.08;

    nylon60 =
      height * length * 0.0756 * 4.55 +
      (height * 2 + length * 2) * 0.05 +
      ((height * 2 + length * 2) / 100) * 4.4 +
      ((height * 2 + length * 2) / 60) * 12 +
      4;
    nylon60 = (nylon60 / 0.75 / 0.95) * 1.1;

    poly21 = nylon21 * 0.9;
    poly36 = nylon36 * 0.9;

    nylon21latex = nylon21 * 1.15;
    nylon36latex = nylon36 * 1.15;
    nylon42latex = nylon42 * 1.15;
    nylon48latex = nylon48 * 1.15;
    nylon60latex = nylon60 * 1.15;

    nylon21dupont = nylon21 * 1.09 * 1.15;
    nylon36dupont = nylon36 * 1.33 * 1.15;
    nylon42dupont = nylon42 * 1.33 * 1.15;
    nylon60dupont = nylon60 * 1.28 * 1.15;

    nylon21varnish = nylon21dupont * 1.15 * 1.12;
    nylon36varnish = nylon36dupont * 1.15 * 1.12;
    nylon42varnish = nylon42dupont * 1.15 * 1.12;
    nylon60varnish = nylon60dupont * 1.15 * 1.12;

    // ADJUSTING BASEBALL BARRIER PRICES
    nylon21 = nylon21 * 1.05 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.05 * 1.09;
    nylon42 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon48 = nylon48 * 1.05 * 1.1 * 1.09;
    nylon60 = nylon60 * 1.05 * 1.1 * 1.09;
    poly21 = poly21 * 1.05 * 1.1 * 1.09;
    poly36 = poly36 * 1.05 * 1.1 * 1.09;
    nylon21latex = nylon21 * 1.2;
    nylon36latex = nylon36 * 1.2;
    nylon42latex = nylon42 * 1.2;
    nylon48latex = nylon48 * 1.2;
    nylon60latex = nylon60 * 1.2;
    nylon21dupont = nylon21dupont * 1.05 * 1.09 * 0.9;
    nylon36dupont = nylon36dupont * 1.05 * 1.09 * 0.9;
    nylon42dupont = nylon42dupont * 1.05 * 1.09 * 0.9;
    nylon60dupont = nylon60dupont * 1.05 * 1.09 * 0.9;
    nylon21varnish = nylon21varnish * 1.05 * 1.09 * 0.9;
    nylon36varnish = nylon36varnish * 1.05 * 1.09 * 0.9;
    nylon42varnish = nylon42varnish * 1.05 * 1.09 * 0.9;
    nylon60varnish = nylon60varnish * 1.05 * 1.09 * 0.9;

    nylon96 = nylon60 * 1.6 * 1.4 * 0.87;
    nylon96latex = nylon60latex * 1.6 * 1.4 * 0.87;
    nylon96dupont = nylon60dupont * 1.6 * 1.4 * 0.87;
    nylon96varnish = nylon60varnish * 1.6 * 1.4 * 0.87;

    nylon21dupont = nylon21dupont * 1.15;
    nylon36dupont = nylon36dupont * 1.15;
    nylon42dupont = nylon42dupont * 1.15;
    nylon60dupont = nylon60dupont * 1.15;
    nylon21varnish = nylon21varnish * 1.15;
    nylon36varnish = nylon36varnish * 1.15;
    nylon42varnish = nylon42varnish * 1.15;
    nylon60varnish = nylon60varnish * 1.15;

    // adding 5%
    nylon21 = nylon21 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon42 = nylon42 * 1.05;
    nylon48 = nylon48 * 1.05;
    nylon60 = nylon60 * 1.05;
    poly21 = poly21 * 1.05;
    poly36 = poly36 * 1.05;
    nylon21latex = nylon21latex * 1.05;
    nylon36latex = nylon36latex * 1.05;
    nylon42latex = nylon42latex * 1.05;
    nylon48latex = nylon48latex * 1.05;
    nylon60latex = nylon60latex * 1.05;
    nylon21dupont = nylon21dupont * 1.05;
    nylon36dupont = nylon36dupont * 1.05;
    nylon42dupont = nylon42dupont * 1.05;
    nylon60dupont = nylon60dupont * 1.05;
    nylon21varnish = nylon21varnish * 1.05;
    nylon36varnish = nylon36varnish * 1.05;
    nylon42varnish = nylon42varnish * 1.05;
    nylon60varnish = nylon60varnish * 1.05;
    nylon96 = nylon96 * 1.05;
    nylon96latex = nylon96latex * 1.05;
    nylon96dupont = nylon96dupont * 1.05;
    nylon96varnish = nylon96varnish * 1.05;

    // adding 7.5%
    nylon21 = nylon21 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon42 = nylon42 * 1.075;
    nylon48 = nylon48 * 1.075;
    nylon60 = nylon60 * 1.075;
    poly21 = poly21 * 1.075;
    poly36 = poly36 * 1.075;
    nylon21latex = nylon21latex * 1.075;
    nylon36latex = nylon36latex * 1.075;
    nylon42latex = nylon42latex * 1.075;
    nylon48latex = nylon48latex * 1.075;
    nylon60latex = nylon60latex * 1.075;
    nylon21dupont = nylon21dupont * 1.075;
    nylon36dupont = nylon36dupont * 1.075;
    nylon42dupont = nylon42dupont * 1.075;
    nylon60dupont = nylon60dupont * 1.075;
    nylon21varnish = nylon21varnish * 1.075;
    nylon36varnish = nylon36varnish * 1.075;
    nylon42varnish = nylon42varnish * 1.075;
    nylon60varnish = nylon60varnish * 1.075;
    nylon96 = nylon96 * 1.075;
    nylon96latex = nylon96latex * 1.075;
    nylon96dupont = nylon96dupont * 1.075;
    nylon96varnish = nylon96varnish * 1.075;

    // adding 2%
    nylon21 = nylon21 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon42 = nylon42 * 1.02;
    nylon48 = nylon48 * 1.02;
    nylon60 = nylon60 * 1.02;
    poly21 = poly21 * 1.02;
    poly36 = poly36 * 1.02;
    nylon21latex = nylon21latex * 1.02;
    nylon36latex = nylon36latex * 1.02;
    nylon42latex = nylon42latex * 1.02;
    nylon48latex = nylon48latex * 1.02;
    nylon60latex = nylon60latex * 1.02;
    nylon21dupont = nylon21dupont * 1.02;
    nylon36dupont = nylon36dupont * 1.02;
    nylon42dupont = nylon42dupont * 1.02;
    nylon60dupont = nylon60dupont * 1.02;
    nylon21varnish = nylon21varnish * 1.02;
    nylon36varnish = nylon36varnish * 1.02;
    nylon42varnish = nylon42varnish * 1.02;
    nylon60varnish = nylon60varnish * 1.02;
    nylon96 = nylon96 * 1.02;
    nylon96latex = nylon96latex * 1.02;
    nylon96dupont = nylon96dupont * 1.02;
    nylon96varnish = nylon96varnish * 1.02;

    // adding 1%
    nylon21 = nylon21 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon42 = nylon42 * 1.01;
    nylon48 = nylon48 * 1.01;
    nylon60 = nylon60 * 1.01;
    poly21 = poly21 * 1.01;
    poly36 = poly36 * 1.01;
    nylon21latex = nylon21latex * 1.01;
    nylon36latex = nylon36latex * 1.01;
    nylon42latex = nylon42latex * 1.01;
    nylon48latex = nylon48latex * 1.01;
    nylon60latex = nylon60latex * 1.01;
    nylon21dupont = nylon21dupont * 1.01;
    nylon36dupont = nylon36dupont * 1.01;
    nylon42dupont = nylon42dupont * 1.01;
    nylon60dupont = nylon60dupont * 1.01;
    nylon21varnish = nylon21varnish * 1.01;
    nylon36varnish = nylon36varnish * 1.01;
    nylon42varnish = nylon42varnish * 1.01;
    nylon60varnish = nylon60varnish * 1.01;
    nylon96 = nylon96 * 1.01;
    nylon96latex = nylon96latex * 1.01;
    nylon96dupont = nylon96dupont * 1.01;
    nylon96varnish = nylon96varnish * 1.01;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;
  } else if (use === 'golf') {
    nylon18 =
      length * height * 0.05985 * 4.55 +
      (length * 2 + height * 2) * 0.05 +
      ((length * 2 + height * 2) / 100) * 4.4 +
      ((length * 2 + height * 2) / 20) * 12 +
      4;
    nylon18 = nylon18 / 0.75 / 0.95;

    nylon420 =
      length * height * 0.05985 * 4.55 +
      (length * 2 + height * 2) * 0.05 +
      ((length * 2 + height * 2) / 100) * 4.4 +
      ((length * 2 + height * 2) / 20) * 12 +
      4;
    nylon420 = nylon420 / 0.73 / 0.95;

    nylon36 = nylon18 * 1.7;
    nylon18latex = nylon18 * 1.15;
    nylon420latex = nylon420 * 1.15;
    nylon36latex = nylon36 * 1.15;

    // ADJUSTING GOLF BARRIER PRICES
    nylon18 = nylon18 * 1.05 * 1.09;
    nylon420 = nylon420 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.1 * 1.09;
    nylon18latex = nylon18 * 1.2;
    nylon420latex = nylon420 * 1.2;
    nylon36latex = nylon36 * 1.2;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 7.5%
    nylon18 = nylon18 * 1.075;
    nylon420 = nylon420 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon18latex = nylon18latex * 1.075;
    nylon420latex = nylon420latex * 1.075;
    nylon36latex = nylon36latex * 1.075;

    // adding 2%
    nylon18 = nylon18 * 1.02;
    nylon420 = nylon420 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon18latex = nylon18latex * 1.02;
    nylon420latex = nylon420latex * 1.02;
    nylon36latex = nylon36latex * 1.02;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 1%
    nylon18 = nylon18 * 1.01;
    nylon420 = nylon420 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon18latex = nylon18latex * 1.01;
    nylon420latex = nylon420latex * 1.01;
    nylon36latex = nylon36latex * 1.01;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
  }

  return {
    nylon18,
    nylon21,
    nylon36,
    nylon42,
    nylon48,
    nylon60,
    nylon420,
    poly21,
    poly36,
    nylon18latex,
    nylon21latex,
    nylon36latex,
    nylon42latex,
    nylon48latex,
    nylon60latex,
    nylon420latex,
    nylon21dupont,
    nylon36dupont,
    nylon42dupont,
    nylon60dupont,
    nylon21varnish,
    nylon36varnish,
    nylon42varnish,
    nylon60varnish,
    nylon96,
    nylon96latex,
    nylon96dupont,
    nylon96varnish,
  };
};

// CALCULATE HITTING
export const calculateHitting = ({ use, width, length, height }) => {
  let nylon18 = 0,
    nylon21 = 0,
    nylon36 = 0,
    nylon42 = 0,
    nylon48 = 0,
    nylon60 = 0,
    nylon420 = 0,
    poly21 = 0,
    poly36 = 0,
    nylon18latex = 0,
    nylon21latex = 0,
    nylon36latex = 0,
    nylon42latex = 0,
    nylon48latex = 0,
    nylon60latex = 0,
    nylon420latex = 0,
    nylon21dupont = 0,
    nylon36dupont = 0,
    nylon42dupont = 0,
    nylon60dupont = 0,
    nylon21varnish = 0,
    nylon36varnish = 0,
    nylon42varnish = 0,
    nylon60varnish = 0,
    nylon96 = 0,
    nylon96latex = 0,
    nylon96dupont = 0,
    nylon96varnish = 0;

  if (use === 'baseball') {
    nylon21 =
      ((length * 2 + width * 1) * height + length * width) * 0.0263 * 4.65 +
      (length * 4 + width * 3 + height * 4) * 0.05 +
      ((length * 4 + width * 3 + height * 4) / 100) * 6 +
      ((length * 4 + width * 3 + height * 4) / 60) * 12 +
      6;
    nylon21 = (nylon21 / 0.7 / 0.95) * 1.06;

    nylon36 =
      ((length * 2 + width * 1) * height + length * width) * 0.0389 * 4.65 +
      (length * 4 + width * 3 + height * 4) * 0.05 +
      ((length * 4 + width * 3 + height * 4) / 100) * 6 +
      ((length * 4 + width * 3 + height * 4) / 60) * 12 +
      6;
    nylon36 = (nylon36 / 0.7 / 0.95) * 1.06;

    nylon42 =
      ((length * 2 + width * 1) * height + length * width) * 0.0441 * 4.65 +
      (length * 4 + width * 3 + height * 4) * 0.05 +
      ((length * 4 + width * 3 + height * 4) / 100) * 6 +
      ((length * 4 + width * 3 + height * 4) / 60) * 12 +
      6;
    nylon42 = (nylon42 / 0.7 / 0.95) * 1.08;

    nylon48 =
      ((length * 2 + width * 1) * height + length * width) * 0.0608 * 4.65 +
      (length * 4 + width * 3 + height * 4) * 0.05 +
      ((length * 4 + width * 3 + height * 4) / 100) * 6 +
      ((length * 4 + width * 3 + height * 4) / 60) * 12 +
      6;
    nylon48 = (nylon48 / 0.7 / 0.95) * 1.08;

    nylon60 =
      ((length * 2 + width * 1) * height + length * width) * 0.0756 * 4.65 +
      (length * 4 + width * 3 + height * 4) * 0.05 +
      ((length * 4 + width * 3 + height * 4) / 100) * 6 +
      ((length * 4 + width * 3 + height * 4) / 60) * 12 +
      6;
    nylon60 = (nylon60 / 0.7 / 0.95) * 1.1;

    poly21 = nylon21 * 0.9;
    poly36 = nylon36 * 0.9;

    nylon21latex = nylon21 * 1.15;
    nylon36latex = nylon36 * 1.15;
    nylon42latex = nylon42 * 1.15;
    nylon48latex = nylon48 * 1.15;
    nylon60latex = nylon60 * 1.15;
    nylon21dupont = nylon21 * 1.09 * 1.15;
    nylon36dupont = nylon36 * 1.33 * 1.15;
    nylon42dupont = nylon42 * 1.33 * 1.15;
    nylon60dupont = nylon60 * 1.28 * 1.15;
    nylon21varnish = nylon21 * 1.09 * 1.15 * 1.12;
    nylon36varnish = nylon36 * 1.33 * 1.15 * 1.12;
    nylon42varnish = nylon42 * 1.33 * 1.15 * 1.12;
    nylon60varnish = nylon60 * 1.28 * 1.15 * 1.12;

    // ADJUSTING BASEBALL HITTING CAGE PRICES
    nylon21 = nylon21 * 1.05 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.05 * 1.09;
    nylon42 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon48 = nylon48 * 1.05 * 1.1 * 1.09;
    nylon60 = nylon60 * 1.05 * 1.1 * 1.09;
    poly21 = poly21 * 1.05 * 1.1 * 1.09;
    poly36 = poly36 * 1.05 * 1.1 * 1.09;
    nylon21latex = nylon21 * 1.2;
    nylon36latex = nylon36 * 1.2;
    nylon42latex = nylon42 * 1.2;
    nylon48latex = nylon48 * 1.2;
    nylon60latex = nylon60 * 1.2;
    nylon21dupont = nylon21dupont * 1.05 * 1.09 * 0.9;
    nylon36dupont = nylon36dupont * 1.05 * 1.09 * 0.9;
    nylon42dupont = nylon42dupont * 1.05 * 1.09 * 0.9;
    nylon60dupont = nylon60dupont * 1.05 * 1.09 * 0.9;
    nylon21varnish = nylon21varnish * 1.05 * 1.09 * 0.9;
    nylon36varnish = nylon36varnish * 1.05 * 1.09 * 0.9;
    nylon42varnish = nylon42varnish * 1.05 * 1.09 * 0.9;
    nylon60varnish = nylon60varnish * 1.05 * 1.09 * 0.9;

    nylon96 = nylon60 * 1.6 * 1.4 * 0.87;
    nylon96latex = nylon60latex * 1.6 * 1.4 * 0.87;
    nylon96dupont = nylon60dupont * 1.6 * 1.4 * 0.87;
    nylon96varnish = nylon60varnish * 1.6 * 1.4 * 0.87;

    nylon21dupont = nylon21dupont * 1.15;
    nylon36dupont = nylon36dupont * 1.15;
    nylon42dupont = nylon42dupont * 1.15;
    nylon60dupont = nylon60dupont * 1.15;
    nylon21varnish = nylon21varnish * 1.15;
    nylon36varnish = nylon36varnish * 1.15;
    nylon42varnish = nylon42varnish * 1.15;
    nylon60varnish = nylon60varnish * 1.15;

    // adding 5%
    nylon21 = nylon21 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon42 = nylon42 * 1.05;
    nylon48 = nylon48 * 1.05;
    nylon60 = nylon60 * 1.05;
    poly21 = poly21 * 1.05;
    poly36 = poly36 * 1.05;
    nylon21latex = nylon21latex * 1.05;
    nylon36latex = nylon36latex * 1.05;
    nylon42latex = nylon42latex * 1.05;
    nylon48latex = nylon48latex * 1.05;
    nylon60latex = nylon60latex * 1.05;
    nylon21dupont = nylon21dupont * 1.05;
    nylon36dupont = nylon36dupont * 1.05;
    nylon42dupont = nylon42dupont * 1.05;
    nylon60dupont = nylon60dupont * 1.05;
    nylon21varnish = nylon21varnish * 1.05;
    nylon36varnish = nylon36varnish * 1.05;
    nylon42varnish = nylon42varnish * 1.05;
    nylon60varnish = nylon60varnish * 1.05;
    nylon96 = nylon96 * 1.05;
    nylon96latex = nylon96latex * 1.05;
    nylon96dupont = nylon96dupont * 1.05;
    nylon96varnish = nylon96varnish * 1.05;

    // adding 7.5%
    nylon21 = nylon21 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon42 = nylon42 * 1.075;
    nylon48 = nylon48 * 1.075;
    nylon60 = nylon60 * 1.075;
    poly21 = poly21 * 1.075;
    poly36 = poly36 * 1.075;
    nylon21latex = nylon21latex * 1.075;
    nylon36latex = nylon36latex * 1.075;
    nylon42latex = nylon42latex * 1.075;
    nylon48latex = nylon48latex * 1.075;
    nylon60latex = nylon60latex * 1.075;
    nylon21dupont = nylon21dupont * 1.075;
    nylon36dupont = nylon36dupont * 1.075;
    nylon42dupont = nylon42dupont * 1.075;
    nylon60dupont = nylon60dupont * 1.075;
    nylon21varnish = nylon21varnish * 1.075;
    nylon36varnish = nylon36varnish * 1.075;
    nylon42varnish = nylon42varnish * 1.075;
    nylon60varnish = nylon60varnish * 1.075;
    nylon96 = nylon96 * 1.075;
    nylon96latex = nylon96latex * 1.075;
    nylon96dupont = nylon96dupont * 1.075;
    nylon96varnish = nylon96varnish * 1.075;

    // adding 2%
    nylon21 = nylon21 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon42 = nylon42 * 1.02;
    nylon48 = nylon48 * 1.02;
    nylon60 = nylon60 * 1.02;
    poly21 = poly21 * 1.02;
    poly36 = poly36 * 1.02;
    nylon21latex = nylon21latex * 1.02;
    nylon36latex = nylon36latex * 1.02;
    nylon42latex = nylon42latex * 1.02;
    nylon48latex = nylon48latex * 1.02;
    nylon60latex = nylon60latex * 1.02;
    nylon21dupont = nylon21dupont * 1.02;
    nylon36dupont = nylon36dupont * 1.02;
    nylon42dupont = nylon42dupont * 1.02;
    nylon60dupont = nylon60dupont * 1.02;
    nylon21varnish = nylon21varnish * 1.02;
    nylon36varnish = nylon36varnish * 1.02;
    nylon42varnish = nylon42varnish * 1.02;
    nylon60varnish = nylon60varnish * 1.02;
    nylon96 = nylon96 * 1.02;
    nylon96latex = nylon96latex * 1.02;
    nylon96dupont = nylon96dupont * 1.02;
    nylon96varnish = nylon96varnish * 1.02;

    // adding 1%
    nylon21 = nylon21 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon42 = nylon42 * 1.01;
    nylon48 = nylon48 * 1.01;
    nylon60 = nylon60 * 1.01;
    poly21 = poly21 * 1.01;
    poly36 = poly36 * 1.01;
    nylon21latex = nylon21latex * 1.01;
    nylon36latex = nylon36latex * 1.01;
    nylon42latex = nylon42latex * 1.01;
    nylon48latex = nylon48latex * 1.01;
    nylon60latex = nylon60latex * 1.01;
    nylon21dupont = nylon21dupont * 1.01;
    nylon36dupont = nylon36dupont * 1.01;
    nylon42dupont = nylon42dupont * 1.01;
    nylon60dupont = nylon60dupont * 1.01;
    nylon21varnish = nylon21varnish * 1.01;
    nylon36varnish = nylon36varnish * 1.01;
    nylon42varnish = nylon42varnish * 1.01;
    nylon60varnish = nylon60varnish * 1.01;
    nylon96 = nylon96 * 1.01;
    nylon96latex = nylon96latex * 1.01;
    nylon96dupont = nylon96dupont * 1.01;
    nylon96varnish = nylon96varnish * 1.01;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;
  } else if (use === 'golf') {
    nylon18 =
      ((length * 2 + width * 1) * height + length * width) * 0.057 * 4.65 +
      Math.round(length * 4 + width * 3 + height * 4) * 0.05 +
      (Math.round(length * 4 + width * 3 + height * 4) / 100) * 6 +
      (Math.round(length * 4 + width * 3 + height * 4) / 20) * 12 +
      6;
    nylon18 = nylon18 / 0.75 / 0.95;

    nylon420 =
      ((length * 2 + width * 1) * height + length * width) * 0.057 * 4.65 +
      Math.round(length * 4 + width * 3 + height * 4) * 0.05 +
      (Math.round(length * 4 + width * 3 + height * 4) / 100) * 6 +
      (Math.round(length * 4 + width * 3 + height * 4) / 20) * 12 +
      6;
    nylon420 = nylon420 / 0.73 / 0.95;

    nylon36 = nylon18 * 1.7;

    nylon18latex = nylon18 * 1.15;
    nylon420latex = nylon420 * 1.15;
    nylon36latex = nylon36 * 1.15;

    // ADJUSTING GOLF HITTING CAGE PRICES
    nylon18 = nylon18 * 1.05 * 1.09;
    nylon420 = nylon420 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.1 * 1.09;
    nylon18latex = nylon18 * 1.2;
    nylon420latex = nylon420 * 1.2;
    nylon36latex = nylon36 * 1.2;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 7.5%
    nylon18 = nylon18 * 1.075;
    nylon420 = nylon420 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon18latex = nylon18latex * 1.075;
    nylon420latex = nylon420latex * 1.075;
    nylon36latex = nylon36latex * 1.075;

    // adding 2%
    nylon18 = nylon18 * 1.02;
    nylon420 = nylon420 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon18latex = nylon18latex * 1.02;
    nylon420latex = nylon420latex * 1.02;
    nylon36latex = nylon36latex * 1.02;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 1%
    nylon18 = nylon18 * 1.01;
    nylon420 = nylon420 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon18latex = nylon18latex * 1.01;
    nylon420latex = nylon420latex * 1.01;
    nylon36latex = nylon36latex * 1.01;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
  }

  return {
    nylon18,
    nylon21,
    nylon36,
    nylon42,
    nylon48,
    nylon60,
    nylon420,
    poly21,
    poly36,
    nylon18latex,
    nylon21latex,
    nylon36latex,
    nylon42latex,
    nylon48latex,
    nylon60latex,
    nylon420latex,
    nylon21dupont,
    nylon36dupont,
    nylon42dupont,
    nylon60dupont,
    nylon21varnish,
    nylon36varnish,
    nylon42varnish,
    nylon60varnish,
    nylon96,
    nylon96latex,
    nylon96dupont,
    nylon96varnish,
  };
};

// CALCULATE Baffle
export const calculateBaffle = ({ use, width, height }) => {
  let nylon18 = 0,
    nylon21 = 0,
    nylon36 = 0,
    nylon42 = 0,
    nylon48 = 0,
    nylon60 = 0,
    nylon420 = 0,
    poly21 = 0,
    poly36 = 0,
    nylon18latex = 0,
    nylon21latex = 0,
    nylon36latex = 0,
    nylon42latex = 0,
    nylon48latex = 0,
    nylon60latex = 0,
    nylon420latex = 0,
    nylon21dupont = 0,
    nylon36dupont = 0,
    nylon42dupont = 0,
    nylon60dupont = 0,
    nylon21varnish = 0,
    nylon36varnish = 0,
    nylon42varnish = 0,
    nylon60varnish = 0,
    nylon96 = 0,
    nylon96latex = 0,
    nylon96dupont = 0,
    nylon96varnish = 0;

  if (use === 'baseball') {
    nylon21 =
      height * width * 0.0284 * 4.55 +
      (height * 2 + width * 2) * 0.05 +
      ((height * 2 + width * 2) / 100) * 4.4 +
      ((height * 2 + width * 2) / 60) * 12 +
      4;
    nylon21 = (nylon21 / 0.75 / 0.95) * 1.06;

    nylon36 =
      height * width * 0.03885 * 4.55 +
      (height * 2 + width * 2) * 0.05 +
      ((height * 2 + width * 2) / 100) * 4.4 +
      ((height * 2 + width * 2) / 60) * 12 +
      4;
    nylon36 = (nylon36 / 0.75 / 0.95) * 1.06;

    nylon42 =
      height * width * 0.0441 * 4.55 +
      (height * 2 + width * 2) * 0.05 +
      ((height * 2 + width * 2) / 100) * 4.4 +
      ((height * 2 + width * 2) / 60) * 12 +
      4;
    nylon42 = (nylon42 / 0.75 / 0.95) * 1.08;

    nylon48 =
      height * width * 0.0608 * 4.55 +
      (height * 2 + width * 2) * 0.05 +
      ((height * 2 + width * 2) / 100) * 4.4 +
      ((height * 2 + width * 2) / 60) * 12 +
      4;
    nylon48 = (nylon48 / 0.75 / 0.95) * 1.08;

    nylon60 =
      height * width * 0.0756 * 4.55 +
      (height * 2 + width * 2) * 0.05 +
      ((height * 2 + width * 2) / 100) * 4.4 +
      ((height * 2 + width * 2) / 60) * 12 +
      4;
    nylon60 = (nylon60 / 0.75 / 0.95) * 1.1;

    poly21 = nylon21 * 0.9;
    poly36 = nylon36 * 0.9;

    nylon21latex = nylon21 * 1.15;
    nylon36latex = nylon36 * 1.15;
    nylon42latex = nylon42 * 1.15;
    nylon48latex = nylon48 * 1.15;
    nylon60latex = nylon60 * 1.15;

    nylon21dupont = nylon21 * 1.09 * 1.15;
    nylon36dupont = nylon36 * 1.33 * 1.15;
    nylon42dupont = nylon42 * 1.33 * 1.15;
    nylon60dupont = nylon60 * 1.28 * 1.15;

    nylon21varnish = nylon21dupont * 1.15 * 1.12;
    nylon36varnish = nylon36dupont * 1.15 * 1.12;
    nylon42varnish = nylon42dupont * 1.15 * 1.12;
    nylon60varnish = nylon60dupont * 1.15 * 1.12;

    // ADJUSTING BASEBALL BARRIER PRICES
    nylon21 = nylon21 * 1.05 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.05 * 1.09;
    nylon42 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon48 = nylon48 * 1.05 * 1.1 * 1.09;
    nylon60 = nylon60 * 1.05 * 1.1 * 1.09;
    poly21 = poly21 * 1.05 * 1.1 * 1.09;
    poly36 = poly36 * 1.05 * 1.1 * 1.09;
    nylon21latex = nylon21 * 1.2;
    nylon36latex = nylon36 * 1.2;
    nylon42latex = nylon42 * 1.2;
    nylon48latex = nylon48 * 1.2;
    nylon60latex = nylon60 * 1.2;
    nylon21dupont = nylon21dupont * 1.05 * 1.09 * 0.9;
    nylon36dupont = nylon36dupont * 1.05 * 1.09 * 0.9;
    nylon42dupont = nylon42dupont * 1.05 * 1.09 * 0.9;
    nylon60dupont = nylon60dupont * 1.05 * 1.09 * 0.9;
    nylon21varnish = nylon21varnish * 1.05 * 1.09 * 0.9;
    nylon36varnish = nylon36varnish * 1.05 * 1.09 * 0.9;
    nylon42varnish = nylon42varnish * 1.05 * 1.09 * 0.9;
    nylon60varnish = nylon60varnish * 1.05 * 1.09 * 0.9;

    nylon96 = nylon60 * 1.6 * 1.4 * 0.87;
    nylon96latex = nylon60latex * 1.6 * 1.4 * 0.87;
    nylon96dupont = nylon60dupont * 1.6 * 1.4 * 0.87;
    nylon96varnish = nylon60varnish * 1.6 * 1.4 * 0.87;

    nylon21dupont = nylon21dupont * 1.15;
    nylon36dupont = nylon36dupont * 1.15;
    nylon42dupont = nylon42dupont * 1.15;
    nylon60dupont = nylon60dupont * 1.15;
    nylon21varnish = nylon21varnish * 1.15;
    nylon36varnish = nylon36varnish * 1.15;
    nylon42varnish = nylon42varnish * 1.15;
    nylon60varnish = nylon60varnish * 1.15;

    // adding 5%
    nylon21 = nylon21 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon42 = nylon42 * 1.05;
    nylon48 = nylon48 * 1.05;
    nylon60 = nylon60 * 1.05;
    poly21 = poly21 * 1.05;
    poly36 = poly36 * 1.05;
    nylon21latex = nylon21latex * 1.05;
    nylon36latex = nylon36latex * 1.05;
    nylon42latex = nylon42latex * 1.05;
    nylon48latex = nylon48latex * 1.05;
    nylon60latex = nylon60latex * 1.05;
    nylon21dupont = nylon21dupont * 1.05;
    nylon36dupont = nylon36dupont * 1.05;
    nylon42dupont = nylon42dupont * 1.05;
    nylon60dupont = nylon60dupont * 1.05;
    nylon21varnish = nylon21varnish * 1.05;
    nylon36varnish = nylon36varnish * 1.05;
    nylon42varnish = nylon42varnish * 1.05;
    nylon60varnish = nylon60varnish * 1.05;
    nylon96 = nylon96 * 1.05;
    nylon96latex = nylon96latex * 1.05;
    nylon96dupont = nylon96dupont * 1.05;
    nylon96varnish = nylon96varnish * 1.05;

    // adding 7.5%
    nylon21 = nylon21 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon42 = nylon42 * 1.075;
    nylon48 = nylon48 * 1.075;
    nylon60 = nylon60 * 1.075;
    poly21 = poly21 * 1.075;
    poly36 = poly36 * 1.075;
    nylon21latex = nylon21latex * 1.075;
    nylon36latex = nylon36latex * 1.075;
    nylon42latex = nylon42latex * 1.075;
    nylon48latex = nylon48latex * 1.075;
    nylon60latex = nylon60latex * 1.075;
    nylon21dupont = nylon21dupont * 1.075;
    nylon36dupont = nylon36dupont * 1.075;
    nylon42dupont = nylon42dupont * 1.075;
    nylon60dupont = nylon60dupont * 1.075;
    nylon21varnish = nylon21varnish * 1.075;
    nylon36varnish = nylon36varnish * 1.075;
    nylon42varnish = nylon42varnish * 1.075;
    nylon60varnish = nylon60varnish * 1.075;
    nylon96 = nylon96 * 1.075;
    nylon96latex = nylon96latex * 1.075;
    nylon96dupont = nylon96dupont * 1.075;
    nylon96varnish = nylon96varnish * 1.075;

    // adding 2%
    nylon21 = nylon21 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon42 = nylon42 * 1.02;
    nylon48 = nylon48 * 1.02;
    nylon60 = nylon60 * 1.02;
    poly21 = poly21 * 1.02;
    poly36 = poly36 * 1.02;
    nylon21latex = nylon21latex * 1.02;
    nylon36latex = nylon36latex * 1.02;
    nylon42latex = nylon42latex * 1.02;
    nylon48latex = nylon48latex * 1.02;
    nylon60latex = nylon60latex * 1.02;
    nylon21dupont = nylon21dupont * 1.02;
    nylon36dupont = nylon36dupont * 1.02;
    nylon42dupont = nylon42dupont * 1.02;
    nylon60dupont = nylon60dupont * 1.02;
    nylon21varnish = nylon21varnish * 1.02;
    nylon36varnish = nylon36varnish * 1.02;
    nylon42varnish = nylon42varnish * 1.02;
    nylon60varnish = nylon60varnish * 1.02;
    nylon96 = nylon96 * 1.02;
    nylon96latex = nylon96latex * 1.02;
    nylon96dupont = nylon96dupont * 1.02;
    nylon96varnish = nylon96varnish * 1.02;

    // adding 1%
    nylon21 = nylon21 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon42 = nylon42 * 1.01;
    nylon48 = nylon48 * 1.01;
    nylon60 = nylon60 * 1.01;
    poly21 = poly21 * 1.01;
    poly36 = poly36 * 1.01;
    nylon21latex = nylon21latex * 1.01;
    nylon36latex = nylon36latex * 1.01;
    nylon42latex = nylon42latex * 1.01;
    nylon48latex = nylon48latex * 1.01;
    nylon60latex = nylon60latex * 1.01;
    nylon21dupont = nylon21dupont * 1.01;
    nylon36dupont = nylon36dupont * 1.01;
    nylon42dupont = nylon42dupont * 1.01;
    nylon60dupont = nylon60dupont * 1.01;
    nylon21varnish = nylon21varnish * 1.01;
    nylon36varnish = nylon36varnish * 1.01;
    nylon42varnish = nylon42varnish * 1.01;
    nylon60varnish = nylon60varnish * 1.01;
    nylon96 = nylon96 * 1.01;
    nylon96latex = nylon96latex * 1.01;
    nylon96dupont = nylon96dupont * 1.01;
    nylon96varnish = nylon96varnish * 1.01;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;
  } else if (use === 'golf') {
    nylon18 =
      width * height * 0.05985 * 4.55 +
      (width * 2 + height * 2) * 0.05 +
      ((width * 2 + height * 2) / 100) * 4.4 +
      ((width * 2 + height * 2) / 20) * 12 +
      4;
    nylon18 = nylon18 / 0.75 / 0.95;

    nylon420 =
      width * height * 0.05985 * 4.55 +
      (width * 2 + height * 2) * 0.05 +
      ((width * 2 + height * 2) / 100) * 4.4 +
      ((width * 2 + height * 2) / 20) * 12 +
      4;
    nylon420 = nylon420 / 0.73 / 0.95;

    nylon36 = nylon18 * 1.7;
    nylon18latex = nylon18 * 1.15;
    nylon420latex = nylon420 * 1.15;
    nylon36latex = nylon36 * 1.15;

    // ADJUSTING GOLF BARRIER PRICES
    nylon18 = nylon18 * 1.05 * 1.09;
    nylon420 = nylon420 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.1 * 1.09;
    nylon18latex = nylon18 * 1.2;
    nylon420latex = nylon420 * 1.2;
    nylon36latex = nylon36 * 1.2;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 7.5%
    nylon18 = nylon18 * 1.075;
    nylon420 = nylon420 * 1.075;
    nylon36 = nylon36 * 1.075;
    nylon18latex = nylon18latex * 1.075;
    nylon420latex = nylon420latex * 1.075;
    nylon36latex = nylon36latex * 1.075;

    // adding 2%
    nylon18 = nylon18 * 1.02;
    nylon420 = nylon420 * 1.02;
    nylon36 = nylon36 * 1.02;
    nylon18latex = nylon18latex * 1.02;
    nylon420latex = nylon420latex * 1.02;
    nylon36latex = nylon36latex * 1.02;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 1%
    nylon18 = nylon18 * 1.01;
    nylon420 = nylon420 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon18latex = nylon18latex * 1.01;
    nylon420latex = nylon420latex * 1.01;
    nylon36latex = nylon36latex * 1.01;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
  }

  return {
    nylon18,
    nylon21,
    nylon36,
    nylon42,
    nylon48,
    nylon60,
    nylon420,
    poly21,
    poly36,
    nylon18latex,
    nylon21latex,
    nylon36latex,
    nylon42latex,
    nylon48latex,
    nylon60latex,
    nylon420latex,
    nylon21dupont,
    nylon36dupont,
    nylon42dupont,
    nylon60dupont,
    nylon21varnish,
    nylon36varnish,
    nylon42varnish,
    nylon60varnish,
    nylon96,
    nylon96latex,
    nylon96dupont,
    nylon96varnish,
  };
};

// CALCULATE Curtain
export const calculateCurtain = ({ use, width, height, direction }) => {
  let nylon18 = 0,
    nylon21 = 0,
    nylon36 = 0,
    nylon42 = 0,
    nylon48 = 0,
    nylon60 = 0,
    nylon420 = 0,
    poly21 = 0,
    poly36 = 0,
    nylon18latex = 0,
    nylon21latex = 0,
    nylon36latex = 0,
    nylon42latex = 0,
    nylon48latex = 0,
    nylon60latex = 0,
    nylon420latex = 0,
    nylon21dupont = 0,
    nylon36dupont = 0,
    nylon42dupont = 0,
    nylon60dupont = 0,
    nylon21varnish = 0,
    nylon36varnish = 0,
    nylon42varnish = 0,
    nylon60varnish = 0,
    nylon96 = 0,
    nylon96latex = 0,
    nylon96dupont = 0,
    nylon96varnish = 0;

  if (direction === 'crosswise') {
    if (width >= 50) {
      extra = 2;
    } else {
      extra = 1;
    }
  }

  if (use === 'baseball') {
    if (direction === 'crosswise') {
      nylon21 =
        height * width * 0.0284 * 4.55 +
        (height * 2 + width * 2) * 0.05 +
        ((height * 2 + width * 2) / 100) * 4.4 +
        ((height * 2 + width * 2) / 60) * 12 +
        4;
      nylon21 = (nylon21 / 0.75 / 0.95) * 1.06;

      nylon36 =
        height * width * 0.03885 * 4.55 +
        (height * 2 + width * 2) * 0.05 +
        ((height * 2 + width * 2) / 100) * 4.4 +
        ((height * 2 + width * 2) / 60) * 12 +
        4;
      nylon36 = (nylon36 / 0.75 / 0.95) * 1.06;

      nylon42 =
        height * width * 0.0441 * 4.55 +
        (height * 2 + width * 2) * 0.05 +
        ((height * 2 + width * 2) / 100) * 4.4 +
        ((height * 2 + width * 2) / 60) * 12 +
        4;
      nylon42 = (nylon42 / 0.75 / 0.95) * 1.08;

      nylon48 =
        height * length * 0.058 * 4.55 +
        (height * 2 + length * 2) * 0.05 +
        ((height * 2 + length * 2) / 100) * 4.4 +
        ((height * 2 + length * 2) / 60) * 12 +
        4;
      nylon48 = (nylon48 / 0.75 / 0.95) * 1.08;

      nylon60 =
        height * width * 0.0756 * 4.55 +
        (height * 2 + width * 2) * 0.05 +
        ((height * 2 + width * 2) / 100) * 4.4 +
        ((height * 2 + width * 2) / 60) * 12 +
        4;
      nylon60 = (nylon60 / 0.75 / 0.95) * 1.1;
    } else {
      nylon21 =
        height * lenSum * 0.0284 * 4.55 +
        (height * 2 + lenSum * 2) * 0.05 +
        ((height * 2 + lenSum * 2) / 100) * 4.4 +
        ((height * 2 + lenSum * 2) / 60) * 12 +
        4;
      nylon21 = (nylon21 / 0.75 / 0.95) * 1.06;

      nylon36 =
        height * lenSum * 0.03885 * 4.55 +
        (height * 2 + lenSum * 2) * 0.05 +
        ((height * 2 + lenSum * 2) / 100) * 4.4 +
        ((height * 2 + lenSum * 2) / 60) * 12 +
        4;
      nylon36 = (nylon36 / 0.75 / 0.95) * 1.06;

      nylon42 =
        height * lenSum * 0.0441 * 4.55 +
        (height * 2 + lenSum * 2) * 0.05 +
        ((height * 2 + lenSum * 2) / 100) * 4.4 +
        ((height * 2 + lenSum * 2) / 60) * 12 +
        4;
      nylon42 = (nylon42 / 0.75 / 0.95) * 1.08;

      nylon48 =
        height * length * 0.058 * 4.55 +
        (height * 2 + length * 2) * 0.05 +
        ((height * 2 + length * 2) / 100) * 4.4 +
        ((height * 2 + length * 2) / 60) * 12 +
        4;
      nylon48 = (nylon48 / 0.75 / 0.95) * 1.08;

      nylon60 =
        height * lenSum * 0.0756 * 4.55 +
        (height * 2 + lenSum * 2) * 0.05 +
        ((height * 2 + lenSum * 2) / 100) * 4.4 +
        ((height * 2 + lenSum * 2) / 60) * 12 +
        4;
      nylon60 = (nylon60 / 0.75 / 0.95) * 1.1;
    }

    poly21 = nylon21 * 0.9;
    poly36 = nylon36 * 0.9;

    nylon21latex = nylon21 * 1.15;
    nylon36latex = nylon36 * 1.15;
    nylon42latex = nylon42 * 1.15;
    nylon48latex = nylon48 * 1.15;
    nylon60latex = nylon60 * 1.15;

    nylon21dupont = nylon21 * 1.09 * 1.15;
    nylon36dupont = nylon36 * 1.33 * 1.15;
    nylon42dupont = nylon42 * 1.33 * 1.15;
    nylon60dupont = nylon60 * 1.28 * 1.15;

    nylon21varnish = nylon21dupont * 1.15 * 1.12;
    nylon36varnish = nylon36dupont * 1.15 * 1.12;
    nylon42varnish = nylon42dupont * 1.15 * 1.12;
    nylon60varnish = nylon60dupont * 1.15 * 1.12;

    // ADJUSTING BASEBALL BARRIER PRICES
    nylon21 = nylon21 * 1.05 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.05 * 1.09;
    nylon42 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon48 = nylon42 * 1.05 * 1.1 * 1.09;
    nylon60 = nylon60 * 1.05 * 1.1 * 1.09;
    poly21 = poly21 * 1.05 * 1.1 * 1.09;
    poly36 = poly36 * 1.05 * 1.1 * 1.09;
    nylon21latex = nylon21 * 1.2;
    nylon36latex = nylon36 * 1.2;
    nylon42latex = nylon42 * 1.2;
    nylon48latex = nylon42 * 1.2;
    nylon60latex = nylon60 * 1.2;
    nylon21dupont = nylon21dupont * 1.05 * 1.09 * 0.9;
    nylon36dupont = nylon36dupont * 1.05 * 1.09 * 0.9;
    nylon42dupont = nylon42dupont * 1.05 * 1.09 * 0.9;
    nylon60dupont = nylon60dupont * 1.05 * 1.09 * 0.9;
    nylon21varnish = nylon21varnish * 1.05 * 1.09 * 0.9;
    nylon36varnish = nylon36varnish * 1.05 * 1.09 * 0.9;
    nylon42varnish = nylon42varnish * 1.05 * 1.09 * 0.9;
    nylon60varnish = nylon60varnish * 1.05 * 1.09 * 0.9;

    nylon96 = nylon60 * 1.6 * 1.4 * 0.87;
    nylon96latex = nylon60latex * 1.6 * 1.4 * 0.87;
    nylon96dupont = nylon60dupont * 1.6 * 1.4 * 0.87;
    nylon96varnish = nylon60varnish * 1.6 * 1.4 * 0.87;

    nylon21dupont = nylon21dupont * 1.15;
    nylon36dupont = nylon36dupont * 1.15;
    nylon42dupont = nylon42dupont * 1.15;
    nylon60dupont = nylon60dupont * 1.15;
    nylon21varnish = nylon21varnish * 1.15;
    nylon36varnish = nylon36varnish * 1.15;
    nylon42varnish = nylon42varnish * 1.15;
    nylon60varnish = nylon60varnish * 1.15;

    // adding 5%
    nylon21 = nylon21 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon42 = nylon42 * 1.05;
    nylon48 = nylon48 * 1.05;
    nylon60 = nylon60 * 1.05;
    poly21 = poly21 * 1.05;
    poly36 = poly36 * 1.05;
    nylon21latex = nylon21latex * 1.05;
    nylon36latex = nylon36latex * 1.05;
    nylon42latex = nylon42latex * 1.05;
    nylon48latex = nylon48latex * 1.05;
    nylon60latex = nylon60latex * 1.05;
    nylon21dupont = nylon21dupont * 1.05;
    nylon36dupont = nylon36dupont * 1.05;
    nylon42dupont = nylon42dupont * 1.05;
    nylon60dupont = nylon60dupont * 1.05;
    nylon21varnish = nylon21varnish * 1.05;
    nylon36varnish = nylon36varnish * 1.05;
    nylon42varnish = nylon42varnish * 1.05;
    nylon60varnish = nylon60varnish * 1.05;
    nylon96 = nylon96 * 1.05;
    nylon96latex = nylon96latex * 1.05;
    nylon96dupont = nylon96dupont * 1.05;
    nylon96varnish = nylon96varnish * 1.05;

    // adding 1%
    nylon21 = nylon21 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon42 = nylon42 * 1.01;
    nylon48 = nylon48 * 1.01;
    nylon60 = nylon60 * 1.01;
    poly21 = poly21 * 1.01;
    poly36 = poly36 * 1.01;
    nylon21latex = nylon21latex * 1.01;
    nylon36latex = nylon36latex * 1.01;
    nylon42latex = nylon42latex * 1.01;
    nylon48latex = nylon48latex * 1.01;
    nylon60latex = nylon60latex * 1.01;
    nylon21dupont = nylon21dupont * 1.01;
    nylon36dupont = nylon36dupont * 1.01;
    nylon42dupont = nylon42dupont * 1.01;
    nylon60dupont = nylon60dupont * 1.01;
    nylon21varnish = nylon21varnish * 1.01;
    nylon36varnish = nylon36varnish * 1.01;
    nylon42varnish = nylon42varnish * 1.01;
    nylon60varnish = nylon60varnish * 1.01;
    nylon96 = nylon96 * 1.01;
    nylon96latex = nylon96latex * 1.01;
    nylon96dupont = nylon96dupont * 1.01;
    nylon96varnish = nylon96varnish * 1.01;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;

    // adding 10%
    nylon21 = nylon21 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon42 = nylon42 * 1.1;
    nylon48 = nylon48 * 1.1;
    nylon60 = nylon60 * 1.1;
    poly21 = poly21 * 1.1;
    poly36 = poly36 * 1.1;
    nylon21latex = nylon21latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
    nylon42latex = nylon42latex * 1.1;
    nylon48latex = nylon48latex * 1.1;
    nylon60latex = nylon60latex * 1.1;
    nylon21dupont = nylon21dupont * 1.1;
    nylon36dupont = nylon36dupont * 1.1;
    nylon42dupont = nylon42dupont * 1.1;
    nylon60dupont = nylon60dupont * 1.1;
    nylon21varnish = nylon21varnish * 1.1;
    nylon36varnish = nylon36varnish * 1.1;
    nylon42varnish = nylon42varnish * 1.1;
    nylon60varnish = nylon60varnish * 1.1;
    nylon96 = nylon96 * 1.1;
    nylon96latex = nylon96latex * 1.1;
    nylon96dupont = nylon96dupont * 1.1;
    nylon96varnish = nylon96varnish * 1.1;
  } else if (use === 'golf') {
    if (direction === 'crosswise') {
      nylon18 =
        width * height * 0.05985 * 4.55 +
        (width * 2 + height * 2) * 0.05 +
        ((width * 2 + height * 2) / 100) * 4.4 +
        ((width * 2 + height * 2) / 20) * 12 +
        4;
      nylon18 = nylon18 / 0.75 / 0.95;

      nylon420 =
        width * height * 0.05985 * 4.55 +
        (width * 2 + height * 2) * 0.05 +
        ((width * 2 + height * 2) / 100) * 4.4 +
        ((width * 2 + height * 2) / 20) * 12 +
        4;
      nylon420 = nylon420 / 0.73 / 0.95;
    } else {
      nylon18 =
        lenSum * height * 0.05985 * 4.55 +
        (lenSum * 2 + height * 2) * 0.05 +
        ((lenSum * 2 + height * 2) / 100) * 4.4 +
        ((lenSum * 2 + height * 2) / 20) * 12 +
        4;
      nylon18 = nylon18 / 0.75 / 0.95;

      nylon420 =
        lenSum * height * 0.05985 * 4.55 +
        (lenSum * 2 + height * 2) * 0.05 +
        ((lenSum * 2 + height * 2) / 100) * 4.4 +
        ((lenSum * 2 + height * 2) / 20) * 12 +
        4;
      nylon420 = nylon420 / 0.73 / 0.95;
    }

    nylon36 = nylon18 * 1.7;
    nylon18latex = nylon18 * 1.15;
    nylon420latex = nylon420 * 1.15;
    nylon36latex = nylon36 * 1.15;

    // ADJUSTING GOLF BARRIER PRICES
    nylon18 = nylon18 * 1.05 * 1.09;
    nylon420 = nylon420 * 1.05 * 1.09;
    nylon36 = nylon36 * 1.05 * 1.1 * 1.09;
    nylon18latex = nylon18 * 1.2;
    nylon420latex = nylon420 * 1.2;
    nylon36latex = nylon36 * 1.2;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 5%
    nylon18 = nylon18 * 1.05;
    nylon420 = nylon420 * 1.05;
    nylon36 = nylon36 * 1.05;
    nylon18latex = nylon18latex * 1.05;
    nylon420latex = nylon420latex * 1.05;
    nylon36latex = nylon36latex * 1.05;

    // adding 1%
    nylon18 = nylon18 * 1.01;
    nylon420 = nylon420 * 1.01;
    nylon36 = nylon36 * 1.01;
    nylon18latex = nylon18latex * 1.01;
    nylon420latex = nylon420latex * 1.01;
    nylon36latex = nylon36latex * 1.01;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;

    // adding 10%
    nylon18 = nylon18 * 1.1;
    nylon420 = nylon420 * 1.1;
    nylon36 = nylon36 * 1.1;
    nylon18latex = nylon18latex * 1.1;
    nylon420latex = nylon420latex * 1.1;
    nylon36latex = nylon36latex * 1.1;
  }

  return {
    nylon18,
    nylon21,
    nylon36,
    nylon42,
    nylon48,
    nylon60,
    nylon420,
    poly21,
    poly36,
    nylon18latex,
    nylon21latex,
    nylon36latex,
    nylon42latex,
    nylon48latex,
    nylon60latex,
    nylon420latex,
    nylon21dupont,
    nylon36dupont,
    nylon42dupont,
    nylon60dupont,
    nylon21varnish,
    nylon36varnish,
    nylon42varnish,
    nylon60varnish,
    nylon96,
    nylon96latex,
    nylon96dupont,
    nylon96varnish,
  };
};
