import {Box, Slide} from "@mui/material";
import {useEffect, useRef, useState} from "react";

import {PromotionsContainer, MessageText} from "../../styles/promotions";

const messages = [
  "20% off on your first order",
  "summer sale starts now",
  "checkout now",
];

const Promotions = () => {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, [3000]);
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, [3000]);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "right" : "left"}
        in={show}
        timeout={{enter: 500, exit: 100}}
      >
        <Box
          sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
          <MessageText>{messages[messageIndex]} </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
};

export default Promotions;
