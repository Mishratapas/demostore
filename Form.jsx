import {useState} from "react";
import {
  FormControl,
  Grid,
  ImageList,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import {pokemon} from "../Data/Data";
import {
  ChooseandWhat,
  Image,
  ImageContainer,
  SideImage,
  ThreeImageContainer,
} from "./styled";
import AllChip from "./AllChip";

const Form = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setShow(true);
  };

  return (
    <>
      <Grid>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className="whatsyour"
            style={{color: "#00000099"}}
          >
            What's your starting region?
          </InputLabel>
          <Select onChange={handleChange} label="What's your starting region?">
            <MenuItem value={1} onChange={(e) => handleChange(e)}>
              Kanto
            </MenuItem>
            <MenuItem value={2} onChange={(e) => handleChange(e)}>
              Jhoto
            </MenuItem>
            <MenuItem value={3} onChange={(e) => handleChange(e)}>
              Hoenn
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <ImageContainer>
        <ChooseandWhat>Choose your starter pokemon</ChooseandWhat>
        {show && (
          <ThreeImageContainer>
            {pokemon
              .filter((p) => p.id === value)
              .map((p) => {
                return (
                  <ImageList cols={3}>
                    <SideImage className="hoverOnImage">
                      <Image src={p.img1} alt="" style={{border: "none"}} />
                    </SideImage>
                    <SideImage className="hoverOnImage">
                      <Image src={p.img2} alt="" style={{border: "none"}} />
                    </SideImage>
                    <SideImage className="hoverOnImage">
                      <Image src={p.img3} alt="" style={{border: "none"}} />
                    </SideImage>
                  </ImageList>
                );
              })}
          </ThreeImageContainer>
        )}
      </ImageContainer>
    </>
  );
};

export default Form;
