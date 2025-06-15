class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(res) {
    this._state = "fulfilled";
    this._successCallbacks.forEach((cb) => cb(res));
    this._finallyCallbacks.forEach((cb) => cb());
  }
  rejectorFunction(err) {
    this._state = "rejected";
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

wait();

function wait(seconds) {
  return new MyPromise((resolve, reject) =>
    setTimeout(() => resolve("Yo"), seconds * 1000)
  );
}

wait(5)
  .then((e) => console.log("Promise resolved after 5 seconds", e))
  .catch(() => console.log("Rejected after 5 seconds"))
  .finally(() => console.log("Har bar chalunga"));
