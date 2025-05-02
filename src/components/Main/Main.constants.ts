import { ToolsDetails } from "./Main.interface";

export const genAITools: ToolsDetails[] = [
    {
        name: 'User guide generation',
        description:
            'This tool generated a user guide from the technical specification sheet.',
        numOfQueues: '3',
        eta: '3',
        status: false
    },
    {
        name: 'Test plan generator',
        description:
            'This tool generates a test plan  based on the technical specifications.',
        numOfQueues: '1',
        eta: '1',
        status: true
    },
    {
        name: 'Minutes of meeting generator',
        description:
            'This tool generates a proper minutes of meeting based on your key notes.',
        numOfQueues: '0',
        eta: '0',
        status: false
    },
    {
        name: 'Data cleanser',
        description:
            'This tool generated a user guide from the technical specification sheet.',
        numOfQueues: '0',
        eta: '0',
        status: false
    },
    {
        name: 'User guide generation',
        description:
            'This tool cleanse a set of data based on the specific rules that are needed.',
        numOfQueues: '3',
        eta: '3',
        status: false
    },
];

export const routeMap: Record<string, string> = {
    'Test plan generator': '/tools/testplangenerator/uploadfile',
    'Minutes of meeting generator': '/tools/minutesmeeting/uploadfile',
};