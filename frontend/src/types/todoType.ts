export interface todoType {
    title: string;
    author: string;
    status?: Status;
}
export type Status = 
| {type: "DONE", color: "#28a745"}
| {type: "ON_PROGRESS", color: "#007bff"}
| {type: "OUT_DATED", color: "#ffc107"}