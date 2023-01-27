import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function LoadingButtons({ isDisabled, loading, props }) {
  return (
    <>
      {loading ? (
        <Stack direction="row" spacing={2}>
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            sx={{ borderRadius: 50 }}
          >
            Change Price
          </LoadingButton>
        </Stack>
      ) : (
        <Button
          disabled={isDisabled}
          type={"submit"}
          sx={{ borderRadius: 50 }}
          variant="contained"
          {...props}
        >
          Change Price
        </Button>
      )}
    </>
  );
}
