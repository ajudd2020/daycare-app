const db = require("../server/db");
const {
  User,
  GeneralPage,
  Class,
  Staff,
  Announcement,
  Newsletter,
} = require("../server/db/models");

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
      pageId: "home",
      textContent: [
        "<p>vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis.</p>",
        "<p>Please call with any questions! We look forward to hearing from you!</p>",
      ],
    },
  ];

  const [homePage] = await GeneralPage.bulkCreate(generalPages);

  const announcements = [
    {
      title: "Register Today for Summer Camp!",
      pageType: "announcements",
      pageId: "summerCampRegistration",
      textContent: [
        "<p>Register today for summer camp! Camp will run from 6/6 through 8/12. </p><p>Registration fee is $30.</p><p>Spots are filling up fast! Call or come in to reserve yours today.</p>",
        "<p>See link below for calendar and events</p>",
      ],
    },
    {
      title: "Covid-19 Update",
      pageType: "announcements",
      pageName: "covid19Update",
      pageId: "announcements",
      textContent: [
        "<p>Due to updates in state regulations, parents, children, and staff are no longer required to wear a mask in the building. Anyone who choses to continue wearing a mask may. Please be respectful of other's decisions.</p>",
      ],
    },
  ];
  const [summerCampRegistration, covid19Update] = await Announcement.bulkCreate(
    announcements
  );

  const newsletters = [
    {
      title: "May Newsletter 2022",
      pageType: "newsletter",
      pageId: "mayNewsletter2022",
      introText:
        "<p>​​​​​​​​​​​​​​​​​​​Wow! The school year has really flown by and it’s time to reflect on this wonderful year. It has been an especially nice year with the help of all of our wonderful parents. All the staff would like to express what a pleasure we have had meeting all of you this year. Also, thank you from the bottom of our hearts for all the extras from each and every one of you. To those children going to Kindergarten, best wishes and have a delightful summer!</p><p>There are several important dates in this newsletter. Please take the time to jot them down. Thanks!!!</p>",
      unitsForThisMonth:
        "<p>The concepts covered this month will be Xx, Yy, and Zz, the numbers 9 and 10, and color review. Projects are planned to reflect these themes and also Spring. Watch for a special Mother’s Day Project! We will also be playing outside more and more when weather permits, so dress accordingly!</p>",
      specialAnnouncements:
        "<p>All the Classes for the fall 2022-2023 school year are filling up. If you have not registered yet please do so now! You must register for this fall, if you have not done so already. We still have openings. Space is FULL in the Toddler room, don’t assume you have a spot until you register! We love referrals! If you refer anyone and they register, let us know and we will give you a $25 credit.</p>",
      activities:
        "<p>May Activities: </p><ul><li>May 5 - Cinco de Mayo Party</li><li>May 30 - Memorial Day (School closed - Tuition due</li></ul><p>June Activities: </p><ul><li>June 2 - Graduation practice during school hours</li><li>June 2 - Graduation Night</li></ul>",
      infoForSpecialDates:
        "<p>On May 5th, we will be celebrating Cinco de Mayo Day. Please bring a Mexican treat to share with the class (chips & salsa, chips & cheese). Please store brought treats only. Our country this month is Mexico. If your child has any items relating to Mexico, he/she can bring them to school.</p><p>School will be closed Memorial Day, May 30th. Full tuition due. I hope you will enjoy the day.</p>",
      additionalInformation:
        "<p>Please remember to put sunscreen on before coming to school when the weather starts getting nicer. We will reapply sunscreen in the afternoon. Daycare parents need to supply school with a bottle of sunscreen for the afternoon (No Spray Sunscreen please).</p><p><u>Summer Camp starts June 6th.</u>We hope you’ll join us for the many creative themes. It sure is a nice way to keep your child involved and stimulated. You can choose your weeks and be flexible in the days you attend. If you are currently enrolled there is no additional registration fee.</p><p>It is a joint venture in raising your child. The lines of communication are always open - JOYS AND CONCERNS</p><p>​<u>Vacation Policy</u> – We only allow for vacation time off during the summer with an advance two-week notice. There is no vacation time off during the school year. If you decide to take vacation during that time, full tuition is still due. We do offer a one-week winter break (week after Christmas)</p>",
      imageContent: "may-flowers.png",
    },
  ];

  const [mayNewsletter2022] = await Newsletter.bulkCreate(newsletters);

  const classes = [
    {
      title: "Toddlers",
      pageType: "classes",
      pageId: "toddlers",
      classSummary:
        "Class for children 2-3 years old. sample for TODDLERS page.",
      classSchedule: "SAMPLE schedule FOR TODDLER PAGE",
    },
    {
      title: "Infants",
      pageType: "classes",
      pageId: "infants",
      classSummary: "Class for children 1 year old. sample for INFANTS page.",
      classSchedule: "SAMPLE schedule FOR INFANTS PAGE",
    },
  ];

  const [toddlers, infants] = await Class.bulkCreate(classes);

  const staff = await Promise.all([
    Staff.create({
      title: "Ms Debbie",
      pageType: "staff",
      pageId: "msDebbie",
      staffRole: "admin",
      staffBio: "This is a sample bio for MS DEBBIE",
    }),
    Staff.create({
      title: "Ms Erin",
      pageType: "staff",
      pageId: "msErin",
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
