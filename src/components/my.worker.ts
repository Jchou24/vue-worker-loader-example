const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: 666 });

// Respond to message from parent thread
ctx.addEventListener("message", (event) => {
    console.log(event)
    ctx.postMessage({ bar: event.data.x * event.data.x });
});