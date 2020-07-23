/* eslint-disable-line */
const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  const docClient = new aws.DynamoDB.DocumentClient();

  const addUserParams = {
    GroupName: event.request.userAttributes['custom:group'],
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  var params = {
    TableName : process.env.API_AMPLIFYMYGYMAPI_USERTABLE_NAME,
    Item: {
      id: event.request.userAttributes.sub,
      username: event.userName,
      email: event.request.userAttributes.email,
      userGroup: event.request.userAttributes['custom:group'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }
  
  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    await docClient.put(params).promise();
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
