import { IconProps } from "../types/props/IconProps"

export const TypeScriptIcon = ({ width = 24, height = 24, color = "currentColor" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 15"><path fill={color} fillRule="evenodd" d="M0 0h15v15H0V0Zm10 6a2 2 0 1 0 0 4h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1H8a2 2 0 0 0 2 2h1a2 2 0 1 0 0-4h-1a1 1 0 0 1 0-2h1.167c.46 0 .833.373.833.833V8h1v-.167C13 6.821 12.18 6 11.167 6H10ZM3 6h5v1H6v6H5V7H3V6Z" clipRule="evenodd"/></svg>
  )
}
