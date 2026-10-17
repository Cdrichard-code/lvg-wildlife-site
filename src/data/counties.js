// County pages for /service-area/[slug]. Facts about each appraisal district come from
// that district's own published guidelines (linked in `sources`). Reviewed 2026-10-16.
// Re-check the CAD figures each fall before the January to April filing season.

export const REVIEWED = 'October 2026';

const TPWD_FAQ = ['TPWD: tax valuation for wildlife management FAQ', 'https://tpwd.texas.gov/faq/huntwild/tax_valuation.phtml'];
const TPWD_ACRES = ['TPWD: wildlife appraisal regions and minimum acreage', 'https://tpwd.texas.gov/landwater/land/private/agricultural_land/resources/WLAppraisalRegions_MinAcreage.pdf'];

// Landscape groups, used on the hub page and the home page.
export const regions = [
  { key: 'blackland', name: 'Blackland Prairie', line: 'Heavy black clay, hay meadows and old crop fields, wooded creek bottoms. Most of the native prairie is gone, so cover along creeks and fencerows carries the wildlife.' },
  { key: 'postoak', name: 'Post Oak Savannah', line: 'Sandy loam, post oak and blackjack woods with open pasture between. Yaupon and brush close in fast without fire or work.' },
  { key: 'piney', name: 'Pineywoods edge', line: 'Pine and hardwood timber, bottomland drainages and lakes. Timber and wildlife work well together here.' },
];

