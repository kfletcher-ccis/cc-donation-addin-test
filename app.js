let client;
let supportedEventTypes = [];

client = new BBSkyAddinClient.AddinClient({
    callbacks: {
        init: (args) => {

            supportedEventTypes =
                args.supportedEventTypes || [];

            document.getElementById("output")
                .textContent =
                    JSON.stringify(args, null, 2);

            args.ready({
                showUI: true
            });
        }
    }
});

document
    .getElementById("btnAmount")
    .addEventListener("click", async () => {

        if(
            supportedEventTypes.includes(
                "amount-changed"
            )
        ) {
            await client.sendEvent({
                type: "amount-changed",
                context: {
                    previousAmount: 0,
                    newAmount: 123,
                    difference: 123
                }
            });
        }
    });