using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Fleck;

namespace FidelitySocketServer
{
    class Program
    {
        private static List<IWebSocketConnection> connections = new List<IWebSocketConnection>();
        static void Main(string[] args)
        {
            var server = new WebSocketServer("ws://localhost:9090/SocketServer");
            server.Start(connection => {
                                            connection.OnOpen += () =>
                                               {
                                                   connections.Add(connection);
                                                   Console.WriteLine("A new connection is established");
                                               };
                                           connection.OnClose += () =>
                                               {
                                                   connections.Remove(connection);
                                                   Console.WriteLine("An existing connection is closed");
                                               };
                                           connection.OnMessage += s =>
                                               {
                                                   Console.WriteLine("Message received - {0}", s);
                                                   foreach (var socketConnection in connections)
                                                   {
                                                       if (socketConnection != connection)
                                                           socketConnection.Send(s);
                                                   }
                                               };
            });
            Console.WriteLine("press Exit to shutdown or any text to send to client...");
            string input = string.Empty;
            while ((input = Console.ReadLine()).ToUpper() != "EXIT")
            {
                foreach (var connection in connections)
                {
                    connection.Send(input);
                }

            }
            Console.ReadLine();
            
        }
    }
}
