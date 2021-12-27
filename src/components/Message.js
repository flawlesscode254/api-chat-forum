import React from "react";
import moment from "moment";

import "./Message.css";

import { auth } from "../Firebase";

function Message({ username, email, message, time }) {
  return (
    <div>
      <div className={email === auth?.currentUser?.email ? "user" : "guest"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: -10,
            color: "gray",
          }}
        >
          <p>{username}</p>
          <p>{moment(new Date(time?.toDate()).toUTCString()).fromNow()}</p>
        </div>

        <div>
          <p
            style={{
              color: "white",
            }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
