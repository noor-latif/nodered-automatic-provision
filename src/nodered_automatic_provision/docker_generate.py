"""Generate Dockerfile for Node-RED."""

class Container:
    def __init__(self):
        self.dockerfile_schema = ''
        self.student = {}
        
    def generate_dockerfile(self, user, password):
        """Generate a Dockerfile for Node-RED"""
        self.student = {
            'user': user,
            'password': password
        }