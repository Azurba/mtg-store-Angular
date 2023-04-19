import { Product } from "../models/product.model";

export const products: Array<Product> = [
    {id: 1,
      name: 'Forest',
      price: 1.09,
      type: 'Land',
      description: 'Basic Land',
      image: 'https://product-images.tcgplayer.com/fit-in/437x437/183584.jpg'
    },
  
      {id: 2,
        name: 'Plain',
        price: 0.05,
        type: 'Land',
        description: 'Basic Land',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/216017.jpg'
      },
  
      {id: 3,
        name: 'Mountain',
        price: 0.73,
        type: 'Land',
        description: 'Basic Land',
        image: 'https://product-images.tcgplayer.com/fit-in/200x279/212770.jpg'
      },
  
      {id: 4,
        name: 'Island',
        price: 0.49,
        type: 'Land',
        description: 'Basic Land',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/183581.jpg'
      },
  
      {id: 5,
        name: 'Swamp',
        price: 0.40,
        type: 'Land',
        description: 'Basic Land',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/222820.jpg'
      },
  
      {id: 6,
        name: 'Gishath, Suns Avatar',
        price: 31.65,
        type: 'Creature',
        description: 'Trample, vigilance, haste Whenever Gishath, Suns Avatar deals combat damage to a player, reveal that many cards from the top of your library. Put any number of Dinosaur creature cards from among them onto the battlefield and the rest on the bottom of your library in a random order.',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/146079.jpg'
      },

      {id: 7,
        name: 'Brago, King Eternal',
        price: 31.65,
        type: 'Creature',
        description: 'Flying Whenever Brago, King Eternal deals combat damage to a player, exile any number of target nonland permanents you control, then return those cards to the battlefield under their owner’s control.',
        image: 'https://product-images.tcgplayer.com/fit-in/200x279/226841.jpg'
      },

      {id: 9,
        name: 'Sol Ring',
        price: 31.65,
        type: 'Artifact',
        description: 'T: Add CC.',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/221310.jpg'
      },

      {id: 10,
        name: 'Counterspell',
        price: 0.99,
        type: 'Instant',
        description: 'Counter targe spell',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/457501.jpg'
      },

      {id: 11,
        name: 'Doubling Season',
        price: 123.94,
        type: 'Enchantment',
        description: 'If an effect would put one or more tokens into play under your control, it puts twice that many of those tokens into play instead. If an effect would place one or more counters on a permanent you control, it places twice that many of those counters on that permanent instead.',
        image: 'https://product-images.tcgplayer.com/fit-in/437x437/57636.jpg'
      },

      {id: 12,
        name: 'Desecrated Earth',
        price: 0.02,
        type: 'Sorcery',
        description: 'Destroy target land. Its controller discards a card.',
        image: 'https://product-images.tcgplayer.com/fit-in/200x279/33285.jpg'
      },
  ]