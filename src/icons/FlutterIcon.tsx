import { IconProps } from "../types/props/IconProps"

export const FlutterIcon = ({ width = 24, height = 24, color = "currentColor" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={color} d="M5.9 15.375L2.5 12l11-11h6.775L5.9 15.375ZM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23H13.5Z"/></svg>
  )
}
