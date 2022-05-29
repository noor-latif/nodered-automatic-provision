class Parser:
    def get_value(self, message, parser=None):
        """Get an input from the user, and optionally parse it"""
        value = ''
        while True:
            try:
                raw_value = self.read_line(message)
                if parser:
                    value = parser(raw_value)
                break
            except ValueError:
                print("Invalid value, try again")
        print(f"Value: {value}")
        return value

    def read_line(self, message: str):
        """Read a line from the console"""
        return input(message)