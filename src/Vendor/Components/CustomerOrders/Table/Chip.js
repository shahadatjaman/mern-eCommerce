import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AvatarChip({ name, avatar }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        color="primary"
        size="medium"
        avatar={<Avatar alt={name} src={avatar} />}
        label={name}
        variant="outlined"
      />
    </Stack>
  );
}
