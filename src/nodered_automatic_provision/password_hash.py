"""Hashes a password and returns the hashed password as a string."""
import bcrypt
import random
import xkcdpass.xkcd_password as passgen

class Hash:
    """Using bcrypt"""
    def __init__(self):
        encrypted_password_hash = ''
        hashed_password_cleartext = ''
        raw_password = ''
    
    def generate_xkcdpassword(self):
        """Generate a random password."""
        words = passgen.locate_wordfile()
        mywords = passgen.generate_wordlist(wordfile=words, min_length=5, max_length=8)
        self.raw_password = passgen.generate_xkcdpassword(mywords)

    def hash_password(self):
        """Hash a password for storing."""
        password = self.raw_password.encode('utf-8')
        self.encrypted_password_hash = bcrypt.hashpw(password, bcrypt.gensalt())
        self.hashed_password_cleartext = self.encrypted_password_hash.decode('utf-8')

    def check_password(self):
        """Return True if the password matches the hashed password."""
        if bcrypt.checkpw(self.raw_password.encode('utf-8'), self.encrypted_password_hash):
            return True
        else:
            return False
    
    def get_password(self):
        """Return the raw password."""
        return self.raw_password
    
    def get_hashed_password_string(self):
        """Return the hashed password as a clean string."""
        return self.hashed_password_cleartext
    
    def get_hashed_password(self):
        """Return the hashed password."""
        return self.encrypted_password_hash
    
def main():
    hash = Hash()
    hash.generate_xkcdpassword()
    hash.hash_password()
    print(hash.get_password())
    print(hash.get_hashed_password_string())
    
    if hash.check_password():
        print('Password is correctly hashed.')
    else:
        print('Password is incorrectly hashed.')

if __name__ == "__main__":
    main()