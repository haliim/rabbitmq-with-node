const amqp = require('amqplib/callback_api');

//Creating a conection with RabbitMQ
amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError;
    }
    // creating a channel
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelError;
        }
        // Asserting a Queue
        const QUEUE = 'araba'
        channel.assertQueue(QUEUE);
        
        // Sending a message to the queue
        var i;
        for (i = 0; i < 999; i++) {
            
            channel.sendToQueue(QUEUE, Buffer.from(`Hello from a NodeJS Producer :) ${i}`));
            console.log(`Message has been sent to ${QUEUE} ${i}`);

        }
        
        
        
    })
})

