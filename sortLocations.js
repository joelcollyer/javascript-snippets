const getVendorSlug = (vendor = {}) => {
  const { group = "", name = "" } = vendor;
  const [city = "", prov = "", country = "CA"] = group.split(", ");

  return [country, prov, city, name]
    .map((str) => str.replace(/-/g, " "))
    .join("-")
    .toLowerCase()
    .replace("&", " and ")
    .replace(/[^a-z0-9\-]+/gi, "");
};

const sortByLocation = (vendors = []) => {
  return vendors.sort((vendorA, vendorB) => {
    const localeA = getVendorSlug(vendorA);
    const localeB = getVendorSlug(vendorB);
    return localeA.localeCompare(localeB);
  });
};

const allVendors = [
  { group: "Airdrie, AB", name: "Apple Creek Golf Course" },
  { group: "Airdrie, AB", name: "At Dawn Wellness" },
  { group: "Airdrie, AB", name: "Fulton's Home Hardware Building Centre" },
  { group: "Airdrie, AB", name: "Homegrown House and Pantry Inc." },
  { group: "Airdrie, AB", name: "Woodside Golf Course" },
  { group: "Bashaw, AB", name: "Bashaw Home Hardware" },
  { group: "Bashaw, AB", name: "Bashaw Meats and Sausage Ltd. " },
  { group: "Biggar, SK", name: "Biggar Sausage and More" },
  { group: "Bonnyville, AB", name: "Bonnyville Liquor Mart" },
  { group: "Calgary, AB", name: "All Things Pretty- CrossIron Mills" },
  { group: "Calgary, AB", name: "Italian Centre Shop Calgary " },
  { group: "Calgary, AB", name: "Kr8tive Karma Gift Baskets" },
  { group: "Camrose, AB", name: "Copper Arrow Collective" },
  { group: "Carstairs, AB", name: "The Farm Table " },
  { group: "Cochrane, AB", name: "Cochrane Home Hardware Building Centre" },
  { group: "Cold Lake, AB", name: "Muse Inspired " },
  { group: "Cold Lake, AB", name: "Peckish Charcuterie" },
  { group: "Consort, AB", name: "Buffalo Trail Liquor" },
  { group: "Craik, SK", name: "J & B Ackland Auto" },
  { group: "Dorintosh, SK", name: "Sikup Enterprises Ltd. " },
  { group: "Drayton Valley, AB", name: "Local Collective Drayton Valley" },
  { group: "Edgerton, AB", name: "Sand Dunes Liquor Store " },
  { group: "Edmonton, AB", name: "All Things Pretty- West Edmonton Mall" },
  { group: "Edmonton, AB", name: "Heart of the Home" },
  { group: "Edmonton, AB", name: "Italian Centre Shop Little Italy (North) " },
  { group: "Edmonton, AB", name: "Italian Centre Shop South " },
  { group: "Edmonton, AB", name: "Italian Centre Shop West " },
  { group: "Elbow, SK", name: "Archer and King Collective" },
  { group: "Glendon, AB", name: "B-Dawg's Liquor Store" },
  { group: "Grande Prairie, AB", name: "The Clover Co." },
  { group: "Isaly, AB", name: "The AB Box" },
  { group: "Kelowna, BC", name: "Urban Distilleries and Winery" },
  { group: "Killam, AB", name: "Rural Root Collective" },
  { group: "Kindersley, SK", name: "The Crafted Hand" },
  { group: "Kitscoty, AB", name: "Farmstead Market & More" },
  { group: "Leduc, AB", name: "Jar'd Mercantile " },
  { group: "Lloydminster, AB", name: "Home Hardware Lloydminster" },
  { group: "Lloydminster, AB", name: "Olive and Birch Designs" },
  { group: "Lloydminster, AB", name: "Payless Car Wash" },
  { group: "Lloydminster, AB", name: "R and D Plumbing and Heating" },
  { group: "Lloydminster, AB", name: "Rolling Greens Fairway Golf Course" },
  { group: "Lloydminster, AB", name: "Spiro's Restaurant" },
  { group: "Lloydminster, AB", name: "Tailored Diesel" },
  { group: "Lloydminster, AB", name: "Three Trees Tap & Kitchen " },
  { group: "Lloydminster, SK", name: "Acton's Lower Shannon Farms" },
  { group: "Macklin, SK", name: "Thomas Home Furnishings and Hardware" },
  { group: "Mannville, AB", name: "Mannville Liquor Store" },
  { group: "Mannville, AB", name: "The Caesar Box" },
  { group: "Meadow Lake, SK", name: "Kingdom Golf Inc." },
  { group: "Meadow Lake, SK", name: "Solitude" },
  { group: "Merrickville, ON", name: "Pickle and Myrrh" },
  { group: "Nipawin, SK ", name: "Lake Country Coop Wine, Spirits, Beer " },
  { group: "Norquay, SK", name: "Rose and Ray Apparel" },
  { group: "Oyen, AB", name: "Oyen Liquor Mart" },
  { group: "Portage la Praire, MB", name: "Mil Jeanne Flowers" },
  {
    group: "Prince Albert, SK",
    name: "Wine Spirits Beer Cornerstone (Lake Country Co-op)",
  },
  { group: "Prince George, BC", name: "Back Forty Lifestyle Co. Inc." },
  { group: "Provost, AB", name: "Damn Good Water Co." },
  { group: "Provost, AB", name: "Side Track Liquor" },
  { group: "Red Deer, AB", name: "The Liquor Hutch" },
  { group: "Red Deer, AB", name: "The Sportsmen's Den" },
  { group: "Red Deer, AB", name: "Vessel Woodworks" },
  { group: "Saskatoon, SK", name: "Lucky Bastard Distillers" },
  { group: "Saskatoon, SK", name: "Pitchfork Market & Kitchen " },
  { group: "Sexsmith, AB", name: "Don't Be Chy Boutique" },
  { group: "Sherwood Park, AB", name: "Confetti Sweets" },
  { group: "Sherwood Park, AB", name: "Italian Centre Shop Sherwood Park " },
  { group: "Spruce Grove, AB", name: "Wilhauk Beef Jerky Ltd. " },
  { group: "St. Paul, AB", name: "Smyl RV Centre" },
  { group: "Stettler, AB", name: "Fresh Wife Collective" },
  { group: "Stettler, AB", name: "Sweet Home on Main" },
  { group: "Sylvan Lake, AB", name: "Sweet Home on the Lake " },
  { group: "Unity, SK", name: "C Kopp Designs" },
  { group: "Vermilion, AB", name: "Copper Cork Distillery" },
  { group: "Vermilion, AB", name: "Vermilion Liquor Store" },
  { group: "Wainwright, AB", name: "Daines & Daubney" },
  { group: "Wembley, AB", name: "Corner Grocery " },
];

const result = sortByLocation(allVendors).map((vendor) => ({
  ...vendor,
  slug: getVendorSlug(vendor),
}));

console.log(result);
