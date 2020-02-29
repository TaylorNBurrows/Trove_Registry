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

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
const UserPost = mongoose.model("UserPost", UserSchema);
module.exports = UserPost;