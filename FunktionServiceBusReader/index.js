module.exports = function (context, queueItem) {
    context.log('ServiceBus message', queueItem);
    context.done();
};
