export default function finish(done) {
  return (err) => {
    if (err) {
      done.fail(err);
    } else {
      done();
    }
  };
}
