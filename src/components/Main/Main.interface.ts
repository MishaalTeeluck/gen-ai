export interface ToolsDetails {
    id: string,
    name: string,
    description: string,
    job: number,
    eta: number,
    available: boolean
}

export interface ToolLink {
    toolDetail: ToolsDetails,
    routeLocation: string
}