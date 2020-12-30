const UPGRADES = [
  new Upgrade(
    "Veggietales Fanboy",
    "Ever heard of Veggietales? It's cool.",
    { initial: 5, slope: 1, exponent: 2 },
    { initial: 0.001, slope: 0.001, exponent: 1.2 }
  ),
  new Upgrade(
    "Group of Teenagers",
    "Out with 'Spin The Bottle', in with 'Spin the Tomato'!",
    { initial: 10, slope: 1, exponent: 2 },
    { initial: 0.002, slope: 0.001, exponent: 1.3 }
  ),
  new Upgrade(
    "Tomato Gun",
    "Pow, pow, splash!",
    { initial: 50, slope: 1, exponent: 2 },
    { initial: 0.005, slope: 0.003, exponent: 1.3 }
  ),
  new Upgrade(
    "Italian Chef",
    "Pizza, pizza, pasta, tomata! Says the Italian Chef.",
    { initial: 100, slope: 1, exponent: 2 },
    { initial: 0.01, slope: 0.004, exponent: 1.3 }
  ),
  new Upgrade(
    "Small Market",
    "Tomato is in low demand.",
    { initial: 250, slope: 1, exponent: 2 },
    { initial: 0.015, slope: 0.004, exponent: 1.3 }
  ),
  new Upgrade(
    "Big Market",
    "Tomato is in high demand!",
    { initial: 500, slope: 1, exponent: 2 },
    { initial: 0.03, slope: 0.005, exponent: 1.5 }
  ),
  new Upgrade(
    "Grocery Store",
    "We got lots o' tomatoes! - The Store.",
    { initial: 1000, slope: 1, exponent: 2 },
    { initial: 0.1, slope: 0.006, exponent: 1.5 }
  ),
  new Upgrade(
    "Ketchup Factory",
    "Tomatoes are meant to be enjoyed with sugar!",
    { initial: 25_000, slope: 1, exponent: 2 },
    { initial: 0.25, slope: 0.001, exponent: 1.5 }
  ),
  new Upgrade(
    "Atomic Tomato Accelerator",
    "Tomato, tomato. Atomic, tomato.",
    { initial: 50_000, slope: 1, exponent: 2 },
    { initial: 0.5, slope: 0.008, exponent: 1.6 }
  ),
  new Upgrade(
    "Gordon Ramsay",
    "'What are you!?'",
    { initial: 100_000, slope: 1, exponent: 1.1 },
    { initial: 1, slope: 0.01, exponent: 1.8 }
  ),
];
