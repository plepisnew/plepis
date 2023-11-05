import React, { ChangeEventHandler, useState } from "react";

export type SliderProps = {
  min: number;
  max: number;
  defaultValue?: number;
  step?: number;
  onChange?: (value: number) => void;
};

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  defaultValue = (max - min) / 2,
  step,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = Number(e.currentTarget.value);
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="w-[20px] flex justify-center">{value}</span>
      <input
        value={value}
        onChange={handleChangeValue}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step ?? 1}
      />
      <span className="w-[20px] flex justify-center">{max}</span>
    </div>
  );
};
