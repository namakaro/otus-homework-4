interface CellProps {
    children?: string
    x?: number
    y?: number
    background?: string
    width: number
    height: number
    border?: string
    margin?: string
    id?: string
    clickMe: (x: number, y: number) => void
};
  
interface CellFieldProps {
    xCount: number
    yCount: number
    clickMe: (x: number, y: number) => void
    initialValue?: number;
};