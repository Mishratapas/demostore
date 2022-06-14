import {Dialog, DialogTitle} from "@mui/material";
import React, {useEffect} from "react";

const Opening = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      return (
        <Dialog>
          <DialogTitle>welcome</DialogTitle>
        </Dialog>
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  return <></>;
};

export default Opening;
