export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Your processing logic here

    // For demonstration purposes, let's reject the promise with an error message
    reject(new Error(`${fileName} cannot be processed`));
  });
}

