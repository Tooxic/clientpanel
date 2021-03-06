const User = require('../models/User');
const Activation = require('../models/Activator');
const Logger = require('../lib/customLogs');

function deleteSixten(number) {
  if (typeof number != Number) return;
  if (number >= 60) {
    return number - 60;
  }
  return number;
}

module.exports = {
  /**
   *
   * @param ms The ms for the interval.
   */
  NotActivatedRemover: (ms) => {
    setInterval(() => {
      User.find({ activation: false }).then((user) => {
        for (let i = 0; i < user.length; ++i) {
          const userJoinDate = user[i].joined;
          const dateNow = new Date();

          if (userJoinDate.getUTCDate() + 7 <= dateNow.getUTCDate() + 1) {
            Logger.warn(`Deleted ${user.email} for not activating their account.`);
            user.delete();
            Activation.deleteOne({ email: user[i].email });
          }
        }
      });
    }, ms);
  },
  /**
   *
   * @param ms The ms for the interval.
   */
  checkActivationsReset: (ms) => {
    setInterval(() => {
      Activation.find({ type: 'reset' }).then((data) => {
        for (let i = 0; i < data.length; ++i) {
          const activationCreated = data[i].created;
          const dateNow = new Date();
          if (
            dateNow.getUTCHours() + 2 >= activationCreated.getUTCHours() + 2 &&
            dateNow.getUTCHours() + 2 !== activationCreated.getUTCHours() + 2
          ) {
            //Delete it
            Logger.normal(`${data.email}'s reset key has expired.. deleting..`);
            Activation.deleteOne({ _id: data[i].id });
          } else if (
            deleteSixten(activationCreated.getMinutes() + 15) >= activationCreated.getUTCMinutes()
          ) {
            //Delete it.
            Logger.normal(`${data.email}'s reset key has expired.. deleting..`);
            Activation.deleteOne({ _id: data[i].id });
          } else {
            return;
          }
        }
      });
    }, ms);
  },
};
