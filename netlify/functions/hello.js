exports.handler = async function (event, context) {
  console.log("Logged from hello function");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World2" }),
  };
};
