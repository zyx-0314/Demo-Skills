
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserDIYHomesScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.PostDIYHomesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  category: 'category',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.ReviewDIYHomesScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.LikeDIYHomesScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.BookmarkDIYHomesScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.ReportDIYHomesScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  reviewId: 'reviewId',
  userId: 'userId',
  reason: 'reason',
  createdAt: 'createdAt'
};

exports.Prisma.UserUrbanExplorerScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.PlaceUrbanExplorerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  location: 'location',
  description: 'description',
  ownerId: 'ownerId',
  createdAt: 'createdAt',
  validated: 'validated'
};

exports.Prisma.ReviewUrbanExplorerScalarFieldEnum = {
  id: 'id',
  placeId: 'placeId',
  userId: 'userId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.LikeUrbanExplorerScalarFieldEnum = {
  id: 'id',
  placeId: 'placeId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.BookmarkUrbanExplorerScalarFieldEnum = {
  id: 'id',
  placeId: 'placeId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.ReportUrbanExplorerScalarFieldEnum = {
  id: 'id',
  placeId: 'placeId',
  reviewId: 'reviewId',
  userId: 'userId',
  reason: 'reason',
  createdAt: 'createdAt'
};

exports.Prisma.UserFoodieScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.FoodieFoodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cuisine: 'cuisine',
  origin: 'origin',
  description: 'description',
  submittedBy: 'submittedBy',
  validated: 'validated',
  createdAt: 'createdAt'
};

exports.Prisma.FoodieLocationScalarFieldEnum = {
  id: 'id',
  foodId: 'foodId',
  locationName: 'locationName',
  address: 'address',
  submittedBy: 'submittedBy',
  createdAt: 'createdAt'
};

exports.Prisma.FoodieReviewScalarFieldEnum = {
  id: 'id',
  foodId: 'foodId',
  userId: 'userId',
  rating: 'rating',
  comment: 'comment',
  validated: 'validated',
  createdAt: 'createdAt'
};

exports.Prisma.FoodieLikeScalarFieldEnum = {
  id: 'id',
  foodId: 'foodId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.UserPetLoverScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.PetPetLoverScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  petName: 'petName',
  species: 'species',
  breed: 'breed',
  age: 'age',
  medicalHistory: 'medicalHistory',
  createdAt: 'createdAt'
};

exports.Prisma.AppointmentPetLoverScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  petId: 'petId',
  appointmentType: 'appointmentType',
  dateTime: 'dateTime',
  location: 'location',
  createdAt: 'createdAt'
};

exports.Prisma.VaccinationPetLoverScalarFieldEnum = {
  id: 'id',
  petId: 'petId',
  vaccineName: 'vaccineName',
  dateAdministered: 'dateAdministered',
  nextDueDate: 'nextDueDate',
  createdAt: 'createdAt'
};

exports.Prisma.ClinicPetLoverScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone: 'phone',
  createdAt: 'createdAt'
};

exports.Prisma.StorePetLoverScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone: 'phone',
  createdAt: 'createdAt'
};

exports.Prisma.UserElderlyCareCompanionScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.ElderlyCareCompanionAppointmentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  dateTime: 'dateTime',
  location: 'location',
  medicationDetails: 'medicationDetails',
  createdAt: 'createdAt'
};

exports.Prisma.ElderlyCareCompanionClinicScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone: 'phone',
  createdAt: 'createdAt'
};

exports.Prisma.ElderlyCareCompanionStoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone: 'phone',
  createdAt: 'createdAt'
};

exports.Prisma.ElderlyCareCompanionRecordScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  recordType: 'recordType',
  details: 'details',
  date: 'date',
  createdAt: 'createdAt'
};

exports.Prisma.ElderlyCareCompanionMedicationTrackingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  medicationId: 'medicationId',
  status: 'status',
  dateTime: 'dateTime'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  UserDIYHomes: 'UserDIYHomes',
  PostDIYHomes: 'PostDIYHomes',
  ReviewDIYHomes: 'ReviewDIYHomes',
  LikeDIYHomes: 'LikeDIYHomes',
  BookmarkDIYHomes: 'BookmarkDIYHomes',
  ReportDIYHomes: 'ReportDIYHomes',
  UserUrbanExplorer: 'UserUrbanExplorer',
  PlaceUrbanExplorer: 'PlaceUrbanExplorer',
  ReviewUrbanExplorer: 'ReviewUrbanExplorer',
  LikeUrbanExplorer: 'LikeUrbanExplorer',
  BookmarkUrbanExplorer: 'BookmarkUrbanExplorer',
  ReportUrbanExplorer: 'ReportUrbanExplorer',
  UserFoodie: 'UserFoodie',
  FoodieFood: 'FoodieFood',
  FoodieLocation: 'FoodieLocation',
  FoodieReview: 'FoodieReview',
  FoodieLike: 'FoodieLike',
  UserPetLover: 'UserPetLover',
  PetPetLover: 'PetPetLover',
  AppointmentPetLover: 'AppointmentPetLover',
  VaccinationPetLover: 'VaccinationPetLover',
  ClinicPetLover: 'ClinicPetLover',
  StorePetLover: 'StorePetLover',
  UserElderlyCareCompanion: 'UserElderlyCareCompanion',
  ElderlyCareCompanionAppointment: 'ElderlyCareCompanionAppointment',
  ElderlyCareCompanionClinic: 'ElderlyCareCompanionClinic',
  ElderlyCareCompanionStore: 'ElderlyCareCompanionStore',
  ElderlyCareCompanionRecord: 'ElderlyCareCompanionRecord',
  ElderlyCareCompanionMedicationTracking: 'ElderlyCareCompanionMedicationTracking'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
