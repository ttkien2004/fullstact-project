export interface todoType {
    _id?: string;
    title: string;
    author: string;
    status?: Status;
}
export type Status = 
| {statusType: "DONE", color?: "#28a745"}
| {statusType: "ON_PROGRESS", color?: "#007bff"}
| {statusType: "OUT_DATED", color?: "#ffc107"}