export const counties = [
  {
    slug: 'collin-county', min: 'No minimum unless the tract was made smaller since January 1 of the year before. Then Collin CAD applies about 16.7 acres.',
    name: 'Collin', seat: 'McKinney', region: 'blackland',
    cad: { name: 'Collin Central Appraisal District', url: 'https://collincad.org/' },
    lead: 'Collin County land goes fast, and much of what stays open is held in a hay or cattle valuation. When the cattle go or the hay contract ends, wildlife management is how many owners keep the land in a 1-d-1 valuation.',
    land: [
      'What is left of open country in Collin County is mostly in the east and north, around Farmersville, Josephine, Blue Ridge and the land above Lavon Lake. It is Blackland Prairie: heavy clay, hay meadows, old crop ground, and timber along Pilot Grove Creek, Sister Grove Creek and the East Fork of the Trinity.',
      'Deer here live in the creek bottoms and the brushy draws and move into the open at the edges. Because so little native prairie is left, restored grass, cover along the creeks and a few acres managed for food can change what a 20 or 40 acre tract holds.',
    ],
    practices: [
      ['Native grass on old hay ground', 'Converting part of a bermuda or fescue meadow back to native grasses and forbs is habitat control and gives fawning and nesting cover.'],
      ['Cover along the creeks', 'Leaving and widening wooded strips along drainages, and controlling privet and other invaders, keeps deer travel routes intact.'],
      ['Nest boxes and brush piles', 'Shelter practices that fit small tracts well, recorded each year for the annual report.'],
      ['Counts you can repeat', 'Camera surveys or walking counts, done the same way each year, are the census practice and tell you what the place is actually holding.'],
    ],
    cadNotes: [
      'Collin CAD\'s agricultural guidelines place the district in the Blackland Prairie region. For a tract that has been made smaller since the year before, the district uses the strictest end of that region\'s range, which TPWD\'s table puts at about 16.7 acres. Tracts that have not been reduced have no minimum.',
      'Collin CAD mails a wildlife management annual report to owners on wildlife valuation, usually around November 15.',
    ],
    keepAg: 'To hold an ordinary ag valuation in Collin County, the district\'s guidelines ask for at least two animal units on pasture for most of the year, or a marketable hay crop of two to three cuttings on at least 5 acres. Beekeeping needs six hives on 5 acres. When an owner can\'t keep that up, wildlife management is the usual alternative.',
    faqs: [
      ['Is there a minimum acreage for a wildlife exemption in Collin County?', 'Only if the tract got smaller since January 1 of the year before. In that case Collin CAD applies the Blackland Prairie requirement at the strict end, which works out to about 16.7 acres. A tract that has not been reduced has no minimum. Confirm the current figure with Collin CAD.'],
      ['Can I switch my Collin County hay meadow to wildlife management?', 'Yes, if it is appraised for agriculture now. You file the 1-d-1 application with a wildlife management plan on the TPWD form before May 1, then carry out at least three of the seven practices each year. We prepare your plan and help you file it.'],
      ['When does Collin CAD want the annual report?', 'Collin CAD mails the report form around mid-November. The completed report goes back to the district with your records for the year.'],
    ],
    near: ['hunt-county', 'fannin-county', 'grayson-county', 'kaufman-county'],
    sources: [['Collin CAD agricultural land qualification guidelines', 'https://collincad.org/wp-content/uploads/2023/12/CCAD-AUAG-1.pdf'], TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'hunt-county', name: 'Hunt', seat: 'Greenville', region: 'blackland',
    cad: { name: 'Hunt County Appraisal District', url: 'https://hunt-cad.org/' },
    lead: 'Most rural land in Hunt County is already in an ag valuation for hay or cattle. When that use winds down, wildlife management keeps the valuation and gives you a plan for the deer, birds and habitat on the place.',
    land: [
      'Hunt County runs from open Blackland Prairie around Greenville, Celeste and Wolfe City to the timbered drainages of the Sabine forks and the country around Lake Tawakoni in the south. Much of it is hay meadow and pasture broken up by fencerows and creek timber.',
      'That mix suits whitetail well when the cover is in the right places. Deer bed in the creek timber and brushy fencerows and feed in the fields. The work is usually about connecting cover, adding food where the property lacks it, and keeping hogs in check in the river bottoms.',
    ],
    practices: [
      ['Food on old crop ground', 'Small food plots and managed openings on former crop or hay ground count as supplemental food and pull deer into places you can hunt.'],
      ['Fencerows and brushy draws', 'Leaving and thickening fencerow cover is habitat control and shelter, and it costs little.'],
      ['Hog control in the bottoms', 'Trapping and removal of feral hogs counts as predator control and protects the food and cover work.'],
      ['Camera census', 'A camera survey run the same way each year is the census practice and the best record of what the property holds.'],
    ],
    cadNotes: [
      'Hunt County is in the Blackland Prairie appraisal region. A tract that has been reduced in size since January 1 of the year before has to meet a minimum acreage that the district sets within TPWD\'s range for that region, 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Applications and plans go to Hunt County Appraisal District in Greenville by April 30.',
    ],
    keepAg: null,
    faqs: [
      ['Can I get a wildlife exemption in Hunt County?', 'Yes, if the land is in an ag or timber valuation now. You file the 1-d-1 application with a wildlife management plan before May 1 and carry out at least three of the seven practices each year. We prepare your plan and help you file it with Hunt County Appraisal District.'],
      ['How many acres do I need in Hunt County?', 'There is no minimum unless the tract got smaller since January 1 of the year before. For a reduced tract, Hunt CAD sets a minimum within TPWD\'s Blackland Prairie range of 12.5 to 16.7 acres. Ask the district for its current figure.'],
      ['I just bought land in Hunt County with an ag exemption. What now?', 'A new owner has to file a new 1-d-1 application. If you won\'t keep cattle or hay going, a wildlife management plan filed with that application is how you keep the valuation. File before May 1.'],
    ],
    near: ['collin-county', 'fannin-county', 'hopkins-county', 'van-zandt-county', 'kaufman-county'],
    sources: [TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'fannin-county', name: 'Fannin', seat: 'Bonham', region: 'blackland',
    cad: { name: 'Fannin Central Appraisal District', url: 'https://www.fannincad.org/' },
    lead: 'Fannin County is big farm and ranch country, with the Red River on the north and the Caddo National Grasslands in the east. Plenty of it is held in ag valuations that a wildlife plan can carry forward when the cattle or crops stop.',
    land: [
      'The county is mostly Blackland Prairie farm and pasture ground, with Red River bottomland along the north line, the North Sulphur River in the south, and the Caddo National Grasslands and Bois d\'Arc Lake around Honey Grove and Ladonia.',
      'Big bottomland timber and public grassland next door mean deer, hogs, turkey and waterfowl move through. Small and mid-size tracts do best when they offer what the neighbors don\'t: secure bedding cover, a water source, or food late in the year.',
    ],
    practices: [
      ['Grassland and field edges', 'Native grass restoration and managed field edges are habitat control and suit open prairie ground.'],
      ['Water', 'A pond renovation or a small wildlife water source counts as supplemental water and draws game away from the bottoms.'],
      ['Hog control', 'Fannin County has steady hog pressure near the river. Trapping counts as predator control.'],
      ['Census', 'Camera and walking counts, repeated each year, document the deer and other game on the place.'],
    ],
    cadNotes: [
      'Fannin County is in the Blackland Prairie appraisal region. For a tract that has been made smaller since January 1 of the year before, the district sets a minimum within TPWD\'s range of 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Applications and plans go to Fannin Central Appraisal District in Bonham by April 30.',
    ],
    keepAg: null,
    faqs: [
      ['Can farm ground in Fannin County go to wildlife management?', 'Yes, if it is appraised for agriculture now. Former crop and hay ground often makes good wildlife ground once part of it goes back to grass and cover. You file a wildlife management plan with the 1-d-1 application before May 1.'],
      ['Does living next to the Caddo Grasslands help?', 'It helps the wildlife, not the paperwork. Your own tract still needs a plan and three practices a year. But public land next door means more game moving through, and a plan can be built around that.'],
      ['How many acres do I need in Fannin County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract, the district sets a minimum within TPWD\'s Blackland Prairie range of 12.5 to 16.7 acres.'],
    ],
    near: ['grayson-county', 'hunt-county', 'collin-county', 'hopkins-county'],
    sources: [TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'grayson-county', min: 'No minimum unless the tract was made smaller since January 1 of the year before. Then the minimum falls between 12.5 and 20 acres.',
    name: 'Grayson', seat: 'Sherman', region: 'blackland',
    cad: { name: 'Grayson Central Appraisal District', url: 'https://graysonappraisal.org/' },
    lead: 'Grayson County sits where the Blackland Prairie meets the Cross Timbers, with Lake Texoma on the north. Its rural land ranges from open farm ground to rough oak country, and a wildlife plan has to fit whichever one you own.',
    land: [
      'East of Sherman the county is mostly prairie farm and pasture. To the west and along the lake it turns to post oak and blackjack Cross Timbers, broken ridges and creek bottoms. Hagerman National Wildlife Refuge and the Red River bottoms add waterfowl and big-woods deer to the mix.',
      'Oak country holds deer well but grows up in cedar and brush. Prairie country holds them where there is cover. The practices that fit a 30 acre tract near Whitesboro are not the ones that fit 30 acres near Bells.',
    ],
    practices: [
      ['Cedar and brush control', 'Thinning cedar in the Cross Timbers opens browse and is habitat control. Land Value Group\'s mulching crews can do the heavy part.'],
      ['Prairie restoration', 'On the eastern farm ground, native grass on old fields gives cover and nesting habitat.'],
      ['Supplemental water', 'Ponds and water sources away from the lake keep deer on the property through dry summers.'],
      ['Census', 'Camera surveys repeated each year document the deer herd and other wildlife.'],
    ],
    cadNotes: [
      'Grayson CAD\'s 1-d-1 application packet says you must attach a five-year wildlife management plan on the TPWD form, \"NO EXCEPTIONS.\" It is due April 30. Late applications are taken until the review board approves the records, usually in July, with a penalty of 10% of the tax savings.',
      'Grayson County spans two TPWD regions, and the region covering most of the county controls. For a tract made smaller since the year before, the minimum falls within TPWD\'s ranges for those regions, 12.5 to 20 acres. Ask Grayson CAD for its current figure.',
    ],
    keepAg: null,
    faqs: [
      ['What does Grayson CAD need for a wildlife exemption?', 'A 1-d-1 application with a five-year wildlife management plan on the TPWD form attached, by April 30. The land must already be in an ag or timber valuation. We prepare your plan and help you file it.'],
      ['What if I miss the April 30 deadline in Grayson County?', 'Grayson CAD accepts late applications until the review board approves the records, usually in July, with a penalty of 10% of the tax savings. Filing on time avoids that.'],
      ['Does cedar clearing count toward a wildlife plan?', 'Brush and cedar control done to improve habitat counts as habitat control, one of the seven practices. It should be planned and recorded, not just done.'],
    ],
    near: ['fannin-county', 'collin-county', 'hunt-county'],
    sources: [['Grayson CAD 1-d-1 application packet', 'https://graysonappraisal.org/wp-content/uploads/2024/02/GCAD-AGRICULTURAL-APPLICATION-PACKET-1d1-v2-2024-FILLABLE.pdf'], TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'kaufman-county', min: 'Kaufman CAD\'s guidelines call for at least 12.5 acres in wildlife management.',
    name: 'Kaufman', seat: 'Kaufman', region: 'blackland',
    cad: { name: 'Kaufman Central Appraisal District', url: 'https://kaufman-cad.org/' },
    lead: 'Kaufman County is splitting between fast growth on the Dallas side and working land toward Cedar Creek. On the land that stays rural, a wildlife plan is often the practical way to hold the valuation once cattle or hay stop paying.',
    land: [
      'West of Terrell and around Forney the county is filling in. East and south, toward Kemp, Mabank and Cedar Creek Reservoir, it is still Blackland Prairie pasture and hay ground with timbered creeks, and the East Fork of the Trinity runs through bottomland.',
      'Deer move along the creek and river timber and use pasture edges. On smaller tracts, the biggest gains usually come from cover and food in the right spots, and from keeping hogs out of the bottoms.',
    ],
    practices: [
      ['Creek and river cover', 'Protecting and thickening timber along drainages is habitat control and the backbone of deer use here.'],
      ['Food plots', 'Small plots on old hay ground count as supplemental food and hold deer through winter.'],
      ['Hog control', 'Trapping in the Trinity bottoms counts as predator control.'],
      ['Nest boxes and census', 'Shelter and census practices that fit small tracts and are easy to record.'],
    ],
    cadNotes: [
      'Kaufman CAD\'s ag guidelines say a minimum of 12.5 acres designated to wildlife management is required.',
      'The application and the TPWD wildlife management plan (PWD 885) are due between January 1 and April 30. Each later year, the district asks for the annual report on TPWD form PWD 888.',
    ],
    keepAg: 'For an ordinary ag valuation, Kaufman CAD looks for at least nine contiguous acres and enough grass and water for three head of cattle on 9 acres, plus one per additional 8 acres. Hay needs two cuttings in a normal year. Beekeeping needs six hives on 5 acres, plus one hive for each additional 2.5 acres.',
    faqs: [
      ['How many acres for a wildlife exemption in Kaufman County?', 'Kaufman CAD\'s guidelines call for at least 12.5 acres designated to wildlife management. The land also needs to be in an ag or timber valuation already.'],
      ['Does Kaufman CAD require an annual report?', 'Yes. The guidelines call for an annual report on TPWD form PWD 888 each year after the plan is approved. We prepare the report from your records and help you file it.'],
      ['My cattle lease ended. Can I keep my Kaufman County ag valuation?', 'Possibly, by switching to wildlife management. You file a 1-d-1 application with a wildlife management plan before May 1 and carry out three of the seven practices each year.'],
    ],
    near: ['collin-county', 'hunt-county', 'van-zandt-county', 'ellis-county', 'navarro-county'],
    sources: [['Kaufman CAD agricultural guidelines', 'https://kaufman-cad.org/wp-content/uploads/2024/01/AG-GUIDELINES.pdf'], TPWD_FAQ],
  },
  {
    slug: 'ellis-county', name: 'Ellis', seat: 'Waxahachie', region: 'blackland',
    cad: { name: 'Ellis Appraisal District', url: 'https://www.elliscad.com/' },
    lead: 'Ellis County is old cotton and cattle country on the Blackland Prairie, and its north end is growing fast. South and east, toward Ennis, Italy and the Trinity bottoms, owners holding land for the long run often move it from ag to wildlife.',
    land: [
      'Most of the county is open Blackland clay, farmed for generations, with timber along Waxahachie Creek, Chambers Creek and the Trinity River bottoms on the east side. Bardwell Lake sits south of Ennis.',
      'On open prairie ground, wildlife follows cover. The best plans here put back what farming removed: grass, brushy edges and timber strips along the creeks, plus water where the property lacks it.',
    ],
    practices: [
      ['Grass and edges', 'Returning field corners and edges to native grass and brush is habitat control and makes open ground usable for wildlife.'],
      ['Creek timber', 'Protecting timber along creeks and the river bottoms keeps travel routes for deer and cover for birds.'],
      ['Supplemental water', 'Pond work or a wildlife water source on dry upland tracts.'],
      ['Census', 'Repeated counts of deer, birds or other wildlife, recorded each year.'],
    ],
    cadNotes: [
      'Ellis County is in the Blackland Prairie appraisal region. For a tract made smaller since January 1 of the year before, the district sets a minimum within TPWD\'s range of 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Applications and plans go to Ellis Appraisal District in Waxahachie by April 30.',
    ],
    keepAg: null,
    faqs: [
      ['Can I get a wildlife exemption on farm ground in Ellis County?', 'Yes, if it is appraised for agriculture now. Plenty of former crop ground qualifies once it is managed for native wildlife under a written plan, with three practices carried out each year.'],
      ['How many acres do I need in Ellis County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract, the minimum falls within TPWD\'s Blackland Prairie range of 12.5 to 16.7 acres. Ask Ellis Appraisal District for its figure.'],
      ['Who reviews my plan?', 'The appraisal district, not Texas Parks and Wildlife. The plan uses the TPWD form and follows TPWD\'s guidelines for the region, but it is filed with and reviewed by Ellis Appraisal District.'],
    ],
    near: ['kaufman-county', 'navarro-county'],
    sources: [TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'navarro-county', name: 'Navarro', seat: 'Corsicana', region: 'blackland',
    cad: { name: 'Navarro Central Appraisal District', url: 'https://navarrocad.com/' },
    lead: 'Navarro County has Blackland farm ground in the west, post oak country in the east, and Richland-Chambers Reservoir on the south. Ranches and hunting tracts here often sit in ag valuations that a wildlife plan can carry on.',
    land: [
      'West of Corsicana is open Blackland Prairie. East toward the Trinity River it changes to sandy post oak woods and pasture. Richland-Chambers Reservoir and Navarro Mills Lake add water and bottomland to both.',
      'That split matters for a plan. Prairie tracts need cover put back. Post oak tracts usually need brush and yaupon opened up so there is browse under the trees.',
    ],
    practices: [
      ['Opening up post oak', 'Thinning brush and yaupon under post oak is habitat control and grows browse for deer.'],
      ['Prairie grass and edges', 'On the western farm ground, native grass and brushy edges add cover.'],
      ['Food and water', 'Food plots and water sources on tracts away from the lakes.'],
      ['Hog control and census', 'Trapping hogs in the river bottoms and repeating a yearly camera survey.'],
    ],
    cadNotes: [
      'Navarro County lies across the Blackland Prairie and Post Oak Savannah regions, and the region covering most of the county controls. Both have the same TPWD range for a reduced tract: 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Navarro CAD posts the 1-d-1 application, the TPWD plan form (PWD 885) and the annual report form (PWD 888) on its forms page.',
    ],
    keepAg: null,
    faqs: [
      ['Where do I file a wildlife plan in Navarro County?', 'With Navarro Central Appraisal District in Corsicana, along with the 1-d-1 application, by April 30. We prepare your plan and help you file it.'],
      ['How many acres do I need in Navarro County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract the minimum falls within TPWD\'s range of 12.5 to 16.7 acres.'],
      ['My property is near Richland-Chambers. Does that change the plan?', 'It changes what the wildlife has nearby. Lake and bottomland next door means more movement, so a plan focuses on giving deer a reason to stay on your ground: cover, food and quiet.'],
    ],
    near: ['ellis-county', 'freestone-county', 'kaufman-county'],
    sources: [['Navarro CAD forms', 'https://navarrocad.com/forms/'], TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'freestone-county', name: 'Freestone', seat: 'Fairfield', region: 'postoak',
    cad: { name: 'Freestone Central Appraisal District', url: 'https://www.freestonecad.org/' },
    lead: 'Freestone County is post oak hunting and cattle country between Richland-Chambers and the Trinity. Many tracts are bought for deer and held in an ag valuation. A wildlife plan suits both.',
    land: [
      'The county is Post Oak Savannah: sandy loam, post oak and blackjack woods, improved pasture and creek bottoms draining to the Trinity River on the east and Richland-Chambers Reservoir on the north.',
      'Post oak country holds deer, but it closes in. Yaupon and brush shade out browse within a few years, so the most useful work is usually opening the understory, adding openings and food, and controlling hogs.',
    ],
    practices: [
      ['Understory and yaupon control', 'Mechanical work or prescribed fire to open the woods is habitat control and grows browse.'],
      ['Openings and food plots', 'Small openings and plots in the timber are supplemental food and good places to hunt.'],
      ['Hog control', 'Trapping in the bottoms is predator control and protects the plots.'],
      ['Camera census', 'A repeatable camera survey shows what the deer herd looks like year to year.'],
    ],
    cadNotes: [
      'Freestone County is in the Post Oak Savannah appraisal region. For a tract made smaller since January 1 of the year before, the district sets a minimum within TPWD\'s range of 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Applications and plans go to Freestone Central Appraisal District in Fairfield by April 30.',
    ],
    keepAg: null,
    faqs: [
      ['I bought hunting land in Freestone County. Can I keep the ag exemption?', 'As a new owner you have to file a new 1-d-1 application before May 1. If you are not running cattle or cutting hay, a wildlife management plan filed with it is the usual way to keep the valuation.'],
      ['Does prescribed fire count as a practice?', 'Yes. Prescribed burning to improve habitat is one form of habitat control. It needs a burn plan and the right conditions, and it should be in your written plan.'],
      ['How many acres do I need in Freestone County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract the minimum falls within TPWD\'s Post Oak Savannah range of 12.5 to 16.7 acres.'],
    ],
    near: ['navarro-county'],
    sources: [TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'van-zandt-county', min: 'Van Zandt CAD lists 12.5 acres as the minimum for wildlife management use.',
    name: 'Van Zandt', seat: 'Canton', region: 'postoak',
    cad: { name: 'Van Zandt County Appraisal District', url: 'https://vzcad.org/' },
    lead: 'Van Zandt County is rolling post oak and pasture country, much of it in small and mid-size tracts held in ag valuations. When the cows go, a wildlife plan is how many owners keep the valuation and get more out of the land.',
    land: [
      'Around Canton, Wills Point, Grand Saline and Edgewood, the county is sandy hills, post oak and blackjack woods, and improved pasture. The Sabine runs along the north side and the Neches starts in the south, with Lake Tawakoni in the northwest corner.',
      'This is good deer country with the right work. Pasture next to timber gives edge. The common problems are woods that have closed in, too little food late in the year, and hogs.',
    ],
    practices: [
      ['Edges and openings', 'Softening the line between pasture and timber and opening closed woods is habitat control.'],
      ['Food plots', 'Plots on a corner of old pasture are supplemental food and hold deer in winter.'],
      ['Hog control', 'Trapping and removal is predator control and protects the rest of the work.'],
      ['Nest boxes and census', 'Easy practices to carry out and record on small tracts.'],
    ],
    cadNotes: [
      'Van Zandt CAD\'s published ag FAQ says the minimum acreage for wildlife management use is 12.5 acres.',
      'For an ordinary ag valuation, the district looks for the greater of 5 animal units or 1 animal unit per 7 acres. It says about 10 acres is usually needed to meet that.',
    ],
    keepAg: null,
    faqs: [
      ['How many acres do I need for a wildlife exemption in Van Zandt County?', 'Van Zandt CAD\'s published guidance lists 12.5 acres as the minimum for wildlife management use. The land also has to be in an ag or timber valuation already.'],
      ['My small Van Zandt County place can\'t carry 5 cows. What are my options?', 'Wildlife management is the common answer. It doesn\'t need livestock. It needs a written plan and three of the seven practices carried out each year. We prepare your plan and help you file it.'],
      ['When is the deadline?', 'The application and plan go to Van Zandt County Appraisal District in Canton before May 1.'],
    ],
    near: ['hunt-county', 'kaufman-county', 'smith-county', 'wood-county', 'hopkins-county'],
    sources: [['Van Zandt CAD 1-d-1 FAQ', 'https://iswdataclient.azurewebsites.net/pubs/vanZandtcad/General/2015_1-d-1_(Ag)_Frequently_Asked_Questions.pdf'], TPWD_FAQ],
  },
  {
    slug: 'wood-county', name: 'Wood', seat: 'Quitman', region: 'piney',
    cad: { name: 'Wood County Appraisal District', url: 'https://www.woodcad.net/' },
    lead: 'Wood County is lake, timber and pasture country, and much of its rural land sits in an ag or timber valuation. Both can convert to wildlife management, which suits owners who are there for the deer, the turkey and the woods.',
    land: [
      'Around Quitman, Mineola, Winnsboro and Hawkins, the county mixes pine and hardwood timber with improved pasture, and it is full of water: Lake Fork, Lake Quitman, Lake Holbrook, Lake Winnsboro, and the Sabine River along the south.',
      'Timbered land with pasture and water has what deer need. Plans here usually manage the timber with wildlife in mind: thinning, openings, and burning or mowing to keep food growing under the trees.',
    ],
    practices: [
      ['Timber thinning and openings', 'Thinning pine stands and creating openings lets sunlight in and grows browse. It counts as habitat control.'],
      ['Food plots', 'Plots in openings and on pasture edges are supplemental food.'],
      ['Shelter', 'Nest boxes for wood ducks and songbirds near the many ponds and creeks.'],
      ['Census', 'Camera surveys and turkey or deer counts, repeated each year.'],
    ],
    cadNotes: [
      'Wood County spans the Post Oak Savannah and Pineywoods regions, and both carry the same TPWD range for a tract made smaller since the year before: 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Wood County Appraisal District in Quitman posts its agricultural, timber and wildlife guidelines and the TPWD forms on its website.',
    ],
    keepAg: null,
    faqs: [
      ['Can timber land in Wood County switch to wildlife management?', 'Yes. Land appraised as timber land can convert to wildlife management use, just as ag land can. You file the 1-d-1 application with a wildlife management plan before May 1.'],
      ['Do I have to stop cutting timber to be on wildlife?', 'No. A wildlife plan can include timber management, as long as the primary use of the land is managing for wildlife and you carry out three practices each year. Thinning done for habitat often counts as one.'],
      ['How many acres do I need in Wood County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract, the minimum falls within TPWD\'s range of 12.5 to 16.7 acres.'],
    ],
    near: ['smith-county', 'van-zandt-county', 'hopkins-county'],
    sources: [['Wood CAD agriculture, timber and wildlife page', 'https://www.woodcad.net/agriculture-wildlife-land/'], TPWD_ACRES, TPWD_FAQ],
  },
  {
    slug: 'smith-county', min: 'Smith CAD\'s 2022 standards list a 10-acre minimum for wildlife management.',
    name: 'Smith', seat: 'Tyler', region: 'piney',
    cad: { name: 'Smith County Appraisal District', url: 'https://www.smithcad.org/' },
    lead: 'Smith County is East Texas timber and pasture around Tyler. A lot of rural land here is held in timber or ag valuations, and wildlife management is a strong fit for owners who are there to hunt and enjoy the woods.',
    land: [
      'Outside Tyler, Whitehouse, Lindale and Troup, the county is Pineywoods: pine and hardwood timber, improved pasture, and creek bottoms draining to the Neches on the west and the Sabine on the north, with Lake Palestine and Lake Tyler nearby.',
      'Pine timber grows fast and shades out food. The best wildlife work here keeps the canopy open and food growing: thinning, prescribed fire or mowing, openings, and protecting the hardwood bottoms that carry deer through the winter.',
    ],
    practices: [
      ['Thinning and fire', 'Thinning and prescribed burning in pine stands is habitat control and grows browse.'],
      ['Hardwood bottoms', 'Protecting oak and hardwood along creeks keeps acorns and travel cover.'],
      ['Openings and food plots', 'Supplemental food in small openings and pasture edges.'],
      ['Census', 'Repeated camera or spotlight surveys, recorded each year.'],
    ],
    cadNotes: [
      'Smith CAD\'s published 1-d-1 standards (2022) list a minimum of 10 acres for wildlife management and say annual reports are due every year to keep the wildlife valuation. Confirm the current figure with the district.',
      'The same standards ask for a timber management plan for timber valuation, and say tracts under 5 acres are not eligible for an ag valuation.',
    ],
    keepAg: 'For an ordinary ag valuation, Smith CAD\'s standards suggest about one cow per 10 acres of native pasture or one per 5 acres of improved pasture, and two hay cuttings a year. Smaller places must show they can feed supplementally.',
    faqs: [
      ['What is the minimum acreage for a wildlife exemption in Smith County?', 'Smith CAD\'s published 1-d-1 standards list 10 acres for wildlife management. The land must also have been in a 1-d-1 valuation the year before. Check with the district for the current figure.'],
      ['Does Smith CAD require annual reports?', 'Yes. The district\'s standards say annual reports are due every year to continue the wildlife valuation. We prepare the report from your records and help you file it.'],
      ['Can my pine timber stay in the plan?', 'Yes. Managed timber can be part of a wildlife plan when the work is done with wildlife in mind, such as thinning and burning to grow food under the trees.'],
    ],
    near: ['wood-county', 'van-zandt-county'],
    sources: [['Smith CAD 1-d-1 appraisal standards', 'https://www.smithcad.org/Forms/SCAD1d1AppraisalStandards2022.pdf'], TPWD_FAQ],
  },
  {
    slug: 'hopkins-county', name: 'Hopkins', seat: 'Sulphur Springs', region: 'postoak',
    cad: { name: 'Hopkins County Appraisal District', url: 'https://www.hopkinscad.com/' },
    lead: 'Hopkins County was dairy country, and a lot of that grass is still in ag valuations. As herds and hay operations wind down, wildlife management gives those places a way to keep the valuation and turn pasture into good wildlife ground.',
    land: [
      'Around Sulphur Springs, Como, Cumby and Saltillo, the county is improved pasture and hay meadow with post oak woods and timbered creeks. The South Sulphur River and White Oak Creek drain it, and Cooper Lake sits on the north line.',
      'Big blocks of bermuda pasture don\'t hold much wildlife on their own. The gains come from putting some of it back to native grass and brush, keeping the creek timber, and adding food and water.',
    ],
    practices: [
      ['Pasture to native grass', 'Converting part of an old dairy or hay pasture to native grasses and forbs is habitat control.'],
      ['Creek timber and edges', 'Keeping timber along drainages and letting edges grow up gives cover.'],
      ['Food and water', 'Food plots and pond work are supplemental food and water.'],
      ['Nest boxes and census', 'Shelter and census practices that are simple to carry out and record.'],
    ],
    cadNotes: [
      'Hopkins County falls in the Post Oak Savannah and Blackland Prairie regions, and both carry the same TPWD range for a tract made smaller since the year before: 12.5 to 16.7 acres. A tract that has not been reduced has no minimum.',
      'Applications and plans go to Hopkins County Appraisal District in Sulphur Springs by April 30.',
    ],
    keepAg: null,
    faqs: [
      ['My hay or dairy lease is ending in Hopkins County. Can I keep the ag valuation?', 'Often, yes, by switching to wildlife management. You file a 1-d-1 application with a wildlife management plan before May 1 and carry out three of the seven practices each year. We prepare your plan and help you file it.'],
      ['Can bermuda pasture qualify for wildlife management?', 'The land qualifies through its current ag valuation, not its grass. But a good plan usually turns part of the bermuda back to native cover, because that is what makes the land useful to wildlife.'],
      ['How many acres do I need in Hopkins County?', 'No minimum unless the tract was reduced since January 1 of the prior year. For a reduced tract, the minimum falls within TPWD\'s range of 12.5 to 16.7 acres.'],
    ],
    near: ['hunt-county', 'wood-county', 'van-zandt-county', 'fannin-county'],
    sources: [TPWD_ACRES, TPWD_FAQ],
  },
];

export const bySlug = Object.fromEntries(counties.map((c) => [c.slug, c]));
export const countyPath = (c) => `/service-area/${c.slug}`;
