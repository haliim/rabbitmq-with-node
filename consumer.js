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

               // Recieve our Message

               channel.consume(QUEUE, (msg) => {
                   console.log(`Message has been recieved: ${msg.content}`)
               }, {
                   noAck: true
               })
    })
})     