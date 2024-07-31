import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VerticalLine from "./VerticalLine";
import { EstateComponentProps } from "@/interfaces";
import { cn } from "@/lib/utils";

interface CustomSelectProps extends EstateComponentProps {
  options: {
    value: string;
    title: string;
  }[];
  label?: string;
}

const CustomSelect = ({ options, className, label }: CustomSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("relative", className)}>
        <VerticalLine color="black" height={23} className="absolute right-10" />
        <SelectValue placeholder={options[0].title} />
      </SelectTrigger>
      <SelectContent className="z-[80]">
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;