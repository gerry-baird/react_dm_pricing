exports.handler = async function (event, context) {
  console.log("Logged from hello function");
  console.debug("Logged from hello function with debug");
  console.log("## ENVIRONMENT VARIABLES: " + serialize(process.env));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World2" }),
  };
};
