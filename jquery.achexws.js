    <!DOCTYPE html>
      <html>
      <body>
        <!-- jQuery / Achex hosted jQuery -->
        <script src="http://achex.ca/js/JQ.js"></script>

        <!-- Achex jQuery plugin -->
        <script src="http://achex.ca/js/jquery.achex.js"></script>

        <script>
            $.achex({
                    facebook: false,              /* Overwrites username and password with Facebook API login*/

                    username: 'streamApp@1013',  /* (native-auth) Achex Native username - set from Panel */
                    password: 'Test123',             /* (native-auth) Achex Native password - set from Panel*/

                    url: 'wss://ws.achex.ca',     /* (optional) custom server URL to connect to*/
                    port: 443,                    /* (optional) custom port*/

                    reconnect: 3000,              /* (optional) Reconnect timeout - set to 'false' to disable */

                    autoconnect: true,            /* (optional) Connect now - set to 'false' to disable */

                    logo:{                        /* Visual Feedback of Achex Cloud Connection Status */
                      canvas:'achexlogo',         /* (optional) Display connection satus in specific canvas ID*/
                      fade: false,                /* (optional) Fade Achex Logo after successful connection */
                      size: 50                    /* (optional) Size of Staus Achex Logo*/
                    },

                    opencallback : function(){
                                /* Triggers on successful connection to Achex Cloud Server  */
                                /* and successful Authentication                            */
                                /* Example: */
                                console.log('Connection Ready');
                              }

                    closecallback : function(){
                                /* Triggers on discconnection from Server           */
                                /* If not called by user and reconnect is enabled,  */
                                /* will to reconnect                                */
                                /* Example: */
                                console.log('Diconnected');
                              }

                    callback: function( message_object, raw_message_data, event)
                              {
                                /************************************************************************/
                                /*  use "message_object" for quick  access to data                      */
                                /*  in javascript object format                                         */
                                /*                                                                      */
                                /*  This function is called only after automatic authentication         */
                                /*  and filters out other specific server commands (ping, errors, etc)  */
                                /*  This function                                                       */
                                /*                                                                      */
                                /*  NOTE - internal operation equivalent:                               */
                                /*    raw_message_data = event.data (raw websocket data)                */
                                /*    message_object = JSON.parse(raw_message_data)                     */
                                /************************************************************************/
                                /* Example: */
                                console.log(message_object);
                              }
            });

            $.achex.join('cinema');        /* (optional) Join A Hub  - sends {joinHub:"myTestHub"} */



        </script>
      </body>
      </html>
