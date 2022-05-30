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

    def set_dict_key_value(self, key: str, value):
        """Set a key-value pair to the dictionary"""
        self.users[key] = value

    def load_users(self, device_schema):
        """Load the device schema json file into dictionary"""
        encoded_json = device_schema.encode('utf-8')
        with open(encoded_json, 'r', encoding='utf-8') as schema_file:
            self.device_data = json.load(schema_file)
        return self.device_data

def main():
    print("Automatic Node-RED provisioning")

if __name__ == "__main__":
    main()