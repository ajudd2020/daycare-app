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
        "This is the home page sample content.",
        "This is a second paragraph for the home page",
      ],
    },
    {
      title: "Announcement 1 Page",
      pageType: "about",
      pageName: "announcement1",
      pageCategory: "announcements",
      textContent: ["This is the content for an ANNOUNCEMENT"],
    },
    {
      title: "Newsletter 1 Page",
      pageType: "about",
      pageName: "newsletter1",
      pageCategory: "newsletters",
      textContent: ["This is the content for a NEWSLETTER"],
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
