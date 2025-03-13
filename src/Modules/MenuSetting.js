import React from "react";
import { Slider, Typography } from "@mui/material";

// export function MenuSetting(
//   type,
//   id,
//   value,
//   onChange,
//   min,
//   max,
//   step,
//   marks
// ) {
//   return (
//     <div>
//       <Typography id="discrete-slider" gutterBottom>
//         {type}
//       </Typography>
//       <Slider
//         value={value}
//         aria-labelledby="discrete-slider"
//         valueLabelDisplay="auto"
//         step={step}
//         marks={marks}
//         min={min}
//         max={max}
//         onChange={onChange}
//         id={id}
//       />
//     </div>
//   );
// }

export class MenuSetting extends React.Component {
  render() {
    const { type, id, value, onChange, min, max, step, marks } = this.props;
    return (
      <div>
        <Typography id="discrete-slider" gutterBottom>
          {type}
        </Typography>
        <Slider
          defaultValue={value}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={step}
          marks={marks}
          min={min}
          max={max}
          onChange={onChange}
          id={id}
        />
      </div>
    );
  }
}