"""Automatic Node-RED provisioning"""
import json
import argparse
from nodered_automatic_provision.password_hash import Hash
from nodered_automatic_provision.console_parser import Parser
from nodered_automatic_provision.docker_generate import Container

class Provision:
    def __init__(self):
        self.user = ''
        self.password = ''
        self.users = {}

    def load_users(self, users):
        """Load a list of users into a dictionary"""
        with open(users.encode('utf-8'), 'r', encoding='utf-8') as users_list:
            self.users = json.load(users_list)

    def set_user_password(self, key: str, value):
        """Set a key-value pair to the dictionary"""
        self.users[key] = value
        
    def get_users(self):
        """Return the dictionary of users"""
        return self.users

    def get_password(self):
        """Return the password"""
        return self.password

def main():
    """Main function"""
    provision = Provision() # Provisions a Node-RED instance
    hash = Hash() # Generates and hashes a password
    container = Container() # Generates a Dockerfile
    
    parser = argparse.ArgumentParser(description='Automatic Node-RED provisioning')
    parser.add_argument('--users', '-u', help='List of users in .json to create instances for.', required=True)
    args = parser.parse_args()
    # Load the list of users
    provision.load_users(args.users)

    # For every user, set a password.
    print("Make sure to save the password somewhere safe!\nIt is only displayed once.")
    for user, value in provision.get_users().items():
        hash.generate_xkcdpassword()
        hash.hash_password()
        password = hash.get_password()
        
        if hash.check_password():
            print(f"User {user} has {hash.get_password()}")
        else:
            print('Password is incorrectly hashed.')
        provision.set_user_password(user, password)
        
    # For every user, create a Node-RED instance
    for user, value in provision.get_users().items():
        container.generate_dockerfile(user, value)

if __name__ == "__main__":
    main()