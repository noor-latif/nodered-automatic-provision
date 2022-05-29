"""Hashes a password and returns the hashed password as a string."""
import bcrypt

class Hash:
    """Using bcrypt"""
    def __init__(self):
        hashed_password = ''
        hashed_password_string = ''

    def hash_password(self, password):
        """Hash a password for storing."""
        self.hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        self.hashed_password_string = self.hashed_password.decode('utf-8')

    def check_password(self, password, hashed_password):
        """Return True if the password matches the hashed password."""
        if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
            return True
        else:
            return False
    
    def get_hashed_password_string(self):
        """Return the hashed password as a clean string."""
        return self.hashed_password_string
    
    def get_hashed_password(self):
        """Return the hashed password."""
        return self.hashed_password
    
def main():
    hash = Hash()
    hash.hash_password('password')
    print(hash.get_hashed_password_string())
    
    if hash.check_password('password', hash.get_hashed_password()):
        print('Password is correctly hashed.')
    else:
        print('Password is incorrectly hashed.')

if __name__ == "__main__":
    main()