const {
  handle,
  update,
  getEvent,
  getPageEvent,
  voteEvent,
  unvoteEvent,
  selectFollowers,
  deleteFollowers,
  insertFollower,
} = require("../queries/query_user/queriesAz.js");
const { cloudinary } = require("../../cloudinary");

const selectRequest = (req, res) => {
  handle(req)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const updateRequest = (req, res) => {
  let params = req.params;
  let body = req.body;
  const fileStr = req.body.image;
  cloudinary.uploader
    .upload(fileStr, {
      upload_preset: "dev_setups",
    })
    .then((result) => {
      let image = result.url;
      update(params, body, image).then((result) => {
        res.status(200).send(result);
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getEventRequest = (req, res) => {
  getEvent(req)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getPageEventRequest = (req, res) => {
  getPageEvent(req)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getVoteEvent = (req, res) => {
  const { event_id, user_id } = req.params;

  selectFollowers(event_id, user_id).then((result) => {
    console.log("select", result);
    if (result.length) {
      deleteFollowers(event_id, user_id).then((result) => {
        console.log("delete", result);
      });
      unvoteEvent(req)
        .then((result) => {
          console.log(result);
          res.status(200).send("unfollowed");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      insertFollower(event_id, user_id).then((result) => {
        console.log("insert", result);
      });
      voteEvent(req)
        .then((result) => {
          console.log(result);
          res.status(200).send("followed");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
};

const verifyFollowed = (req, res) => {
  const { event_id, user_id} = req.params;
  selectFollowers(event_id, user_id)
    .then((result) => {
      if (result.length) {
        res.status(200).send("Followed");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  selectRequest,
  updateRequest,
  getEventRequest,
  getPageEventRequest,
  getVoteEvent,
  verifyFollowed,
};
