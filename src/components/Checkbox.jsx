import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={props.list}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
          sx={{
            "& label.Mui-focused": {
              color: "#CB2D6F",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#CB2D6F",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#501F3A",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#CB2D6F",
              },
            },
          }}
        />
      )}
    />
  );
}
