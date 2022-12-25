import socket
import threading

HOST = "0.0.0.0"
PORT = 65535

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))

server.listen()

clients = []
nicknames = []

def broadcast(message):
    for client in clients:
        client.send(message)


def handle(client):
    while True:
        try:
            message = client.recv(1024)
            print(f"{nicknames[client.index(client)]} says {message}")
            broadcast(message)
        except:
            index = client.index(client) 
            clients.remove(client)     
            client.close()
            nickname = nicknames[index]
            nicknames.remove(nickname)
            break

def receive():
    while True:
        client, address = server.accept()
        print(f"Connent with {str(address)}!")

        client.send("NICK".encode('utf-8'))
        nickname = client.recv(1024)

        nickname.append(nickname)
        clients.append(client)

        print(f"Nickname of the client is {nickname}")
        broadcast(f"{nickname} connented to  th server!\n".encode('utf-8'))
        client.send("Connented to the server".endode('utf-8'))

        thread = threading.Thread(target=handle, args=(client,))
        thread.start()
        print("Server running...")
        receive()
