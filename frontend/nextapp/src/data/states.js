// State data for the /locations/[state] "feeler" pages.
//
// Strategy: publish a landing page for every state before we serve it, then
// let the data decide where to expand. Each page is tracked in GA4 two ways:
// page views per URL, and `cta_click` events labeled `locations-<slug>`.
// States with real traffic and CTA clicks are where we recruit schools and
// sponsors next. See the hub copy in app/(site)/locations/page.js.
//
// Michigan is excluded from FEELER_STATES: it already has a dedicated page
// at /locations/michigan (the founding schools). Keep that page as the
// canonical Michigan URL and do not generate a duplicate here.

export const REGIONS = ["Northeast", "Midwest", "South", "West"];

export const STATES = [
  { slug: "alabama", name: "Alabama", abbr: "AL", region: "South", metros: ["Birmingham", "Huntsville", "Montgomery", "Mobile"] },
  { slug: "alaska", name: "Alaska", abbr: "AK", region: "West", metros: ["Anchorage", "Fairbanks", "Juneau"] },
  { slug: "arizona", name: "Arizona", abbr: "AZ", region: "West", metros: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"] },
  { slug: "arkansas", name: "Arkansas", abbr: "AR", region: "South", metros: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale"] },
  { slug: "california", name: "California", abbr: "CA", region: "West", metros: ["Los Angeles", "San Diego", "San Jose", "Sacramento", "Fresno"] },
  { slug: "colorado", name: "Colorado", abbr: "CO", region: "West", metros: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"] },
  { slug: "connecticut", name: "Connecticut", abbr: "CT", region: "Northeast", metros: ["Hartford", "New Haven", "Bridgeport", "Stamford"] },
  { slug: "delaware", name: "Delaware", abbr: "DE", region: "South", metros: ["Wilmington", "Dover", "Newark"] },
  { slug: "district-of-columbia", name: "District of Columbia", abbr: "DC", region: "South", metros: ["Washington"] },
  { slug: "florida", name: "Florida", abbr: "FL", region: "South", metros: ["Miami", "Jacksonville", "Tampa", "Orlando", "St. Petersburg"] },
  { slug: "georgia", name: "Georgia", abbr: "GA", region: "South", metros: ["Atlanta", "Augusta", "Savannah", "Columbus", "Athens"] },
  { slug: "hawaii", name: "Hawaii", abbr: "HI", region: "West", metros: ["Honolulu", "Hilo", "Kailua"] },
  { slug: "idaho", name: "Idaho", abbr: "ID", region: "West", metros: ["Boise", "Meridian", "Nampa", "Idaho Falls"] },
  { slug: "illinois", name: "Illinois", abbr: "IL", region: "Midwest", metros: ["Chicago", "Aurora", "Naperville", "Springfield", "Rockford"] },
  { slug: "indiana", name: "Indiana", abbr: "IN", region: "Midwest", metros: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"] },
  { slug: "iowa", name: "Iowa", abbr: "IA", region: "Midwest", metros: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"] },
  { slug: "kansas", name: "Kansas", abbr: "KS", region: "Midwest", metros: ["Wichita", "Kansas City", "Topeka", "Overland Park"] },
  { slug: "kentucky", name: "Kentucky", abbr: "KY", region: "South", metros: ["Louisville", "Lexington", "Bowling Green", "Covington"] },
  { slug: "louisiana", name: "Louisiana", abbr: "LA", region: "South", metros: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"] },
  { slug: "maine", name: "Maine", abbr: "ME", region: "Northeast", metros: ["Portland", "Bangor", "Lewiston"] },
  { slug: "maryland", name: "Maryland", abbr: "MD", region: "South", metros: ["Baltimore", "Columbia", "Germantown", "Silver Spring"] },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA", region: "Northeast", metros: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"] },
  { slug: "michigan", name: "Michigan", abbr: "MI", region: "Midwest", metros: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"] },
  { slug: "minnesota", name: "Minnesota", abbr: "MN", region: "Midwest", metros: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington"] },
  { slug: "mississippi", name: "Mississippi", abbr: "MS", region: "South", metros: ["Jackson", "Gulfport", "Hattiesburg", "Biloxi"] },
  { slug: "missouri", name: "Missouri", abbr: "MO", region: "Midwest", metros: ["Kansas City", "St. Louis", "Springfield", "Columbia"] },
  { slug: "montana", name: "Montana", abbr: "MT", region: "West", metros: ["Billings", "Missoula", "Great Falls", "Bozeman"] },
  { slug: "nebraska", name: "Nebraska", abbr: "NE", region: "Midwest", metros: ["Omaha", "Lincoln", "Bellevue", "Grand Island"] },
  { slug: "nevada", name: "Nevada", abbr: "NV", region: "West", metros: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"] },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH", region: "Northeast", metros: ["Manchester", "Nashua", "Concord", "Dover"] },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ", region: "Northeast", metros: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"] },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM", region: "West", metros: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"] },
  { slug: "new-york", name: "New York", abbr: "NY", region: "Northeast", metros: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"] },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC", region: "South", metros: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"] },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND", region: "Midwest", metros: ["Fargo", "Bismarck", "Grand Forks", "Minot"] },
  { slug: "ohio", name: "Ohio", abbr: "OH", region: "Midwest", metros: ["Columbus", "Cincinnati", "Cleveland", "Toledo", "Akron"] },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK", region: "South", metros: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"] },
  { slug: "oregon", name: "Oregon", abbr: "OR", region: "West", metros: ["Portland", "Salem", "Eugene", "Gresham", "Bend"] },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", region: "Northeast", metros: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"] },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI", region: "Northeast", metros: ["Providence", "Warwick", "Cranston", "Pawtucket"] },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC", region: "South", metros: ["Charleston", "Columbia", "Greenville", "North Charleston"] },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD", region: "Midwest", metros: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"] },
  { slug: "tennessee", name: "Tennessee", abbr: "TN", region: "South", metros: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"] },
  { slug: "texas", name: "Texas", abbr: "TX", region: "South", metros: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"] },
  { slug: "utah", name: "Utah", abbr: "UT", region: "West", metros: ["Salt Lake City", "West Valley City", "Provo", "Ogden"] },
  { slug: "vermont", name: "Vermont", abbr: "VT", region: "Northeast", metros: ["Burlington", "South Burlington", "Rutland", "Essex"] },
  { slug: "virginia", name: "Virginia", abbr: "VA", region: "South", metros: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"] },
  { slug: "washington", name: "Washington", abbr: "WA", region: "West", metros: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"] },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV", region: "South", metros: ["Charleston", "Huntington", "Morgantown", "Parkersburg"] },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI", region: "Midwest", metros: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"] },
  { slug: "wyoming", name: "Wyoming", abbr: "WY", region: "West", metros: ["Cheyenne", "Casper", "Laramie", "Gillette"] },
];

// States that already have a dedicated page under /locations. Their feeler
// page would duplicate it, so the [state] route skips them.
export const DEDICATED_STATE_SLUGS = ["michigan"];

export const FEELER_STATES = STATES.filter(
  (state) => !DEDICATED_STATE_SLUGS.includes(state.slug),
);

export function getStateBySlug(slug) {
  return FEELER_STATES.find((state) => state.slug === slug) ?? null;
}

export function statesByRegion(region) {
  return STATES.filter((state) => state.region === region);
}
