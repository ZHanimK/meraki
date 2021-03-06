import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchByDateRange({ val, change }) {
  // const today = new Date();
  // const date =
  //   today.getFullYear() +
  //   "-" +
  //   ("0" + (today.getMonth() + 1)).slice(-2) +
  //   "-" +
  //   ("0" + today.getDate()).slice(-2);
  return (
    <>
      <Grid item xs={6}>
        <TextField
          id="dateFrom"
          label="From"
          fullWidth={true}
          type="date"
          className=""
          InputLabelProps={{
            shrink: true
          }}
          value={val.from}
          onChange={e => {
            change({ from: e.target.value, till: val.till });
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          id="dateTill"
          label="To"
          fullWidth={true}
          type="date"
          className=""
          InputLabelProps={{
            shrink: true
          }}
          value={val.till}
          //inputProps={{ min: ShouldBeFormatted(val.from)}}
          onChange={e => {
            change({ from: val.from, till: e.target.value });
          }}
        />
      </Grid>
    </>
  );
}

export default SearchByDateRange;
