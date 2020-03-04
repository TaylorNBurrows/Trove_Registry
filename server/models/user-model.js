var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Create a Username",
    unique: true
  },
  name: {
    type: String,
    trim: true,
    required: "Enter Your Name"
  },
  email: {
    type: String,
    trim: true,
    required: "Must be a valid email",
    validation: RegExp("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"),
  },
  password: {
    type: String,
    required: true
  },
  treasures: {
    type: mongoose.Schema.Types.ObjectId, ref: 'ItemPost'
  },
  friends: {
    type: mongoose.Schema.Types.ObjectId, ref: 'UserPost'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;