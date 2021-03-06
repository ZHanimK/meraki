import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

function SearchByLanguage({ val, change }) {
  return (
    <Grid item xs={6}>
      <FormControl component="fieldset" className="">
        <FormLabel component="legend">Language</FormLabel>
        <RadioGroup
          aria-label="language"
          name="language"
          value={val}
          onChange={e => {
            change(e.target.value);
          }}
        >
          <FormControlLabel
            value="en"
            control={<Radio color="primary" />}
            label="English"
          />
          <FormControlLabel
            value="nl"
            control={<Radio color="primary" />}
            label="Dutch"
          />
          <FormControlLabel
            value="fr"
            control={<Radio color="primary" />}
            label="French"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

export default SearchByLanguage;
