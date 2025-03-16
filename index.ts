import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import * as _ from 'lodash'

const max = 10
const val = _.random(max)

export const handler = async ({ event: APIGatewayProxyEvent }): Promise<APIGatewayProxyResultV2> => {
    const response = {
        statusCode: 200,
        body: `Random value ${val}`,
    };
    return response;
}