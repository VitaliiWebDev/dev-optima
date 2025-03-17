const fakeApiRequest = (email: string) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Send success");
      } else {
        reject("Send error. Try again later");
      }
    }, 1000);
  });
};

export default fakeApiRequest;
