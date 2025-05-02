export interface ToolsDetails {
    name: string,
    description: string,
    numOfQueues: string | number,
    eta: string | number,
    status: boolean
}

export interface ToolLink {
    toolDetail: ToolsDetails,
    routeLocation: string
}