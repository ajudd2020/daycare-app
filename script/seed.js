const db = require("../server/db");
const { User, GeneralPage, Class, Staff } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ email: "cody@email.com", password: "123" }),
    User.create({ email: "murphy@email.com", password: "123" }),
  ]);

  const generalPages = [
    {
      title: "Home Page",
      pageType: "about",
      pageName: "home",
      pageCategory: "home",
      textContent: [
        "<p>vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis.</p>",
        "<p>Please call with any questions! We look forward to hearing from you!</p>",
      ],
    },
    {
      title: "Register Today for Summer Camp!",
      pageType: "about",
      pageName: "summerCampRegistration",
      pageCategory: "announcements",
      textContent: [
        "<p>Register today for summer camp! Camp will run from 6/6 through 8/12. </p><p>Registration fee is $30.</p><p>Spots are filling up fast! Call or come in to reserve yours today.</p>",
        "<p>See link below for calendar and events</p>",
      ],
    },
    {
      title: "Covid-19 Update",
      pageType: "about",
      pageName: "covid19Update",
      pageCategory: "announcements",
      textContent: [
        "<p>Due to updates in state regulations, parents, children, and staff are no longer required to wear a mask in the building. Anyone who choses to continue wearing a mask may. Please be respectful of other's decisions.</p>",
      ],
    },
    {
      title: "May Newsletter 2022",
      pageType: "about",
      pageName: "mayNewsletter2022",
      pageCategory: "newsletters",
      textContent: [
        "<p>This is the test newsletter for MAY!</p><p>The events this month are: </p><ul><li>May 12 - Test Event</li><li>May 16 - Field Trip</li><li>May 30- Graduation party</li></ul><p><br></p><p>Make sure kids bring sunscreen for playing outside!</p>",
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit. Purus semper eget duis at tellus. Egestas congue quisque egestas diam in arcu cursus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Netus et malesuada fames ac turpis egestas sed tempus. Turpis massa tincidunt dui ut ornare lectus. Tortor at risus viverra adipiscing. Fermentum et sollicitudin ac orci. Semper eget duis at tellus at urna condimentum. Purus faucibus ornare suspendisse sed nisi. Viverra orci sagittis eu volutpat odio facilisis. Cursus metus aliquam eleifend mi in nulla posuere.</p>",
      ],
    },
  ];

  const [homePage, announcement1, newsletter1] = await GeneralPage.bulkCreate(
    generalPages
  );

  const classes = [
    {
      title: "Toddlers",
      pageType: "classes",
      className: "toddlers",
      classSummary:
        "Class for children 2-3 years old. sample for TODDLERS page.",
      classSchedule: "SAMPLE schedule FOR TODDLER PAGE",
    },
    {
      title: "Infants",
      pageType: "classes",
      className: "infants",
      classSummary: "Class for children 1 year old. sample for INFANTS page.",
      classSchedule: "SAMPLE schedule FOR INFANTS PAGE",
    },
  ];

  const [toddlers, infants] = await Class.bulkCreate(classes);

  const staff = await Promise.all([
    Staff.create({
      title: "Ms Debbie",
      pageType: "staff",
      staffName: "msDebbie",
      staffRole: "admin",
      staffBio: "This is a sample bio for MS DEBBIE",
    }),
    Staff.create({
      title: "Ms Erin",
      pageType: "staff",
      staffName: "msErin",
      staffRole: "teacher",
      staffBio: "This is a sample bio for MS ERIN",
      classId: infants.id,
    }),
  ]);

  // const textBlocks = await Promise.all([
  //   TextBlock.create({
  //     content: "this is the text block content in the seed file.",
  //     pageId: homePage.id,
  //   }),
  //   TextBlock.create({
  //     content: "This is another textblock for the home page",
  //     pageId: homePage.id,
  //   }),
  // ]);

  // const textBlocks = [
  //   {
  //     content: "this is the text block content from the seed file.",
  //     pageId: homePage.id,
  //   },
  // ];

  // const []

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${generalPages.length} general pages`);
  console.log(`seeded ${classes.length} classes`);
  console.log(`seeded ${staff.length} staff`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
