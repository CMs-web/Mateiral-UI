import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Buttons from "./Buttons";

const Items = ({ todo }) => {
  return (
    <div className="custom">
      <ListItem sx={{width:"60%"}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={todo.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", textWrap:"wrap" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {todo.des}
            </React.Fragment>
          }
        />
      </ListItem>
      <Buttons todo={todo} />
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default Items;
