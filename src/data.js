// Images: drop your own photos into public/images/ using these file names.
// If a file is missing, the card shows a colour gradient instead.
export const destinations = [
  {
    id: 'hunza',
    name: 'Hunza Valley',
    country: 'Pakistan',
    image: '/images/hunza.jpg',
    gradient: 'linear-gradient(135deg,#2b7a9b,#8fd3b6)',
    description: 'Snow-capped peaks, apricot orchards and ancient forts in the heart of the Karakoram.',
    details:
      'Hunza is famous for Baltit and Altit forts, Attabad Lake, Passu Cones and the Karakoram Highway. Best visited from April to October.',
    from: 35000,
    packageIds: ['hunza-adventure'],
  },
  {
    id: 'skardu',
    name: 'Skardu',
    country: 'Pakistan',
    image: '/images/skardu.jpg',
    gradient: 'linear-gradient(135deg,#3a6ea5,#a8e0c9)',
    description: 'Gateway to K2, with turquoise lakes, cold deserts and towering mountains.',
    details:
      'Explore Shangrila Resort, Upper Kachura Lake, Shigar Fort and the Deosai Plains, one of the highest plateaus in the world.',
    from: 42000,
    packageIds: ['hunza-adventure'],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    image: '/images/dubai.jpg',
    gradient: 'linear-gradient(135deg,#1e5aa8,#7fd1c0)',
    description: 'A skyline of record-breaking towers, golden deserts and world-class shopping.',
    details:
      'Visit Burj Khalifa, Dubai Mall, the Marina and a desert safari. Great for short city breaks and family trips.',
    from: 120000,
    packageIds: ['dubai-explorer'],
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    image: '/images/istanbul.jpg',
    gradient: 'linear-gradient(135deg,#2a6fb0,#b7e4c7)',
    description: 'Where Europe meets Asia: mosques, bazaars and Bosphorus sunsets.',
    details:
      'See Hagia Sophia, the Blue Mosque, the Grand Bazaar and take a Bosphorus cruise. Rich in food, history and culture.',
    from: 150000,
    packageIds: [],
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: '/images/bali.jpg',
    gradient: 'linear-gradient(135deg,#1f8a9e,#a5e6b4)',
    description: 'Tropical beaches, rice terraces and serene temples on the Island of the Gods.',
    details:
      'Enjoy Ubud, Uluwatu temple, Nusa Penida and beach clubs in Seminyak. Perfect for honeymoons and relaxed vacations.',
    from: 180000,
    packageIds: ['bali-vacation'],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    image: '/images/switzerland.jpg',
    gradient: 'linear-gradient(135deg,#2c5fa8,#c3ecd0)',
    description: 'Alpine villages, glaciers and scenic train rides through postcard landscapes.',
    details:
      'Discover Interlaken, Lucerne, Zermatt and the Jungfrau region. Ideal for hiking in summer and skiing in winter.',
    from: 350000,
    packageIds: [],
  },
]

// Sample values for demonstration only, not verified current travel rates.
export const packages = [
  {
    id: 'hunza-adventure',
    title: 'Hunza Adventure',
    destination: 'Hunza Valley',
    image: '/images/pkg-hunza.jpg',
    gradient: 'linear-gradient(135deg,#2b7a9b,#8fd3b6)',
    duration: '5 days / 4 nights',
    includes: ['Hotel', 'Transport', 'Sightseeing'],
    price: 35000,
  },
  {
    id: 'dubai-explorer',
    title: 'Dubai Explorer',
    destination: 'Dubai',
    image: '/images/pkg-dubai.jpg',
    gradient: 'linear-gradient(135deg,#1e5aa8,#7fd1c0)',
    duration: '4 days / 3 nights',
    includes: ['Hotel', 'City tour', 'Airport transfer'],
    price: 120000,
  },
  {
    id: 'bali-vacation',
    title: 'Bali Vacation',
    destination: 'Bali',
    image: '/images/pkg-bali.jpg',
    gradient: 'linear-gradient(135deg,#1f8a9e,#a5e6b4)',
    duration: '6 days / 5 nights',
    includes: ['Hotel', 'Selected tours', 'Local transport'],
    price: 180000,
  },
]

// Sample reviews for demonstration only, not real customer feedback.
export const reviews = [
  {
    name: 'Ali',
    rating: 5,
    text: 'A smooth trip from start to finish. The itinerary was well planned and the guide was friendly.',
  },
  {
    name: 'Ahmed',
    rating: 4,
    text: 'Comfortable hotels and great value for the price. Would happily book again.',
  },
  {
    name: 'Kamran',
    rating: 5,
    text: 'Support was quick to reply and helped us adjust our dates without any fuss.',
  },
]

export const formatPKR = (n) => 'PKR ' + n.toLocaleString('en-PK')
