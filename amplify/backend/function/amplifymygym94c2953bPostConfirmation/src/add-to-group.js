/* eslint-disable-line */ const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  console.log("event", event)

  const addUserParams = {
    GroupName: event.request.userAttributes['custom:group'],
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
