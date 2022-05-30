"""Automatic Node-RED provisioning"""
import json
import argparse
from nodered_automatic_provision.password_hash import Hash
from nodered_automatic_provision.console_parser import Parser
from nodered_automatic_provision.docker_generate import Node

class Provision:
    def __init__(self):
        self.user = ''
        self.password = ''
        self.users = {}

    def set_users_dict(self, key: str, value):
        """Set a key-value pair to the dictionary"""
        self.users[key] = value

    def load_users(self, users):
        """Load a list of users into a dictionary"""
        with open(users.encode('utf-8'), 'r', encoding='utf-8') as users_list:
            self.users = json.load(users_list)

    def get_users(self):
        """Return the dictionary of users"""
        return self.users

    def get_password(self):
        """Return the password"""
        return self.password

def main():
    print("Automatic Node-RED provisioning")

if __name__ == "__main__":
    main()